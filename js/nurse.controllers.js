(function(){
    angular.module('nurse.controllers', [])

    .controller('NurseController', ['$scope', '$routeParams', '$location', 'pacientService', function($scope, $routeParams, $location, pacientService){
        $scope.patients = [];
        var area = $routeParams.name;
        $scope.area;

        function init(){
            $scope.patients = pacientService.getPatients();
        }

        $scope.byArea = function(area){
            if(area === 'Todos'){
                $scope.patients = pacientService.getPatients();
            } else {
                $scope.patients = pacientService.byArea(area);
            }
        }

        init();
    }])
})();