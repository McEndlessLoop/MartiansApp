/**
 * Created by hxsd on 2016/8/17.
 */
angular.module("myapp").controller("helperCtrl",function($scope,$http,$timeout,$ionicModal){
   $scope.datahelp={};
    $scope.yu={};
    $scope.toggle=false;
    $http.get("data/datahelp.json").success(function(data){
        if(data==""){
            $scope.toggle=true;
            $scope.datahelp.things=[];
        }else{
            $scope.toggle=false;
            $scope.datahelp.things=data;
        }
    });
    $scope.changeColor=function(registerForm){
        if(registerForm.$invalid){
            return "";
        }else{
            return 'active';
        }
    };
    $scope.tishi=false;
    $scope.submit=function(){
        $scope.yu.helpersub="";
        var new_cont={};
        var newday=new Date();
        //时间前填0
        function add0(time){
            if(time<10) return "0"+time;
            else return time;
        }
        new_cont.time=add0(newday.getHours())+":"+add0(newday.getMinutes());
        new_cont.date=newday.getFullYear()+"/"+newday.getMonth()+"/"+newday.getDate();
        new_cont.state="处理中";
        new_cont.evaluate="评价";
        new_cont.evaluate1=false;
        new_cont.class="";
        $scope.datahelp.things.push(new_cont);
        if( $scope.datahelp.things.length>0){
            $scope.toggle=false;
        }
        $scope.tishi=true;
        $timeout(function(){
            $scope.tishi=false;
        },1000)
    };
//    点击评价
  /*  $scope.showAlert = function () {
        var alertPopup = $ionicPopup.alert({
            template: '<div class="popshow"><span style="background:url("../images/star_out.png") no-repeat center;width:4.65rem;height:4.4rem;"></span><span></span><span></span><span></span></div><p><i>未解决</i><i>不满意</i><i>满意</i><i>非常满意</i></p>',
            buttons: [{text:"确定"}]
        });
        alertPopup.then(function (res) {
            console.log('请慎重考虑，反正我告诉过你了。');
        });
    };*/

/*出现五星评价弹窗*/
    // 构造模式对话框

    $ionicModal.fromTemplateUrl('view/popshow/star.html', {
        scope: $scope,       // 作用域使用父作用域
        //animation: 'slide-in-up'
//                        animation: 'slide-in-left'
//                        animation: 'slide-in-right'
                        animation: 'scale-in'
    }).then(function(modal) {
        $scope.modal = modal;
    });
    $scope.i=0;
    $scope.openModal = function($index) {
        $scope.modal.show();
        for(var i=0;i<$scope.totalStar.length;i++){
            $scope.totalStar[i].imgsrcoff="images/star_out.png";
        }
        $scope.pri='';
        $scope.i=$index;
    };
    $scope.closeModal = function() {
        $scope.datahelp.things[$scope.i].evaluate="已评价";
        $scope.modal.hide();
        $scope.datahelp.things[$scope.i].state="已处理";
        $scope.datahelp.things[$scope.i].evaluate1=true;
        $scope.datahelp.things[$scope.i].class="active1";
    };
    // 离开时清除model
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    /*星星评价*/
    $scope.totalStar=[
        {"com":"未解决","num":1,"imgsrcoff":"images/star_out.png"},
        {"com":"不满意","num":2,"imgsrcoff":"images/star_out.png"},
        {"com":"满意","num":3,"imgsrcoff":"images/star_out.png"},
        {"com":"非常满意","num":4,"imgsrcoff":"images/star_out.png"}
    ];
    $scope.pri='';
    $scope.moveStar=function(star){
        for(var i=0;i<$scope.totalStar.length;i++){
            if(star.num>=$scope.totalStar[i].num){
                $scope.totalStar[i].imgsrcoff="images/star_on.png";
            }else{
                $scope.totalStar[i].imgsrcoff="images/star_out.png";
            }
            if(star.num==$scope.totalStar[i].num){
                $scope.pri=$scope.totalStar[i].com;
            }
        }
    }



});