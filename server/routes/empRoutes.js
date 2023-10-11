import express from "express";
import { listEmployees ,createEmployee ,updateEmployee ,deleteEmployee ,getEmployee } from "../controllers/employee.controller.js";




const router = express.Router();



router.post('/create',createEmployee);

router.get('/getAll',listEmployees);

router.get('/getOne/:id',getEmployee);

router.patch('/updateOne/:id',updateEmployee);

router.delete('/deleteOne/:id',deleteEmployee);





export default router;
