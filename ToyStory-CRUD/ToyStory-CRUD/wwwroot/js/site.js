var personagens = [
    { tipo: 'Humano', nome: 'Andy Davis' },
    { tipo: 'Humano', nome: 'Sra. Davis' },
    { tipo: 'Humano', nome: 'Molly Davis' },
    { tipo: 'Humano', nome: 'Sid Phillips' },
    { tipo: 'Humano', nome: 'Hannah Phillips' },
    { tipo: 'Humano', nome: 'Sr. Phillips' },
    { tipo: 'Humano', nome: 'Al McWhiggin' },
    { tipo: 'Humano', nome: 'Amy' },
    { tipo: 'Humano', nome: 'Emily' },
    { tipo: 'Humano', nome: 'Bonnie Anderson' },
    { tipo: 'Humano', nome: 'Daisy' },
    { tipo: 'Humano', nome: 'Sra. Anderson' },
    { tipo: 'Humano', nome: 'Sr. Anderson' },
    { tipo: 'Humano', nome: 'Zelador' },
    { tipo: 'Humano', nome: 'Geri' },

    { tipo: 'Brinquedo', nome: 'Xerife Woody Pride', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'] },
    { tipo: 'Brinquedo', nome: 'Buzz Lightyear', foto: 'buzzlightyear1', falas: ['Ao infinito e além!', 'Isto não é voar. Isto é cair, com estilo!', 'Nunca duvidei de mim mesmo, Comandante.'] },
    { tipo: 'Brinquedo', nome: 'Jessie' },
    { tipo: 'Brinquedo', nome: 'Sr. Cabeça de Batata' },
    { tipo: 'Brinquedo', nome: 'Rex' },
    { tipo: 'Brinquedo', nome: 'Slinky' },
    { tipo: 'Brinquedo', nome: 'Porquinho' },
    { tipo: 'Brinquedo', nome: 'Betty' },
    { tipo: 'Brinquedo', nome: 'Sargento' },
    { tipo: 'Brinquedo', nome: 'Sra. Cabeça de Batata' },
    { tipo: 'Brinquedo', nome: 'Wheezy' },
    { tipo: 'Brinquedo', nome: 'Barbie' },
    { tipo: 'Brinquedo', nome: 'Tela Mágica' },
    { tipo: 'Brinquedo', nome: 'Tubarão ' },
    { tipo: 'Brinquedo', nome: 'Olho vivo' },
    { tipo: 'Brinquedo', nome: 'Nel Som' },
    { tipo: 'Brinquedo', nome: 'Mr. Spell' },
    { tipo: 'Brinquedo', nome: 'CR' },
    { tipo: 'Brinquedo', nome: 'Rocky' },
    { tipo: 'Brinquedo', nome: 'Ovelhas' },
    { tipo: 'Brinquedo', nome: 'Cobra e Robô' },
    { tipo: 'Brinquedo', nome: 'Palhaço ' },
    { tipo: 'Brinquedo', nome: 'Soldados de Plástico' },

    { tipo: 'Animal', nome: 'Buster' },
    { tipo: 'Animal', nome: 'Brutus' },
    { tipo: 'Animal', nome: 'Bichano' },
    { tipo: 'Animal', nome: 'Penosa' }
]

                                                       // POPULANDO SELECT NOME DE ACORDO COM O SELECT TIPO

$(".tipo").change(function () {
    $(".fala").html("");
    var tipo = $(this).val();
    var options = '<option value="">Nomes</option>';
    $(personagens).each(function (index, value) {
        if (value.tipo == tipo) {
            options += '<option value="' + value.nome + '">' + value.nome + '</option>';            
        }
    });    
    $('.nome').html(options);    
});

$(".nome").change(function () {
    var nome = $(this).val();
    var options = '<option value="">Falas</option>';
    $(personagens).each(function (index, value) {
        if (value.nome == nome) {
            options += '<option value="' + value.falas[0] + '">' + value.falas[0] + '</option>';
            options += '<option value="' + value.falas[1] + '">' + value.falas[1] + '</option>';
            options += '<option value="' + value.falas[2] + '">' + value.falas[2] + '</option>';
            var imagem = '<img src="/img/' + value.foto + '.jpg" class="card-img-top"/>';
            $(".imagemDinamica").append(imagem);
        }
    });
    $('.fala').html(options);
   
});


                                                             // Adicionando nomes e falas no card

$(".tipo").change(function () {
    $(".tipoSelecionado").html($('.tipo option:selected').val());
});

$(".nome").change(function () {
    $(".nomeSelecionado").html($('.nome option:selected').val());
});

$(".fala").change(function () {
    $(".falaSelecionada").html($('.fala option:selected').val());
})


