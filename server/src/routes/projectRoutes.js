import {
    createProjectController,
    listProjectController,
    retrieveProjectController,
    deleteProjectController,
    updateProjectController,


    createCategoryController,
    listCategoryController,
    retrieveCategoryController,
    deleteCategoryController,
    updateCategoryController,

} from '../controllers/projectController.js';
import {Router} from 'express';
import authGuard from '../middlewares/authGuard.js';
export const projectRouter = Router();
import uploader from '../middlewares/upload.js';

projectRouter.post('/projects', authGuard, uploader.single("image"), createProjectController);
projectRouter.get('/projects', listProjectController);
projectRouter.get('/projects/:slug', retrieveProjectController);
projectRouter.delete('/projects/:slug', authGuard, deleteProjectController);
projectRouter.put('/projects/:slug', authGuard, updateProjectController);

// Category Routes
projectRouter.post('/categories', authGuard, createCategoryController);
projectRouter.get('/categories', listCategoryController);
projectRouter.get('/categories/:id', retrieveCategoryController);
projectRouter.delete('/categories/:id', authGuard, deleteCategoryController);
projectRouter.put('/categories/:id', authGuard, updateCategoryController);

export default projectRouter;