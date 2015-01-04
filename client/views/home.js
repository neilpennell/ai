/**
 * Created by neilpennell on 1/3/15.
 */

Template.home.helpers({
    userCount: function () {
        return Meteor.users.find().count();
    },
    users: function () {
        return Meteor.users.find();
    }
});

Template.home_userInfo.helpers({
    currentRoles: function(){
        return Roles.getRolesForUser(Meteor.user());
    }
})