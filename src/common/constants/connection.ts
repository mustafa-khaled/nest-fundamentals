export const connection: Connection = {
  CONNECTION_STRING: 'MYSQL://123',
  DB: 'MYSQL',
  DB_NAME: 'TEST',
};

export type Connection = {
  CONNECTION_STRING: string;
  DB: string;
  DB_NAME: string;
};
