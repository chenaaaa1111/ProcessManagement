/**
 * Created by admin on 2018/8/17.
 */
$(function () {
    $(".pageBox").createPage({
        pageCount: 10,
        current: 1,
        backFn: function(p) {
            console.log(p,'当前页数');
        }
    })
});