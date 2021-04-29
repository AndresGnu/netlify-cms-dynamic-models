import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'email-smtp.us-west-2.amazonaws.com',
  port: 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

exports.handler = function name(event, context, callback) {
  //
  const body = JSON.parse(event.body);

  transporter
    .sendMail({
      from: `'Andariega' <no-reply@bigbrige.app>`,
      to: process.env.EMAIL_SUBSCRIBE,
      subject: 'Nueva subscripción',
      html: `<h2>${body.email}</h2>`
    })
    .then(() => {
      callback(null, {
        statusCode: 200,
        body: 'Email enviado'
      });
    })
    .catch(() => {
      callback(null, {
        statusCode: 400,
        body: 'Error enviando'
      });
    });
};
