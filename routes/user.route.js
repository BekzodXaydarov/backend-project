const { Router } = require("express")
const router = Router()

const MiddleWare = require("../middleware/index")
const UserController = require("../controllers/user.controller")
const { UserCreateSchema, UserUpdateSchema, UserLoginSchema } = require("../validations/user.validation")

router.post("/user", MiddleWare.Validation(UserCreateSchema), UserController.create)    
router.get("/user", UserController.find)
router.get("/user/:id", UserController.findById)
router.put("/user/:id", MiddleWare.Validation(UserUpdateSchema), UserController.update)
router.delete("/user/:id", UserController.delete)
router.post("/userLogin", MiddleWare.Validation(UserLoginSchema), UserController.login)



module.exports = router