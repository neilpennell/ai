/**
 * Created by npennell on 12/29/14.
 */

Schemas.Person = new SimpleSchema({});

ActionItems = new Mongo.Collection("action_items");

Schemas.ActionItem = new SimpleSchema({
    _id: {
        type: String,
        optional: true
    },
    subject: {
        type: String,
        optional: false
    },
    created_on: {
        type: Date,
        autoValue: function () {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        },
        //denyInsert: true,
        optional: true
    },
    updated_on: {
        type: Date,
        autoValue: function () {
            return new Date;
        },
        optional: true
    },
    // this is a reference to Meteor.user._id
    current_owner_id: {
        type: [Schemas.User],
        optional: true,
        autoform: {
            options: function () {
                var list = [];
                Meteor.users.find().forEach(function (user) {
                    list.push({label: user.username, value: user._id})
                });
                return list;
            }
        }
    }
});

ActionItems.attachSchema(Schemas.ActionItem);
