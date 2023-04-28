import { Request, Response } from "express";

interface CreateHandler {create(req: Request, res: Response): Promise<Response> | null}
interface ReadAllHandler {readAll(req: Request, res: Response): Promise<Response> | null}
interface ReadOneHandler {readOne(req: Request, res: Response): Promise<Response> | null}
interface UpdateHandler {update(req: Request, res: Response): Promise<Response> | null}
interface DeleteHandler {delete(req: Request, res: Response): void}

export interface RequestHandlers extends 
  CreateHandler, 
  ReadAllHandler,
  ReadOneHandler,
  UpdateHandler,
  DeleteHandler {}