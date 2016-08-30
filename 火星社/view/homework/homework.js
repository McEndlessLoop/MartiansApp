/**
 * Created by hxsd on 2016/8/25.
 */
angular.module("myapp").controller("homeCtrl",function($scope,$ionicModal,$timeout,$state){
    // 构造模式对话框

    $ionicModal.fromTemplateUrl('view/popshow/share.html', {
        scope: $scope,       // 作用域使用父作用域
        //animation: 'slide-in-up'
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModalshare = function() {
        $scope.modal.hide();
    };
    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    /*保存*/
    $scope.panduan=false;
    $scope.showTxt=function(){
        $scope.panduan=true;
        $timeout(function(){
            $scope.panduan=false;
        },1000)

    };
    $scope.Backhome=function(){
        $state.go("tabs.home");
        $scope.modal.hide();
    }

});