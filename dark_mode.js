const dark = $('#botao_modo')
const tema = $('#tema')
const titulo = $('#respiracao')
const texto = $('#card')

if (localStorage.getItem('darkMode') === 'enabled') {
    dark.addClass('bi-brightness-low');
    tema.addClass('tema_escuro');
    titulo.addClass('titulo_dark');
    texto.addClass('card1_dark');
}

dark.click(function() {
    if (tema.hasClass('tema_escuro')) {
        $(this).removeClass('bi-brightness-low');
        tema.removeClass('tema_escuro');
        titulo.removeClass('titulo_dark');
        texto.removeClass('card1_dark');
        localStorage.setItem('darkMode', 'disabled');
    }
    else {
        $(this).addClass('bi-brightness-low');
        tema.addClass('tema_escuro');
        titulo.addClass('titulo_dark');
        texto.addClass('card1_dark');
        localStorage.setItem('darkMode', 'enabled');
    }
});

$(function() {
    $("#accordion").accordion();
});