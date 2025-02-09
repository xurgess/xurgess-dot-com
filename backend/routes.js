import express from 'express';
import { getSkills } from './services/skills.js';

const router = express.Router();

router.get('/skills/get', getSkills);

export default router;
