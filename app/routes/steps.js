import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    update: function () {
      this.controllerFor('steps').send('update');
    }
  }

});
