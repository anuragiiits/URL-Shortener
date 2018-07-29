import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import validUrl from 'valid-url';
import { check, Match } from 'meteor/check';

Meteor.methods({
    'links.insert': function(url){		//'links.insert' is the method name here
    	check(url, Match.Where(url => validUrl.isUri(url)));    //throws an error if Match.Where is false and further lines willn't execute
    	
    	const token = Math.random().toString(36).slice(-5);
        Links.insert({url, token, clicks:0}); //equivalent to url:url, token:token, clicks:0
    }
});

export const Links = new Mongo.Collection('links');
