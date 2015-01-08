/**
 * Created by npennell on 12/28/14.
 */



Router.configure({
    layoutTemplate: 'ApplicationLayout',
    loadingTemplate: 'loading'
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

Router.route('/', {
    name: 'home',
    subscriptions: function() {
        // returning a subscription handle or an array of subscription handles
        // adds them to the wait list.
        return [ Meteor.subscribe('user'),
                    Meteor.subscribe('users'),
                    Meteor.subscribe('userData'),
                    Meteor.subscribe('all_action_items')]
    }
});