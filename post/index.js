import { AsyncRouter } from 'express-async-router'
import { create, getAll } from './controller.js'
import { getAllSchema } from './validation'

var router = AsyncRouter();
const validator = require('express-joi-validation').createValidator({})

router.post('/', create)
router.get('/', validator.query(getAllSchema), getAll)


export default router;