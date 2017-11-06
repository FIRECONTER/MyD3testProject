window.onload = function(){
    // svg 中使用比例尺以及坐标轴绘制基本图形元素
    // 比例尺使用就是一种正确的转换关系，实现将原始数据转换更适合可视化的显示。
    var svgwidth = 600;
    var svgheight = 600;
    var basic_div = d3.select('#scaleaxis');
    var svg = basic_div.append('svg').attr({'width':svgwidth+'px','height':svgheight+'px'}).style({'background-color':'blue'});// set svg

    //在basic_div 上面操作
    // 两大类比例尺 定量比例尺以及序数比例尺
    // 定量比例尺 用于计算数值转换 一般要求的是定义域与值域是连续的情况
    // 序数比例尺也是一种转换关系根据名字可以看出纯粹是按照位置关系进行对应。

    //定量比例尺中的linear
    //d3.scale.linear
    //绘制坐标轴
    //d3.svg.axis
    var xaxiswidth = 350;
    var yaxiswidth = 350;
    var axispadding = 1;
    var xlabels = ['band4','band5','band6','band7','band8'];
    var ylabels = ['job1','job2','job3','job4','job5','job6','job7','job8','job9','job10'];
    var xscale = d3.scale.ordinal().domain(xlabels).rangeRoundPoints([0,xaxiswidth],axispadding);
    var yscale = d3.scale.ordinal().domain(ylabels).rangeRoundPoints([0,yaxiswidth],axispadding);

    var xaxis = d3.svg.axis().scale(xscale).orient('bottom');
    var yaxis = d3.svg.axis().scale(yscale).orient('left');

    var gxaxis = svg.append('g').style({'margin-left':'40px'}).attr("transform",'translate(10,380)').attr({'class':'axis'}); //svg中添加一个g元素来绘制坐标轴 而不是直接在svg 中绘制坐标轴
    var gyaxis = svg.append('g').attr('transform','translate(20,5)').attr({'class':'axis'});// yaxis
    xaxis(gxaxis);
    yaxis(gyaxis);
}
