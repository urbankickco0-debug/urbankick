export function generateWhatsAppLink(productName: string, selectedSize?: string): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_E164 || '573216841147';
  
  let message = `Hola UrbanKick, me interesa: ${productName}.`;
  
  if (selectedSize) {
    message += ` Talla: ${selectedSize}.`;
  }
  
  message += ' ¿Disponibilidad y tallas?';
  
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

export function generateGenericWhatsAppLink(): string {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_E164 || '573216841147';
  const message = 'Hola UrbanKick, me gustaría consultar sobre sus productos disponibles.';
  const encodedMessage = encodeURIComponent(message);
  
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}
