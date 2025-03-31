declare module "cors" {
    import express from "express";
  
    interface CorsOptions {
      origin?: boolean | string | RegExp | (string | RegExp)[];
      methods?: string | string[];
      allowedHeaders?: string | string[];
      exposedHeaders?: string | string[];
      credentials?: boolean;
      maxAge?: number;
    }
  
    function cors(options?: CorsOptions): express.RequestHandler;
    export default cors;
  }
  