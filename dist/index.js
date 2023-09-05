"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/toto', (req, res) => {
    res.send("toto");
});
app.get('/date', (req, res) => {
    let today = new Date();
    let now = today.toLocaleDateString('en-US');
    res.send(today);
});
app.get('/thomas', (req, res) => {
    let t = { "name": "thomas" };
    res.send(t);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
