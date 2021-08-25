import Joi from 'joi'

export const getAllSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    user: Joi.string().required(),
  }).unknown()