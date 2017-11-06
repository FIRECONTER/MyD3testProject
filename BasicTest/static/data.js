window.onload = function(){
    //处理d3.js 中的数据绑定中的所有的问题

    //1. 简单的datum 唯一数据绑定 调用方式为selection.datum(value)
    /*var p = d3.selectAll('p');
	console.log('绑定之前')
	console.log(p);
	p.datum(5);// 数据绑定在每一个p中增加__data__属性值。
	console.log('绑定之后');
	console.log(p);
	/*p.text(function(d,i){
		return d+' '+i;
	});//使用绑定的数据
	//每一个元素使用绑定数据，并且每一个元素内部再添加一个子元素然后在使用绑定数据
	p.text(function(d,i){
		return 'father'+' '+d+' '+i;
	}).append('p').text(function(d,i){
		return 'child'+' '+d+' '+i;
	});
	console.log(p);*/
    //结论：当选择集合绑定数据之后 那么这个集合中的所有元素以及子元素中都会有__data__ 这个属性与数据对应。然后任何一个子元素都可以使用这个数据

    //2. 比较复杂的data 数据绑定方式 data(list,key) list为绑定数据 key 为指定的绑定规则。

    /*srcdata = [1,2]
    var p = d3.selectAll('p')
    p.data(srcdata);
    console.log(p);// 元素__data__ 属性中添加1 与 2 元素。默认按照顺序绑定*/

    /* 理解关键的update enter 以及 exit
    其中update 部分是 元素调用了data(list)之后得到的为update 表示数组长度与元素数量一致的部分;
    而enter 是由update.enter() 得到，表示数组长度大于元素数量的部分，形象理解为进入
    同样exit 也是由update.exit() 得到表示数组长度小于元素数量的部分，形象理解为退出
    */

    /*srcdata = [1,2,3,4];
    var p = d3.selectAll('p');
    var update = p.data(srcdata);// 返回对象为update 部分 然后提供两个方法 enter 以及exit 调用返回每一部分内容。
    console.log('how about update');
    console.log(update);
    var enter = update.enter();
    console.log('how about enter');
    console.log(enter);
    var exit = update.exit();
    console.log('how about exit');
    console.log(exit);*/

    //某一部分为空的时候那么这一部分从console 就无法看到元素。
    //处理update 以及enter的例子，比如在div#t1的元素中有两个p 绑定数据list 长度为4 此时就有enter 与 update 内容
    // 一般在update 里面更改数据 ,enter里面append 元素然后使用剩余的绑定元素。

    var p1 = d3.select('#t1').selectAll('p'); // 这种方式最终导致enter部分内容会被添加到html 下面与设计不同，所以如果在某一个元素下面操作
    //选择先选中这个元素作为父元素，再在这个元素里面selectAll所有元素
    srcdata1 = [1,2,3,4];
    p1.data(srcdata1).text(function(d,i){
        return d+' '+i;
    }).enter().append('p').text(function(d,i){
        return d+' '+i;
    });

    //另外一种常见的使用enter 就是选择一个内容为空的子集和，绑定元素使用enter 部分完全渲染内容
    var p2 = d3.select('#t2').selectAll('p');//一个空的集合
    p2.data(srcdata1).enter().append('p').text(function(d,i){
        return d+' '+i;
    });
    //exit 部分一般使用准则都是元素与数据一一对应，对于exit 部分一般是电泳remove 删除 即是
    // update.exit(),remove() 不做多余处理

    //选择集的顺序 以及 data中的第二个参数 绑定规则函数。
    
};
