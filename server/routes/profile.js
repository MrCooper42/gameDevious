'use strict'

const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const jwt = require('jsonwebtoken');

// INDEX
// router.get("/", function(req, res){
//     Blog.find({}, function(err, blogs){
//         if(err){
//             console.log(err);
//         } else {
//             res.send({blogs: blogs});
//         }
//     });
// });

// NEW
// router.get("/new", function (req, res){
//    res.render("blogs/new");
// });

router.use('/:id', (req, res, next) => jwt.verify(req.query.token, 'secret', (err, decoded) => err ? res.status(401).json({
    title: 'Not Authenticated ya here',
    error: err
}) : next()));

// CREATE
router.post("/:id", function(req, res){
    req.body.body = req.sanitize(req.body.body);
    Profile.findOneAndUpdate(req.body, {upsert: true, new: true}, function(){

    });
});

router.get("/user", function(req, res) {
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
router.put("/:id", function(req, res){
    req.body.content = req.sanitize(req.body.content);
    Blog.findByIdAndUpdate(req.params.id, req.body, function(err, updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE
router.delete("/:id", function(req, res){
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
});

module.exports = router;
