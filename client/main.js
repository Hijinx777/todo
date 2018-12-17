import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import './main.html';

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
