#!/usr/bin/env python3
"""Insert missing stat value and impact count translations into entityTranslations.ts."""

from __future__ import annotations

import re
from pathlib import Path

ENTITY = Path(__file__).resolve().parents[1] / "src/data/entityTranslations.ts"

# After each label key `X.statN`, insert `X.statNValue` if missing.
STAT_VALUES = {
    "en": {
        "ashiyana.stat2Value": "150 Homes",
        "ashiyana.stat3Value": "₹7.5 – ₹10 Lakh",
        "chittor.stat1Value": "2.5 Acres",
        "chittor.stat2Value": "20,000 sq. ft.",
        "chittor.stat3Value": "Chinnapalli, AP",
        "masjid.stat2Value": "1 Masjid",
        "masjid.stat3Value": "KA & AP",
        "educationCity.stat1Value": "3.82 Acres",
        "educationCity.stat2Value": "Assaigoli, Mangaluru",
        "educationCity.stat3Value": "Land Acquired",
        "boondh.stat2Value": "Underserved Villages",
        "boondh.stat3Value": "Safe Drinking Water",
        "libaas.stat2Value": "Brides & Grooms",
        "libaas.stat3Value": "Dignity in Celebration",
        "medical.stat2Value": "200+ Units",
        "medical.stat3Value": "24/7 Helpline",
        "education.stat2Value": "₹40L+",
        "education.stat3Value": "45+ Batches",
    },
    "kn": {
        "ashiyana.stat2Value": "150 ಮನೆಗಳು",
        "ashiyana.stat3Value": "₹7.5 – ₹10 ಲಕ್ಷ",
        "chittor.stat1Value": "2.5 ಎಕರೆ",
        "chittor.stat2Value": "20,000 ಚ.ಅಡಿ",
        "chittor.stat3Value": "ಚಿನ್ನಪಲ್ಲಿ, ಆಂಧ್ರಪ್ರದೇಶ",
        "masjid.stat2Value": "1 ಮಸೀದಿ",
        "masjid.stat3Value": "ಕರ್ನಾಟಕ ಮತ್ತು ಆಂಧ್ರಪ್ರದೇಶ",
        "educationCity.stat1Value": "3.82 ಎಕರೆ",
        "educationCity.stat2Value": "ಅಸೈಗೋಳಿ, ಮಂಗಳೂರು",
        "educationCity.stat3Value": "ಭೂಮಿ ಖರೀದಿಯಾಗಿದೆ",
        "boondh.stat2Value": "ಸೌಲಭ್ಯವಂಚಿತ ಹಳ್ಳಿಗಳು",
        "boondh.stat3Value": "ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರು",
        "libaas.stat2Value": "ವಧು ಮತ್ತು ವರರು",
        "libaas.stat3Value": "ಘನತೆಯ ಆಚರಣೆ",
        "medical.stat2Value": "200+ ಘಟಕಗಳು",
        "medical.stat3Value": "24/7 ಸಹಾಯವಾಣಿ",
        "education.stat2Value": "₹40L+",
        "education.stat3Value": "45+ ಶಿಬಿರಗಳು",
    },
    "hi": {
        "ashiyana.stat2Value": "150 घर",
        "ashiyana.stat3Value": "₹7.5 – ₹10 लाख",
        "chittor.stat1Value": "2.5 एकड़",
        "chittor.stat2Value": "20,000 वर्ग फुट",
        "chittor.stat3Value": "चिन्नपल्ली, आंध्र प्रदेश",
        "masjid.stat2Value": "1 मस्जिद",
        "masjid.stat3Value": "कर्नाटक और आंध्र प्रदेश",
        "educationCity.stat1Value": "3.82 एकड़",
        "educationCity.stat2Value": "असैगोली, मंगलुरु",
        "educationCity.stat3Value": "भूमि अधिग्रहित",
        "boondh.stat2Value": "वंचित गाँव",
        "boondh.stat3Value": "सुरक्षित पेयजल",
        "libaas.stat2Value": "दूल्हा-दुल्हन",
        "libaas.stat3Value": "गरिमामय उत्सव",
        "medical.stat2Value": "200+ इकाइयाँ",
        "medical.stat3Value": "24/7 हेल्पलाइन",
        "education.stat2Value": "₹40L+",
        "education.stat3Value": "45+ बैच",
    },
}

