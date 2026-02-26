import { Link } from "react-router-dom";
import { ArrowRight, PackageOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shop/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";

export const FeaturedProducts = () => {
  const { data: products, isLoading } = useProducts(6);

  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Unsere Produkte</h2>
            <p className="text-muted-foreground mt-2">Frisch vom Feld – direkt zu Ihnen.</p>
          </div>
          <Button asChild variant="ghost" className="hidden sm:inline-flex text-primary">
            <Link to="/shop">
              Alle Produkte <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square rounded-xl" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <ProductCard key={product.node.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card rounded-2xl border">
            <PackageOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-serif text-xl mb-2">Noch keine Produkte</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Produkte werden hier angezeigt, sobald sie im Shop angelegt sind. Sag mir einfach im Chat, welche Produkte du hinzufügen möchtest!
            </p>
          </div>
        )}

        <div className="sm:hidden mt-6 text-center">
          <Button asChild variant="outline">
            <Link to="/shop">
              Alle Produkte <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
