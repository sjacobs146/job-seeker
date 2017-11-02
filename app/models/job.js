import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.attr('string'),
  title: DS.attr('string'),
  url: DS.attr('string'),
  dateApplied: DS.attr('date'),
  status: DS.attr('string'),
  recruiterName: DS.attr('string'),
  recruiterEmail: DS.attr('string'),
  recruiterPhone: DS.attr('string'),
  notes: DS.attr('string')
});
