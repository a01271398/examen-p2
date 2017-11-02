import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    actions: {
        guardar(){
            let test = this.get('test');
            if(Ember.isBlank((this.get('test.nombre'))))
            {
                alert('No puede estar vacio');
            }
            test.save().then(()=>{
                alert('Se ha guardado');
            });
        },
        borrar(){
            this.get('test').destroyRecord();
            alert('Se ha borrado');
            this.sendAction('borrado');
        }
        
    }
});
