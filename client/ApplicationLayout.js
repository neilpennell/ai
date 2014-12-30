/**
 * Created by npennell on 12/28/14.
 */

Template.navbar.helpers({
    logged_in: function() {
        return Meteor.user() != null;
    },
    logged_in_user: function() {
        return Meteor.user().emails[0].address;
    }
});

Template.login.events({
    'submit #sign-in-form': function(e) {
        e.preventDefault();
        email = $('input[name="user_email"]').val();
        password = $('input[name="user_password"]').val();
        Meteor.loginWithPassword(email, password, afterLogin);
    }
});
Template.logout.events({
    'submit #sign-out-form': function(e) {
        e.preventDefault();
        Meteor.logout(afterLogout);
    }
});

function afterLogin(){
    Router.go('/');
};
function afterLogout(){
    Router.go('/');
};
