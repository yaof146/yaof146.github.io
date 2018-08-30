$(function() {

    //header
    $('.out .box,.out .nav').hover(function() {
        debugger
        var self=$(this);
        // var index=self.index();
        var parent=self.closest('[class=top]');
        parent.find('.nav').show();
    },function() {
        parent.find('.nav').hide();
    });
    $('.out .nav').hover(function() {
        var self=$(this);
        var index=self.index();
        var parent=self.closest('[class=top]');
        parent.find('.box').eq(index).css({
           'color':'#31bbac',
           'background':'#fff',
           'border-left':'1px solid #e5e5e5',
           'border-right':'1px solid #e5e5e5'
         })
    });





    //全部分类
    var menuJson = {
        niceFood : [{title:"美食",link:'http://www.baidu.com',childNav:['代金券','甜点饮品','火锅','自助餐','小吃快餐','日韩料理',
                '西餐','聚餐宴请','烧烤烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤/烤串','西北菜','咖啡酒吧茶馆','' +
                '云贵菜','东南亚菜','海鲜素食','台湾/客家菜','创意菜汤/粥/炖菜','蒙餐','新疆菜','其他美食','京菜鲁菜']}],
        takeout:[{title:"外卖",link:'http://www.takeout.com',childNav:['美团外卖']}],
        hotel:[{title:"酒店星级",link:'http://www.hotel.com',childNav:['经济型','舒适/三星','高档/四星','豪华/五星']}],
        minsu:[{title:"热门城市",link:'http://www.minsu.com',childNav:['上海','成都','北京','重庆','南京','杭州',
                  '广州','西安','大连']}],
        movie:[{title:"热映电影",link:'http://www.movie.com',childNav:['欧洲攻略','精灵旅社3：疯狂假期','新乌龙院之笑闹江湖',
                '一出好戏','蚁人2：黄蜂女现身','快把我哥带走','碟中谍6：全面瓦解','巨齿鲨','美食大冒险之英雄烩','大师兄']},
               {title:"热门影院",link:'http://www.cinema.com',childNav:['万达影城','大地影院','CGV影城','横店电影城',
                       '太平洋电影城','曲江国际影城','橙天嘉禾影城','奥斯卡国际影城','博纳国际影城','星美国际影城']}],
        plane:[{title:"机票",link:'http://www.plane.com',childNav:['国内机票','国际/港澳台机票']},
               {title:"火车票",link:'http://www.train.com',childNav:['火车票']}],
        ktv:[{title:"休闲娱乐",link:'http://www.fun.com',childNav:['足疗按摩','洗浴/汗蒸','酒吧','密室逃脱','轰趴馆','茶馆',
                '私人影院','DIY手工坊','采摘/农家乐','网吧网咖','游乐游艺','VR','桌面游戏','真人CS','棋牌室','其他玩乐']},
             {title:"KTV",link:'http://www.ktv.com',childNav:['KTV']}],
        life:[{title:"生活服务",link:'http://www.life.com',childNav:['衣物/皮具洗护','家政','搬家运输','送水','充值缴费',
                '服饰/鞋包养护','开锁换锁','居家维修','管道疏通','家电维修清洗', '电脑维修','手机维修','证件照/肖像摄影','照片冲印/图文文印',
                '商务服务/法律服务','文化传媒机构','成人用品/情趣用品']}],
        beautiful:[{title:"丽人",link:'http://www.beautiful.com',childNav:['美发','美甲美睫','美容美体','医学美容','瑜伽舞蹈',
                '瘦身纤体','韩式定妆','祛痘','纹身','化妆品']}],
        marry:[{title:"结婚",link:'http://www.marry.com',childNav:['婚纱摄影','旅拍','个性写真','婚宴','婚庆公司','婚纱礼服','西服定制',
                '婚戒首饰','婚车租赁','司仪主持','彩妆造型','婚礼跟拍','婚礼小礼品','更多婚礼服务']}],
        child:[{title:"儿童乐园",link:'http://www.child1.com',childNav:['婴儿游泳','其它亲子游乐']},
               {title:"幼儿教育",link:'http://www.child2.com',childNav:['早教中心','少儿英语','智力开发','托班/幼儿园','幼儿教育','其他幼儿教育']},
               {title:"亲子摄影",link:'http://www.child3.com',childNav:['儿童摄影','孕妇写真','上门拍','其他亲子摄影']},
               {title:"孕产护理",link:'http://www.child4.com',childNav:['月子会所','产后恢复','妇幼医院','孕产用品','开奶催乳',
                       '月嫂','亲子购物','宝宝派对','亲子服务']}],
        sport:[{title:"运动健身",link:'http://www.sport.com',childNav:['健身中心','武术场馆','游泳馆','羽毛球馆','溜冰场','射箭馆','篮球场','网球馆',
                '台球馆','乒乓球','足球场','高尔夫场','保龄球馆','体育场馆','马术场','壁球馆','更多运动']}],
        home:[{title:"装修设计",link:'http://www.home1.com',childNav:['半包装修','全包装修','清包装修']},
                {title:"装修建材",link:'http://www.home2.com',childNav:['地板','瓷砖石材','橱柜','灯饰照明','厨卫洁具','油漆涂料','集成吊顶','墙纸墙艺',
                        '门窗','木材板材','家用五金','电工电料','楼梯','管材管件']},
                {title:"家具家居",link:'http://www.home3.com',childNav:['家具','床上用品/家纺','家居饰品','厨具餐具','智能家居']},
                {title:"家装卖场",link:'http://www.home4.com',childNav:['建材卖场','家居卖场','灯饰卖场']}],
        study:[{title:"音乐培训",link:'http://www.study1.com',childNav:['钢琴','吉他','小提琴','古筝','架子鼓','声乐','其他音乐培训']},
               {title:"职业技术",link:'http://www.study2.com',childNav:['美容化妆','会计','IT','厨艺','管理培训','摄影培训','司法考试',
                '公务员培训','其他职业培训']},
               {title:"外语培训",link:'http://www.study3.com',childNav:['英语','日语','韩语','法语','德语','汉语','俄语','西班牙语','其他外语']},
               {title:"美术培训",link:'http://www.study4.com',childNav:['绘画','书法','其他美术']}],
        health:[{title:"医疗健康",link:'http://www.health1.com',childNav:['医院','齿科口腔','体检中心','药店','中医','其他健康服务']},
                {title:"爱车",link:'http://www.health2.com',childNav:['洗车','租车','加油站','维修保养','驾校','汽车美容','陪练','汽车用品','停车场',
                    '汽车保险','4S店/汽车销售','更多汽车服务','机油保养','汽车报价','二手车','广告驾校','交警队','汽车改装','汽车配件']},
                {title:"宠物",link:'http://www.health3.com',childNav:['宠物店','宠物医院']}],
        drink:[{title:"玩乐",link:'http://www.drink.com',childNav:['KTV','酒吧','密室逃脱','游乐游艺','网吧网咖','私人影院','DIY手工坊',
                '桌面游戏','采摘/农家乐','棋牌室','轰趴馆','真人CS','VR','其他玩乐']}],
    }

    $('.li-menu').hover(function() {
        var self = this;
        var menuTitle = $(self).attr('menuTitle');
        var menuObj = menuJson[menuTitle];
        var html = '';
        for (var i = 0; i < menuObj.length; i++) {
            var startHtml = '<div class="main_menu_left_invisible">' + '<div class="invisible_top">' +
                '<h3 class="invisible_top_left">' + menuObj[i].title + '</h3>' +
                '<a class="invisible_top_right" href="' + menuObj[i].link + '">更多&gt;&gt;</a>' + '</div>' +
                '<ul class="invisible_main">';
            var endHtml = '<li class="last"></li></ul></div>';
            var childHtml = '';
            for (var j = 0; j < menuObj[i].childNav.length; j++) {
                var childHtmlItem = '<li>' + '<a href="#">' + menuObj[i].childNav[j] + '</a>' + '</li>';
                childHtml += childHtmlItem;
            }
            var itemHtml = startHtml + childHtml + endHtml;
            html += itemHtml;
        }
        if($(self).find('.main_menu_left_invisible').length==0) {
            $(self).append(html);
            var parent = self.closest('[class=main_menu_left]');
            var index = self.index();
            parent.find('.main_menu_left_invisible').hide().eq(index-1).show();
        }


        // if($(self).find('.main_menu_left_invisible').length==0) {
        //     $(self).append(html);
        // }else{
        //     $('.main_menu_left_invisible').show();
        // }
        // },function(){
        //    $('.main_menu_left_invisible').hide();
        // }





    });

    //
    $('.other_li').hover(function () {
        var self = $(this);
        var parent = self.closest('[class^=main_content_]');
        var index = self.index();
        parent.find('.li-down').hide().eq(index-1).show();
    });

    //三角形
    $('.other_li').hover(function () {
        var self = $(this);
        var parent = self.closest('[class^=main_content_]');
        var index = self.index();
        parent.find('.triangle').hide().eq(index-1).show();
    });
    $('.li-down').hover(function () {
        var self = $(this);
        var parent = self.closest('[class^=main_content_]');
        var index = self.index();
        parent.find('.triangle').hide().eq(index).show();
    });



    //图片轮播
    /* 设置第一张图片 */
    $(".main_menu_center_top_left .top-left-img li").first().before($(".main_menu_center_top_left .top-left-img li").last());

    /* 鼠标悬停箭头按钮显示 */
    $(".main_menu_center_top_left").hover(function(){
        $(this).find(".arrow").stop(true,true).fadeIn(300)
    },function(){
        $(this).find(".arrow").fadeOut(300)
    });

    /* 滚动切换 */
    $(".main_menu_center_top_left").slide({
        titCell:".hd ul",                     //自定义标题标签
        mainCell:".top-left-img ul",  //自定义标题标签
        effect:"leftLoop",  //切换动画. 默认不使用动画
        autoPlay:true,  //自动运行
        vis:3,  //visible缩写，mainCell的可视范围个数，当实际内容个数少于可视个数的时候，不执行SuperSlide效果
        autoPage:true,  //若为true，则titCell为导航元素的包裹层对象
        trigger:"click"  //滑动触发方式
    });




 });