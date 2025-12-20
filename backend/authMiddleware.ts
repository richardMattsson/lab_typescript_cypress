import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";

export interface AuthRequest extends Request {
  user_id?: number;
}

export function verifyToken(
  request: AuthRequest,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.header("Authorization");

  if (!authHeader) return response.status(401).json({ error: "Access denied" });

  const token = authHeader.split(" ")[1];

  try {
    if (token) {
      const decoded = jwt.verify(token, "secret-key") as { user_id: number };
      request.user_id = decoded.user_id;
      next();
    }
  } catch (error) {
    response.status(401).json({ error });
  }
}
