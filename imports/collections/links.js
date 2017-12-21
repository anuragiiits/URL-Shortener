import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'links.insert': function(url){
        /*if(validUrl.isUri(url)!=undefined)
            console.log("Its working",url);
        else
            console.log("Not working");*/
        check(url, Match.Where(url => validUrl.isUri(url)));
        
    }
});
export const Links = new Mongo.Collection('links');