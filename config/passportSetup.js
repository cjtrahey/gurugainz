const passport = require('passport');
const GitHubStrategy = require('passport-github')

// github strategy setup pulled from passport.js documentation
var GitHubStrategy = require('passport-github').Strategy;

// acquiring the keys from a hidden location
const keys = require('./keys');

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));