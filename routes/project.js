const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project_controller');

router.put('/closeIssue/', projectController.closeIssue);
router.get('/delete/:id', projectController.deleteIssue);
router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.post('/:id', projectController.createIssue);
router.get('/deleteProject/:id', projectController.deleteProject);

module.exports = router;
