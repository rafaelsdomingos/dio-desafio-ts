"use strict";
// Como podemos melhorar o esse código usando TS?
//Podemos criar um enum para enumerar as profissões
var profissao;
(function (profissao) {
    profissao[profissao["Atriz"] = 0] = "Atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
    profissao[profissao["Desenvoledor"] = 2] = "Desenvoledor";
    profissao[profissao["Mec\u00E2nico"] = 3] = "Mec\u00E2nico";
})(profissao || (profissao = {}));
let pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.Atriz
};
let pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.Padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
};
