#!/usr/bin/env python3
from pathlib import Path

p = Path("/Users/shazrasheed/Projects/hif-india/src/data/translations.ts")
lines = p.read_text(encoding="utf-8").splitlines(True)

footer_about = (
    "        'ಮಂಗಳೂರಿನ ನೋಂದಾಯಿತ ಸಂಸ್ಥೆ. "
    "ಮನೆ, ಅನಾಥರ ಶಿಕ್ಷಣ, ಮಸೀದಿ ದುರಸ್ತಿ ಮತ್ತು "
    "ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಮೂಲಕ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',\n"
)
zero_kn = "      zeroCommission: 'ನೀಡಿದ ಹಣ 100% ನೇರವಾಗಿ ಜನರಿಗೆ. ಕಮಿಷನ್ ಇಲ್ಲ',\n"
addr_kn = "      addressFull: 'ಮಸೀದಿ ಎಹ್ಸಾನ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಕಂಕನಾಡಿ, ಮಂಗಳೂರು – 575002',\n"
slogan_kn = "      slogan: 'ಕರುಣೆ ಮತ್ತು ಗೌರವದಿಂದ ಜನರನ್ನು ಬಲಪಡಿಸಿ, ಜೀವನ ಬದಲಿಸಿ'\n"
zero_hi = "      zeroCommission: 'दिया गया पैसा 100% सीधे लोगों तक। कोई कमीशन नहीं',\n"

for i, line in enumerate(lines):
    if "\u0cac\u0cb2\u0caa\u0ca1\u0cbf\u0cb8\u0cc1\u0cb5\u0cc1\u0ca6\u0cc1\u0c97\u0cca\u0cb3\u0cbf\u0cb8\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6" in line:
        lines[i] = footer_about
    elif line.startswith("      zeroCommission:") and "\u0ca8\u0cc7\u0cb0 \u0cb5\u0cbf\u0ca4\u0cb0\u0ca3\u0cc6" in line:
        lines[i] = zero_kn
    elif line.startswith("      addressFull:") and "\u0cae\u0cb8\u0ccd\u0c9c\u0cbf\u0ca6\u0ccd" in line:
        lines[i] = addr_kn
    elif line.startswith("      slogan:") and "\u0cb8\u0cb9\u0cbe\u0ca8\u0cc1\u0cad\u0cc2\u0ca4\u0cbf" in line:
        lines[i] = slogan_kn
    elif "\u0938\u092e\u0941\u0926\u093e\u092f\u094b\u0902 \u0915\u093e \u092e\u091c\u092c\u0942\u0924 \u092c\u0928\u093e\u0928\u093e" in line:
        lines[i] = line.replace(
            "\u0938\u092e\u0941\u0926\u093e\u092f\u094b\u0902 \u0915\u093e \u092e\u091c\u092c\u0942\u0924 \u092c\u0928\u093e\u0928\u093e",
            "\u0938\u092e\u0941\u0926\u093e\u092f\u094b\u0902 \u0915\u094b \u092e\u091c\u092c\u0942\u0924 \u092c\u0928\u093e\u0928\u093e",
        )
    elif "\u0938\u0936\u0915\u094d\u0924 \u092c\u0928\u093e \u0930\u0939\u093e \u0939\u0948" in line:
        lines[i] = line.replace(
            "\u0932\u094b\u0917\u094b\u0902 \u0915\u094b \u0938\u0936\u0915\u094d\u0924 \u092c\u0928\u093e \u0930\u0939\u093e \u0939\u0948\u0964",
            "\u0932\u094b\u0917\u094b\u0902 \u0915\u0940 \u092e\u0926\u0926 \u0915\u0930\u0924\u093e \u0939\u0948\u0964",
        )
    elif line.startswith("      zeroCommission:") and "\u092a\u094d\u0930\u0924\u094d\u092f\u0915\u094d\u0937" in line:
        lines[i] = zero_hi
    elif "\u0939\u0930 \u092a\u0930\u093f\u092f\u094b\u091c\u0928\u093e \u0915\u093e" in line:
        lines[i] = line.replace("\u0939\u0930 \u092a\u0930\u093f\u092f\u094b\u091c\u0928\u093e \u0915\u093e", "\u0939\u0930 \u092f\u094b\u091c\u0928\u093e \u0915\u093e")
    elif "\u0915\u093f\u0938\u0940 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u092a\u0930\u093f\u092f\u094b\u091c\u0928\u093e" in line:
        lines[i] = line.replace("\u0915\u093f\u0938\u0940 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u092a\u0930\u093f\u092f\u094b\u091c\u0928\u093e", "\u0915\u093f\u0938\u0940 \u0935\u093f\u0936\u093f\u0937\u094d\u091f \u092f\u094b\u091c\u0928\u093e")
    elif "\u092a\u0930\u093f\u092f\u094b\u091c\u0928\u093e \u0915\u0947 \u0932\u093f\u090f \u0926\u093f\u090f \u0917\u090f" in line:
        lines[i] = line.replace("\u092a\u0930\u093f\u092f\u094b\u091c\u0928\u093e \u0915\u0947 \u0932\u093f\u090f \u0926\u093f\u090f \u0917\u090f", "\u092f\u094b\u091c\u0928\u093e \u0915\u0947 \u0932\u093f\u090f \u0926\u093f\u090f \u0917\u090f")
    elif "\u0c95\u0c9f\u0ccd\u0c9f\u0cc1\u0ca8\u0cbf\u0c9f\u0ccd\u0c9f\u0cbe\u0ca6 \u0c95\u0cae\u0cbf\u0cb7\u0ca8\u0ccd \u0c87\u0cb2\u0ccd\u0cb2\u0ca6  \u0ca8\u0cc0\u0ca4\u0cbf\u0caf\u0ca1\u0cbf" in line:
        lines[i] = line.replace(
            "\u0c95\u0c9f\u0ccd\u0c9f\u0cc1\u0ca8\u0cbf\u0c9f\u0ccd\u0c9f\u0cbe\u0ca6 \u0c95\u0cae\u0cbf\u0cb7\u0ca8\u0ccd \u0c87\u0cb2\u0ccd\u0cb2\u0ca6  \u0ca8\u0cc0\u0ca4\u0cbf\u0caf\u0ca1\u0cbf",
            "\u0c95\u0cae\u0cbf\u0cb7\u0ca8\u0ccd \u0c87\u0cb2\u0ccd\u0cb2\u0ca6 \u0ca8\u0cc0\u0ca4\u0cbf\u0caf\u0ca1\u0cbf",
        )

p.write_text("".join(lines), encoding="utf-8")
print("ok")
