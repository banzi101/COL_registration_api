const router = require("express").Router();
const musicFileController = require("../controllers/musicFileController");

router.post("/", musicFileController.postMusicFile);
router.get("/:id", musicFileController.getMusicFile);
router.put("/:id", musicFileController.putMusicFile);
router.delete("/:id", musicFileController.deleteMusicFile);

module.exports = router;
