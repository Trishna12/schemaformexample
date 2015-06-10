/**
 * Created by tulasi.nadukula on 6/10/2015.
 */
/**
 * Created by tulasi.nadukula on 6/10/2015.
 */
(function() {
    "use strict";

    app.directive("formDirective", Forms);
    /* @ngInject */
    function Forms() {
        return {
            restrict: "E",
            /*scope: false,
            transclude: false,*/
            templateUrl: "scripts/views/outputForm.html",
            controller: "SampleFormController",
            controllerAs: "vm"
        }
    }})();