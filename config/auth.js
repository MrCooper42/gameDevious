// config/auth.js
// http://localhost:3000
module.exports = {

    'facebookAuth' : {
        'clientID'      : '558382341031650',
        'clientSecret'  : '1146ecca95d01c0acba10d602572a1fa',
        'callbackURL'   : 'http://localhost:3000/facebook/callback',
        'profileFields'   : ['email', 'profileUrl', 'displayName']
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'l9xiiGu8Pp6ylVa3D6JEbTgLN',
        'ijgjNhhe4CXjhJtnL4pxGv8GK0PO0UFaWvyCemTOepm9P6tXRW'       : 'http://localhost:3000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '886005662095-ra7p5vj6cthsu5qn8dqfrqrpjheal9cb.apps.googleusercontent.com',
        'clientSecret'  : '3j_ORF5-jhopelPdwUCwyGoF',
        'callbackURL'   : 'http://localhost:3000/auth/google/callback'
    },

    'linkedinAuth' : {
      'consumerKey': '78bkfdwvw7vfwa',
      'consumerSecret': 'YJxAfAY9EMp3CIJj',
      'callbackURL': 'http://localhost:3000/auth/linkedin/callback'
    },

    'steamAuth': {
      'apiKey': '45FD9B8B05977BCC29469DB862A6079E',
      'returnURL': 'http://localhost:3000/auth/steam/callback',
      'realm': 'http://localhost:3000/'
    },

    'githubAuth': {
      'clientID': 'bd65031dc69e29f81a86',
      'clientSecret': 'ce62064995fa5322be486266c9c1e2ab0c2a4e82',
      'callbackURL': 'http://localhost:3000/github/callback'
    }
    // https://github.com/settings/applications/new


};
