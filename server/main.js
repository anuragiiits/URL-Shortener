import { Meteor } from 'meteor/meteor';
import { Links } from '../imports/api/links';
import { WebApp } from 'meteor/webapp';
import ConnectRoute from 'connect-route';

Meteor.startup(() => {
  Meteor.publish('links',function(){
    return Links.find({});
  });
});

// executed when user visits valid links like
// 'localhost:3000/abcd'
function onRouteRedirect(req, res, next){
  // extract the token from the url and try to find the
  //  matching url in the links collection
  const link = Links.findOne({token : req.params.token});
  if(link){
    // if we find a link object, redirect the user to long URL
    Links.update(link, {$inc: {clicks:1}});
    res.writeHead(307,{'Location':link.url});
    res.end();
  }
  else{
    // if we don't find the link object, redirect the user to normal React page
    next();
  }
}

// localhost:3000   -- NO MATCH
// localhost:3000/absc/xasdccv    -- NO MATCH
// localhost:3000/abcd     -- MATCH
const middleware = ConnectRoute(function(router){
  router.get('/:token', onRouteRedirect);
})

WebApp.connectHandlers.use(middleware);