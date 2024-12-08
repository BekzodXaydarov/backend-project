const { Router } = require("express")
const router = Router()

const DesignController = require("../controllers/design.controller")
const upload = require("../config/multer")

router.post("/design", upload.single("design_img1"), DesignController.create)
router.get("/design",DesignController.find)
router.get("/design/:id",DesignController.findById)
router.put("/design/:id",upload.single("design_img1"),DesignController.update)
router.delete("/design/:id",DesignController.delete)

module.exports = router