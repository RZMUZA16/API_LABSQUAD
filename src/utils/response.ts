import type { Context } from 'hono';
import type { ContentfulStatusCode } from 'hono/utils/http-status';

interface ApiResponse<T>{
    success:boolean;
    message: string;
    data?: T;
    error?: any;
}


export const successResponse = <T>(
  c: Context,
  message: string,
  data?: T,
  status: ContentfulStatusCode = 200
) => {
  const response: ApiResponse<T> = {
    success: true,
    message,
    data,
  };
  // FIX: status harus dibungkus di object
  return c.json(response,  status );
};

export const errorResponse = (
  c: Context,
  message: string,
  error?: any,
  status: ContentfulStatusCode = 400
) => {
  const response: ApiResponse<null> = {
    success: false,
    message,
    error,
  };

  return c.json(response,  status);
};