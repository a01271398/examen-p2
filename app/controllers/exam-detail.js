import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        transition(){
            this.transitionToRoute('tests');
        },
        nuevaPregunta(params){
            let nuevo = this.store.createRecord('question', {
                // test: params.id;
            });
        }
    }
});
