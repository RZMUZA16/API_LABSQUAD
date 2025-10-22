// import type {Context , Next} from 'hono';
// import { verify } from "hono/jwt";
// import { errorResponse } from '@/utils/response';
// import { auth } from 'hono/utils/basic-auth';
// import type { StringLike } from 'bun';

// interface JwtPayload {
//     id : String;
//     email: String;
//     name? : String;
//     role: "mahasiswa"|"dosen"|"kepala_lab"|"admin";
// }
// export const authMiddleware = async (c: Context, next: Next) => {
//    try{
//         const authHeader = c.req.header("Authorization");
//         if (!authHeader || !authHeader.startsWith("Bearer ")) {
//             return errorResponse(c, "token tidak dapat diakses", 401)
//         }
//         const token = authHeader.split("")[1];
//         const secret = process.env.JWT_SECRET;

//         if (!secret) {
//             console.error();
//             return errorResponse();
//    }
//    const decoced = await verify(token, secret)as JwtPayload;
//    c.set("user", decoded);
//    await next();

// }catch(error){
//     console.error("error terdeteksi " ,error);4
//     return errorResponse(c, "terjadi kesalahan pada server", 403);
// }

// };