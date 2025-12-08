import { useState } from "react";

export type ProductType = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

type ProductContainerProps = {
  products: ProductType[];
  addToCart: (product: ProductType) => void;
};

export default function ProductContainer({
  products,
  addToCart,
}: ProductContainerProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  return (
    <article className="product-container" data-cy="product-container">
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            handleClick={() => setSelectedProduct(product)}
            product={product}
          />
        ))}

      {selectedProduct && (
        <ProductModal
          addToCart={addToCart}
          onClose={() => setSelectedProduct(null)}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
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
      className="product-card pointer"
      onClick={handleClick}
    >
      <figure
        className="no-margin"
        style={{ display: "grid", justifyContent: "center" }}
      >
        <ProductImage width="60px" />
      </figure>
      <section className="product-item-description-container">
        <p className="no-margin text-align-end">{product.name}</p>
        <p className="no-margin text-align-end">{product.price} kr</p>
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
  selectedProduct,
  onClose,
  addToCart,
  setSelectedProduct,
}: {
  selectedProduct: ProductType;
  onClose: () => void;
  addToCart: (selectedProduct: ProductType) => void;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductType | null>>;
}) {
  const [amount, setAmount] = useState(1);

  function onIncrease() {
    console.log("increase");
    setAmount(amount + 1);

    setSelectedProduct({ ...selectedProduct, quantity: amount + 1 });
  }
  // console.log(selectedProduct);
  function onDecrease() {
    console.log("decrease");
    setAmount(amount > 1 ? amount - 1 : amount);
    setSelectedProduct({ ...selectedProduct, quantity: amount - 1 });
  }
  return (
    <section className="product-modal-background">
      <section className="product-modal">
        <img
          onClick={onClose}
          src="close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          alt="close modal button"
          style={{ cursor: "pointer" }}
        />
        <h2 style={{ margin: 0 }}>{selectedProduct.name}</h2>
        <p style={{ margin: 0 }}>{selectedProduct.price * amount} kr</p>
        <figure
          className="no-margin"
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProductImage width="100px" />
        </figure>

        <AmountOfProducts onIncrease={onIncrease} onDecrease={onDecrease} />

        <AddToCart
          onClose={onClose}
          addToCart={() => addToCart(selectedProduct)}
        />
      </section>
    </section>
  );
}

export function AmountOfProducts({
  onIncrease,
  onDecrease,
}: {
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  const [amount, setAmount] = useState(1);

  function handleDecrement() {
    setAmount(amount > 1 ? amount - 1 : amount);
    onDecrease();
  }

  function handleIncrement() {
    setAmount(amount + 1);

    onIncrease();
  }

  return (
    <section style={{ display: "grid", justifyContent: "center" }}>
      <section className="product-amount">
        <span className="text-align-center">
          <img
            className="change-amount pointer"
            data-cy="decrement-button"
            onClick={handleDecrement}
            src="keyboard_arrow_down_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          />
        </span>

        <span
          className="amount-number text-align-center"
          data-cy="amount-of-products"
        >
          {amount}
        </span>
        <span className="text-align-center">
          <img
            className="change-amount pointer"
            data-cy="increment-button"
            onClick={handleIncrement}
            src="keyboard_arrow_up_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          />
        </span>
      </section>
    </section>
  );
}

export function AddToCart({
  onClose,
  addToCart,
}: {
  onClose: () => void;
  addToCart: () => void;
}) {
  const handleClick = () => {
    addToCart();
    onClose();
  };
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        alignItems: "center",
      }}
    >
      <span className="underscore text-align-center pointer" onClick={onClose}>
        Gå tillbaka
      </span>
      <span
        className="underscore text-align-center pointer"
        data-cy="add-to-cart-button"
        onClick={handleClick}
      >
        Lägg till
      </span>
    </section>
  );
}
