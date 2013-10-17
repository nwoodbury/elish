/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Singledoc = mongoose.model('Singledoc'),
    _ = require('underscore');

/**
 * Find doc by id
 */
exports.singledoc = function(req, res, next, id) {
    Singledoc.load(id, function(err, singledoc) {
        if (err) return next(err);
        if (!singledoc) return next(new Error('Failed to load singledoc ' + 
                                              id));
        req.singledoc = singledoc;
        next();
    });
};

/**
 * Create a doc
 */
exports.create = function(req, res) {
    var singledoc = new Singledoc(req.body);
    singledoc.user = req.user;

    singledoc.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                singledoc: singledoc
            });
        }
        else {
            res.jsonp(singledoc);
        }
    });
};

/**
 * Update a doc
 */
exports.update = function(req, res) {
    var singledoc = req.singledoc;

    singledoc = _.extend(singledoc, req.body);

    singledoc.save(function(err) {
        res.jsonp(singledoc);
    });
};

/**
 * Delete a doc
 */
exports.destroy = function(req, res) {
    var singledoc = req.singledoc;

    singledoc.remove(function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        }
        else {
            res.jsonp(singledoc);
        }
    });
};

/**
 * Show a doc
 */
exports.show = function(req, res) {
    res.jsonp(req.singledoc);
};

/**
 * List of docs
 */
exports.all = function(req, res) {
    Singledoc.find().sort('-created').populate('user', 'username').exec(
        function(err, singledocs) {
            if(err) {
                res.render('error', {
                    status: 500
                });
            }
            else {
                res.jsonp(singledocs);
            }
    });
};
