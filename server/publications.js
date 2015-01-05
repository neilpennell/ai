Meteor.publish('user', function() {
    return Meteor.users.find(this.userId);
});

Meteor.publish('users', function() {
    return Meteor.users.find({}, {
        fields: {
            profile: 1,
            emails: 1
        }
    });
});
