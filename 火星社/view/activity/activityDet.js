/**
 * Created by hxsd on 2016/8/19.
 */
angular.module("myapp").controller("activityCtrl",function($scope,$ionicModal,$interval,$ionicPopup){
    /*分享到*/
    $ionicModal.fromTemplateUrl('view/popshow/share.html', {
        scope: $scope,       // 作用域使用父作用域
        //animation: 'slide-in-up'
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModalshare = function() {
        $scope.modal.show();
    };

    $scope.closeModalshare = function() {
        $scope.modal.hide();
    };
    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });

    /*meactive*/
    $scope.myDate = new Date();
    $scope.oYear = $scope.myDate.getFullYear().toString().slice(2);
    $scope.month = ($scope.myDate.getMonth()+1).toString();
    $scope.day = $scope.myDate.getDay().toString();
    $scope.min = $scope.myDate.getMinutes();
    $scope.run=function(){
        $scope.isShow = !false;
    }
});