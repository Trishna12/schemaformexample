/**
 * Created by tulasi.nadukula on 6/10/2015.
 */
app.service('SharedService', function() {

    var sharedService = {}, sharedData = {};

    var sharedService = {
        setSharedData: setSharedData,
        getSharedData: getSharedData
    };

    return sharedService;

        //***********Function Definitions*********
        function setSharedData (data) {
            sharedData = data;
        };

        function getSharedData() {
            return sharedData;
        };
});