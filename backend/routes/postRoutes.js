import express from 'express';
import { CreatePost, getPosts } from '../controllers/postController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();



router.post('/',protect,CreatePost);
router.get('/',protect,getPosts);

export default router;