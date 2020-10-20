//Javascript
// let selectButtonId = document.getElementById('btn');
// let selectButtonTag = document.getElementsByTagName('button');
// let selectButtonClass = document.getElementsByClassName('divClass');

//Jquery
// let selectButtonId = $('#btn');
// let selectButtonTag = $('button');
// let selectButtonClass = $('.btnClass');

//För att kunna skriva jquery behöver vi först göra en selector på document och kolla att dokumentet laddats klart.accordion
//Sen gör vi en function som vi kör våran Jquery i
$(document).ready(function () {
    //här i kan vi skriva jquery

    //Skriva ut en text

    document.querySelector('#div1').innerText = 'Detta är en Text, skriven med Javascript';
    $('#div1').text('Detta är en text skriven med Jquery.');

    //skriva ut HTML
    // document.querySelector('#div2').innerHTML='<p>paragraf</p>';
    $('#div2').html('<p>paragraf</p>');

    //Ändra css
    // document.getElementById('div1').style.color='#ff0000';
    $('#div1').css('color', '#ff0000');

    //    document.querySelector('#div2').style.fontSize='2rem';
    $('#div2').css('font-size', '2rem');

    //    document.querySelector('#div2').style.display='none';
    $('#div2').hide();

    //    document.querySelector('#div2').style.display='';
    $('#div2').show();


    // document.querySelector('#btn').addEventListener('click', () => {
    //     let div2 = document.querySelector('#div2');
    //     if (div2.style.display === 'none') {
    //         div2.style.display = '';
    //     } else {
    //         div2.style.display = 'none';
    //     }
    // });

    $('#btn').click(() => {
        $('#div2').toggle();
    })


})