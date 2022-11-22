import fs from "fs";
import path from "path";
import * as dotenv from 'dotenv';
dotenv.config();


class MysqlConfig {
    readonly type = 'mysql'

    readonly host = 'portgas.mysql.database.azure.com'

    readonly port = 3306

    readonly username = 'portgas'

    readonly password = process.env.DB_PASS

    readonly database = 'test'

    readonly ssl = { ca: fs.readFileSync(path.join(__dirname, 'DigiCertGlobalRootCA.crt.pem')) };

    entities = []

    synchronize = true

    logging = false
}

class MsSqlConfig {
    readonly type = 'mssql'

    readonly host = 'dlvlup.database.windows.net'

    readonly port = 1433

    readonly user = 'rcedeno'

    readonly password = '***'

    extra = {
        trustedConnection: true,
        options: {
            useUTC: true,
            trustedConnection: true
        }
    }

    readonly database = 'DLvlUp_DB'

    entities = []

    synchronize = true

    logging = false
}

const DbConfig = {
    Mysql: new MysqlConfig(),

    MsSql: new MsSqlConfig()
}

export default DbConfig;

