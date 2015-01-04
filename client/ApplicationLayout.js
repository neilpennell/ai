/**
 * Created by npennell on 12/28/14.
 */

Template.navbar.helpers({
    logged_in: function () {
        return Meteor.user() != null;
    },
    logged_in_user: function () {
        return Meteor.user().emails[0].address;
    }
});

Template.login.helpers({
    adminUserDefined: function() {
        return Meteor.users.find().count() > 0;
    },
    userCount: function() {
        return Meteor.users.find().count();
    },
    users: function() {
        return Meteor.users.find();
    }
})


Template.logout.events({
    'submit #sign-out-form': function (e) {
        e.preventDefault();
        Meteor.logout(afterLogout);
    }
});
Template.login.events({
    'submit #sign-in-form': function (e) {
        e.preventDefault();
        email = $('input[name="user_email"]').val();
        password = $('input[name="user_password"]').val();
        Meteor.loginWithPassword(email, password, afterLogin);
    },
    'submit #create-admin-form': function (e) {
        var options, user;
        e.preventDefault();

        user_name = $('input[name="user_name"]').val();
        email = $('input[name="user_email"]').val();
        password = $('input[name="user_password"]').val();

        first_name = $('input[name="first_name"]').val();
        last_name = $('input[name="last_name"]').val();
        options = {
            username: user_name,
            email: email,
            password: password
            //,
            //profile: {
            //    first_name: first_name,
            //    last_name: last_name
            //}
        };
        Accounts.createUser(options, createAdmin);
    }
});

function createAdmin(error){
    Meteor.loginWithPassword(email, password);
    user = Meteor.users.findOne();
    console.log(user);
    Meteor.call('adminMakeAdmin', user._id);
    afterLogin();
};

function afterLogin() {
    Router.go('/');
};
function afterLogout() {
    Router.go('/');
};
