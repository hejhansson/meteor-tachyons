Package.describe({
  name: 'hasse:tachyons',
  version: '0.0.1',
  summary: 'Tachyons packaged for Meteor',
  git: 'https://github.com/hejhansson/meteor-tachyons.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('lib/css/tachyons.min.css', 'client');
});
