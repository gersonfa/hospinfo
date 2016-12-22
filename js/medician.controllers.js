(function(){
    angular.module('medician.controllers',['ui.calendar'])

    .controller('MedicianController', ['$scope', '$location', 'pacientService', 'calendaryService', function($scope, $location, pacientService, calendaryService){
        $scope.patient = {};
        $scope.patient.diagnostics = [];
        $scope.patients = [];
        $scope.events = [];
        $scope.diagnostic = {};

        function init(){
            $scope.patients = pacientService.getPatients();
            $scope.events = calendaryService.getDates();
        }

        init();

        $scope.eventSources = [$scope.events];

        $scope.uiConfig = {
            calendar : {
                lang : 'es'
            }
        }

        $scope.savePatient = function() {
            $scope.patient.diagnostics = [];
            pacientService.savePatient($scope.patient);
            $scope.patients = pacientService.getPatients();
            $location.path('/medician/patientslist')
        }
    }])


    .controller('MedicianPatient', ['$scope', '$location', 'pacientService', '$routeParams', function($scope, $location, pacientService, $routeParams){
        $scope.patient = {};
        var name = $routeParams.name;

        function init(){
            $scope.patient = pacientService.byName(name);
        }

        init();

        $scope.updatePatient = function(patient){
            pacientService.updatePatient(patient);
            $location.path('/recepcionist/patientslist');
        }

        $scope.addDiagnostic = function(diagnostic, patient){
            diagnostic.date = new Date();
            $scope.patient.diagnostics.push(diagnostic);
            pacientService.updatePatient(patient);
        }


    }])

})();