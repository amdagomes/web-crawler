var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('https://canaltech.com.br/', function(erro, response, body){
    if(erro) console.log('Erro: ' + erro);

    var $ = cheerio.load(body);

    $('section.features .item-info').each(function(){
        var title = $(this).find('.title').text().trim();

        fs.appendFile('result.txt', 'Titulo: ' + title + '\n', function(){
            console.log('salvo');
        });
    });
});