$(document).ready(function() {
    $('#go').click(function() {
        $('#testDiv')
        .animate({ width: '400px' }, 300)
        .animate({ height: '300px' }, 400)
        .animate({ left: '200px' }, 500)
        .animate({ top: '+=100px', borderWidth: '10px' }, 'slow');
    });
});

