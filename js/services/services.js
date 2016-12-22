(function(){
    angular.module('hospital.services', [])

    .factory('pacientService', ['$http', '$q', '$window', function($http, $q, $window){
        
        var localstorage = $window.localStorage;

        function savePatient(patient){
            var patients = getPatients();

            patients.push(patient);
            localstorage.setItem('patients', JSON.stringify(patients));
        }

        function getPatients(){
            var patients = localstorage.getItem('patients')

            if(!patients) {
                patients = [];
            } else {
                patients = JSON.parse(patients);
            }
            return patients;
        }

        function updatePatient(patientUpdate){
            var patients = getPatients();
            var newPatients = patients.map(function(patient){
                if(patient.name === patientUpdate.name){
                    patient = patientUpdate;
                    console.log(patient);
                }
                return patient
            })

            localStorage.setItem('patients', JSON.stringify(newPatients));
        }

        function byName(name) {
            var patients = getPatients();
            var patient = patients.filter(function(p){
                if(p.name === name){
                    return p
                }
            })
            return patient[0];
        }

        function byArea(area){
            var patients = getPatients();
            patients = patients.filter(function(patient){
                if(patient.area === area){
                    return patient;
                }
            })
            return patients
        }
        
        return {
            savePatient : savePatient,
            getPatients : getPatients,
            updatePatient : updatePatient, 
            byName : byName,
            byArea : byArea
        }
    }])

    .factory('calendaryService', ['$http', '$window', function($http, $window){
        var db = $window.localStorage;

        function saveDate(date){
            var dates = getDates();

            dates.push(date);
            db.setItem('dates', JSON.stringify(dates));
        }

        function getDates(){
            var dates = db.getItem('dates');

            if(!dates){
                dates = [];
            } else {
                dates = JSON.parse(dates);
                
            }

            return dates;
        }

        return {
            saveDate : saveDate,
            getDates : getDates
        }
    }])
})();