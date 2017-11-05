'use strict';

define('job-seeker/tests/adapters/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('job-seeker/tests/app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('job-seeker/tests/components/change-password-form.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/change-password-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/change-password-form.js should pass jshint.\ncomponents/change-password-form.js: line 16, col 31, Missing semicolon.\n\n1 error');
  });
});
define('job-seeker/tests/components/edit-job-form.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/edit-job-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/edit-job-form.js should pass jshint.\ncomponents/edit-job-form.js: line 17, col 8, Missing semicolon.\ncomponents/edit-job-form.js: line 18, col 47, Missing semicolon.\ncomponents/edit-job-form.js: line 21, col 32, Missing semicolon.\n\n3 errors');
  });
});
define('job-seeker/tests/components/email-input.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/email-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/email-input.js should pass jshint.');
  });
});
define('job-seeker/tests/components/hamburger-menu.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/hamburger-menu.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/hamburger-menu.js should pass jshint.');
  });
});
define('job-seeker/tests/components/job-input.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/job-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/job-input.js should pass jshint.');
  });
});
define('job-seeker/tests/components/my-application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/my-application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/my-application.js should pass jshint.');
  });
});
define('job-seeker/tests/components/navbar-header.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/navbar-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navbar-header.js should pass jshint.');
  });
});
define('job-seeker/tests/components/new-job-form.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/new-job-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/new-job-form.js should pass jshint.\ncomponents/new-job-form.js: line 22, col 39, Missing semicolon.\ncomponents/new-job-form.js: line 23, col 37, Missing semicolon.\ncomponents/new-job-form.js: line 24, col 35, Missing semicolon.\n\n3 errors');
  });
});
define('job-seeker/tests/components/password-confirmation-input.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/password-confirmation-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/password-confirmation-input.js should pass jshint.');
  });
});
define('job-seeker/tests/components/password-input.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/password-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/password-input.js should pass jshint.');
  });
});
define('job-seeker/tests/components/sign-in-form.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/sign-in-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sign-in-form.js should pass jshint.');
  });
});
define('job-seeker/tests/components/sign-up-form.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/sign-up-form.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/sign-up-form.js should pass jshint.');
  });
});
define('job-seeker/tests/components/text-input.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | components/text-input.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/text-input.js should pass jshint.');
  });
});
define('job-seeker/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('job-seeker/tests/helpers/destroy-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('job-seeker/tests/helpers/flash-message', ['exports', 'ember', 'ember-cli-flash/flash/object'], function (exports, _ember, _emberCliFlashFlashObject) {
  var K = _ember['default'].K;

  _emberCliFlashFlashObject['default'].reopen({ init: K });
});
define('job-seeker/tests/helpers/flash-message.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/flash-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/flash-message.js should pass jshint.');
  });
});
define('job-seeker/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'job-seeker/tests/helpers/start-app', 'job-seeker/tests/helpers/destroy-app'], function (exports, _qunit, _jobSeekerTestsHelpersStartApp, _jobSeekerTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _jobSeekerTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }

        (0, _jobSeekerTestsHelpersDestroyApp['default'])(this.application);
      }
    });
  };
});
define('job-seeker/tests/helpers/module-for-acceptance.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('job-seeker/tests/helpers/resolver', ['exports', 'job-seeker/resolver', 'job-seeker/config/environment'], function (exports, _jobSeekerResolver, _jobSeekerConfigEnvironment) {

  var resolver = _jobSeekerResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _jobSeekerConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jobSeekerConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('job-seeker/tests/helpers/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('job-seeker/tests/helpers/start-app', ['exports', 'ember', 'job-seeker/app', 'job-seeker/config/environment'], function (exports, _ember, _jobSeekerApp, _jobSeekerConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _jobSeekerConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _jobSeekerApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('job-seeker/tests/helpers/start-app.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('job-seeker/tests/helpers/x-select', ['exports', 'ember', 'jquery'], function (exports, _ember, _jquery) {
  exports.select = select;

  /**
   * Picks an option from the select and sets it to be `selected` in the DOM.
   *
   * @method select
   * @param {string|<jQuery>} selector - selector for the select to pick from.
   * @param {string} texts - text of the option you are picking
   */

  function select(selector) {
    for (var _len = arguments.length, texts = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      texts[_key - 1] = arguments[_key];
    }

    var $select = selector instanceof _jquery['default'] ? selector : _ember['default'].$(selector);
    var $options = $select.find('option');

    if (!$options.length) {
      throw 'No options found in ' + selector;
    }

    $options.each(function () {
      var _this = this;

      var $option = _ember['default'].$(this);

      _ember['default'].run(function () {
        _this.selected = texts.some(function (text) {
          // uppercase both texts so the helper isn't case sensastive.
          var optionText = $option.text().trim().toUpperCase();

          return optionText === text.toUpperCase();
        });

        if (_this.selected) {
          $option.prop('selected', true).trigger('change');
        }
      });
    });
  }
});
define('job-seeker/tests/initializers/text-field.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | initializers/text-field.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/text-field.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/change-password-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('change-password-form', 'Integration | Component | change password form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'vzv/UbXi',
      'block': '{"statements":[["append",["unknown",["change-password-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'W+lopJXu',
      'block': '{"statements":[["text","\\n"],["block",["change-password-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/change-password-form-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/change-password-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/change-password-form-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/edit-job-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('edit-job-form', 'Integration | Component | edit job form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'bgvGn3xl',
      'block': '{"statements":[["append",["unknown",["edit-job-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'k2dR4Lbf',
      'block': '{"statements":[["text","\\n"],["block",["edit-job-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/edit-job-form-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/edit-job-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/edit-job-form-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/email-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('email-input', 'Integration | Component | email input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '6ZlF6XfM',
      'block': '{"statements":[["append",["unknown",["email-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'YM0cFao3',
      'block': '{"statements":[["text","\\n"],["block",["email-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/email-input-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/email-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/email-input-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/hamburger-menu-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('hamburger-menu', 'Integration | Component | hamburger menu', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': '6jCz0Egi',
      'block': '{"statements":[["append",["unknown",["hamburger-menu"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '+8WkWzqb',
      'block': '{"statements":[["text","\\n"],["block",["hamburger-menu"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/hamburger-menu-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/hamburger-menu-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/hamburger-menu-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/job-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('job-input', 'Integration | Component | job input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'MQW0lNRQ',
      'block': '{"statements":[["append",["unknown",["job-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'OP+IpHmZ',
      'block': '{"statements":[["text","\\n"],["block",["job-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/job-input-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/job-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/job-input-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/my-application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('my-application', 'Integration | Component | my application', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'KxgFQCKC',
      'block': '{"statements":[["append",["unknown",["my-application"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'kguz0DrD',
      'block': '{"statements":[["text","\\n"],["block",["my-application"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/my-application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/my-application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/my-application-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/navbar-header-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('navbar-header', 'Integration | Component | navbar header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'jsAxs+PS',
      'block': '{"statements":[["append",["unknown",["navbar-header"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'UCOelAVk',
      'block': '{"statements":[["text","\\n"],["block",["navbar-header"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/navbar-header-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/navbar-header-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/navbar-header-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/new-job-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('new-job-form', 'Integration | Component | new job form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'txks+koT',
      'block': '{"statements":[["append",["unknown",["new-job-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'fjrMyhZy',
      'block': '{"statements":[["text","\\n"],["block",["new-job-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/new-job-form-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/new-job-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/new-job-form-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/password-confirmation-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('password-confirmation-input', 'Integration | Component | password confirmation input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'iIL5Yl+z',
      'block': '{"statements":[["append",["unknown",["password-confirmation-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'tkVExn4c',
      'block': '{"statements":[["text","\\n"],["block",["password-confirmation-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/password-confirmation-input-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/password-confirmation-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/password-confirmation-input-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/password-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('password-input', 'Integration | Component | password input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'qKa4/eNs',
      'block': '{"statements":[["append",["unknown",["password-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'zLQB4Ctb',
      'block': '{"statements":[["text","\\n"],["block",["password-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/password-input-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/password-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/password-input-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/sign-in-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('sign-in-form', 'Integration | Component | sign in form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'iWgfKNlK',
      'block': '{"statements":[["append",["unknown",["sign-in-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '0kWL1c/7',
      'block': '{"statements":[["text","\\n"],["block",["sign-in-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/sign-in-form-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/sign-in-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sign-in-form-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/sign-up-form-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('sign-up-form', 'Integration | Component | sign up form', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'oWx+CZzU',
      'block': '{"statements":[["append",["unknown",["sign-up-form"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': '2eGtA79t',
      'block': '{"statements":[["text","\\n"],["block",["sign-up-form"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/sign-up-form-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/sign-up-form-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/sign-up-form-test.js should pass jshint.');
  });
});
define('job-seeker/tests/integration/components/text-input-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('text-input', 'Integration | Component | text input', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': 'yK9JxUdq',
      'block': '{"statements":[["append",["unknown",["text-input"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': 'ILOPTrNA',
      'block': '{"statements":[["text","\\n"],["block",["text-input"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('job-seeker/tests/integration/components/text-input-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | integration/components/text-input-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/text-input-test.js should pass jshint.');
  });
});
define('job-seeker/tests/models/job.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | models/job.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/job.js should pass jshint.');
  });
});
define('job-seeker/tests/models/user.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('job-seeker/tests/resolver.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('job-seeker/tests/router.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('job-seeker/tests/routes/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('job-seeker/tests/routes/change-password.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/change-password.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/change-password.js should pass jshint.\nroutes/change-password.js: line 25, col 32, Missing semicolon.\n\n1 error');
  });
});
define('job-seeker/tests/routes/job.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/job.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/job.js should pass jshint.\nroutes/job.js: line 5, col 62, Missing semicolon.\n\n1 error');
  });
});
define('job-seeker/tests/routes/jobs-edit.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/jobs-edit.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/jobs-edit.js should pass jshint.\nroutes/jobs-edit.js: line 6, col 62, Missing semicolon.\nroutes/jobs-edit.js: line 12, col 43, Missing semicolon.\nroutes/jobs-edit.js: line 13, col 39, Missing semicolon.\nroutes/jobs-edit.js: line 14, col 35, Missing semicolon.\nroutes/jobs-edit.js: line 15, col 41, Missing semicolon.\nroutes/jobs-edit.js: line 16, col 51, Missing semicolon.\nroutes/jobs-edit.js: line 17, col 55, Missing semicolon.\nroutes/jobs-edit.js: line 18, col 57, Missing semicolon.\nroutes/jobs-edit.js: line 19, col 57, Missing semicolon.\nroutes/jobs-edit.js: line 20, col 39, Missing semicolon.\nroutes/jobs-edit.js: line 22, col 22, Missing semicolon.\nroutes/jobs-edit.js: line 25, col 78, Missing semicolon.\nroutes/jobs-edit.js: line 29, col 70, Missing semicolon.\nroutes/jobs-edit.js: line 30, col 11, Missing semicolon.\nroutes/jobs-edit.js: line 10, col 11, \'newJob\' is defined but never used.\nroutes/jobs-edit.js: line 33, col 36, Missing semicolon.\n\n16 errors');
  });
});
define('job-seeker/tests/routes/jobs-new.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/jobs-new.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/jobs-new.js should pass jshint.\nroutes/jobs-new.js: line 6, col 62, Missing semicolon.\nroutes/jobs-new.js: line 16, col 9, Missing semicolon.\n\n2 errors');
  });
});
define('job-seeker/tests/routes/jobs.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/jobs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/jobs.js should pass jshint.\nroutes/jobs.js: line 14, col 9, Missing semicolon.\n\n1 error');
  });
});
define('job-seeker/tests/routes/sign-in.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/sign-in.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sign-in.js should pass jshint.');
  });
});
define('job-seeker/tests/routes/sign-up.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/sign-up.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/sign-up.js should pass jshint.');
  });
});
define('job-seeker/tests/routes/users.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | routes/users.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/users.js should pass jshint.');
  });
});
define('job-seeker/tests/serializers/application.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass jshint.');
  });
});
define('job-seeker/tests/services/ajax.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | services/ajax.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/ajax.js should pass jshint.');
  });
});
define('job-seeker/tests/services/auth.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | services/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/auth.js should pass jshint.');
  });
});
define('job-seeker/tests/storages/auth.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | storages/auth.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'storages/auth.js should pass jshint.');
  });
});
define('job-seeker/tests/test-helper', ['exports', 'job-seeker/tests/helpers/resolver', 'job-seeker/tests/helpers/flash-message', 'ember-qunit'], function (exports, _jobSeekerTestsHelpersResolver, _jobSeekerTestsHelpersFlashMessage, _emberQunit) {

  (0, _emberQunit.setResolver)(_jobSeekerTestsHelpersResolver['default']);
});
define('job-seeker/tests/test-helper.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/adapters/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('job-seeker/tests/unit/adapters/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/adapters/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/application-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/adapters/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('adapter:auth', 'Unit | Adapter | auth', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });
});
define('job-seeker/tests/unit/adapters/auth-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/adapters/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/adapters/auth-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/initializers/text-field-test', ['exports', 'ember', 'job-seeker/initializers/text-field', 'qunit'], function (exports, _ember, _jobSeekerInitializersTextField, _qunit) {

  var application = undefined;

  (0, _qunit.module)('Unit | Initializer | text field', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    _jobSeekerInitializersTextField['default'].initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });
});
define('job-seeker/tests/unit/initializers/text-field-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/initializers/text-field-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/text-field-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/models/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Model | application', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('job-seeker/tests/unit/models/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/models/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/application-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/models/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('auth', 'Unit | Model | auth', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('job-seeker/tests/unit/models/auth-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/models/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/auth-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/models/job-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('job', 'Unit | Model | job', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('job-seeker/tests/unit/models/job-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/models/job-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/job-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/models/user-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('user', 'Unit | Model | user', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('job-seeker/tests/unit/models/user-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/models/user-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:application', 'Unit | Route | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/application-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/change-password-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:change-password', 'Unit | Route | change password', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/change-password-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/change-password-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/change-password-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/job-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:job', 'Unit | Route | job', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/job-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/job-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/job-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/jobs-edit-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:jobs-edit', 'Unit | Route | jobs edit', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/jobs-edit-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/jobs-edit-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/jobs-edit-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/jobs-new-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:jobs-new', 'Unit | Route | jobs new', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/jobs-new-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/jobs-new-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/jobs-new-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/jobs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:jobs', 'Unit | Route | jobs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/jobs-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/jobs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/jobs-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/sign-in-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-in', 'Unit | Route | sign in', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/sign-in-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/sign-in-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-in-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/sign-up-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:sign-up', 'Unit | Route | sign up', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/sign-up-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/sign-up-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/sign-up-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/routes/users-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:users', 'Unit | Route | users', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('job-seeker/tests/unit/routes/users-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/routes/users-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/users-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/serializers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('job-seeker/tests/unit/serializers/application-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/serializers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/application-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/serializers/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('auth', 'Unit | Serializer | auth', {
    // Specify the other units that are required for this test.
    needs: ['serializer:auth']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('job-seeker/tests/unit/serializers/auth-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/serializers/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/auth-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/services/ajax-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:ajax', 'Unit | Service | ajax', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('job-seeker/tests/unit/services/ajax-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/services/ajax-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/ajax-test.js should pass jshint.');
  });
});
define('job-seeker/tests/unit/services/auth-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:auth', 'Unit | Service | auth', {
    // Specify the other units that are required for this test.
    // needs: ['service:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('job-seeker/tests/unit/services/auth-test.jshint.lint-test', [], function () {
  'use strict';

  QUnit.module('JSHint | unit/services/auth-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/auth-test.js should pass jshint.');
  });
});
require('job-seeker/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
