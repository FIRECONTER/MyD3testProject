function load(){
	// about the scale in D3.js
	//1. linear scale
	/*var src_data = [0.3,0.5,0.8,0.9,1.8]
	var min_val = d3.min(src_data);
	var max_val = d3.max(src_data);
	var linear_scale = d3.scale.linear().domain([min_val,max_val]).range([0,100]);

	for(var i=0;i<src_data.length;i++){
		console.log('src data'+src_data[i]);
		console.log('linear scaled data'+linear_scale(src_data[i]))
	}

	//2. ordinal scale
	var ord_src = [0,1,2,3,4]
	var ord_ran = ['red','blue','white']
	var ordinal_scale = d3.scale.ordinal().domain(ord_src).range(ord_ran);
	for(var i=0;i<ord_src.length;i++){
		console.log('src data'+ord_src[i]);
		console.log('ordinal data'+ordinal_scale(ord_src[i]));
	}*/

	//axis
	/*var margin = {'left':100,'top':20,'bottom':20,'right':20};
	var body = d3.select('body');
	var svg = body.append('svg').attr('width',200).attr('height',200).style('margin-left',margin.left+'px').style('margin-top',margin.top+'px').style('padding',20).style('background-color','yellow');
	var min_val = 0;
	var max_val = 40;
	// domain shows the ticks value and range shows the length(px) of the axis
	var linear_scale = d3.scale.linear().domain([min_val,max_val]).range([0,200]);
	var axis = d3.svg.axis().scale(linear_scale).orient('bottom').ticks(6);

	svg.append('g').call(axis);// add the axis*/
	/*different between document.get and d3.selectAll*/
	/*dom_p = document.getElementsByTagName('p');
	console.log(dom_p);
	console.log('type dom_p'+typeof(dom_p));
	//d3_p = d3.selectAll('p');
	//print(d3_p);
	d3_p = d3.selectAll('p');
	console.log(d3_p);
	console.log('type d3_p'+typeof(d3_p));//原有的dom类型被封装d3 object[0] 对应的原有的dom的封装
	d3_one_p = d3.select('p');// 同样返回的是一个array 要取第一个元素才是dom 云阿苏
	console.log(d3_one_p);*/

	/*var text = d3.selectAll('p').html();
	console.log(text);
	d3.selectAll('p').append('p').text('hello');// 这样导致每一个p 内部会插入一个内容为hello的p元素*/
	/*var body = d3.select('body');
	body.append('p').text('hello');//正确做法 在p 的选择集合中添加一个元素
	body.insert('p','#t2').text('insert value');// 在标记为t2 的p元素前面插入内容*/

	//绑定元素 datum 以及 data
	


	//data 绑定一个list到元素上，灵活处理元素与绑定数据长度不一致的情况并且第二个参数可以指定绑定的规则。

}
window.onload = load;
