require.config({
    baseUrl: 'app',
    paths: {
        angular         :   'components/angular/angular',
        angularRoute    :   'components/angular/angular-route',
        jquery          :   'components/jquery-1.11.1',
        lodash          :   'components/lodash/lodash'
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        angularRoute: ['angular'],
        jquery: {
            exports: 'jquery'
        }
    }
});