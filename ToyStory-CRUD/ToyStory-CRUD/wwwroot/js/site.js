var personagens = [
    { tipo: 'Humano', nome: 'Andy Davis', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['andy1', 'andy2', 'andy3'] },
    { tipo: 'Humano', nome: 'Sra. Davis', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Molly Davis', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Sid Phillips', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Hannah Phillips', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Sr. Phillips', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Al McWhiggin', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Amy', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Emily', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Bonnie Anderson', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Daisy', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Sra. Anderson', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Sr. Anderson', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Zelador', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Humano', nome: 'Geri', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },

    { tipo: 'Brinquedo', nome: 'Xerife Woody Pride', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['woody1', 'woody2', 'woody3']},
    { tipo: 'Brinquedo', nome: 'Buzz Lightyear', falas: ['Ao infinito e além!', 'Isto não é voar. Isto é cair, com estilo!', 'Nunca duvidei de mim mesmo, Comandante.'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Jessie', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Sr. Cabeça de Batata', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Rex', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Slinky', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Porquinho', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Betty', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Sargento', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Sra. Cabeça de Batata', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Wheezy', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Barbie', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Tela Mágica', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Tubarão', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Olho vivo', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Nel Som', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Mr. Spell', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'CR', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Rocky', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Ovelhas', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Cobra e Robô', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Palhaço ', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Soldados de Plástico', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },

    { tipo: 'Animal', nome: 'Buster', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Animal', nome: 'Brutus', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Animal', nome: 'Bichano', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Animal', nome: 'Penosa', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] }
]


                                                       // POPULANDO SELECT NOME DE ACORDO COM O SELECT TIPO

$(".tipo").change(function () {
    $(".fala").html("");
    var tipo = $(this).val();
    var options = '<option value="">Nomes</option>';
    $(personagens).each((index, value) => {
            if (value.tipo == tipo) {
                options += '<option value="' + value.nome + '">' + value.nome + '</option>';
            }
        });    
    $('.nome').html(options);    
});

$(".nome").change(function () {
    var nome = $(this).val();
    var options = '<option value="">Falas</option>';
    $(personagens).each((index, value) => {
            if (value.nome == nome) {
                options += '<option value="' + value.falas[0] + '">' + value.falas[0] + '</option>';
                options += '<option value="' + value.falas[1] + '">' + value.falas[1] + '</option>';
                options += '<option value="' + value.falas[2] + '">' + value.falas[2] + '</option>';
            }
        });
    $('.fala').html(options);
});


$('.foto').change(function () {
    var foto = $('.foto :selected').text();      
    var personagemselecionado = $('.nome option:selected').val();
    var indice;   
    for (var i = 0; i < personagens.length; i++) {
        if (personagens[i].nome == personagemselecionado) {
            indice = i;
        }
    }
    if (foto == 'Foto 1') {
        $(".imagemDinamica").html('<img src="/img/' + personagens[indice].foto[0] + '.jpg" class="card-img-top"/>');
        imagemSelecionada = personagens[indice].foto[0];
        $('.foto :selected').val(personagens[indice].foto[0]);
        console.log($('.foto :selected').val());
    }
    if (foto == 'Foto 2') {
        $(".imagemDinamica").html('<img src="/img/' + personagens[indice].foto[1] + '.jpg" class="card-img-top"/>');
        imagemSelecionada = personagens[indice].foto[1]
        $('.foto :selected').val(personagens[indice].foto[1]);
        console.log($('.foto :selected').val());
    }
    if (foto == 'Foto 3') {
        $(".imagemDinamica").html('<img src="/img/' + personagens[indice].foto[2] + '.jpg" class="card-img-top"/>');
        imagemSelecionada = personagens[indice].foto[2];
        $('.foto :selected').val(personagens[indice].foto[2]);
        console.log($('.foto :selected').val());
    }    
   
})
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
