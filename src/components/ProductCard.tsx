
import { useState } from 'react';
import { Plus, Eye } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductModal from './ProductModal';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getCategoryBadgeColor = (category: string) => {
    const colors = {
      'escalda-pes': 'bg-[#605d0f] hover:bg-[#4a4a0c]',
      'spray-terapeutico': 'bg-[#6b8e23] hover:bg-[#5a7a1e]',
      'roll-on': 'bg-[#a1bd65] hover:bg-[#8fa557]',
      'lembrancinhas': 'bg-[#7ba428] hover:bg-[#6a8f22]'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const getCategoryName = (category: string) => {
    const names = {
      'escalda-pes': 'Escalda Pés',
      'spray-terapeutico': 'Spray Terapêutico',
      'roll-on': 'Roll-on',
      'lembrancinhas': 'Lembrancinhas'
    };
    return names[category as keyof typeof names] || category;
  };

  return (
    <>
      <Card className="group hover:shadow-lg transition-all duration-300 border-green-200 overflow-hidden">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge 
            className={`absolute top-2 left-2 text-white ${getCategoryBadgeColor(product.category)}`}
          >
            {getCategoryName(product.category)}
          </Badge>
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsModalOpen(true)}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg text-[#605d0f] mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="text-2xl font-bold text-[#6b8e23]">
            {formatPrice(product.price)}
          </div>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex gap-2">
          <Button
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            className="flex-1"
          >
            Ver Detalhes
          </Button>
          <Button
            onClick={() => onAddToCart(product)}
            className="bg-[#6b8e23] hover:bg-[#5a7a1e]"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

export default ProductCard;
