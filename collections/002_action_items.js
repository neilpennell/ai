/**
 * Created by npennell on 12/29/14.
 */

Schemas.Person = new SimpleSchema({});

ActionItems = new Mongo.Collection("action_items");

Schemas.ActionItem = new SimpleSchema({
    subject: {
        type: String,
        optional: false
    },
    created_on: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },
    updated_on: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date};
            } else {
                this.unset();
            }
        },
        optional: true
    },
    current_owner_id: {
        type: Schemas.User,
        optional: true
    }
});

ActionItems.attachSchema(Schemas.ActionItem);
