import DS from 'ember-data';

export default DS.Model.extend({
    correct: DS.attr('boolean'),
    question: DS.belongsTo('question')
});
