const router = require("express").Router();
const userRegistrationController = require("../controllers/userRegistrationController");

router.post("/", userRegistrationController.postUserRegistration);
router.get("/:id", userRegistrationController.getUserRegistration);
router.put("/:id", userRegistrationController.putUserRegistration);
router.delete("/:id", userRegistrationController.deleteUserRegistration);

module.exports = router;