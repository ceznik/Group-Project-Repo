// alert("ready");
// FUNCTION FOR CHANGING BACKGROUND IMAGE ON REALOARD
$(window).load(function() {
    var randomImages = ['background','background2','background3','background4'];
    var rndNum = Math.floor(Math.random() * randomImages.length);
    var url = 'url(assets/images/' + randomImages[rndNum] + '.jpg)';

    $(document.body).css({
        'background': url + ' no-repeat center center fixed', 
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
    });
 });
