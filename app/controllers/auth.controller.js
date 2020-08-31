const nodemailer = require('nodemailer');
const crypto = require('crypto');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const config = require("../config/auth.config");
const db = require("../models");

const User = db.user;

let transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'madhunikaakula30@gmail.com',
    pass: 'madhu@301'
  }
});

exports.signup = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8)
    });
    await newUser.save((err, user) => {
      res.send({ message: "User was registered successfully!", user: user });
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.signin = async (req, res) => {
  try {
    await User.findOne({ email: req.body.email }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      const message = {
        from: 'madhunikaakula30@gmail.com', // Sender address
        to: user.email,         // List of recipients
        subject: 'Login message', // Subject line
        text: 'LoggedIn successfully!' // Plain text body
      };
      transport.sendMail(message, function (err, info) {
        if (err) {
          console.log(err)
        } else {
          res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: token
          });
        }
      });

    });
  }
  catch (err) {
    res.status(500).send(err);
  }
};

exports.forgotpassword = async (req, res) => {
  crypto.randomBytes(32, async (err, buffer) => {
    const token = buffer.toString('hex');
    try {
      const user = await User.findOne({ email: req.body.email });
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "Account Not found." });
      }
      user.resetToken = token;
      user.resetTokenExpiration = Date.now() + 360000;
      const result = await user.save();
      if (result) {
        const message = {
          from: 'madhunikaakula30@gmail.com', // Sender address
          to: req.body.email,         // List of recipients
          subject: 'Password Reset', // Subject line
          html: `
            <p>You have requested for reset password</p>
            <p>Click this link <a href="http://localhost:4200/login/${token}">Click here to reset your password</a></p>
            `     };
        transport.sendMail(message, (err, info) => {
          if (err) {
            console.log(err)
          } else {
            res.status(200).send({ id: user._id, username: user.username });
          }
        }
        )
      }
    }
    catch (err) {
      res.status(500).send(err);
    }
  })
}
exports.resetpassword = async (req, res) => {
  const newpassword = req.body.newpassword;
  const userId = req.body.userId;
  let resetUser;
  let hashedPassword;
  try {
    resetUser = await User.findOne({ _id: userId });
    hashedPassword = await bcrypt.hash(newpassword, 12);
    resetUser.password = hashedPassword;
    const result = await resetUser.save();
    if (result) {
      res.status(200).send({ message: "password reset successfully!" });
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
}





