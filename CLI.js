const axios = require('axios')
var inquirer = require('inquirer')
var fs = require ('file-system')
var util = require('util')

var input = [{type: 'input',
name: 'ville',
message: 'choisir le nom de votre ville',}]

appelMeteo()

function appelMeteo(){
inquirer.prompt(input)
.then(answers => {
var cityname = answers.ville 
var meteo_url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&apikey=71f44a7259695752c1d54a7c31618579'
axios.get (meteo_url)
.then(reponse => {
console.log(reponse.data.main);
var meteo_ville = reponse.data
ecrireFichier(meteo_ville)
appelMeteo()
})
.catch(p => {
console.log('error',p);
appelMeteo()
}) 
console.log(meteo_url);

});
}

function ecrireFichier(meteo_ville){
var nomFichier = 'resultat_meteo.txt'
try{
fs.writeFile(nomFichier, util.inspect(meteo_ville), (err) => {
if (err) throw errconsole.log('[ERROR] : ' + err)
})
} catch (err){
console.error('[ERROR]',err)
}
}