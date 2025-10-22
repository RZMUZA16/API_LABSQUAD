// import type { Context, Next } from "hono";

// // Middleware error handler untuk aplikasi Hono
// export const errorHandler = async (c: Context, next: Next) => {
//   try {
//     await next();
//   } catch (err: any) {
//     const status = err.status || 500;
//     const message = err.message || "Terjadi kesalahan pada server";
//     return c.json(
//       {
//         success: false,
//         message,
//         error: process.env.NODE_ENV === "production" ? undefined : err.stack,
//       },
//       status
//     );
//   }
// };import {Hono} from 'hono';


// const errorHandler = new Hono();

