// 绘制复杂的图形元素，之前会使用svg中的一些简单的图形元素如circle line 等绘制一些简单的图形
// 但是实际的可视化中可能会涉及到一些比较复杂的视图需要用到path 元素结合生成器实现，此脚本就是用于练习使用path 元素
// 结合各种生成器绘制比较复杂的图形元素。
window.onload = function(){
    //path and lines in the svg
    // rgb and hsl
    /*var color1 = d3.rgb(0,255,255);// rgb color
    var color2 = d3.hsl(120,0.5,0.5);// hsl color
    console.log(color1);
    console.log(color2);
    console.log('type of color1 '+typeof(color1));
    console.log('type of color2 '+typeof(color2));

    //interpolate 颜色插值，给定两个值返回插值函数。
    inter1 = d3.rgb(255,0,0);
    inter2 = d3.rgb(255,255,0);
    var com = d3.interpolate(inter1,inter2);
    console.log('type of com '+typeof(com));
    inter_res0 = com(0);
    inter_res1 = com(1);
    inter_res2 = com(0.5);//返回的类型为string
    console.log('the result');
    console.log(inter_res0);
    console.log(inter_res1);
    console.log(inter_res2);
    console.log('type of result '+typeof(inter_res0));*/

    // 使用svg 中强大的path 元素和各种生成器绘制复杂的图形元素。
    var base = d3.select('#draw');
    var svg = base.append('svg').attr({'width':400,'height':400});
    // 首先理解path 元素的重要的属性。
    // 第一. 坐标点的表示方式: path 相比于其他的基本绘图组件它更加的底层一些。一系列坐标点构成绘制的path 元素。path 中的坐标点构成是由坐标位置(x,y)与字母前缀构成，字母前缀
    // 表示如何到这一个坐标点。大写字母表示绝对坐标，小写字母表示相对坐标
    /*
    坐标意义
    1.移动绘制点M(moveto):表示将画笔的绘制点移动到某一个坐标，一般作为绘制path中一部分的的起始点
    2.直线终点L:表示绘制直线的终点 H 表示绘制一条水平直线 V 表示绘制一条垂直的直线，其中V与H只需要一个坐标值即可。多个值选择最后一个有效坐标最为绘制的值。
    3.曲线(贝塞尔曲线相关)
    C 表示绘制三次贝塞尔曲线，一段三阶贝塞尔曲线需要四个点 第一个点为起始点 后续三个点为两个控制点与一个终点
    C接的参数就是两个控制点与重点，曲线不会经过两个控制点，最终结束于终点。
    S这个参数表示承接前一条贝塞尔曲线再生成一条贝塞尔曲线。S只需要给两个参数，因为第一个控制点已经是前一条曲线第二控制点的对称点，所以S给定第二个控制点与终点即可。
    绘制2阶贝塞尔曲线更简单，二阶贝塞尔曲线只需要三个点，起点控制点以及终点。
    Q与T 与三阶一样Q给定两个点控制点以及终点，而T给定一个终点即可，因为控制点是前一条曲线控制点的对称 点。
    4.弧线
    弧线是根据椭圆来绘制，所以需要参数比较多。总结一下为5个参数 第一起始点 第二 椭圆X轴与水平轴的顺时针方向夹角，第三 大弧线/小弧线 1/0 第四 顺时针/逆时针1/0 终点坐标

    5.闭合图形
    曲线点最后面加一个z 那么可以将绘制的曲线变为封闭的图形。
    */

    //使用path 绘制直线
    //1. 简单的直线
    /*svg.append('path').attr('d','M20,20 L200,200 M20,20 H200 M20,20 V200')
    .style({'stroke':'black','stroke-width':2});*/

    //2. 简单的三阶贝塞尔曲线
    //svg.append('path').attr('d','M20,100 C40,20 60,20 100,100').style({'stroke':'black','stroke-width':4,'fill':'white'});// fill 不为white 会导致底部为黑色

    //3. 绘制封闭弧线
    //svg.append('path').attr('d','M20,100 A200,150 0 1 0 50,50 Z').attr({'stroke':'black','stroke-width':3,'fill':'white'});


    //基本的曲线以及弧线元素可以用path 加属性d 完成，下面是复杂的使用d3.js 提供的路径生成器完成路径绘制。

};
