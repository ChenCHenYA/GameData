// 右上角第一个盒子自动轮播
var index = 0
var dsq = setInterval(function(){
     index++;
     if(index > $('.right_nav1 a').length - 1){
        index=0
    }
     $('.right_nav1 a').eq(index).slideDown(2000)
     .siblings().slideUp(1000)
    },200)

    // 鼠标进入图片出现
    $('.gif').mouseenter(function(){
        $(this).find('a').show()
    })

    // 鼠标进入列表出现
    $('.Top_list').mouseenter(function(){
        $('.menu').show()
    })
    $('.l_nav').mouseleave(function(){
        $('.menu').hide()
    })

// banner 列表导航区域
$('.navBox').on('mouseenter','a',function(){
    $(this)
    
    .find('i')
    .show(200)
})
$('.navBox').on('mouseleave','a',function(){
    $(this).find('i').hide(200)
})

// 中间内容大的列表导航tab切换
$('.main_list li').click(function(){
    var ind = $(this).index();
    $('.content').eq(ind).show().siblings().hide()
})

// 中间第一个小列表导航
$('.main_list li').children('a').click(function(){
    $(this).addClass('show').parent().siblings().find('a').removeClass('show')
})

// 第二个列表导航
$('.zb_nav li').find('a').click(function(){
    $(this).addClass('shu').parent().siblings().find('a').removeClass('shu')
})

// 第三个列表导航
$('.zb_Xnav li').find('a').click(function(){
    var index = $(this).index();
    $('.tab1').eq(index).show().siblings().hide();
    $(this).addClass('YS').parent().siblings().find('a').removeClass('YS')
})

// 点击进入武器详情页
$('.IMG').click(function(){
    var ims = $(this).find('img').attr('src');
    var title = $(this).find('img').attr('title')
    $('.jieshao').show().find('img').attr('src',ims).end()
    .find('.nnae').text(title);
    $('.zb_cont1').hide()
})

// 武器详情页点击li出现详细介绍
var m = 0;
$('.jieshao li').click(function(){
    if(m==0){
    $(this).children('.zb_des').show().parent().siblings().children('.zb_des').hide();
    m=1;
}else{
    $(this).children('.zb_des').hide();
    m=0;
}
})

// 第二个列表tab切换
$('.zb_nav li').click(function(){
    var index = $(this).index();
    $('.zb_cont1').eq(index).show().siblings().hide();
    
})

// 第三个列表tab切换

let arr=[]
$('.IMG img').each(function(e,a){
    arr.push($(a).attr('src'))
})
let titl=[]
$('.IMG img').each(function(e,a){
    titl.push($(a).attr('title'))
})
let alt=[]
$('.IMG img').each(function(e,a){
    alt.push($(a).attr('alt'))
})
// console.log(arr);
$('.zb_nav_Acj').click(function(){
    $('.zb_cont1').hide();
    var box = $('<div class="zb_cont1"></div>')
    for(var i=0;i<120;i++){
        var tem=$(`<div class="IMG">
        <img src="${arr[i]}" alt="${titl[i]}" title="${alt[i]}">
        </div>`);
        box.append(tem); 
    }
    $('.zb_contant').append(box); 
})
 
 
$('.zb_nav_cj').click(function(){
    $('.zb_cont1').hide()
    var box = $('<div class="zb_cont1"></div>')
    for(var i=140;i<arr.length;i++){
        var tem=$(`<div class="IMG">
        <img src="${arr[i]}" alt="${titl[i]}" title="${alt[i]}">
        </div>`);
        box.append(tem);
       
    }
    $('.zb_contant').append(box);
})
$('.zb_nav_zj').click(function(){
    $('.zb_cont1').hide()
    var box = $('<div class="zb_cont1"></div>')
    for(var i=160;i<arr.length;i++){
        var tem=$(`<div class="IMG">
        <img src="${arr[i]}" alt="${titl[i]}" title="${alt[i]}">
        </div>`);
        box.append(tem);
       
    }
    $('.zb_contant').append(box);
})
$('.zb_nav_gj').click(function(){
    $('.zb_cont1').hide()
    var box = $('<div class="zb_cont1"></div>')
    for(var i=150;i<arr.length;i++){
        var tem=$(`<div class="IMG">
        <img src="${arr[i]}" alt="${titl[i]}" title="${alt[i]}">
        </div>`);
        box.append(tem);
       
    }
    $('.zb_contant').append(box);
})

$('.zb_Xnav').click(function(){
    $('.jieshao').hide()
})

 $('.lz_nav').click(function(){
     var indexs = $(this).index();
     console.log($(this),indexs)
     $('.lz_right').find('img').eq(indexs).show().siblings().hide();
 })

 $('.img_box,.img_boxs').click(function(){
     $(this).find('.cover,.true,.xq_all').show().parent().parent().siblings().find('.cover,.true,.xq_all').hide();
 })
 $('.img_box,.img_boxs').mouseleave(function(){
    $(this).find('.cover,.true,.xq_all').hide().parent().parent().siblings().find('.cover,.true,.xq_all').hide();
})

// tab切换
$('.change_nav li').click(function(){
    cha = $(this).index()
    $('.auto').eq(cha).show().siblings().hide();
    $(this).find('a').addClass('qie').parent().siblings().find('a').removeClass('qie')
})

// 轮播图 图片
var we = 0;
var timer = setInterval(function(){ 
   tim()
}, 1500);

function tim(){
    we++;
    if(we > 4){
        we=0
    }
    $('.lul li').eq(we).fadeIn(500).siblings().fadeOut(1000);
    // 给小点添加事件
    $('.circle span').eq(we).addClass('acct').parent().siblings().find('span').removeClass('acct');
}
// 给小点添加事件
$('.circle').find('li').click(function(){
   var num = $(this).index();
    $('.lul li')
    .eq(num)
    .fadeIn(500)
    .siblings()
    .fadeOut(800);
     // 给小点添加事件
     $('.circle span')
     .eq(num)
     .addClass('acct')
     .parent()
     .siblings()
    
     .find('span')
     .removeClass('acct');
})

// 鼠标进入停止自动轮播
$('.lul,.circle').mouseenter(function(){
    clearInterval(timer)
})
// 鼠标离开开始自动轮播
$('.lul,.circle').mouseleave(function(){
   timer = setInterval(function(){ 
        tim()
     }, 1500);
})

// 野鬼详情

$('.yg_img,.yg_imgs,.yg_imgg').click(function(){
    $(this).find('.yg_xq').show().parent().parent().siblings().find('.yg_xq').hide()
})

$('.lieb').mouseleave(function(){
    $(this).find('.yg_xq').hide().parent().parent().siblings().find('.yg_xq').hide()
})

