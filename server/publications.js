Meteor.publish('user', function() {
    return Meteor.users.find(this.userId);
});

Meteor.publish('users', function() {
    return Meteor.users.find({}, {
        fields: {
            profile: 1,
            emails: 1,
            roles: 1,
            username: 1
        }
    });
});

Meteor.publish('all_action_items', function() {
    return ActionItems.find();
});