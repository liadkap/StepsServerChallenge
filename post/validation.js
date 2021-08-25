import Joi from 'joi'

export const createSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    user: Joi.string().required(),
  }).unknown()