//import nodemailer object
const nodemailer = require("nodemailer");
const path = require("path");

//create a transport object
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dvkrishna142000@gmail.com",
    pass: "tmug ecuv hrgw azqf",
  },
});
const mailOptions = {
  from: "vamsikrishna.dvkrishna142000@gmail.com",
  to: "dvkrishna142000@gmail.com",
  subject: "Hello ✔",
  text: "Good Afternoon",
  html: "<h1>Hello World!!</h1>",
  attachments: [
    {
      filename: "NodeJs.txt",
      path: path.join(__dirname, "NodeJS.txt"),
      contentType: "NodeJS/txt",
    },
    {
      filename: "image-1.jpg",
      path: path.join(__dirname, "image-1.jpg"),
      contentType: "image/jpg",
    },
  ],
};
const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!!");
  } catch (error) {
    console.log(error);
  }
};
sendMail(transporter, mailOptions);
