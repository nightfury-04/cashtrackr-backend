import { rateLimit } from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: process.env.NODE_ENV === "production" ? 5 : 100, // Limitar cada URL 5 (prod) o 100 (dev) solicitudes cada cierto tiempo (1 min)
  message:
    "Has alcanzado el límite de solicitudes. Por favor, inténtalo de nuevo más tarde.",
});
