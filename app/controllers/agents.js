//=============================================================================
//  Module Dependencies
//=============================================================================

var mongoose = require('mongoose'),
    Agent = mongoose.model('Agent'),
    _ = require('underscore');

//=============================================================================
//  Exports
//=============================================================================

/**
 * Find agent by id
 */
exports.agent = function(req, res, next, id) {
    Agent.load(id, function(err, agent) {
        if (err) {
            return next(err);
        }
        if (!agent) {
            return next(new Error('Failed to load agent ' + id));
        }
        req.agent = agent;
        next();
    });
};

/**
 * Create an agent
 */
exports.create = function(req, res) {
    var agent = new Agent(req.body);

    agent.save(function(err) {
        if (err) {
            return res.render('error', {status: 500});
        }
        else {
            res.jsonp(agent);
        }
    });
};

/**
 * Update an agent
 */
exports.update = function(req, res) {
    var agent = req.agent;

    agent = _.extend(agent, req.body);

    agent.save(function(/*err*/) {
        res.jsonp(agent);
    });
};

/**
 * Delete an agent
 */
exports.destroy = function(req, res) {
    var agent = req.agent;

    agent.remove(function(err) {
        if (err) {
            res.render('error', {status: 500});
        }
        else {
            res.jsonp(agent);
        }
    });
};

/**
 * Show an agent
 */
exports.show = function(req, res) {
    res.jsonp(req.agent);
};

/**
 * List agents
 */
exports.all = function(req, res) {
    Agent.find().sort('-created').exec(function(err, agents) {
        if (err) {
            res.render('error', {status: 500});
        }
        else {
            res.jsonp(agents);
        }
    });
};
