import { Request, Response } from "express";
import {Personas} from '../entities/Personas'

export const createPersonas = async (req: Request, res: Response) => {
    try {
        const {firstname, lastname} = req.body

        const personas = new Personas();
        personas.firstname = firstname;
        personas.lastname = lastname;

        await personas.save();
        
        return res.json(personas);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
};

//Devuelve un arreglo de personas
export const getPersonas = async (req: Request, res: Response) => {
    try {
        const personas = await Personas.find()
        return res.json(personas)
        
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}

export const updatePersonas = async (req: Request, res: Response) => {
    try {
        const {firstname, lastname} = req.body
        const personas = await Personas.findOneBy({id: parseInt(req.params.id) });
    
        if (!personas) return res.status(404).json({message: 'person does not exists'});
        personas.firstname = firstname;
        personas.lastname = lastname;
    
        personas.save();
     
        return res.sendStatus(204)
        
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}


export const deletePersonas = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
    
        const result = await Personas.delete({id: parseInt(id)})
        if (result.affected === 0) {
            return res.status(404).json({message: "Person not found"})
        }
        return res.sendStatus(204)
        
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }

}

export const getPersona = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const personas = await Personas.findOneBy({id: parseInt(id)})
        return res.json(personas)
        
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message});
        }
    }
}