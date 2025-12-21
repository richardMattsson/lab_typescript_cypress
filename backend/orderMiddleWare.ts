import jwt from "jsonwebtoken";
import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./authMiddleware.ts";

export function orderMiddleWare(
  request: AuthRequest,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.header("Authorization");

  if (!authHeader) {
    next();
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    if (token) {
      const decoded = jwt.verify(token, "secret-key") as { user_id: number };
      request.user_id = decoded.user_id;
      next();
    }
  } catch {
    next();
  }
}
