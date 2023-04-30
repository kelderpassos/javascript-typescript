import { Router } from 'express'
import { CreateTaskController } from '@/modules/useCases/tasks/createTask/CreateTaskController'
import { GetAllTasksController } from '@/modules/useCases/tasks/getTask/GetTasksByIdController'

export const route = Router()

const createTaskController = new CreateTaskController()
const getAllTasksController = new GetAllTasksController()

route.post('/task/', createTaskController.handle)
route.get('/task/', getAllTasksController.handle)