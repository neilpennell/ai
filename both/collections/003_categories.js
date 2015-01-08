/**
 * Created by npennell on 12/29/14.
 */

Categories = new Mongo.Collection("categories");

Schemas.Category = new SimpleSchema({
    name: {
        type: String,
        optional: false
    }
});

Categories.attachSchema(Schemas.Category);