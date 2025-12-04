import express from "express";
import { database } from "./database.ts";
import type { QueryResult } from "pg";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

interface City {
  id: number;
  name: string;
  population: number;
}

app.get("/api/products", async (_request, response) => {
  try {
    const { rows }: QueryResult<City> = await database.query(
      "SELECT * FROM products"
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/order", async (_request, response) => {
  try {
    const { rows }: QueryResult<City> = await database.query(
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
    const { rows }: QueryResult<City> = await database.query(
      `INSERT INTO orders (address, cart, delivery, name, price ) VALUES ($1, $2::jsonb, $3, $4, $5) RETURNING *`,
      [address, JSON.stringify(cart), delivery, name, price]
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.post("/cities", async (request, response) => {
  const { name, population } = request.body;

  try {
    const { rows } = await database.query(
      `INSERT INTO cities (name, population) VALUES ($1, $2) RETURNING *`,
      [name, population]
    );
    response.send(rows);
  } catch (error) {
    response.send(error);
  }
});

app.listen(port, () => {
  console.log("Webbtjänsten kan nu ta emot anrop.");
});
