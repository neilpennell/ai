/**
 * Created by neilpennell on 1/3/15.
 */
Meteor.methods({
    adminMakeAdmin: function (userId) {
        return Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    },
    updateActionItem: function (ai_id, fields) {
        console.log(fields);
        return ActionItems.update(ai_id, {$set: fields});
    }
});
