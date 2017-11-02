import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        let id = params.test;
        return this.store.find('test', id);
    }
});
