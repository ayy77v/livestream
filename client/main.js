import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor'

import './main.html';
Router.route('/timing', {
	name:'timing',
	template:'timing'
});

/// Routing
Router.route('/', {
    template: 'home'
});
 ///Routing