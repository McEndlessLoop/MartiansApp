myapp.controller("workBoxDetailCtrl",function($scope,$ionicModal){
    $scope.number=20;
    $scope.pic="images/dianzan1.png";
    var toggle=true;
    $scope.addOne=function(){
        if(toggle){
            $scope.number++;
            $scope.pic="images/dianzan2.png";
        }else{
            $scope.number--;
            $scope.pic="images/dianzan1.png";
        }
        toggle=!toggle;
    };
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

