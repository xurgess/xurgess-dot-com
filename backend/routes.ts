import express from 'express';
import { getSkills } from './services/skills.ts';

const router = express.Router();

router.get('/get', getSkills);

export default router;
