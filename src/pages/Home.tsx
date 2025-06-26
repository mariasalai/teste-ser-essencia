
import { Link } from 'react-router-dom';
import { ShowerHead, SprayCan, ArrowRight, Leaf, Heart, Sparkles } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Home = () => {
  const categories = [
    {
      id: 'escalda-pes',
      name: 'Escalda Pés',
      description: 'Um ritual de autocuidado pronto para você',
      icon: ShowerHead,
      color: 'from-[#605d0f] to-[#6b8e23]'
    },
    {
      id: 'spray-terapeutico',
      name: 'Spray Terapêutico',
      description: 'Pensados para deixar seu dia a dia mais leve',
      icon: SprayCan,
      color: 'from-[#6b8e23] to-[#a1bd65]'
    },
    {
      id: 'rollon-terapetico',
      name: 'Roll-on Terapêutico',
      description: 'Passe no seu pulso e sinta a mágica da natureza',
      icon: Heart,
      color: 'from-[#6b8e23] to-[#605d0f]'
    },
    {
      id: 'personalizados',
      name: 'Personalizados',
      description: 'Presentes especiais com o carinho da natureza',
      icon: Sparkles,
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
            {/* Logo */}
            <div className="mb-8">
              <img 
                src="/public/logo.png" 
                alt="Ser Essência Logo" 
                className="mx-auto h-36 w-auto mb-4"
              />
            </div>
            <h2 className="text-5xl font-bold text-[#605d0f] mb-6">
            Conecte-se com aquilo que é essencial em você
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Na <strong>Ser Essência</strong>, acreditamos que o bem-estar começa dentro — em uma pausa consciente, 
              em um aroma que abraça, em um instante de conexão com a natureza e com você mesma.
              Cada produto é feito com ingredientes naturais e muito carinho, para trazer mais leveza, 
              equilíbrio e presença ao seu dia a dia.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-[#6b8e23] mb-12">
              <div className="flex items-center gap-2">
                <Leaf className="h-6 w-6" />
                <span className="font-semibold">Feito com ingredientes naturais</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-6 w-6" />
                <span className="font-semibold">Artesanal, com amor em cada detalhe</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                <span className="font-semibold">Bem-estar que se sente na alma</span>
              </div>
            </div>
            <Link to="/catalogo">
              <Button size="lg" className="bg-[#6b8e23] hover:bg-[#5a7a1e] text-white px-8 py-3 text-lg">
                Conheça nossos produtos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#605d0f] mb-4">
              Nossas categorias
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
                        Ver produtos
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
              Por que escolher a Ser Essência?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#6b8e23] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#605d0f] mb-2">Ingredientes naturais e óleos essenciais puros</h4>
                <p className="text-gray-600">Nossos produtos são feitos com <strong>matérias-primas selecionadas</strong> com carinho, respeitando a natureza e o seu corpo — sem química agressiva, 
                  só o que é essencial.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#6b8e23] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#605d0f] mb-2">Feito à mão com intenção e cuidado</h4>
                <p className="text-gray-600">Cada item carrega um <strong>toque humano</strong>: é artesanal, feito em pequenas produções e pensado para transformar momentos comuns em rituais de bem-estar.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#6b8e23] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold text-[#605d0f] mb-2">Resultados reais para corpo, mente e emoções</h4>
                <p className="text-gray-600">Nossos produtos são mais do que cheirosos — são <strong>eficazes</strong>. A aromaterapia atua diretamente no equilíbrio emocional, na energia do ambiente 
                  e no cuidado com você.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#6b8e23] text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para transformar sua rotina?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Descubra como nossos produtos naturais podem fazer a diferença em sua vida
          </p>
          <Link to="/catalogo">
            <Button size="lg" variant="secondary" className="bg-white text-[#6b8e23] hover:bg-gray-100 px-8 py-3 text-lg">
              Explorar produtos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
