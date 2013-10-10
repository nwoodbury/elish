/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    //console.log('exports.requiresLogin');
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        //console.log('exports.user.requiresLogin');
        if (req.profile.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Article authorizations routing middleware
 */
exports.article = {
    hasAuthorization: function(req, res, next) {
        //console.log('exports.article.hasAuthorization');
        if (req.article.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * User authorizations routing middleware
 */
exports.singledoc = {
    hasAuthorization: function(req, res, next) {
        //console.log('exports.singledoc.hasAuthorization');
        if (req.singledoc.user.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};
