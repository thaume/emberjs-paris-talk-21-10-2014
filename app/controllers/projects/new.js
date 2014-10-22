import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    create: function () {
      // Of course, the model needs to be saved before starting the transition
      this.transitionToRoute('steps.description');
    }
  }

});
