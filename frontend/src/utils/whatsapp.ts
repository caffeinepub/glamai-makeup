import type { CartItem } from '../hooks/useCart';

const WHATSAPP_NUMBER = '918709162269';

export function generateWhatsAppLink(items: CartItem[], total: number): string {
  let message = '🛍️ *GlamAI Makeup Order*\n\n';
  message += '📦 *Order Details:*\n';
  message += '━━━━━━━━━━━━━━━━\n\n';

  items.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   Quantity: ${item.quantity}\n`;
    message += `   Price: $${item.price.toFixed(2)} each\n`;
    message += `   Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`;
  });

  message += '━━━━━━━━━━━━━━━━\n';
  message += `💰 *Total Amount: $${total.toFixed(2)}*\n\n`;
  message += '✨ Thank you for choosing GlamAI Makeup!\n';
  message += 'Please confirm this order to proceed with delivery.';

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
