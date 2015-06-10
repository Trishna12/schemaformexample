/**
 * Created by tulasi.nadukula on 6/10/2015.
 */
(function() {
    "use strict";

    app.directive("sampleDirective", Forms);
    /* @ngInject */
    function Forms() {
        return {
            restrict: 'EA',
            template: '<div class="span4 well clearfix"><div class="pull-right" ng-transclude></div></div>',
            replace: true,
            transclude: true

            /*require: 'ngModel',
            restrict: "E",
            scope: false,
            transclude: true,
            templateUrl: "scripts/views/forms.directive.html",
            controller: "FormsController",
            controllerAs: "vm"*/
        }
    }})();