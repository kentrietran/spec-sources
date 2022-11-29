
const controllers = require('../controllers/controller.js');
const router = require('express').Router();

router.routes("/hello").get(controllers.hello);

router.route("/sources").get(controller.sources);
router.route("/add_source").post(controller.add_source);
router.route("/delete_source/:id").get(controller.delete_source);

module.exports = router;


