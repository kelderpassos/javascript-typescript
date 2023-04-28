import { Router } from "express";
import { TaskController } from "../controllers/TaskController";

const taskRoute = Router();

const controller = new TaskController();

taskRoute.post('/', (req, res) => controller.create(req, res))
taskRoute.get('/', (req, res) => controller.readAll(req, res))
taskRoute.get('/:id', (req, res) => controller.readOne(req, res))
taskRoute.put('/', (req, res) => controller.update(req, res))
taskRoute.delete('/', (req, res) => controller.delete(req, res))

export { taskRoute }