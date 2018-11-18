const axios = require('axios')
var inquirer = require('inquirer')
var fs = require ('file-system')

var input =  [{type: 'input',
                    name: 'ville',
                    message: 'choisir le nom de votre ville',}]

blabla()

function blabla(){
    inquirer.prompt(input)
        .then(answers => {
        var cityname = answers.ville 
        var meteo = 'http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&apikey=71f44a7259695752c1d54a7c31618579'
        axios.get (meteo)
        .then(reponse => {
            console.log(reponse.data.main);
            blabla()
        })
        .catch(p => {
            console.log('error',p);
            blabla()
        }) 
        console.log(meteo);
        
    });
}