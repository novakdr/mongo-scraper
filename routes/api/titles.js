const router = require('express').Router();
const titleController = require('../../controllers/title');

router.get('/', titleController.findAll);
router.delete('/:id', titleController.delete);
router.put('/:id', titleController.update);

module.exports = router;