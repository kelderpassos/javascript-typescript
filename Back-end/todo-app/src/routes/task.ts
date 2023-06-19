import { Router } from 'express'
import { CreateTaskController } from '@/modules/useCases/tasks/createTask/CreateTaskController'
import { GetAllTasksController } from '@/modules/useCases/tasks/getTask/GetTasksByIdController'
import { UpdateTaskController } from '@/modules/useCases/tasks/updateTask/UpdateTaskController'
import { DeleteTaskController } from '@/modules/useCases/tasks/deleteTask/DeleteTaskController'

export const route = Router()

const createTaskController = new CreateTaskController()
const getAllTasksController = new GetAllTasksController()
const updateTaskController = new UpdateTaskController()
const deleteTaskController = new DeleteTaskController()

route.post('/task/', createTaskController.handle)
route.get('/task/', getAllTasksController.handle)
route.put('/task/:id', updateTaskController.handle)
route.delete('/task/:id', deleteTaskController.handle)
