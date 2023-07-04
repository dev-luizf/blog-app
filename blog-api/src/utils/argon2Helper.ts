import * as argon2 from 'argon2';

const hash = async (password: string) =>
  argon2.hash(password, { type: argon2.argon2id });

const verify = async (passHash: string, password: string) =>
  argon2.verify(passHash, password, { type: argon2.argon2id });

export default { hash, verify };
