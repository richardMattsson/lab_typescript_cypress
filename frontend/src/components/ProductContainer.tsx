import { useState } from "react";

type ProductType = {
  id: "bread_001";
  name: "Fralla Naturell";
  category: "frallor";
  description: "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.";
  price: 8.0;
  weight: 65;
  stock: 120;
  image: "/images/fralla-naturell.jpg";
};

type ProductContainerProps = {
  products: ProductType[];
};

export default function ProductContainer({ products }: ProductContainerProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );
  const handleClick = (product: ProductType) => {
    setSelectedProduct(product);
  };
  return (
    <article className="product-container">
      {products &&
        products.map((product) => (
          <ProductCard
            handleClick={() => handleClick(product)}
            product={product}
          />
        ))}

      {selectedProduct && (
        <ProductModal
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </article>
  );
}

export function ProductCard({
  handleClick,
  product,
}: {
  handleClick?: () => void;
  product: ProductType;
}) {
  return (
    <section
      data-cy="product-card"
      className="product-card"
      onClick={handleClick}
    >
      <ProductItem product={product} />
    </section>
  );
}

export function ProductItem({ product }: { product: ProductType }) {
  return (
    <section className="product-item">
      <figure style={{ display: "grid", justifyContent: "center" }}>
        <img
          src="bakery_dining_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="product-image"
          style={{ border: "1px solid #fff", width: "60px" }}
        />
      </figure>
      <section className="product-item-description-container">
        <p className="product-description">{product.name}</p>
        <p className="product-description">{product.price} kr</p>
      </section>
    </section>
  );
}

export function ProductImage({ width }: { width?: string }) {
  return (
    <img
      src="bakery_dining_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
      alt="product-image"
      style={{ border: "1px solid #fff", width: `${width || "25px"}` }}
    />
  );
}

export function ProductModal({
  product,
  onClose,
}: {
  product: ProductType;
  onClose: () => void;
}) {
  return (
    <section className="product-modal-background">
      <section className="product-modal">
        <img
          onClick={onClose}
          src="close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="close modal button"
          style={{ cursor: "pointer" }}
        />
        <h2 style={{ margin: 0 }}>{product.name}</h2>
        <p style={{ margin: 0 }}>{product.price} kr</p>
        <figure
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProductImage width="100px" />
        </figure>

        <AmountOfProducts />

        <AddToCart onClose={onClose} />
      </section>
    </section>
  );
}

export function AmountOfProducts() {
  const [amount, setAmount] = useState(0);
  return (
    <section style={{ display: "grid", justifyContent: "center" }}>
      <section className="product-amount">
        <span style={{ textAlign: "center" }}>
          <img
            className="cursor"
            data-cy="decrement-button"
            onClick={() => setAmount(amount > 0 ? amount - 1 : amount)}
            src="keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          />
        </span>

        <span className="text-align" data-cy="amount-of-products">
          {amount}
        </span>
        <span className="text-align">
          <img
            className="cursor"
            data-cy="increment-button"
            onClick={() => setAmount(amount + 1)}
            src="keyboard_arrow_up_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          />
        </span>
      </section>
    </section>
  );
}

export function AddToCart({ onClose }: { onClose: () => void }) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        alignItems: "center",
      }}
    >
      <span className="underscore text-align cursor" onClick={onClose}>
        Gå tillbaka
      </span>
      <span className="underscore text-align cursor">Lägg till</span>
    </section>
  );
}
