const { Router } = require("express")
const router = Router()

const MiddleWare = require("../middleware")
const CategoryContoller = require("../controllers/category.controller")
const { CategoryCreateSchema, CategoryUpdateSchema } = require("../validations/category.validation")

router.post("/category", MiddleWare.Validation(CategoryCreateSchema),CategoryContoller.create)
router.get("/category",CategoryContoller.find)
router.get("/category/:id",CategoryContoller.findById)
router.put("/category/:id",MiddleWare.Validation(CategoryUpdateSchema),CategoryContoller.update)
router.delete("/category/:id",CategoryContoller.delete)

module.exports = router