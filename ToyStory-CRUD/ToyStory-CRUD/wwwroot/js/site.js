var personagens = [
    { tipo: 'Humano', nome: 'Andy Davis', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['andy1', 'andy2', 'andy3'] },
    { tipo: 'Humano', nome: 'Sra. Davis', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['sraDavis1', 'sraDavis2', 'sraDavis3'] },
    { tipo: 'Humano', nome: 'Molly Davis', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['molly1', 'molly2', 'molly3'] },
    { tipo: 'Humano', nome: 'Sid Phillips', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['sid1', 'sid2', 'sid3'] },
    { tipo: 'Humano', nome: 'Hannah Phillips', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['hannah1', 'hannah2', 'hannah3'] },
    { tipo: 'Humano', nome: 'Al McWhiggin', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['mcwhiggin1', 'mcwhiggin2', 'mcwhiggin3'] },
    { tipo: 'Humano', nome: 'Bonnie Anderson', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['bonnie1', 'bonnie2', 'bonnie3'] },
    { tipo: 'Humano', nome: 'Sra. Anderson', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['sraAnderson1', 'sraAnderson2', 'sraAnderson3'] },
    { tipo: 'Humano', nome: 'Geri', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['geri1', 'geri2', 'geri3'] },

    { tipo: 'Brinquedo', nome: 'Xerife Woody Pride', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['woody1', 'woody2', 'woody3']},
    { tipo: 'Brinquedo', nome: 'Buzz Lightyear', falas: ['Ao infinito e além!', 'Isto não é voar. Isto é cair, com estilo!', 'Nunca duvidei de mim mesmo, Comandante.'], foto: ['buzzlightyear1', 'buzzlightyear2', 'buzzlightyear3'] },
    { tipo: 'Brinquedo', nome: 'Jessie', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['jessie1', 'jessie2', 'jessie3'] },
    { tipo: 'Brinquedo', nome: 'Sr. Cabeça de Batata', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['srCabeca1', 'srCabeca2', 'srCabeca3'] },
    { tipo: 'Brinquedo', nome: 'Rex', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['rex1', 'rex2', 'rex3'] },
    { tipo: 'Brinquedo', nome: 'Slinky', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['slinky1', 'slinky2', 'slinky3'] },
    { tipo: 'Brinquedo', nome: 'Porquinho', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['porquinhp1', 'porquinho2', 'porquinho3'] },
    { tipo: 'Brinquedo', nome: 'Betty', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['betty1', 'betty2', 'betty3'] },
    { tipo: 'Brinquedo', nome: 'Sargento', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['sargento1', 'sargento2', 'sargento3'] },   
    { tipo: 'Brinquedo', nome: 'Wheezy', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['wheezy1', 'wheezy2', 'wheezy3'] },
    { tipo: 'Brinquedo', nome: 'Barbie', falas: ['Meu nome é Xerife Woody!', 'Puxa, que bom ver você!', 'Você é meu delegado preferido'], foto: ['barbie1', 'barbie2', 'barbie3'] },
   
    { tipo: 'Animal', nome: 'Buster', falas: [], foto: ['buster1', 'buster2', 'buster3'] },
    { tipo: 'Animal', nome: 'Brutus', falas: [], foto: ['butus1', 'brutus2', 'brutus3'] }
]

                                                       // POPULANDO SELECT NOME DE ACORDO COM O SELECT TIPO

$(".tipo").change(function () {
    $(".fala").html("");
    var tipo = $(this).val();
    if (tipo == 'Animal') {
        console.log(tipo);
        $('.fala').prop('disabled', true);
    }
    else {
        $('.fala').prop('disabled', false); 
    }

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
    }
    if (foto == 'Foto 2') {
        $(".imagemDinamica").html('<img src="/img/' + personagens[indice].foto[1] + '.jpg" class="card-img-top"/>');
        imagemSelecionada = personagens[indice].foto[1]
        $('.foto :selected').val(personagens[indice].foto[1]);       
    }
    if (foto == 'Foto 3') {
        $(".imagemDinamica").html('<img src="/img/' + personagens[indice].foto[2] + '.jpg" class="card-img-top"/>');
        imagemSelecionada = personagens[indice].foto[2];
        $('.foto :selected').val(personagens[indice].foto[2]);        
    }  
})
                                                          // Adicionando nome, fala e tipo no card
$(".tipo").change(function () {
    $(".tipoSelecionado").html($('.tipo option:selected').val());
});

$(".nome").change(function () {
    $(".nomeSelecionado").html($('.nome option:selected').val());
});

$(".fala").change(function () {
    $(".falaSelecionada").html($('.fala option:selected').val());
})
