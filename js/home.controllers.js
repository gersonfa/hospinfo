(function(){
    angular.module('home.controllers', ['ui.bootstrap'])

    .controller('HomeController', ['$scope', function($scope){

    }])

    .controller('LoginController', ['$scope', '$location', function($scope, $location){
        $scope.user = {};
        

        $scope.login = function(user){
            if(user.username === 'medico'){
                $scope.username = 'medico';
                $location.path('/medician')
            } else if(user.username === 'enfermera'){
                $scope.username = 'enfermera';
                $location.path('/nurse')
            } else {
                $scope.username = 'recepcionista';
                $location.path('/recepcionist')
            }
        }
    }])
})();