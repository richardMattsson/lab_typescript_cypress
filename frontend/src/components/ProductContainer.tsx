import { useState } from "react";
import type { UpdateCartType } from "../router/router";

export type ProductType = {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
};

type ProductContainerProps = {
  products: ProductType[];
  updateCart: ({ action, product, quantity }: UpdateCartType) => void;
};

export default function ProductContainer({
  products,
  updateCart,
}: ProductContainerProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null
  );

  return (
    <article className="product-container" data-cy="product-container">
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            handleClick={() => setSelectedProduct(product)}
            product={product}
          />
        ))}

      {selectedProduct && (
        <ProductModal
          onClose={() => setSelectedProduct(null)}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          updateCart={updateCart}
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
        style={{
          display: "grid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ProductImage src={product.image} width={55} />
      </figure>
      <section className="product-item-description-container">
        <p className="no-margin text-align-end">{product.name}</p>
        <p className="no-margin text-align-end">{product.price} kr</p>
      </section>
    </section>
  );
}

export function ProductImage({
  width = 45,
  src = "bakery_dining_black.svg",
}: {
  width?: number;
  src: string;
}) {
  return <img src={src} alt="product-image" style={{ width: `${width}px` }} />;
}

export function ProductModal({
  selectedProduct,
  onClose,
  setSelectedProduct,
  updateCart,
}: {
  selectedProduct: ProductType;
  onClose: () => void;
  setSelectedProduct: React.Dispatch<React.SetStateAction<ProductType | null>>;
  updateCart: ({ action, product, quantity }: UpdateCartType) => void;
}) {
  const [amount, setAmount] = useState(1);

  function onIncrease() {
    setAmount(amount + 1);
    setSelectedProduct({ ...selectedProduct, quantity: amount + 1 });
  }
  function onDecrease() {
    setAmount(amount > 1 ? amount - 1 : amount);
    setSelectedProduct({ ...selectedProduct, quantity: amount - 1 });
  }
  return (
    <section className="product-modal-background">
      <section className="product-modal">
        <img
          alt="close modal button"
          data-cy="close-modal-icon"
          onClick={onClose}
          src="close_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
          style={{ cursor: "pointer" }}
        />
        <h2 style={{ margin: 0 }}>{selectedProduct.name}</h2>
        <p style={{ margin: 0 }}>{selectedProduct.price * amount} kr</p>
        <p>{selectedProduct.description}</p>
        <figure
          className="no-margin"
          style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ProductImage width={100} src={selectedProduct.image} />
        </figure>

        <AmountOfProducts onIncrease={onIncrease} onDecrease={onDecrease} />

        <AddToCart
          onClose={onClose}
          addToCart={() =>
            updateCart({
              action: "add",
              product: selectedProduct,
              quantity: selectedProduct.quantity,
            })
          }
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
    if (amount < 20) {
      setAmount(amount + 1);
      onIncrease();
    } else return;
  }

  return (
    <section style={{ display: "grid", justifyContent: "center" }}>
      <section className="product-amount">
        <span className="text-align-center">
          <img
            className="change-amount pointer"
            data-cy="decrement-button"
            onClick={handleDecrement}
            src="remove-icon.svg"
            width={10}
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
            src={amount < 20 ? "add-icon.svg" : "add-icon-grey.svg"}
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
