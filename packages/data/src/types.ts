export type MySqlOptions = {
  type: "mysql";
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  ssl: object;
  entities: [string];
  synchronize: boolean;
  logging: boolean;
};
