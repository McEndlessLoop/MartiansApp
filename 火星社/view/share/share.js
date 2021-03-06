/**
 * Created by hxsd on 2016/8/19.
 */
angular.module("myapp").controller("shareCtrl",function($scope,$ionicModal){
    /*分享到*/
    $ionicModal.fromTemplateUrl('view/share/share.html',{
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
});