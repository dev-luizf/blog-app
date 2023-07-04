import * as Joi from 'joi';

export const createUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean(),
}).options({ convert: false });

export const updateUserSchema = Joi.object({
  username: Joi.string(),
  password: Joi.string(),
  isAdmin: Joi.boolean(),
}).options({ convert: false });
