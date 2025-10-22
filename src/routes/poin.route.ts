import { Hono } from "hono";
//import { roleMiddleware}  from "../middlewares/role.middleware.ts";
import {
    createPoin, getAllPoin, getPoinById, updatePoin, deletePoin
}from '../controllers/poin.controllers.ts';

const router = new Hono();
export const poinRoute = router;

router.get('/poin', //roleMiddleware(['admin','dosen', 'Mahasiswa']), 
getAllPoin);
//
router.get('/poin/:id', //roleMiddleware(['admin','dosen', 'Mahasiswa']), 
getPoinById);
//
router.post('/poin', //roleMiddleware(['Mahasiswa']),
createPoin);
//
router.put('/poin/:id', //roleMiddleware(['Mahasiswa', 'admin']),
updatePoin);
//
router.delete('/poin/:id', //roleMiddleware(['admin']),
deletePoin);

export default router
