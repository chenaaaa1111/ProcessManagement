/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    request({
        url: 'http://gj.i2f2f.com/public/index.php/index/members/lists',
        data: {
            power: sessionStorage.getItem('power')
        },
        type: "POST",
        success: function (res) {
            var navData = res.data;
            res.data=[{
                id:1,
                title:'开发部门',
                url:'',
                child:[
                    {
                        id:12,
                        title:'报销流程',
                        url:'', 
                        parent:'',
                        child:[]

                    },
                    {
                        id:12,
                        title:'出差路程',
                        url:'',
                        child:[]
                    }
                ]
            },
            {
                id:1,
                title:'财务部门',
                url:'',
                child:[
                    {
                        id:13,
                        title:'入职流程',
                        url:'', 
                        parent:'',
                        child:[]

                    },
                    {
                        id:14,
                        title:'离职路程',
                        url:'',
                        child:[]
                    }
                ]
            }
        ]
            console.log(res);
            setNav(navData);
        }

    });
    function setNav(data) {
        var html = '<ul>';
        for (var i = 0; i < data.length; i++) {
            if (i == 0) {
                html += '<li class="nav-item active">' +
                    '<a class="navList" href="javascript:;"><span>' + data[i].title + '</span><i class="glyphicon glyphicon-menu-right glyphicon-menu-down" aria-hidden="true"></i></a>' +
                    '<ul class="childBox">';
            } else {
                html += '<li class="nav-item">' +
                    '<a class="navList" href="javascript:;"><span>' + data[i].title + '</span><i class="glyphicon glyphicon-menu-right" aria-hidden="true"></i></a>' +
                    '<ul class="childBox">';
            }
            for (var n = 0; n < data[i].child.length; n++) {
                // data[i].child.forEach(function (item) {
                //     item.forEach(function (itemi) {
                //         console.log('itemi', itemi);
                //         if (i == 0 && n == 0) {
                //             html += '<li><a class="childList current" data_url="' + itemi.url + '"><span>' + itemi.title + '</span></a></li>';
                //         } else {
                //             html += '<li><a class="childList" data_url="' + itemi.url + '"><span>' + itemi.title + '</span></a></li>';
                //         }
                //     })
                // });
                if (i == 0 && n == 0) {
                    html += '<li><a class="childList current" data_url="' + data[i].child[n].url +'?pid='+data[i].child[n].id+ '&title='+data[i].child[n].title+'"><span>' + data[i].child[n].title + '</span></a></li>';
                } else {
                    html += '<li><a class="childList" data_url="' + data[i].child[n].url + '?pid='+data[i].child[n].id+'&title='+data[i].child[n].title+'"><span>' + data[i].child[n].title + '</span></a></li>';
                }
        
            }
            html += '</ul></li>';
        }
        html += '</ul>';

        $(".myNavBox").html(html);
    }
    $(".myNavBox").on("click", ".nav-item", function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find(".glyphicon").removeClass("glyphicon-menu-down");
        } else {
            $(this).addClass('active').siblings().removeClass('active');
            $(this).find(".glyphicon").addClass("glyphicon-menu-down")
            $(this).siblings().find(".glyphicon").removeClass("glyphicon-menu-down")
        }
    });
    $(".myNavBox").on("click", ".childList", function () {
        for (var i = 0; i < $(".myNavBox .childList").length; i++) {
            $(".myNavBox .childList").eq(i).removeClass('current');
        }
        $(this).addClass('current');
        var url = $(this).attr('data_url');
        $('#myIframe').attr('src', url);
        return false;
    });
});