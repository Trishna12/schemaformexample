
app.controller('SampleFormController', function($scope, SharedService, $location, $state) {


       if ($location.path() === '/yourdetails') {
           console.log('in output page');
           $scope.outputdata = SharedService.getSharedData();
       }
            
        $scope.sampleSchema = {
            type: "object",
            properties: {
              firstName: {  
                            type: "string", 
                            minLength: 2, 
                            title: "First-Name",
                             maxLength: 10,
                             "validationMessage": {
                                "202": "First Name can have 2-10 chars only"
                             }
                         },
              lastName: { type: "string", minLength: 2, title: "Last-Name", maxLength: 10},
              location: {
                type: "string",
                enum: ['PDC1','PDC2','PDC3','PDC4']
              },
              "phone": {
                        "type": "string",
                        "title": "Phone Number",  
                        "required": true,
                        "pattern": "^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4}$",
                        "validationMessage": {
                            "202": "Please enter the area code and phone number"
                        }
                    },
             }
        };
        
        $scope.sampleForm = [
              {
                "key": "firstName"
              }
              ,{
                "key": "lastName"
              }
              , {
                  "key" : "location" , 
              }
              , {
                  "key" : "phone" , 
              }
        ];

        $scope.model = {};
        
        $scope.submitform = function(form) {
            console.log('Hit Submit Button');
            console.log($scope.model['firstName'] + ' --- ' + $scope.model['lastName'] + ' --- ' +
                       $scope.model['location'] + ' --- ' + $scope.model['phone']);

            var dataObj = {};
            dataObj.firstName = $scope.model['firstName'];
            dataObj.lastName = $scope.model['lastName'];
            dataObj.location = $scope.model['location'];
            dataObj.phone = $scope.model['phone'];
            if (undefined !== dataObj.firstName) {
                SharedService.setSharedData(dataObj);
                $state.go('/output');
            }

        }

});