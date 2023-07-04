import * as Joi from 'joi';

export const createPostSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    published: Joi.boolean(),
    authorId: Joi.number().required(),
}).options({ convert: false });

export const updatePostSchema = Joi.object({
    title: Joi.string(),
    content: Joi.string(),
    published: Joi.boolean(),
    authorId: Joi.number(),
}).options({ convert: false });
