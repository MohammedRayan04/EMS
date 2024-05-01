import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createEmployee,
  deleteEmployee,
  getById,
  getEmployee,
  updateEmployee,
} from "../controllers/employee.controller.js";

const router = Router();

router.route("/register").post(upload.single("image"), createEmployee);
router.route("/getemployee").get(getEmployee);
router.route("/delete/:id").delete(deleteEmployee);
router.route("/get/:id").get(getById);
router.route("/update/:id").patch(upload.single("image"), updateEmployee);
export default router;
