$(document).ready(function () {

    $('.box').hover(function () {
        $(this).css({
            'opacity' : 0.5,
            'transition' : '0.6s',
            'margin-top' : '-9px',
            'box-shadow' : '0 10px 15px -2px #c6c6c6',
        })

        }, function () {
            $(this).css({
                'opacity' : 1,
                'transition' : '0.6s',
                'margin-top' : '0',
                'box-shadow' : 'none'
            })
        }
    );
});