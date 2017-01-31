'use strict'

const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

// router.use('/:id', (req, res, next) => {
//   jwt.verify(req.headers.token, 'secret', this.ignoreExpiration = true, (err, decoded) => err ? res.status(401).json({
//     title: 'Not Authenticated ya here',
//     error: err
//   }) : next())
// });

// CREATE
router.post("/:id", (req, res) => {
  req.body.body = req.sanitize(req.body.body);
  Profile.findOneAndUpdate(req.body, {
    upsert: true,
    new: true
  }, function() {

  });
});

router.post("/:id/title", (req, res) => {
  let token = req.headers.token
  console.log(req.params, "params title")
  console.log(req.body.body, "body")
  jwt.verify(token, 'secret', this.ignoreExpiration = true, (err, decoded) => {
    if (err) {
      console.log(err, "errrrrorrrrr title");
      res.status(401).json({
        title: 'Not Authenticated ya here',
        error: err
      })
    } else {
      console.log(decoded.user, "decoded in title");
      Profile.findOne({
        user: decoded.user._id
      }, (err, profile) => {
        console.log(profile, "profile found");
        if (err) {
          return res.status(500).json({
            title: 'Bad things happened',
            error: err
          });
        }
        profile.title = req.body.body
        profile.save((err, result) => {
          if (err) {
            return res.status(500).json({
              title: 'Bad things happened',
              error: err
            });
          }
          res.send(result)
        })
      });
    }
  })
})

router.post("/:id/about", (req, res) => {
  let token = req.headers.token
  jwt.verify(token, 'secret', this.ignoreExpiration = true, (err, decoded) => {
    if (err) {
      res.status(401).json({
        title: 'Not Authenticated ya here',
        error: err
      })
    } else {
      Profile.findOne({
        user: decoded.user._id
      }, (err, profile) => {
        if (err) {
          return res.status(500).json({
            title: 'Bad things happened',
            error: err
          });
        }
        profile.summary = req.body.body
        console.log(profile.summary, "summary asdfasd");
        profile.save((err, result) => {
          if (err) {
            return res.status(500).json({
              title: 'Bad things happened',
              error: err
            });
          }
          res.send(result)
        })
      });
    }
  })
})

router.post("/:id/education", (req, res) => {
  console.log("hit");
  let token = req.headers.token
  jwt.verify(token, 'secret', this.ignoreExpiration = 'true', (err, decoded) => {
    if (err) {
      res.status(401).json({
        title: 'Not Authenticated ya here',
        error: err
      })
    } else {
      Profile.findOne({
        user: decoded.user._id
      }, (err, profile) => {
        if (err) {
          return res.status(500).json({
            title: 'Bad things happened',
            error: err
          });
        }
        profile.education.push(req.body.body)
        profile.save((err, result) => {
          if (err) {
            return res.status(500).json({
              title: 'Bad things happened',
              error: err
            });
          }
          console.log(result, "result skill succuss was had");
          res.send(result)
        })
      });
    }
  })
})

router.post("/:id/experience", (req, res) => {
  console.log("hit");
  let token = req.headers.token
  jwt.verify(token, 'secret', this.ignoreExpiration = 'true', (err, decoded) => {
    if (err) {
      res.status(401).json({
        title: 'Not Authenticated ya here',
        error: err
      })
    } else {
      Profile.findOne({
        user: decoded.user._id
      }, (err, profile) => {
        if (err) {
          return res.status(500).json({
            title: 'Bad things happened',
            error: err
          });
        }
        profile.experience.push(req.body.body)
        profile.save((err, result) => {
          if (err) {
            return res.status(500).json({
              title: 'Bad things happened',
              error: err
            });
          }
          console.log(result, "result skill succuss was had");
          res.send(result)
        })
      });
    }
  })
})

router.post("/:id/skills", (req, res) => {
  console.log("hit");
  let token = req.headers.token
  jwt.verify(token, 'secret', this.ignoreExpiration = 'true', (err, decoded) => {
    if (err) {
      res.status(401).json({
        title: 'Not Authenticated ya here',
        error: err
      })
    } else {
      Profile.findOne({
        user: decoded.user._id
      }, (err, profile) => {
        if (err) {
          return res.status(500).json({
            title: 'Bad things happened',
            error: err
          });
        }
        console.log(req.body, "body in here");
        profile.skills.push(req.body.body)
        console.log(profile.skills, "skills");
        profile.save((err, result) => {
          if (err) {
            return res.status(500).json({
              title: 'Bad things happened',
              error: err
            });
          }
          console.log(result, "result skill succuss was had");
          res.send(result)
        })
      });
    }
  })
})

// DELETE
router.delete("/skills/:id", (req, res, next) => {
  console.log(req.params.id, "//skill here?");
  let decoded = jwt.decode(req.headers.token);
  Profile.findOne({
    user: decoded.user._id
  }, (err, profile) => {
    if (err) {
      return res.status(500).json({
        title: 'Bad things happened',
        error: err
      });
    }
    if (!profile) {
      return res.status(500).json({
        title: 'No Profile Found!',
        error: {
          message: 'Profile not found'
        }
      })
    }
    if (profile.user != decoded.user._id) {
      return res.status(401).json({
        title: 'This is not your profile',
        error: {
          message: 'Go make your own profile'
        }
      });
    }
    let index = profile.skills.indexOf(req.params.id)
    if (index != 1) {
      profile.skills.splice(index, 1);
      profile.save((err, result) => {
        if (err) {
          return res.status(500).json({
            title: 'Bad things happened',
            error: err
          });
        }
        res.status(200).json({
          message: 'Message was deleted',
          obj: result
        });
      });
    }
  });
});


router.get("/user", (req, res) => {
  console.log(req.params.token);
  console.log("I am here");
})

// SHOW
// router.get("/:id", function(req, res){
//     Blog.findById(req.params.id).populate("comments").exec(function(err, foundBlog){
//         if(err){
//             res.redirect("/blogs");
//         } else {
//             console.log(foundBlog);
//             res.render("blogs/show", {blog: foundBlog});
//         }
//     });
// });

// // EDIT
// router.get("/:id/edit", function(req, res) {
//     Blog.findById(req.params.id, function(err, foundBlog){
//         if(err){
//             res.render("/blogs");
//         } else {
//             res.render("blogs/edit", {blog: foundBlog});
//         }
//     });
// });

// UPDATE
router.put("/:id", function(req, res) {
  req.body.content = req.sanitize(req.body.content);
  Blog.findByIdAndUpdate(req.params.id, req.body, function(err, updatedBlog) {
    if (err) {
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs/" + req.params.id);
    }
  });
});

// DELETE
router.delete("/:id", function(req, res) {
  Blog.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/blogs");
    } else {
      res.redirect("/blogs");
    }
  });
});

module.exports = router;
