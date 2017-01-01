'use strict'

const express = require('express');
const router = express.Router();

const User = require('../models/user');
const Message = require('../models/message');

router.get('/', (req, res, next) => {

    Message.find()
        .populate('user', 'firstName')
        .exec((err, messages) => {
            if (err) {
                return res.status(500).json({
                    title: 'Bad things happened',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Success',
                messages: messages
            })
        });
});

// es6 for fun
// router.use('/', (req, res, next) => jwt.verify(req.query.token, 'secret', (err, decoded) => err ? res.status(401).json({
//     title: 'Not Authenticated ya here',
//     error: err
// }) : next()));

router.post('/', (req, res, next) => {
    let decoded = jwt.decode(req.query.token);
    User.findById(decoded.user._id, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: 'Bad things happened',
                error: err
            });
        }
        let message = new Message({
            content: req.body.content,
            user: user
        });
        message.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'Bad things happened',
                    error: err
                });
            }
            user.messages.push(result);
            user.save();
            res.status(201).json({
                message: 'Message was saved',
                obj: result
            });
        });
    });
});

router.patch('/:id', (req, res, next) => {
    let decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, (err, message) => {
        if (err) {
            return res.status(500).json({
                title: 'No message found!',
                error: {
                    message: 'Message not found'
                }
            });
        }
        if (message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Get your own message yo\'',
                error: {
                    message: 'Not Yo\' message'
                }
            });
        }
        message.content = req.body.content;
        message.save((err, result) => {
            if (err) {
                return res.status(500).json({
                    title: 'Bad things happened',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Message was updated',
                obj: result
            });
        });
    });
});

router.delete('/:id', (req, res, next) => {
    let decoded = jwt.decode(req.query.token);
    Message.findById(req.params.id, (err, message) => {
        if (err) {
            return res.status(500).json({
                title: 'Errz ya hear',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {
                    message: 'Message not found'
                }
            })
        }
        if (message.user != decoded.user._id) {
            console.log(message.user, "message user");
            console.log(decoded.user._id, "decoded user");
            return res.status(401).json({
                title: 'Get your own message yo\'',
                error: {
                    message: 'Not Yo\' message'
                }
            });
        }
        message.remove((err, result) => {
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
    });
})

module.exports = router;
