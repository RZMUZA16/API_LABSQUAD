import {Hono} from 'hono';
import { authMiddleware } from '../middlewares/auth.middleware.ts';
// import { getStudentController, getAllStudentController } from '../controllers/student.controller';
import { roleMiddleware } from '../middlewares/role.middleware';

const studentRoutes = new Hono();
export const studentRoute = studentRoutes;

studentRoute.use('*', authMiddleware);
// studentRoute.get('/', getStudentController);
// studentRoute.get('/:id', roleMiddleware(['kepala_lab', 'dosen']), getAllStudentController);

export default studentRoute;
