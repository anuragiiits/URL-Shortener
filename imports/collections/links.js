import {Mongo} from 'meteor/mongo';

Meteor.methods({
    'links.insert': function(url){
        console.log('trying to save', url);
    }
});
export const Links = new Mongo.Collection('links');