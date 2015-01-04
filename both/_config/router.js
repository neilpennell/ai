/**
 * Created by npennell on 12/28/14.
 */



Router.configure({
    layoutTemplate: 'ApplicationLayout'
});

Router.onBeforeAction(function () {
    // all properties available in the route function
    // are also available here such as this.params

    // if the user is not logged in, render the Login template
    if (!Meteor.userId()) {
        this.render('Login');
    }
    else {
        // otherwise don't hold up the rest of hooks or our route/action function
        // from running
        this.next();
    }
})
;

Router.route('/', function () {
    this.render('home');
});