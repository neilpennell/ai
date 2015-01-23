/**
 * Created by neilpennell on 1/3/15.
 */

Template.home.helpers({
    action_item_list: function() {
        var subset = [];
        if (Session.get('isOpenChecked') ) subset.push('open');
        if (Session.get('isClosedChecked')) subset.push('close');
        var query = { state: { $in: subset } };

        if (ActionItems.findOne(query)) Session.set("select_list_item",ActionItems.findOne(query)._id);
        return ActionItems.find(query);
    },
    selected_action_item: function() {
        return ActionItems.findOne({_id: Session.get('select_list_item')});
    }
});

Template.home_list_item.helpers({
    isSelected: function() {
        var text = "";
        if (this._id == Session.get('select_list_item'))
            text = "btn btn-sm btn-info";
        else
            text = "btn-default btn btn-sm ";
        return text;
    }
});

Template.home_list_item_detail_edit.helpers({
    itemExistToEdit: function() {
        var subset = [];
        if (Session.get('isOpenChecked') ) subset.push('open');
        if (Session.get('isClosedChecked')) subset.push('close');
        var query = { state: { $in: subset } };
        return ActionItems.find(query).count() > 0 ? true : false;
    }
});

Template.home_state_filter.helpers({
    isOpenChecked: function(){
        return Session.get('isOpenChecked') ? "checked" : "";
    },
    isClosedChecked: function () {
        return Session.get('isClosedChecked') ? "checked" : "";
    }
});

Template.home_state_filter.events({
    "click #isClosedChecked": function(event) {
        Session.set('isClosedChecked', !Session.get('isClosedChecked'));
        return false;
    },
    "click #isOpenChecked": function(event) {
        console.log(Session.get('isOpenChecked'));
        Session.set('isOpenChecked', !Session.get('isOpenChecked'));
        return false;
    }

})


Template.home_list_item.events({
    "click #list_item": function (event) {
        event.preventDefault();
        Session.set("select_list_item", this._id);
    }
});



