
import { useState } from 'react';
import { Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CartItem } from '@/types/product';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const Cart = ({ items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "5547993825877"; // Seu número do WhatsApp
    let message = "Olá! Tenho interesse em:\n\n";
    
    items.forEach(item => {
      message += `• ${item.product.name} (${item.quantity}x) - ${formatPrice(item.product.price * item.quantity)}\n`;
    });
    
    message += `\nTotal: ${formatPrice(getTotalPrice())}\n\nPoderia me dar mais informações?`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="text-gray-400 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.68 4.82a1 1 0 00.95 1.18h9.46a1 1 0 00.95-1.18L15 13M7 13v6a2 2 0 002 2h6a2 2 0 002-2v-6" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Carrinho vazio</h3>
        <p className="text-gray-500">Adicione produtos para continuar</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 py-4">
        {items.map(item => (
          <div key={item.product.id} className="flex items-center space-x-4">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 truncate">
                {item.product.name}
              </h4>
              <p className="text-sm text-gray-500">
                {formatPrice(item.product.price)}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center text-sm font-medium">
                {item.quantity}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
              >
                <Plus className="h-3 w-3" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                onClick={() => onRemoveItem(item.product.id)}
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t pt-4 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-base font-medium text-gray-900">Total:</span>
          <span className="text-xl font-bold text-[#6b8e23]">
            {formatPrice(getTotalPrice())}
          </span>
        </div>
        
        <Button
          onClick={sendToWhatsApp}
          className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
          size="lg"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Finalizar pelo WhatsApp
        </Button>
      </div>
    </div>
  );
};

export default Cart;
