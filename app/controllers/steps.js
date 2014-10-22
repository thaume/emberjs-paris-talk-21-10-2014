import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    update: function () {
      var urlFragment = this.get('target.url').split('/').get('lastObject');

      if ( urlFragment === 'description' ) {
        return this.transitionToRoute('steps.participants');
      }

      return this.transitionToRoute('steps.last');
    }
  }

});
