import { Router } from "express";
import {createPersonas, getPersonas, updatePersonas, deletePersonas, getPersona} from "../controllers/personas.controllers";

const router = Router();

router.post("/personas", createPersonas);

router.get('/personas', getPersonas);

router.put('/personas/:id', updatePersonas);

router.delete('/personas/:id', deletePersonas);

router.get('/personas/:id', getPersona);

export default router;