import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useProductByHandle } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cartStore";
import { formatPrice, formatUnitPrice } from "@/lib/shopify";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart, Minus, Plus, Loader2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: product, isLoading } = useProductByHandle(handle || "");
  const addItem = useCartStore((state) => state.addItem);
  const cartLoading = useCartStore((state) => state.isLoading);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (isLoading) {
    return (
      <Layout>
        <div className="section-padding">
          <div className="container-narrow mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            <Skeleton className="aspect-square rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="font-serif text-3xl mb-4">Produkt nicht gefunden</h1>
          <Button asChild variant="outline">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Shop
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const images = product.images.edges;
  const variants = product.variants.edges;
  const selectedVariant = variants[selectedVariantIndex]?.node;
  const currentImage = images[selectedImageIndex]?.node;

  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    const shopifyProduct = {
      node: {
        id: product.id,
        title: product.title,
        description: product.description,
        handle: product.handle,
        priceRange: product.priceRange,
        images: product.images,
        variants: product.variants,
        options: product.options,
      },
    };
    await addItem({
      product: shopifyProduct,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("In den Warenkorb gelegt", {
      description: `${product.title} × ${quantity}`,
      position: "top-center",
    });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <Button asChild variant="ghost" className="mb-6 text-muted-foreground">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Shop
            </Link>
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                {currentImage && (
                  <img
                    src={currentImage.url}
                    alt={currentImage.altText || product.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
                  {images.map(
                    (img: { node: { url: string; altText: string | null } }, i: number) => (
                      <button
                        key={i}
                        onClick={() => setSelectedImageIndex(i)}
                        className={`w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                          i === selectedImageIndex ? "border-primary" : "border-transparent"
                        }`}
                      >
                        <img src={img.node.url} alt={img.node.altText || ""} className="w-full h-full object-cover" />
                      </button>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-6">
              <h1 className="font-serif text-3xl sm:text-4xl">{product.title}</h1>

              {selectedVariant && (
                <div>
                  <p className="font-serif text-2xl text-primary">
                    {formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)}
                  </p>
                  {formatUnitPrice(selectedVariant) && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatUnitPrice(selectedVariant)}
                    </p>
                  )}
                </div>
              )}

              {/* ✅ FIX: Render formatted Shopify HTML description */}
              {product.descriptionHtml ? (
                <div
                  className="prose prose-sm max-w-none prose-p:my-2 prose-ul:my-2 prose-li:my-0 text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              ) : product.description ? (
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{product.description}</p>
              ) : null}

              {/* Variant selection */}
              {variants.length > 1 && (
                <div className="space-y-3">
                  {product.options.map((option: { name: string; values: string[] }) => (
                    <div key={option.name}>
                      <label className="text-sm font-medium mb-2 block">{option.name}</label>
                      <div className="flex flex-wrap gap-2">
                        {option.values.map((value: string) => {
                          const variantIdx = variants.findIndex(
                            (v: { node: { selectedOptions: Array<{ name: string; value: string }> } }) =>
                              v.node.selectedOptions.some((o) => o.name === option.name && o.value === value)
                          );
                          return (
                            <button
                              key={value}
                              onClick={() => variantIdx >= 0 && setSelectedVariantIndex(variantIdx)}
                              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                                variantIdx === selectedVariantIndex
                                  ? "bg-primary text-primary-foreground border-primary"
                                  : "bg-card border-border hover:border-primary"
                              }`}
                            >
                              {value}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quantity + Live Total */}
              <div className="space-y-2">
                <label className="text-sm font-medium block">Menge</label>
              
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
              
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => {
                      const raw = e.target.value;
                      // allow empty while typing
                      if (raw === "") return;
              
                      const value = Number(raw);
                      if (!Number.isFinite(value)) return;
              
                      setQuantity(Math.max(1, Math.floor(value)));
                    }}
                    onBlur={(e) => {
                      // if user clears the field, fallback to 1
                      if (e.target.value === "") setQuantity(1);
                    }}
                    className="w-16 text-center border rounded-lg px-2 py-1 bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    inputMode="numeric"
                    pattern="[0-9]*"
                  />
              
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              
                {/* Live total */}
                {selectedVariant && (
                  <div className="text-sm text-muted-foreground">
                    Gesamt:{" "}
                    <span className="font-semibold text-foreground">
                      {formatPrice(
                        (Number(selectedVariant.price.amount) * quantity).toFixed(2),
                        selectedVariant.price.currencyCode
                      )}
                    </span>
                  </div>
                )}
              </div>

              <Button
                onClick={handleAddToCart}
                size="lg"
                className="w-full bg-cta text-cta-foreground hover:bg-cta/90"
                disabled={cartLoading || !selectedVariant?.availableForSale}
              >
                {cartLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" /> In den Warenkorb
                  </>
                )}
              </Button>

              {selectedVariant && !selectedVariant.availableForSale && (
                <p className="text-destructive text-sm text-center">Aktuell nicht verfügbar</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
