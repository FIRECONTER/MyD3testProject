function load(){
    // force layout 力量图
    // test in the force layout
    var body = d3.select('body');
    width = 960;
    height = 600;
    var svg = body.append('svg').attr('width',width).attr('height',height);
    //var color = d3.scaleOrdinal(d3.schemeCategory20); // generate the color

    /*var simulation = d3.forceSimulation()
    .force("link",d3.forceLink().id(function(d){return d.id;}))
    .force("charge",d3.forceManyBody())// 貌似v4 的语法，目前统一用v3 的写法
    .force("center",d3.forceCenter(width/2,height/2));*/

    //var forcelayout = d3.layout.force();

    /************test circle*********************/
    /*data = [{'id':1},{'id':2},{'id':3},{'id':4}];
    var nodes = svg.append('g').selectAll('circle');//当需要把数据和元素绑定的时候，不需要事先创建一个元素，然后选择这个元素集合
    //选择绑定数据集合在选择enter 添加元素。即便没有这个元素，可以使用select选择不存在的元素，返回的值不是空而是一个空的list所以可以使用
    //append 添加元素到这个选择集合上面。
    var newnodes = nodes.data(data).enter().append('circle').attr("id",function(d){console.log(d.id);return d.id;});//实现svg 下自动创建等量data 的circle 元素
    //并且构建id与data中的id一致。
    console.log(newnodes);// nodes 依然还是原来那个结果。newnodes 的长度才是4*/

    //v3 下的force 力量图的使用
    /*
    var force = d3.layout.force()
    .nodes(nodes)// 对应于D3.js 中的svg下的circle
    .links(links)// 对应于D3.js 中的svg 下的line
    .size([w, h])// size 默认为[1,1] 影响引力中心以及初始化的随机位置 initial Random position 引力中心是(w/2,h/2)
    .linkStrength(0.1)// 0-1 设置绘制线条粗细 同样可以给定一个常量也可以给定一个函数。常量设置后所有连接线条粗细一致，函数制定后不同线条粗细不一样。
    .friction(0.9)// 设置摩擦力参数默认0.9 不是物理上的摩擦力，更像速度延迟，理解为在这个参数设置过高的时候，拖拽节点延迟更大。
    .linkDistance(20)//设置节点之间的链接距离 同样没有设置距离返回默认的距离为20 设置为函数那么可以表达任意的两个点之间的距离 在layout start 时候会开始执行初始化
    .charge(-30)
    .gravity(0.1)// 限制节点避免节点逃离布局免
    .theta(0.8)
    .alpha(0.1)
    .start();
    */

    //重要的基本参数
    //1.关于nodes 包含6 个属性index 计数从0开始表示当前节点的id x 表示当前节点的x 坐标 y 当前节点y 坐标
    //px previous node x postition py previous node y position. These two attributes are misleading
    //fixed is 重要参数用于固定figure 中不变的点， weight 重要参数表明链接到当前节点的数量。nodes 给的参数是非常重要的参数
    //2.links 包含基本属性source 和 target这两个属性存储的是nodes中的节点id。
}
