/**
 * Created by hxsd on 2016/8/17.
 */
var myapp=angular.module("myapp",["ionic"]);
//配置路由
myapp.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //andriod
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    //
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"view/tabs/tabs.html"
    });
    //按钮
    //主页----home页面  洛
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"view/home/home.html"/*,controller:"homeCtrl"*/}}
    });
    //----------------
    $stateProvider.state("tabs.workBox",{
        url:"/workBox",
        views:{"tab-home":{templateUrl:"view/workBox/workBox.html"/*,controller:"homeCtrl"*/}}
    });
    //------------------
    $stateProvider.state("tabs.workBoxDetail",{
        url:"/workBox",
        views:{"tab-home":{templateUrl:"view/workBoxDetail/workBoxDetail.html",controller:"workBoxDetailCtrl"}}
    });

    //-------activity--活动通知页面------------
    $stateProvider.state("tabs.activity",{
        url:"/activity",
        views:{"tab-home":{templateUrl:"view/activity/activity.html"/*,controller:"homeCtrl"*/}}
    });

    //-------activitivts--活动通知页面------------
    $stateProvider.state("tabs.activitits",{
        url:"/activitits",
        views:{"tab-home":{templateUrl:"view/activitits/activitits.html",controller:"activititsCtrl"}}
    });

    //-------myWork--------------
    $stateProvider.state("tabs.myWork",{
        url:"/myWork",
        views:{"tab-home":{templateUrl:"view/myWork/myWork.html",controller:"myWorkCtrl"}}
    });

    //-------mainWork--------------
    $stateProvider.state("tabs.mainWork",{
        url:"/mainWork",
        views:{"tab-home":{templateUrl:"view/mainWork/mainWork.html",controller:"mainWorkCtrl"}}
    });

    //-------search--------------
    $stateProvider.state("tabs.search",{
        url:"/search",
        views:{"tab-home":{templateUrl:"view/search/search.html"/*,controller:"mainWorkCtrl"*/}}
    });
    /*宋*/

    $stateProvider.state("tabs.helper",{
        url:"/helper",
        views:{"tab-helper":{templateUrl:"view/helper/helper.html",controller:"helperCtrl"}}
    });


    //
    //李
    $stateProvider.state("set",{
        url:"/set",
        templateUrl:"view/set/set.html",
        controller:"setCtrl"

    });
    $stateProvider.state("changePwd",{
        url:"/changePwd",
        templateUrl:"view/changePwd/changePwd.html"
    });
    $stateProvider.state("login",{
        url:"/login",
        templateUrl:"view/login/login.html"
    });
    $stateProvider.state("forgetPwd",{
        url:"/forgetPwd",
        templateUrl:"view/forgetPwd/forgetPwd.html",
        controller:"forgetPwdCtrl"

    });
    $stateProvider.state("login2",{
        url:"/login2",
        templateUrl:"view/login2/login2.html",
        controller:"login2Ctrl"
    });
    /*谭*/
    $stateProvider.state("person",{
        url:"/person",
        templateUrl:"view/person/person.html",
        controller:"personCtrl"
    });
    $stateProvider.state("quality",{
        url:"/quality",
        templateUrl:"view/quality/quality.html",
        controller:"qualityCtrl"
    });
    $stateProvider.state("homework",{
        url:"/homework",
        templateUrl:"view/homework/homework.html",
        controller:"homeCtrl"
    });
    /*毛*/
    /*社区*/
    $stateProvider.state("tabs.community",{
        abstract:true,
        url:"/community",
        views:{"tab-community":{templateUrl:"view/community/community.html"}}
    });
    /*GGTop*/
    $stateProvider.state("tabs.community.goTop",{
        url:"/goTop",
        views:{"tabs-goTop":{
            templateUrl:"view/goTop/goTop.html"
        }}
    });
    /*GGTop详情页*/
    $stateProvider.state("tabs.community.goTopDet",{
        url:"/goTopDet",
        views:{"tabs-goTop":{
            templateUrl:"view/goTop/goTopDet.html"
        }}
    });
    /*活动*/
    $stateProvider.state("tabs.community.activity",{
        url:"/activity",
        views:{"tabs-activity":{
            templateUrl:"view/activity/activity.html",
            controller:"activityCtrl"
        }}
    });
    /*活动详情页*/
    $stateProvider.state("tabs.community.activityDet",{
        url:"/activityDet",
        views:{"tabs-activity":{
            templateUrl:"view/activity/activityDet.html",
            controller:"activityCtrl"
        }}
    });
    /*校园通知*/
    $stateProvider.state("tabs.community.college",{
        url:"/college",
        views:{"tabs-college":{
            templateUrl:"view/college/college.html"
        }}
    });
    /*校园通知详情页*/
    $stateProvider.state("tabs.community.collegeInfor",{
        url:"/collegeInfor",
        views:{"tabs-college":{
            templateUrl:"view/college/collegeInfor.html"
        }}
    });
    /*邮件*/
    $stateProvider.state("tabs.community.mail",{
        url:"/mail",
        views:{"tabs-mail":{
            templateUrl:"view/mail/mail.html"
        }}
    });

    //
    $urlRouterProvider.otherwise("/tabs/home");
    $ionicConfigProvider.backButton.text("");
    $ionicConfigProvider.backButton.previousTitleText("");



    //下下一级
});

