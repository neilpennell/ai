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

Template.home_list_item_detail.helpers({
});

Template.home_list_item.events({
    "click #list_item": function (event) {
        event.preventDefault();
        Session.set("select_list_item", this._id);
    }
});

Template.home_list_item_detail.events({
    "submit #ai_edit": function(event) {
		event.preventDefault();
        var new_subject = $('input[name="subject"]').val();
        var new_owner = $('select[name="current_owner_id"]').val();
        console.log('new_owner = '+new_owner);
        Meteor.call("updateActionItem",
            Session.get('select_list_item'),
            {subject: new_subject, current_owner_id: new_owner},
            function (error, result) { console.log(error); console.log(result); });
        //return false;
    }
});

