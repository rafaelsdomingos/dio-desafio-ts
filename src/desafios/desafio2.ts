// Como podemos melhorar o esse código usando TS?


//Podemos criar um enum para enumerar as profissões
enum profissao{
    Atriz,
    Padeiro,
    Desenvoledor,
    Mecânico
}

//Podemos criar um tipo pessoa para determinar os atributos
type pessoa = {
    nome: string,
    idade: number,
    profissao?: profissao
}

let pessoa1: pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.Atriz
};


let pessoa2: pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.Padeiro
};

let pessoa3: pessoa = {
    nome: "laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4: pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.Padeiro
}