IMPACT_COUNTS = {
    "en": {
        "impact.a.t1Count": "2 Students",
        "impact.a.t2Count": "1 Home Patient",
        "impact.a.t3Count": "20 Packets",
        "impact.b.t1Count": "1 Orphan Boy",
        "impact.b.t2Count": "1 Family",
        "impact.b.t3Count": "15 Primers",
        "impact.c.t1Count": "225 Students",
        "impact.c.t2Count": "₹9,000",
        "impact.c.t3Count": "Breakfast to Dinner",
        "impact.d.t1Count": "225 Students",
        "impact.d.t2Count": "₹14,500",
        "impact.d.t3Count": "Breakfast to Dinner",
        "impact.e.t1Count": "1 Orphan Student",
        "impact.e.t2Count": "1.5 Months",
        "impact.e.t3Count": "3 Cement Batches",
        "impact.f.t1Count": "1 Rural Masjid",
        "impact.f.t2Count": "2 Orphan Boys",
        "impact.f.t3Count": "1 House Unit",
        "impact.g.t1Count": "1 House Share",
        "impact.g.t2Count": "1 Community Hub",
        "impact.g.t3Count": "6+ Students",
    },
    "kn": {
        "impact.a.t1Count": "2 ವಿದ್ಯಾರ್ಥಿಗಳು",
        "impact.a.t2Count": "1 ಮನೆ ರೋಗಿ",
        "impact.a.t3Count": "20 ಪ್ಯಾಕೆಟ್‌ಗಳು",
        "impact.b.t1Count": "1 ಅನಾಥ ಬಾಲಕ",
        "impact.b.t2Count": "1 ಕುಟುಂಬ",
        "impact.b.t3Count": "15 ಪ್ರೈಮರ್‌ಗಳು",
        "impact.c.t1Count": "225 ವಿದ್ಯಾರ್ಥಿಗಳು",
        "impact.c.t2Count": "₹9,000",
        "impact.c.t3Count": "ಉಪಾಹಾರದಿಂದ ರಾತ್ರಿ ಊಟ",
        "impact.d.t1Count": "225 ವಿದ್ಯಾರ್ಥಿಗಳು",
        "impact.d.t2Count": "₹14,500",
        "impact.d.t3Count": "ಉಪಾಹಾರದಿಂದ ರಾತ್ರಿ ಊಟ",
        "impact.e.t1Count": "1 ಅನಾಥ ವಿದ್ಯಾರ್ಥಿ",
        "impact.e.t2Count": "1.5 ತಿಂಗಳು",
        "impact.e.t3Count": "3 ಸಿಮೆಂಟ್ ಬ್ಯಾಚ್",
        "impact.f.t1Count": "1 ಗ್ರಾಮೀಣ ಮಸೀದಿ",
        "impact.f.t2Count": "2 ಅನಾಥ ಬಾಲಕರು",
        "impact.f.t3Count": "1 ಮನೆ ಘಟಕ",
        "impact.g.t1Count": "1 ಮನೆ ಪಾಲು",
        "impact.g.t2Count": "1 ಸಮುದಾಯ ಕೇಂದ್ರ",
        "impact.g.t3Count": "6+ ವಿದ್ಯಾರ್ಥಿಗಳು",
    },
    "hi": {
        "impact.a.t1Count": "2 छात्र",
        "impact.a.t2Count": "1 घरेलू मरीज",
        "impact.a.t3Count": "20 पैकेट",
        "impact.b.t1Count": "1 अनाथ बालक",
        "impact.b.t2Count": "1 परिवार",
        "impact.b.t3Count": "15 प्राइमर",
        "impact.c.t1Count": "225 छात्र",
        "impact.c.t2Count": "₹9,000",
        "impact.c.t3Count": "नाश्ते से रात के खाने तक",
        "impact.d.t1Count": "225 छात्र",
        "impact.d.t2Count": "₹14,500",
        "impact.d.t3Count": "नाश्ते से रात के खाने तक",
        "impact.e.t1Count": "1 अनाथ छात्र",
        "impact.e.t2Count": "1.5 महीने",
        "impact.e.t3Count": "3 सीमेंट बैच",
        "impact.f.t1Count": "1 ग्रामीण मस्जिद",
        "impact.f.t2Count": "2 अनाथ बालक",
        "impact.f.t3Count": "1 घर इकाई",
        "impact.g.t1Count": "1 घर हिस्सा",
        "impact.g.t2Count": "1 सामुदायिक केंद्र",
        "impact.g.t3Count": "6+ छात्र",
    },
}


def quote_style(lang: str) -> str:
    return '"' if lang == "kn" else "'"


def format_entry(key: str, value: str, q: str) -> str:
    esc = value.replace("\\", "\\\\").replace(q, f"\\{q}")
    return f"  {q}{key}{q}: {q}{esc}{q},"


def insert_after(block: str, after_key: str, new_key: str, value: str, q: str) -> str:
    if f"{q}{new_key}{q}:" in block or f"'{new_key}':" in block or f'"{new_key}":' in block:
        return block
    pattern = rf"({q}{re.escape(after_key)}{q}:\s*{q}(?:\\{q}|[^{q}])*{q},)"
    m = re.search(pattern, block)
    if not m:
        # try alternate quote for after_key matching within block
        alt = '"' if q == "'" else "'"
        pattern = rf"({alt}{re.escape(after_key)}{alt}:\s*{alt}(?:\\{alt}|[^{alt}])*{alt},)"
        m = re.search(pattern, block)
        if not m:
            raise RuntimeError(f"Anchor key not found: {after_key}")
    entry = format_entry(new_key, value, q)
    return block[: m.end()] + "\n" + entry + block[m.end() :]


def process_lang_block(block: str, lang: str) -> str:
    q = quote_style(lang)
    for key, value in STAT_VALUES[lang].items():
        # ashiyana.stat2Value -> after ashiyana.stat2
        after = key.replace("Value", "")
        block = insert_after(block, after, key, value, q)
    for key, value in IMPACT_COUNTS[lang].items():
        # impact.a.t1Count -> after impact.a.t1
        after = key.replace("Count", "")
        block = insert_after(block, after, key, value, q)
    return block


def extract_block(text: str, lang: str) -> tuple[int, int, str]:
    m = re.search(rf"const {lang}: Record<string, string> = \{{", text)
    if not m:
        raise RuntimeError(f"Missing {lang}")
    start = m.end()
    depth = 1
    i = start
    while i < len(text) and depth:
        if text[i] == "{":
            depth += 1
        elif text[i] == "}":
            depth -= 1
            if depth == 0:
                return start, i, text[start:i]
        i += 1
    raise RuntimeError(f"Unclosed {lang}")


def main() -> None:
    text = ENTITY.read_text(encoding="utf-8")
    for lang in ("en", "kn", "hi"):
        start, end, block = extract_block(text, lang)
        new_block = process_lang_block(block, lang)
        text = text[:start] + new_block + text[end:]
        print(f"Updated {lang}: +{len(new_block) - len(block)} chars")
    ENTITY.write_text(text, encoding="utf-8")
    print("Wrote", ENTITY)


if __name__ == "__main__":
    main()
