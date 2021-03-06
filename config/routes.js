module.exports = function(app, passport, auth) {

    //=========================================================================
    //  Users
    //=========================================================================

    //User Routes
    var users = require('../app/controllers/users');
    app.get('/signin', users.signin);
    app.get('/signup', users.signup);
    app.get('/signout', users.signout);

    //Setting up the users api
    app.post('/users', users.create);

    app.post('/users/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Invalid email or password.'
    }), users.session);

    // Public User Routes
    app.get('/users', users.all);
    app.get('/users/me', users.me);
    app.get('/users/profile', users.profile, auth.requiresLogin);
    app.get('/users/:userId', users.show);
    app.put('/users/:userId', users.update, auth.requiresLogin,
            auth.user.hasAuthorization); //Insecure?

    //=========================================================================
    //  Auth
    //=========================================================================

    //Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the github oauth routes
    app.get('/auth/github', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/github/callback', passport.authenticate('github', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the twitter oauth routes
    app.get('/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.signin);

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Setting the google oauth routes
    app.get('/auth/google', passport.authenticate('google', {
        failureRedirect: '/signin',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ]
    }), users.signin);

    app.get('/auth/google/callback', passport.authenticate('google', {
        failureRedirect: '/signin'
    }), users.authCallback);

    //Finish with setting up the userId param
    app.param('userId', users.user);

    //=========================================================================
    //  Articles
    //=========================================================================

    var articles = require('../app/controllers/articles');
    app.get('/articles', articles.all);
    app.post('/articles', auth.requiresLogin, articles.create);
    app.get('/articles/:articleId', articles.show);
    app.put('/articles/:articleId', auth.requiresLogin,
            auth.article.hasAuthorization, articles.update);
    app.del('/articles/:articleId', auth.requiresLogin,
            auth.article.hasAuthorization, articles.destroy);

    //Finish with setting up the articleId param
    app.param('articleId', articles.article);

    //=========================================================================
    //  Singledocs
    //=========================================================================

    var singledocs = require('../app/controllers/singledocs');
    app.get('/docs', singledocs.all);
    app.post('/docs', auth.requiresLogin, singledocs.create);
    app.get('/docs/:singledocId', auth.requiresLogin,
            auth.singledoc.hasAuthorization, singledocs.show);
    app.put('/docs/:singledocId', auth.requiresLogin,
            auth.singledoc.hasAuthorization, singledocs.update);
    app.del('/docs/:singledocId', auth.requiresLogin,
            auth.singledoc.hasAuthorization, singledocs.destroy);

    // Finish with setting up the singledocId param
    app.param('singledocId', singledocs.singledoc);

    //=========================================================================
    //  Agents
    //=========================================================================

    var agents = require('../app/controllers/agents');
    app.get('/agents', agents.all);
    app.post('/agents', auth.requiresLogin, agents.create);
    app.get('/agents/:agentId', auth.requiresLogin, agents.show);
    app.put('/agents/:agentId', auth.requiresLogin, agents.update);
    app.del('/agents/:agentId', auth.requiresLogin, agents.destroy);

    // Finish with setting up the singledocId param
    app.param('agentId', agents.agent);


    //=========================================================================
    //  Home
    //=========================================================================

    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);
};
