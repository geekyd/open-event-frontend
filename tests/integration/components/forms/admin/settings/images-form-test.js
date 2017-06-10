import { test } from 'ember-qunit';
import moduleForComponent from 'open-event-frontend/tests/helpers/component-helper';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/admin/settings/images-form', 'Integration | Component | forms/admin/settings/images form', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{forms/admin/settings/system-form}}`);

  assert.equal(this.$().text().trim(), 'template block text');
});
