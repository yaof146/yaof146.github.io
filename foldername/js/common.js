$(function(){
    //header菜单
    $('li.top').hover(function() {
        var self=$(this);
        self.find('.nav').show();
        self.find('.box').css({
                       'color':'#31bbac',
                       'background':'#fff',
                       'border-left':'1px solid #e5e5e5',
                       'border-right':'1px solid #e5e5e5'
                     });
    }
    ,function() {
        var self=$(this);
        self.find('.nav').hide();
        self.find('.box').css({
                        'color':'#999',
                        'background':'#f8f8f8',
                        'border':'0'
                    })
    }
    );
});