import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ShoppingCart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ProductCard from '@/components/ProductCard';
import CategoryFilter from '@/components/CategoryFilter';
import Cart from '@/components/Cart';
import { Product, CartItem } from '@/types/product';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Aplicar filtro de categoria da URL quando a página carregar
  useEffect(() => {
    const categoria = searchParams.get('categoria');
    if (categoria) {
      setSelectedCategory(categoria);
    }
  }, [searchParams]);

  const products: Product[] = [
    {
      id: 1,
      name: "Escalda Pés Relaxante",
      price: 25.90,
      description: "Escalda pés com ervas naturais para relaxamento profundo",
      benefits: "Alívio do estresse, melhora da circulação, relaxamento muscular",
      category: "escalda-pes",
      image: "/api/placeholder/300/300"
    },
    {
      id: 2,
      name: "Escalda Pés Energizante",
      price: 28.90,
      description: "Escalda pés revigorante com óleos essenciais",
      benefits: "Energia renovada, vitalidade, sensação de bem-estar",
      category: "escalda-pes",
      image: "/api/placeholder/300/300"
    },
    {
      id: 3,
      name: "Spray Terapêutico Lavanda",
      price: 35.90,
      description: "Spray calmante com óleo essencial de lavanda",
      benefits: "Relaxamento, alívio da ansiedade, melhor qualidade do sono",
      category: "spray-terapeutico",
      image: "/api/placeholder/300/300"
    },
    {
      id: 4,
      name: "Spray Terapêutico Eucalipto",
      price: 37.90,
      description: "Spray descongestionante com eucalipto puro",
      benefits: "Alívio respiratório, descongestionamento, frescor",
      category: "spray-terapeutico",
      image: "/api/placeholder/300/300"
    },
    {
      id: 5,
      name: "Roll-on Dor de Cabeça",
      price: 22.90,
      description: "Roll-on natural para alívio de dores de cabeça",
      benefits: "Alívio rápido, praticidade, ingredientes naturais",
      category: "roll-on",
      image: "/api/placeholder/300/300"
    },
    {
      id: 6,
      name: "Roll-on Ansiedade",
      price: 24.90,
      description: "Roll-on calmante para momentos de ansiedade",
      benefits: "Tranquilidade, equilíbrio emocional, praticidade",
      category: "roll-on",
      image: "/api/placeholder/300/300"
    },
    {
      id: 7,
      name: "Kit Lembrancinha Bem-Estar",
      price: 15.90,
      description: "Kit especial com mini produtos para presentear",
      benefits: "Presente perfeito, variedade de produtos, preço acessível",
      category: "lembrancinhas",
      image: "/api/placeholder/300/300"
    },
    {
      id: 8,
      name: "Sachê Aromático",
      price: 8.90,
      description: "Sachê perfumado para gavetas e armários",
      benefits: "Aroma duradouro, organização, frescor",
      category: "lembrancinhas",
      image: "/api/placeholder/300/300"
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos os Produtos' },
    { id: 'escalda-pes', name: 'Escalda Pés' },
    { id: 'spray-terapeutico', name: 'Spray Terapêutico' },
    { id: 'roll-on', name: 'Roll-on Terapêutico' },
    { id: 'lembrancinhas', name: 'Lembrancinhas' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-[#605d0f]">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <Link to="/">
                <h1 className="text-3xl font-bold text-[#605d0f]">Ser Essência</h1>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Buscar produtos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="relative">
                    <ShoppingCart className="h-4 w-4" />
                    {getTotalItems() > 0 && (
                      <span className="absolute -top-2 -right-2 bg-[#6b8e23] text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                        {getTotalItems()}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Seu Carrinho</SheetTitle>
                  </SheetHeader>
                  <Cart
                    items={cartItems}
                    onUpdateQuantity={updateQuantity}
                    onRemoveItem={removeFromCart}
                  />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-[#605d0f] mb-2">
                Produtos Naturais para seu Bem-Estar
              </h2>
              <p className="text-gray-600">
                Descubra nossa linha completa de produtos naturais e terapêuticos
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Nenhum produto encontrado</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Catalog;
