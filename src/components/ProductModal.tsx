
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Product } from '@/types/product';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getCategoryName = (category: string) => {
    const names = {
      'escalda-pes': 'Escalda Pés',
      'spray-terapeutico': 'Spray Terapêutico',
      'roll-on': 'Roll-on',
      'personalizados': 'personalizados'
    };
    return names[category as keyof typeof names] || category;
  };

  const handleAddToCart = () => {
    onAddToCart(product);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-[#605d0f]">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <Badge className="bg-[#6b8e23] hover:bg-[#5a7a1e] text-white">
            {getCategoryName(product.category)}
          </Badge>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Descrição</h4>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Benefícios</h4>
            <p className="text-gray-600">{product.benefits}</p>
          </div>
          
          <Separator />

          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Ingredientes</h4>
            <p className="text-gray-600">{product.ingredients}</p>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="text-3xl font-bold text-[#6b8e23]">
              {formatPrice(product.price)}
            </div>
            <Button
              onClick={handleAddToCart}
              className="bg-[#6b8e23] hover:bg-[#5a7a1e]"
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
