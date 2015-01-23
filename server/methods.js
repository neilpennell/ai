/**
 * Created by neilpennell on 1/3/15.
 */
Meteor.methods({
    adminMakeAdmin: function (userId) {
        return Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    },
    updateActionItem: function(doc, modifier, documentId) {
        return ActionItems.update(documentId, modifier);
    },
    newActionItem: function(doc, modifier, documentId) {
        return ActionItems.insert(doc);
    },
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    }

});
