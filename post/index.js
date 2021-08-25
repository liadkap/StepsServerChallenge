import { AsyncRouter } from 'express-async-router'
import { create, getAll } from './controller.js'
import { createSchema } from './validation'

var router = AsyncRouter();
const validator = require('express-joi-validation').createValidator({})

router.post('/', validator.body(createSchema),create)
router.get('/', getAll)


export default router;