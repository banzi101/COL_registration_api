const router = require("express").Router();
const answerController = require("../controllers/answersController");


router.post("/", answerController.postAnswer);
router.get("/:id", answerController.getAnswer);
router.put("/:id", answerController.putAnswer);
router.delete("/:id", answerController.deleteAnswer);

module.exports = router;
