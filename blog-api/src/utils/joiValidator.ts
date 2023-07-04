import { BadRequestException } from '@nestjs/common';
import * as Joi from 'joi';

const joiValidate = (
  schema: Joi.ObjectSchema | Joi.ArraySchema,
  payload: any,
) => {
  const { error } = schema.validate(payload);

  if (error) {
    throw new BadRequestException(error.message);
  }
};

export default joiValidate;
