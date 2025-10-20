import { errorResponse } from '@/utils/response';
import type {Context, Next} from 'hono';


export const roleMiddleware =(allowedRoles: string[])=>{
    return async(c: Context, next: Next)=>{
        const user = c.get("MAHASISWA");
        
        if (user || !user.role){
            return errorResponse(c, "akses ditolak", 403);

        }
        if ( allowedRoles.includes(user.role)){
            return errorResponse(c, "akses ditolak", 403);

        }
        await next();
    }
}