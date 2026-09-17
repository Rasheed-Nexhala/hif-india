#!/usr/bin/env python3
"""Append missing gallery entity strings to entityTranslations.ts from hifData + i18n JSON."""

from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
HIF_DATA = ROOT / "src/data/hifData.ts"
I18N_JSON = ROOT / "src/data/galleryExtended.i18n.json"
ENTITY_TS = ROOT / "src/data/entityTranslations.ts"


def parse_gallery_items(text: str) -> list[dict[str, str]]:
    chunks = re.split(r"(?=\s*\{\s*\n\s*id: 'gal-)", text)
    items: list[dict[str, str]] = []
    for chunk in chunks:
        m_id = re.search(r"id: '(gal-\d+)'", chunk)
        if not m_id:
            continue
        gid = m_id.group(1)

        def field(name: str) -> str:
            m = re.search(rf"{name}: '((?:\\'|[^'])*)'", chunk)
            return m.group(1).replace("\\'", "'") if m else ""

        items.append(
            {
                "id": gid,
                "title": field("title"),
                "location": field("location"),
                "description": field("description"),
            }
        )
    return items


def extract_existing_gallery_ids(entity_text: str, lang: str) -> set[str]:
    m = re.search(rf"const {lang}: Record<string, string> = \{{", entity_text)
    if not m:
        return set()
    start = m.end()
    depth = 1
    i = start
    while i < len(entity_text) and depth > 0:
        if entity_text[i] == "{":
            depth += 1
        elif entity_text[i] == "}":
            depth -= 1
        i += 1
    block = entity_text[start : i - 1]
    ids = set()
    for key in re.findall(r"^\s+['\"](gal\.gal-\d+\.title)['\"]\s*:", block, re.M):
        ids.add(key.split(".")[1])
    return ids


def ts_string(value: str, use_double: bool) -> str:
    escaped = value.replace("\\", "\\\\").replace("\n", "\\n")
    if use_double:
        escaped = escaped.replace('"', '\\"')
        return f'"{escaped}"'
    escaped = escaped.replace("'", "\\'")
    return f"'{escaped}'"


def format_entries(items: list[dict[str, str]], i18n: dict, lang: str, use_double: bool) -> str:
    lines: list[str] = []
    for item in items:
        gid = item["id"]
        prefix = f"gal.{gid}"
        if lang == "en":
            title, desc, loc = item["title"], item["description"], item["location"]
        else:
            entry = i18n.get(gid, {}).get(lang, {})
            title = entry.get("title") or item["title"]
            desc = entry.get("desc") or item["description"]
            loc = entry.get("loc") or item["location"]
        lines.append(f"  {ts_string(f'{prefix}.title', use_double)}: {ts_string(title, use_double)},")
        lines.append(f"  {ts_string(f'{prefix}.desc', use_double)}: {ts_string(desc, use_double)},")
        lines.append(f"  {ts_string(f'{prefix}.loc', use_double)}: {ts_string(loc, use_double)},")
    return "\n".join(lines)


def insert_before_closing_brace(entity_text: str, lang: str, new_block: str) -> str:
    m = re.search(rf"(const {lang}: Record<string, string> = \{{)", entity_text)
    if not m:
        raise RuntimeError(f"Language block {lang} not found")
    start = m.end()
    depth = 1
    i = start
    while i < len(entity_text) and depth > 0:
        if entity_text[i] == "{":
            depth += 1
        elif entity_text[i] == "}":
            depth -= 1
            if depth == 0:
                close_idx = i
                break
        i += 1
    else:
        raise RuntimeError(f"Could not find closing brace for {lang}")

    before = entity_text[:close_idx].rstrip()
    if not before.endswith(","):
        before += ","
    return before + "\n" + new_block + "\n" + entity_text[close_idx:]


def main() -> None:
    hif_text = HIF_DATA.read_text(encoding="utf-8")
    items = parse_gallery_items(hif_text)
    i18n = json.loads(I18N_JSON.read_text(encoding="utf-8"))

    entity_text = ENTITY_TS.read_text(encoding="utf-8")
    existing_en = extract_existing_gallery_ids(entity_text, "en")
    missing = [it for it in items if it["id"] not in existing_en]
    if not missing:
        print("No missing gallery entries.")
        return

    print(f"Adding {len(missing)} gallery entries to en, kn, hi")

    entity_text = insert_before_closing_brace(
        entity_text, "en", format_entries(missing, i18n, "en", use_double=False)
    )
    entity_text = insert_before_closing_brace(
        entity_text, "kn", format_entries(missing, i18n, "kn", use_double=True)
    )
    entity_text = insert_before_closing_brace(
        entity_text, "hi", format_entries(missing, i18n, "hi", use_double=False)
    )

    ENTITY_TS.write_text(entity_text, encoding="utf-8")
    print("Updated", ENTITY_TS)


if __name__ == "__main__":
    main()
