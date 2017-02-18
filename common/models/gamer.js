'use strict';
var config = require('../../server/config.json');
var path = require('path');

module.exports = function(Gamer) {
    //send verification email after registration
  Gamer.afterRemote('create', function(context, user, next) {
    console.log('> user.afterRemote triggered');

    var options = {
      type: 'email',
      to: user.email,
      from: 'noreply@gotu-game.com',
      subject: 'Thanks for registering.',
      template: path.resolve(__dirname, '../../server/views/verify.ejs'),
      redirect: '/verified',
      user: user,
    };

    user.verify(options, function(err, response) {
      if (err) {
        Gamer.deleteById(user.id);
        return next(err);
      }

      console.log('> verification email sent:', response);

      context.res.render('response', {
        title: 'Signed up successfully',
        content: 'Please check your email and click on the verification link ' +
            'before logging in.',
        redirectTo: '/',
        redirectToLinkText: 'Log in',
      });
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
