(function(){
    angular.module('recepcionist.controllers', [])

    .controller('RecepcionistController', ['$scope', '$location', '$filter', 'pacientService', 'calendaryService', function($scope, $location, $filter, pacientService, calendaryService){
        $scope.eventSources = [];
        $scope.events = [];
        $scope.patients = [];
        $scope.data = {};

        function init() {
            $scope.patients = pacientService.getPatients();
            $scope.events = calendaryService.getDates();
        }

        init();

        function normalizeDate(date){
            return new Date(date);
        }

        $scope.addDate = function(data){
            var date = {};
            date.title = 'Cita con ' + data.patient;
            date.start = new Date(data.start);
            data.start.setHours(data.hour);
            console.log(date.start);
            calendaryService.saveDate(date);
            $scope.events = calendaryService.getDates();
            $location.path('/recepcionist')
        }

        $scope.eventSources = [$scope.events];


    }])

    .controller('PatientRecepcionist', ['$scope', '$routeParams', '$location', 'pacientService', function($scope, $routeParams, $location, pacientService){
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
    }])
})();