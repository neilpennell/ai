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
        type: String,
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
    },
    comments: {
        type: [Object],
        optional: true
    },
    "comments.$.date": {
        type: Date,
        autoValue: function () {
            return new Date;
        },
        optional: true
    },
    "comments.$.entry": {
        type: String,
        autoform: {
            afFieldInput: {
                type: "textarea",
                rows: 5
            }
        }

    },
    "comments.$.user_id": {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                value: function() {
                    return Meteor.userId();
                }
            }
        }
    },
    state: {
        type: String,
        optional: false, // need to changed to false
        autoform: {
            options: [
                {label: "Open", value: 'open'},
                {label: "Closed", value: 'close'}
            ]
        }
    }
});

ActionItems.attachSchema(Schemas.ActionItem);
