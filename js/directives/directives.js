(function(){
    angular.module('hospital.directives', [])

    .directive('patientsList', function(){
        return {
            restrict: 'E',
            templateUrl : 'views/patients/patientsList.html'
        }
    })
})();