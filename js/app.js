(function(){
    var app = angular.module('hospital', [
        'ngRoute',
        'ui.bootstrap',
        'hospital.services',
        'hospital.directives',
        'home.controllers',
        'medician.controllers',
        'nurse.controllers',
        'recepcionist.controllers',
        'patients.controllers'
    ]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'views/home/home.html',
                controller : 'HomeController'
            })
            .when('/login', {
                templateUrl : 'views/login/login.html',
                controller : 'LoginController'
            })
            .when('/medician',{
                templateUrl : 'views/medico/home.html',
                controller : 'MedicianController'
            })
            .when('/medician/addpatient', {
                templateUrl : 'views/medico/formPatient.html',
                controller : 'MedicianController'
            })
            .when('/medician/patientslist', {
                templateUrl : 'views/medico/patientsList.html',
                controller : 'MedicianController'
            })
            .when('/medician/:name', {
                templateUrl : 'views/medico/patientView.html',
                controller : 'MedicianPatient'
            })
            .when('/medician/add/diagnostic', {
                templateUrl : 'views/medico/formDiagnostic.html',
                controller : 'MedicianPatient'
            })
            .when('/medician/edit/:name', {
                templateUrl : 'views/medico/updatePatient.html',
                controller : 'MedicianPatient'
            })
            .when('/nurse', {
                templateUrl : 'views/enfermera/home.html',
                controller : 'NurseController'
            })
            .when('/nurse/:category', {
                templateUrl : 'views/enfermera/home.html',
                controller : 'NurseController'
            })
            .when('/recepcionist', {
                templateUrl : 'views/recepcionista/home.html',
                controller : 'RecepcionistController'
            })
            .when('/recepcionist/patientslist', {
                templateUrl : 'views/recepcionista/patientsList.html',
                controller : 'RecepcionistController'
            })
            .when('/recepcionist/adddate', {
                templateUrl : 'views/recepcionista/dateForm.html',
                controller : 'RecepcionistController'
            })
            .when('/recepcionist/:name', {
                templateUrl : 'views/recepcionista/patientView.html',
                controller : 'PatientRecepcionist'
            })
            .when('/recepcionist/edit/:name', {
                templateUrl : 'views/recepcionista/formPatient.html',
                controller : 'PatientRecepcionist'
            })
            .when('/patient/name', {
                templateUrl : 'views/patients/patientView.html',
                controller : 'PatientController'
            })
            .otherwise({
                redirectTo : '/'
            });
    }]);
})();