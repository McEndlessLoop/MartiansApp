/**
 * Created by hxsd on 2016/08/17.
 */
angular.module("myapp").controller("setCtrl",function($scope,$ionicPopup,$state) {
    $scope.showConfirm = function() {
        $ionicPopup.confirm({
            title: '<p class="out">请确认退出</p>',
            buttons: [
                {text: '<b class="outNo">取消</b>'},
                {
                    text: '<b class="outOk">确定</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        $state.go("login2");
                    }
                }
            ]
        });
    };
    $scope.showAlert = function () {
        $ionicPopup.alert({
        title: '<p class="up">已是最新版本，无需升级</p>',
            buttons: [{text:"确定"}]
        });
    };
    $scope.showAlertTx = function () {
        $ionicPopup.alert({
            title:"<img class='photo' src='images/icons_03.jpg'><span class='photoText'>从相册中选择</span><br><img class='photo' src='images/icons_07.jpg'><span class='photoText1'>拍照</span>",
            buttons:[{text:"取消"}]

        });
    };

});