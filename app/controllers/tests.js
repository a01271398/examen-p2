import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        nuevo(){
            let nuevo = this.store.createRecord('test', {});
            this.transitionToRoute('exam-detail', nuevo.id);
        }
    }
});
