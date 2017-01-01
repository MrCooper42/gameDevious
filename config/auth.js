// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '558382341031650',
        'clientSecret'  : '1146ecca95d01c0acba10d602572a1fa',
        'callbackURL'   : 'http://localhost:3000/auth/facebook/callback'
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
      'clientID': '297db3b662272a09e86d',
      'clientSecret': '0b0ef730279ab971607a356795b5a4058dff1586',
      'callbackURL': 'http://127.0.0.1:3000/auth/github/callback'
    }


};
