// const nodemailer = require("nodemailer");
import nodeMailer from "nodemailer";
import { config } from "dotenv";
config();
const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAILID,
    pass: process.env.EMAILPASSWORD,
  },
});
console.log(process.env.EMAILID);
console.log(process.env.EMAILPASSWORD);

const sendMail = (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAILID,
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email Sent:" + info.response);
    }
  });
};

export default sendMail;
