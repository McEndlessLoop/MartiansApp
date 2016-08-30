/**
 * Created by hxsd on 2016/08/18.
 */
angular.module("myapp").controller("login2Ctrl",function($scope,$location){
    $scope.link=function(registerForm){
        if(registerForm.$invalid){
            $location.path("login");
            //return tabs.home;
        }else{
            $location.path("home");
            //return tabs.home;
        }
    }
});