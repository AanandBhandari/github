
import {Router} from 'express'
import { getRepoDetail, getRepos } from "../controllers/github";
const router = Router()

router.get("/repos", getRepos)
router.get("/repo/:name", getRepoDetail)

export default router

