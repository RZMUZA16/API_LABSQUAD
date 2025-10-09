import type {Context} from "hono";
import {extname} from "path";
import {writeFile} from "fs/promises";
import { buffer } from "stream/consumers";



const UPLOAD_DIR = "./uploads";

/** 
*  @param c  hono Context
*  @param fieLdName nama field form-data
*/

export const handleUpload = async (
    c: Context, 
    fieldName: string = "file"
    ): Promise< {filePath: string; fileName: string}> => {
        const body = await c.req.parseBody();
        const file = body[fieldName];

        if (!file || !(file instanceof File)) {
            throw new Error("File tidak ditemukan di form-data");
        }
    
        const ext = extname(file.name).toLowerCase();
        if (![".png", ".jpg", ".jpeg", ".gif", ".pdf"].includes(ext)) {
            throw new Error("Jenis file tidak diizinkan");
        }

        const fileName = '${Date.now()}-${file.name}';
        const filePath = `${UPLOAD_DIR}/${fileName}`;

        const buffer = Buffer.from(await file.arrayBuffer());
        await writeFile(filePath, buffer);

        return {filePath, fileName};
    };