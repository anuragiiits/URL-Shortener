//Code executes only at the client side
//Any JavaScript code here will automatically run for us
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import './main.html';       		//Importing the html file
import Header from '../imports/ui/components/header';
import LinkList from '../imports/ui/components/link_list';
import LinkCreate from '../imports/ui/components/link_create';

import { Links } from '../imports/api/links';

const App = ()=>{
  return (
  	<div>
    	<Header />
    	<LinkCreate />
    	<LinkList />
    </div>
  );
};

Meteor.startup(()=>{
  ReactDOM.render(<App/>, document.querySelector('.render-target'));
});