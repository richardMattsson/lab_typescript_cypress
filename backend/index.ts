import express from "express";
import { database } from "./database.ts";
import type { QueryResult } from "pg";
import type { ProductType } from "../frontend/src/components/ProductContainer.tsx";
import type { OrderType } from "../frontend/src/pages/Cart.tsx";

const app = express();
const port = process.env.PORT || 9999;

app.use(express.json());

app.post("/login", (_request, response) => {
  response.sendStatus(200);
});

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

app.get("/api/orders/:id", async (request, response) => {
  const user_id = request.params.id;

  try {
    const { rows }: QueryResult<OrderType> = await database.query(
      "SELECT * FROM orders WHERE user_id=$1",
      [user_id]
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/order", async (request, response) => {
  const { user_id, address, cart, delivery, name, price } = request.body;
  try {
    await database.query("SET client_encoding = 'UTF8'");
    const { rows }: QueryResult<OrderType> = await database.query(
      `INSERT INTO orders (user_id, address, cart, delivery, name, price ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [user_id, address, JSON.stringify(cart), delivery, name, price]
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("Webbtjänsten kan nu ta emot anrop på port " + port);
});
