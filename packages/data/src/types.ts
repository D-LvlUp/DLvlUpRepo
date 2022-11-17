export type MySqlOptions = {
  type: 'mysql';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl: object;
  entities: any[];
  synchronize: boolean;
  logging: boolean;
};
