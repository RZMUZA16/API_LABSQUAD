// import type { Context, Next } from "hono";


// export const ownershipMiddleware = (
//   getResourceOwnerId: (c: Context) => Promise<number> | number
// ) => {
//   return async (c: Context, next: Next) => {
//     // Asumsikan userId sudah tersedia di context (misal dari auth middleware)
//     const userId = c.get("userId");
//     if (!userId) {
//       return c.json(
//         { success: false, message: "Akses ditolak: user tidak terautentikasi" },
//         401
//       );
//     }

//     const ownerId = await getResourceOwnerId(c);

//     if (Number(userId) !== Number(ownerId)) {
//       return c.json(
//         { success: false, message: "Akses ditolak: Anda bukan pemilik resource ini" },
//         403
//       );
//     }

//     await next();
//   };
// };