export const config = () => ({
  PORT: parseInt(process.env.PORT, 10) || 3000,
  DATABASE: process.env.DATABASE,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PORT: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
});
