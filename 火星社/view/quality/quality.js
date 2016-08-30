/**
 * Created by hxsd on 2016/08/19.
 */
angular.module("myapp").controller("qualityCtrl",function($scope,$http){
    $scope.data  = [
        {time:"2016/7/31",grade:"+2",state:"入选五星作品"},
        {time:"2016/8/05",grade:"-0.5",state:"上午迟到"},
        {time:"2016/8/11",grade:"-1",state:"下午缺勤"}
    ];
});