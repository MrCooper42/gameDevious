// config/auth.js
// http://localhost:3000
// https://gamedevious.herokuapp.com
module.exports = {

    'facebookAuth' : {
        'clientID'      : '558382341031650',
        'clientSecret'  : '1146ecca95d01c0acba10d602572a1fa',
        'callbackURL'   : 'https://gamedevious.herokuapp.com/facebook/callback',
        'profileFields'   : ['email', 'profileUrl', 'displayName']
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'l9xiiGu8Pp6ylVa3D6JEbTgLN',
        'ijgjNhhe4CXjhJtnL4pxGv8GK0PO0UFaWvyCemTOepm9P6tXRW'       : 'https://gamedevious.herokuapp.com/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '886005662095-ra7p5vj6cthsu5qn8dqfrqrpjheal9cb.apps.googleusercontent.com',
        'clientSecret'  : '3j_ORF5-jhopelPdwUCwyGoF',
        'callbackURL'   : 'https://gamedevious.herokuapp.com/auth/google/callback'
    },

    'linkedinAuth' : {
      'clientID': '78bkfdwvw7vfwa',
      'clientSecret': 'YJxAfAY9EMp3CIJj',
      'callbackURL': 'https://gamedevious.herokuapp.com/linkedin/callback'
    },

    'steamAuth': {
      'apiKey': '45FD9B8B05977BCC29469DB862A6079E',
      'returnURL': 'https://gamedevious.herokuapp.com/steam/callback',
      'realm': 'https://gamedevious.herokuapp.com/'
    },

    'githubAuth': {
      'clientID': 'bd65031dc69e29f81a86',
      'clientSecret': 'ce62064995fa5322be486266c9c1e2ab0c2a4e82',
      'callbackURL': 'https://gamedevious.herokuapp.com/github/callback'
    }
    // https://github.com/settings/applications/new


};
