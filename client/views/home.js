/**
 * Created by neilpennell on 1/3/15.
 */

Template.home.helpers({
    action_item_list: function() {
        return ActionItems.find();
    },
    selected_action_item: function() {
        return ActionItems.findOne({_id: Session.get('select_list_item')});
    }
});

Template.home_list_item.events({
    "click #list_item": function () {
        Session.set("select_list_item", this._id);
    }
});

Template.home_list_item_detail.events({
    "submit #ai_edit": function(event) {
        var new_subject = $('input[id="subject"]').val();
        Meteor.call("updateActionItem", Session.get('select_list_item'), new_subject);
    }
});

