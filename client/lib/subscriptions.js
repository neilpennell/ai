/**
 * Created by neilpennell on 1/3/15.
 */
Tracker.autorun(function() {
    Meteor.subscribe('user');
    Meteor.subscribe('users');
    Meteor.subscribe('userData');
});