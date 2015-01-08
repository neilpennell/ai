/**
 * Created by neilpennell on 1/5/15.
 */

DataLoad = new Mongo.Collection("dataload");
dl = DataLoad.find().count() > 0;
if(!dl){
    DataLoad.insert({data_load: true});

    ActionItems.insert({subject: "subject 1"});
    ActionItems.insert({subject: "subject 2"});
    ActionItems.insert({subject: "subject 3"});
    ActionItems.insert({subject: "subject 4"});
    ActionItems.insert({subject: "subject 5"});
}
