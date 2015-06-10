
var app = angular.module('sampleApp', ['ui.router', 'schemaForm']);
    
app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('/', {
            url : '/',
            templateUrl : 'scripts/views/sampleForm.html'
         })
        .state('/output', {
            url : '/yourdetails',
            templateUrl : 'scripts/views/outputForm.html'
        });
   
    $urlRouterProvider.otherwise('/');
});
