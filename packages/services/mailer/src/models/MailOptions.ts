import Mail, {Address} from "nodemailer/lib/mailer";
import {Expose} from "class-transformer";
import {IsEmail, IsString} from "class-validator";

export class MailOptions implements Mail.Options{

    @Expose()
    @IsEmail()
    from?: string | Address

    @Expose()
    @IsEmail()
    to: string[] | string

    @Expose()
    cc?: string[] | string

    @Expose()
    @IsString()
    subject: string

    @Expose()
    @IsString()
    text: string

    @Expose()
    html?: any

    @Expose()
    headers?: any

    @Expose()
    attachments?: any[] | any
}
