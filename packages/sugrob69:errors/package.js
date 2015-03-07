Package.describe({
  name: 'sugrob69:errors',
  summary: ' Механизм отображения ошибок приложения пользователю ',
  version: '1.0.0'
});

Package.onUse(function(api, where) {
  api.versionsFrom('1.0.2.1');
  
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  
  if (api.export) 
    api.export('Errors');
});
