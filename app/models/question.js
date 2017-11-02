import DS from 'ember-data';

export default DS.Model.extend({
    pregunta: DS.attr('string'),
    test: DS.belongsTo('test'),
    options: DS.hasMany('answer')
});
