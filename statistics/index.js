import { AsyncRouter } from 'express-async-router'
import { getTopCreators, getRuntime } from './controller.js'
import { group, sort, limit, project } from './middlewares'

var router = AsyncRouter();

router.get('/topcreators', group, sort, limit, project, getTopCreators)
router.get('/runtimes', getRuntime)

export default router;