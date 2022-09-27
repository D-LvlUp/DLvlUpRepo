import "reflect-metadata";
import { createConnection, DataSource } from "typeorm";
import { Student } from "./entities/Student";
export { Student } from "./entities/Student";
// import { StudentRepository } from "./StudentRepository";
// export { StudentRepository } from "./StudentRepository";
// import { OfferedClassRepository } from "./OfferedClassRepository";
// export { OfferedClassRepository } from "./OfferedClassRepository";
import { OfferedClass } from "./entities/OfferedClass";
export { OfferedClass } from "./entities/OfferedClass";

var _connection: DataSource;
export async function connect(databaseFN: string) {
  _connection = await new DataSource({
    type: "mssql",
    database: databaseFN,
    username: "portgas",
    password: "dLVLupACE!",
    synchronize: true,
    logging: false,
    entities: [Student, OfferedClass],
  });

  return _connection.initialize();
}
export function connected() {
  return typeof _connection !== "undefined";
}
// export function getStudentRepository(): StudentRepository {
//   return _connection.getRepository(StudentRepository);
// }
// export function getOfferedClassRepository(): OfferedClassRepository {
//   return _connection.getRepository(OfferedClassRepository);
// }
