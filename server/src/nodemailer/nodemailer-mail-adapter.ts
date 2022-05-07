import { MailAdapter, SendMailData } from '../adapters/mail-adapter';
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "faaa43e5c1a193",
      pass: "21d1f0de49657e"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body}: SendMailData){

           
    await transport.sendMail({
     from: 'equipe Feedget <oi@feedget.com>',
     to:'Alexandre<alexandresousaroberto@gmail.com>',
     subject: subject,
     html: body,
    
    });
   }
}