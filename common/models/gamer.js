'use strict';
var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Gamer) {
  Gamer.sendVerificationEmail = function(context, user, next) {
    console.log('> user.afterRemote triggered');
    var options = {
      type: 'email',
      to: user.email,
      from: 'noreply@gotu-game.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: 'http://localhost:4200/verified',
      user: user,
    };
    user.verify(options, function(err, response) {
      if (err) {
        Gamer.deleteById(user.id);
        return next(err);
      }
      console.log('> verification email sent:', response);
      context.res.status(200).json(response);
    });
  };

  //send verification email after registration
  Gamer.afterRemote('create', Gamer.sendVerificationEmail);

  //resend verification email
  Gamer.afterRemoteError('create', function(context, next) {
    console.log('> afterRemoteError triggered');
    console.log(context.args.data.resend);
    Gamer.findOne({where: {email: context.args.data.email}},
      function(error, user) {
        if (error) {
          return next(error);
        }
        if (context.args.data.resend === true) {
          return Gamer.sendVerificationEmail(context, user, next);
        }
        return next(error);
      });
  });

  //send password reset link when requested
  Gamer.on('resetPasswordRequest', function(info) {
    var url = 'http://' + config.host + ':' + config.port + '/reset-password';
    var html = 'Click <a href="' + url + '?access_token=' +
        info.accessToken.id + '">here</a> to reset your password';

    Gamer.app.models.Email.send({
      to: info.email,
      from: info.email,
      subject: 'Password reset',
      html: html,
    }, function(err) {
      if (err) return console.log('> error sending password reset email');
      console.log('> sending password reset email to:', info.email);
    });
  });
};
