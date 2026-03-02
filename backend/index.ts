import express from "express";
import dotenv from "dotenv";
import { Client } from "pg";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import type { QueryResult } from "pg";
import type { ProductType, OrderType } from "./types.ts";
import { verifyToken, type AuthRequest } from "./authMiddleware.ts";
import type { Request, Response } from "express";
import { orderMiddleWare } from "./orderMiddleWare.ts";

const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

app.use(express.json());

type UserType = {
  id: number;
  email: string;
  hashed_password: string;
  created_at: string;
};

type RegisterBody = {
  email: string;
  password: string;
};

app.post(
  "/api/register",
  async (
    request: Request<unknown, unknown, RegisterBody>,
    response: Response,
  ) => {
    try {
      const { email, password } = request.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await client.query(
        "INSERT INTO users (email, hashed_password) values($1, $2)",
        [email, hashedPassword],
      );
      response.status(201).json({ message: "En ny användare har lagts till!" });
    } catch (error) {
      response.status(500).json({ error });
    }
  },
);

app.post(
  "/api/login",
  async (
    request: Request<unknown, unknown, RegisterBody>,
    response: Response,
  ) => {
    try {
      const { email, password } = request.body;
      const { rows }: QueryResult<UserType> = await client.query(
        "SELECT * FROM users WHERE email=$1",
        [email],
      );
      const user = rows[0];
      if (!user) {
        return response
          .status(401)
          .json({ error: "Det gick inte att logga in med din användare!" });
      }
      if (user) {
        const validPassword = await bcrypt.compare(
          password,
          user.hashed_password,
        );
        if (!validPassword) {
          return response
            .status(401)
            .json({ error: "Ditt lösenord är inte korrekt!" });
        }
      }
      const token = jwt.sign({ user_id: user.id }, "secret-key", {
        expiresIn: "1h",
      });
      response.status(200).json({
        token,
        message: "Du är inloggad!",
      });
    } catch (error) {
      response.status(500).json({ error });
    }
  },
);

app.get("/api/products", async (_request, response: Response) => {
  try {
    const { rows }: QueryResult<ProductType> = await client.query(
      "SELECT * FROM products",
    );
    response.send(rows);
  } catch (error) {
    console.log(error);
  }
});

app.get(
  "/api/orders",
  verifyToken,
  async (request: AuthRequest, response: Response) => {
    const user_id = request.user_id;

    try {
      const { rows }: QueryResult<OrderType> = await client.query(
        "SELECT * FROM orders WHERE user_id=$1",
        [user_id],
      );
      response.send(rows);
    } catch (error) {
      response.status(500).json({ error });
    }
  },
);

app.post(
  "/api/order",
  orderMiddleWare,
  async (request: AuthRequest, response: Response) => {
    const { address, cart, delivery, name, price } = request.body;
    const user_id = request.user_id;
    try {
      await client.query("SET client_encoding = 'UTF8'");
      const { rows }: QueryResult<OrderType> = await client.query(
        `INSERT INTO orders (user_id, address, cart, delivery, name, price ) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [user_id, address, JSON.stringify(cart), delivery, name, price],
      );
      response.send(rows);
    } catch (error) {
      console.log(error);
    }
  },
);

// app.use(express.static(path.join(path.resolve(), "dist")));

app.listen(port, () => {
  console.log("Webbtjänsten kan nu ta emot anrop på port " + port);
});
