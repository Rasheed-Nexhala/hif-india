/** Build a wa.me URL with optional prefilled text. Phone may include + and spaces. */
export function buildWhatsAppUrl(phone: string, text: string): string {
  const digits = phone.replace(/\D/g, '')
  const encoded = encodeURIComponent(text.trim())
  return encoded
    ? `https://wa.me/${digits}?text=${encoded}`
    : `https://wa.me/${digits}`
}
