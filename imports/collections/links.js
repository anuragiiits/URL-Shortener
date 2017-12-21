import { Mongo } from 'meteor/mongo';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'links.insert': function(url){
        /*if(validUrl.isUri(url)!=undefined)
            console.log("Its working",url);
        else
            console.log("Not working");*/
        check(url, Match.Where(url => validUrl.isUri(url)));    //throws an error if its false and further lines won't execute
        
        const token = Math.random().toString(36).slice(-5);
        Links.insert({url, token, clicks:0}); //equivalent to url:url, token:token, clicks:0
    }
});
export const Links = new Mongo.Collection('links');