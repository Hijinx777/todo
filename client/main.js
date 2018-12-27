import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import './main.html';

Meteor.startup(function(){ $.getScript('../js/jquery.countTo.js', function(){}); });



Template.body.helpers({

/*
  notes: [
    { text: 'This is task 1' },
    { text: 'This is task 2' },
    { text: 'This is task 3' },
  ]
*/

  notes() {
    return Notes.find({});
  },

  });
