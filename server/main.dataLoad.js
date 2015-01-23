/**
 * Created by neilpennell on 1/5/15.
 */

DataLoad = new Mongo.Collection("dataload");
dl = DataLoad.find().count() > 0;
if(!dl){
    DataLoad.insert({data_load: true});

    ActionItems.insert({subject: "subject 1", state: 'open', comments: [{entry: "comment 1-1"},{entry: "comment 1-2"}] } );
    ActionItems.insert({subject: "subject 2", state: 'open', comments: [{entry: "comment 2-1"},{entry: "comment 2-2"}]});
    ActionItems.insert({subject: "subject 3", state: 'open', comments: [{entry: "comment 3-1"},{entry: "comment 3-2"}]});
    ActionItems.insert({subject: "subject 4", state: 'open', comments: [{entry: "comment 4-1"},{entry: "comment 4-2"}]});
    ActionItems.insert({subject: "subject 5", state: 'open', comments: [{entry: "comment 5-1"},{entry: "comment 5-2"}]});
}
