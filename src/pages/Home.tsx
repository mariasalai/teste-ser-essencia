import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  const categories = [
    {
      id: 'escalda-pes',
      name: 'Escalda Pés',
      description: 'Relaxamento profundo para seus pés com ervas naturais',
      icon: Sparkles,
      color: 'from-[#605d0f] to-[#6b8e23]'
    },
    {
      id: 'spray-terapeutico',
      name: 'Spray Terapêutico',
      description: 'Óleos essenciais para seu bem-estar diário',
      icon: Heart,
      color: 'from-[#6b8e23] to-[#a1bd65]'
    },
    {
      id: 'roll-on',
      name: 'Roll-on Terapêutico',
      description: 'Alívio natural e prático para levar onde quiser',
      icon: Leaf,
      color: 'from-[#a1bd65] to-[#6b8e23]'
    },
    {
      id: 'lembrancinhas',
      name: 'Lembrancinhas',
      description: 'Presentes especiais com o carinho da natureza',
      icon: Heart,
      color: 'from-[#6b8e23] to-[#605d0f]'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <h1 className="text-3xl font-bold text-[#605d0f]">Ser Essência</h1>
            </Link>
            <Link to="/catalogo">
              <Button variant="outline" className="border-[#6b8e23] text-[#6b8e23] hover:bg-[#6b8e23] hover:text-white">
                Ver Catálogo Completo
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-[#605d0f] mb-6">
              Desperte Sua Essência Natural
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Na <strong>Ser Essência</strong>, acreditamos que o bem-estar vem da conexão com a natureza. 
              Nossos produtos são cuidadosamente elaborados com ingredientes naturais para proporcionar 
              momentos de relaxamento, equilíbrio e renovação em sua rotina.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[#6b8e23] mb-12">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <span className="font-semibold">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="font-semibold">Feito com Amor</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                <span className="font-semibold">Bem-Estar Garantido</span>
              </div>
            </div>
            <Link to="/catalogo">
              <Button size="lg" className="bg-[#6b8e23] hover:bg-[#5a7a1e] text-white px-8 py-3 text-lg">
                Explore Nossos Produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-0">
        <div className="w-full">
          <div className="bg-gradient-to-r from-[#6b8e23] to-[#a1bd65] text-white py-12 px-4">
            <div className="container mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Espaço para Banner Promocional
              </h3>
              <p className="text-lg opacity-90 mb-6">
                Aqui você pode adicionar promoções, lançamentos ou mensagens especiais
              </p>
              <div className="bg-white/20 rounded-lg p-8 max-w-4xl mx-auto">
                <p className="text-sm opacity-75">
                  Este é um espaço reservado para banner. Substitua este conteúdo pelo seu banner personalizado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#605d0f] mb-4">
              Nossas Categorias
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubra nossa linha completa de produtos naturais, cada um desenvolvido 
              para atender às suas necessidades de bem-estar e qualidade de vida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="group hover:shadow-xl transition-all duration-300 border-green-200 overflow-hidden">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${category.color} mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-[#605d0f] text-xl">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pb-4">
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link to={`/catalogo?categoria=${category.id}`} className="w-full">
                      <Button 
                        variant="outline" 
                        className="w-full border-[#6b8e23] text-[#6b8e23] hover:bg-[#6b8e23] hover:text-white group-hover:bg-[#6b8e23] group-hover:text-white transition-colors"
                      >
                        Ver Produtos
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#605d0f] mb-6">
              Por Que Escolher a Ser Essência?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#6b8e23] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#605d0f] mb-2">Ingredientes Naturais</h4>
                <p className="text-gray-600">Selecionamos apenas os melhores ingredientes da natureza</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#6b8e23] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#605d0f] mb-2">Feito com Carinho</h4>
                <p className="text-gray-600">Cada produto é preparado com amor e dedicação</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#6b8e23] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#605d0f] mb-2">Resultados Eficazes</h4>
                <p className="text-gray-600">Comprovados benefícios para seu bem-estar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6b8e23] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Transformar Sua Rotina?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Descubra como nossos produtos naturais podem fazer a diferença em sua vida
          </p>
          <Link to="/catalogo">
            <Button size="lg" variant="secondary" className="bg-white text-[#6b8e23] hover:bg-gray-100 px-8 py-3 text-lg">
              Explorar Produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
