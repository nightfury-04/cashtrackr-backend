import { Router } from "express";
import { body, param } from "express-validator";
import { BudgetController } from "../controllers/BudgetController";
import { handleInputErrors } from "../middleware/validation";
import {
  validateBudgetExist,
  validateBudgetId,
  validateBudgetInput,
} from "../middleware/budget";

const router = Router();

router.param("budgetId", validateBudgetId);
router.param("budgetId", validateBudgetExist);

router.get("/", BudgetController.getAll);

router.post("/", validateBudgetInput, BudgetController.create);

router.get("/:budgetId", BudgetController.getById);

router.put(
  "/:budgetId",
  body("name")
    .notEmpty()
    .withMessage("El nombre  del presupuesto no puede estar vacío"),
  body("amount")
    .notEmpty()
    .withMessage("El monto del presupuesto no puede estar vacío")
    .isNumeric()
    .withMessage("Cantidad no válida")
    .custom((value) => value > 0)
    .withMessage("El monto debe ser mayor que cero"),
  handleInputErrors,
  BudgetController.updateById
);

router.delete("/:budgetId", BudgetController.deleteById);

export default router;
