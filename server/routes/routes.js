
const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.routes("/hello").get(controllers.hello);

router.route("/api/sources").get(controller.sources);
router.route("/api/add_source").post(controller.add_source);
router.route("/api/delete_source/:id").post(controller.delete_source);

module.exports = router;


