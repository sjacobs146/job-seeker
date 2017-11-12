import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('welcome-msg', 'Integration | Component | welcome msg', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{welcome-msg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#welcome-msg}}
      template block text
    {{/welcome-msg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
