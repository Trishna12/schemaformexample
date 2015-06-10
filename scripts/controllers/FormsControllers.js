/**
 * Created by tulasi.nadukula on 6/10/2015.
 */

app.controller('FormsController', function($scope, SharedService) {

    $scope.outputdata = SharedService.getSharedData();

});