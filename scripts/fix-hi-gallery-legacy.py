#!/usr/bin/env python3
"""Align Hindi gallery gal-1..18 with English/Kannada photo captions."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ENTITY_TS = ROOT / "src/data/entityTranslations.ts"
LEGACY = ROOT / "src/data/galleryLegacyHi.i18n.json"


def main() -> None:
    legacy = json.loads(LEGACY.read_text(encoding="utf-8"))
    text = ENTITY_TS.read_text(encoding="utf-8")

    for gid, fields in legacy.items():
        for field, hi_key in [("title", "title"), ("desc", "desc"), ("loc", "loc")]:
            key = f"gal.{gid}.{hi_key}"
            value = fields[field]
            pattern = rf"('{re.escape(key)}':\s*')(?:\\'|[^'])*(')"
            replacement = rf"\g<1>{value.replace('\\', '\\\\').replace("'", "\\'")}\g<2>"
            new_text, n = re.subn(pattern, replacement, text, count=1)
            if n == 0:
                raise RuntimeError(f"Key not found: {key}")
            text = new_text

    ENTITY_TS.write_text(text, encoding="utf-8")
    print("Updated Hindi legacy gallery strings")


if __name__ == "__main__":
    main()
