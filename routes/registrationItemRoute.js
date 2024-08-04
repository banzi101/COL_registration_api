const router = require("express").Router();
const registrationItemController = require("../controllers/registrationItemController");

router.post("/", registrationItemController.postRegistrationItem);
router.get("/:id", registrationItemController.getRegistrationItem);
router.put("/:id", registrationItemController.putRegistrationItem);
router.delete("/:id", registrationItemController.deleteRegistrationItem);

module.exports = router;
