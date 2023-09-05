/*
import {readJsonSync,writeJsonSync} from "fs-extra"
////////////////////////////////////////////////////
if(process.argv[0] === "--help")
{
    console.log("je vais vous aider")
}
else if (process.argv[0] = "--name")
{
    console.log ("Bonjour " , process.argv[2])
}
///////////////////////////////////////////////////
interface IPersonne{
    nom:string,
    prenom:string,
    age:number,
    sexe:string
}

const p:IPersonne = {
    
    nom:"Ferrad",
    prenom:"Jordan",
    age:32,
    sexe:"masculin"
}
console.log(p)
const p2 = {...p}
p2.nom = "Laforge"
p2.prenom = "Thomas"
console.log(p2)
///////////////////////////////////////////////////
writeJsonSync('./personne.json', JSON.stringify(p))
console.log(JSON.parse(readJsonSync("./personne.json" )))
//////////////////////////////////////////////////
writeJsonSync('./personne.json', p)
console.log(readJsonSync("./personne.json" ))
*/

import express  from 'express'
const app = express()
const port = 3000

app.get('/toto', (req, res) => {
  console.log("toto")
  res.send("toto")
})


app.get('/date', (req, res) => {
  let today = new Date();
  let now = today.toLocaleDateString('en-US');
  res.send(today)
})

app.get('/thomas', (req, res) => {
  let t = JSON.stringify({"name":"thomas"})
  res.send(t)
})

import fs from "fs-extra"
app.get('/files', (req, res) => {
  fs.writeFileSync("./toto.txt" , "testestestest")
  res.send("right file done ok")
})

app.get('/range/:min/:max', (req, res) => {

  let min = parseInt(req.params.min);
  let max = parseInt(req.params.max);
  res.send(Math.floor(Math.random() * (max - min) + min).toString())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})