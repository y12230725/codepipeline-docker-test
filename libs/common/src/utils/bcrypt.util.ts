import * as bcrypt from 'bcryptjs';

export const hashBcrypt = async (password: string) => {
  const hashedPassword = await bcrypt.hashSync(password, await bcrypt.genSaltSync(10));
  return hashedPassword;
};

export const compareBcrypt = async (unhashed: string, hashed: string) => {
  return await bcrypt.compareSync(unhashed, hashed);
};
