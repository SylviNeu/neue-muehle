import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/shop/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Skeleton } from "@/components/ui/skeleton";
import { PackageOpen } from "lucide-react";

const Shop = () => {
  const { data: products, isLoading } = useProducts(50);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="mb-10">
            <h1 className="font-serif text-4xl sm:text-5xl">Unser Shop</h1>
            <p className="text-muted-foreground mt-2">Frisches Bio-Gemüse und mehr – direkt vom Hof.</p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-square rounded-xl" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.node.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-2xl border">
              <PackageOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="font-serif text-2xl mb-2">Noch keine Produkte</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Produkte werden hier angezeigt, sobald sie im Shop angelegt sind. 
                Sag mir einfach im Chat, welche Produkte du hinzufügen möchtest!
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
