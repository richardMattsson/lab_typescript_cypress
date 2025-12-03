import ProductContainer from "../../src/components/ProductContainer.tsx";

const products = [
  {
    id: 1,
    name: "Fralla Naturell",
    category: "frallor",
    description:
      "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
    price: 8.0,
    image: "/images/fralla-naturell.jpg",
  },
];

describe("ContainerForProducts.cy.jsx", () => {
  it("playground", () => {
    // cy.intercept(
    //   {
    //     method: "GET",
    //     url: "http://localhost:3000/api/products",
    //   },
    //   {
    //     body: [
    //       {
    //         id: 1,
    //         name: "Fralla Naturell",
    //         category: "frallor",
    //         description:
    //           "Luftig fralla bakad med vetemjöl, vatten och lite smör. Perfekt till frukosten.",
    //         price: 8.0,
    //         image: "/images/fralla-naturell.jpg",
    //       },
    //     ],
    //   }
    // ).as("products");

    // cy.wait("@products");

    cy.mount(<ProductContainer products={products} addToCart={() => {}} />);
    cy.get("[data-cy=product-container]").should("be.visible");

    cy.get("[data-cy=product-container]").should("have.property", "length");
    cy.get("[data-cy=product-container]").should("have.length", 1);
  });
});
