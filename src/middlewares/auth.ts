import { RequestHandler } from 'express';
import { verify } from 'jsonwebtoken';

type tokenPayload = {
    id: string;
    iat: number;
    exp: number;
}

export const authMiddleware: RequestHandler = async(req,res, next) =>{
   const { authorization } = req.headers

   if(!authorization){
    return res.status(401).json({error: "Token not provided"})
   }

   const [, token] = authorization.split(" ")

   try{
    const decoded = verify(token, "secret")
    const { id } = decoded as tokenPayload;

    req.userId = id;
    next()

   }catch(error){
    return res.status(401).json({error: "Invalid Token"})
   }
}