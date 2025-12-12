import express from "express";
import { database } from "./database.ts";
import type { QueryResult } from "pg";
import type { ProductType } from "../frontend/src/components/ProductContainer.tsx";
import type { Order } from "../frontend/src/pages/Cart.tsx";

const app = express();
const port = 9999;

app.use(express.json());

app.get("/api/products", async (_request, response) => {
  try {
    const { rows }: QueryResult<ProductType> = await database.query(
      "SELECT * FROM products"
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/order", async (_request, response) => {
  try {
    const { rows }: QueryResult<Order> = await database.query(
      "SELECT * FROM orders"
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/order", async (request, response) => {
  const { address, cart, delivery, name, price } = request.body;
  try {
    const { rows }: QueryResult<Order> = await database.query(
      `INSERT INTO orders (address, cart, delivery, name, price ) VALUES ($1, $2::jsonb, $3, $4, $5) RETURNING *`,
      [address, JSON.stringify(cart), delivery, name, price]
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Webbtjänsten kan nu ta emot anrop.");
});
