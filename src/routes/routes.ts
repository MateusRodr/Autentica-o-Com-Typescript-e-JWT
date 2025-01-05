import { Router } from "express";
import { createUser, getALl } from "../controller/userController";
import { authMiddlewares } from "../controller/authController";
import { authMiddleware } from "../middlewares/auth";

export const router = Router();

router.post('/create', createUser);
router.post('/auth', authMiddlewares);
router.get('/users', authMiddleware, getALl); 
