import {Hono} from 'hono';
import { authMiddleware } from '../middlewares/auth.middleware.ts';
import { getStudentController, getAllStudentController } from '../controllers/student.controller';
import { roleMiddleware } from '../middlewares/role.middleware';

const studentRoute = new Hono();

studentRoute.use('*', authMiddleware);
studentRoute.get('/', getStudentController);
studentRoute.get('', roleMiddleware(['kepala_lab', 'dosen']), getAllStudentController);

export default studentRoute;
