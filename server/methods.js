/**
 * Created by neilpennell on 1/3/15.
 */
Meteor.methods({
    adminMakeAdmin: function( userId ) {
            return Roles.addUsersToRoles( userId, ["admin"], Roles.GLOBAL_GROUP );
    }
});