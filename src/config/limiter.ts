import {rateLimit} from "express-rate-limit";

export const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 5, // Limitar cada URL a 5 solicitudes por ventana (aquí, por minuto)
    message: "Has alcanzado el límite de solicitudes. Por favor, inténtalo de nuevo más tarde.",
})