import {Hono} from 'hono'

// import {roleMiddleware} from '../middlewares/role.middleware';

import {
    uploadSertifikat,
    getSertifikatById,
    getAllSertifikat,
    updateSertifikat,
    updateSertifikatStatus,
    deleteSertifikat
} from '../controllers/sertifikat.controller';


const router = new Hono();
export const sertifikatRoute = router;
router.use('*,authMiddleware');

 router.post('/form', //roleMiddleware(['MAHASISWA']), 
 uploadSertifikat);

router.get('/form/:id', //roleMiddleware(['MAHASISWA','ADMIN']),
 getSertifikatById);

router.get('/form', //roleMiddleware(['ADMIN']), 
getAllSertifikat);
     
