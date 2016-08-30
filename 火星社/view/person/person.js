/**
 * Created by hxsd on 2016/8/24.
 */
angular.module("myapp").controller("personCtrl",function($scope){
    /*画布*/
    var main=document.getElementById('person').getElementsByClassName('pic_1')[0];

    var can=document.getElementById('grade');
    var oGc=can.getContext('2d');
    /*数据*/
    var myscore=["B","A-","A","B+","D"];
    var score=["F","D","C-","C","C+","B-","B","B+","A-","A","A+"];
    var scoreY=["100","90","80","70","60","50","40","30","20","10","0"];
    var week=["第一周","第二周","第三周","第四周","第五周"];

    var blockwidth=can.width/5;
    var scaleHeight=1.1;
    var paddingTop=30;
    can.height=scaleHeight*100+paddingTop;
    oGc.font="12px Arial";
    oGc.fillStyle="#17ca92"
    /**/
    oGc.beginPath();
    oGc.moveTo(-100,can.height);
    for(var i=0;i<myscore.length;i++){
        oGc.lineTo(blockwidth/2+i*blockwidth,scoreY[score.indexOf(myscore[i])]*scaleHeight);
        oGc.fillText(myscore[i],blockwidth/2+i*blockwidth,scoreY[score.indexOf(myscore[i])]*scaleHeight-2)

    }
    oGc.lineTo(can.width+100,can.height);
    oGc.strokeStyle="#8ed1d7";
    oGc.stroke();

    var grd=oGc.createLinearGradient(0,0,blockwidth*(myscore.length-1),scaleHeight*100+10);
    grd.addColorStop(0,"#2dc69a");
    grd.addColorStop(1,"#75c7ed");
    oGc.fillStyle=grd;
    oGc.fill();

    //底部星期背景矩形
    oGc.fillStyle="#2ac598";
    oGc.fillRect(0,can.height-25,can.width,25)

    //底部星期文字
    oGc.font="10px 宋体";
    oGc.fillStyle="#fff";
    for(var i=0;i<myscore.length;i++){
        oGc.fillText(week[i],blockwidth/2+i*blockwidth-10,can.height-8)
    }
/*贝塞尔*/
    var fit_can=document.getElementById('fit');
    var fit_oGc=fit_can.getContext('2d');
    fit_oGc.beginPath();
    fit_oGc.moveTo(0,260);
    fit_oGc.bezierCurveTo(0,-100,50,100,700,0);
    var grd2=fit_oGc.createLinearGradient(0,0,500,0);
    grd2.addColorStop(0,"#b3e968");
    grd2.addColorStop(1,"#79ffd6");
    fit_oGc.strokeStyle=grd2;
    fit_oGc.lineWidth="5";
    fit_oGc.stroke();

    var grd1=fit_oGc.createLinearGradient(0,0,500,0);
    grd1.addColorStop(0,"#2dc59c");
    grd1.addColorStop(1,"#38c3ac");
    fit_oGc.fillStyle=grd1;
    fit_oGc.fill();

});