myapp.directive('hideTabs', function($rootScope) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes) {
            scope.$on('$ionicView.beforeEnter', function() {
                scope.$watch(attributes.hideTabs, function(value){
                    $rootScope.hideTabs = value;
                });
            });
            scope.$on('$ionicView.beforeLeave', function() {
                $rootScope.hideTabs = false;
            });
        }
    };
});
/*控制器*/
/*控制器*/
myapp.controller("communityCtrl",function($scope,$http) {
    $scope.products=[
        {"img":"images/com_bg_02.jpg","title":"创意在哪里？","content":"#海报设计"},
        {"img":"images/com_bg_03.jpg","title":"奇幻森林之旅","content":"#影视特效"},
        {"img":"images/com_bg_04.jpg","title":"我们一路向前","content":"#行业经验"}
    ];
    //     下拉刷新
    $scope.infinite=function(){
        $http.get("data/products.json").success(function(data){
            Array.prototype.push.apply($scope.products,data);
        }).finally(function(){
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };
});
myapp.controller("radioController",function($scope,$http,$ionicScrollDelegate) {

    $scope.radios = [
        {"title":"2016春季招聘会","category":"#新闻","time":"16-2-13","content":"2016年春季招聘会将于2016年4月12日在火星时...."},
        {"title":"火星时代","category":"#校园","time":"16-2-11","content":"开学典礼火星时代，我们将为你提供优质的教学环...."},
        {"title":"获奖信息","category":"#新闻","time":"16-2-10","content":"火星时代的1601期UI设计专业3班，李雷同学成功...."},
        {"title":"2016春季招聘会","category":"#就业","time":"16-2-09","content":"2016年春季招聘会将于2016年4月12日在火星时...."},
        {"title":"visim","category":"#校园","time":"16-2-08","content":"影子的爱人新书到店，作者于1月1日到我校，新书...."}
    ];

    // 下拉刷新
    $scope.refresh = function(){
        // 向服务器端请求新的数据，替换掉现有的数据
        $http.get("data/radio.json").success(function(radio){
            $scope.radios = radio;
        }).finally(function(){
            // 通知框架，刷新结束，停止显示图标
            $scope.$broadcast("scroll.refreshComplete");
        });
    };

    // 无限滚动
    $scope.loadMore = function(){
        // 向服务器端请求一页新的数据，追加到现有数据之后
        $http.get("data/radio.json").success(function(radio){
            // 使用Array的原型方法push; 等价于  $scope.products.push(data)
            Array.prototype.push.apply($scope.radios,radio);
        }).finally(function(){
            // 通知框架，加载结束，停止显示图标
            $scope.$broadcast("scroll.infiniteScrollComplete");
        });
    };

    $scope.toTop = function(){
        // 将窗口滚动到顶部
        $ionicScrollDelegate.scrollTop(true);
    };
});

