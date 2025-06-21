
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  return (
    <Card className="border-green-200">
      <CardHeader>
        <CardTitle className="text-[#605d0f]">Categorias</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categories.map(category => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className={`w-full justify-start ${
              selectedCategory === category.id 
                ? "bg-[#6b8e23] hover:bg-[#5a7a1e] text-white" 
                : "hover:bg-green-50"
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
