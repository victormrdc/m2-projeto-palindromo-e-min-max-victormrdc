function isPalindrome(palavraFrase) {
    palavraFrase = palavraFrase.replace(/\s+/g, "").toLowerCase();

    for (let i = 0, y = palavraFrase.length - 1; i < y; i++, y--) {
        if (palavraFrase[i] !== palavraFrase[y]) {
            return false;
        }
    }
    return true
}

/* 
Esse trecho de código em específico "/\s+/g", quem me ajudou 
foi o Chatgpt, acredito não ter visto algo sobre isso no conteúdo escrito ou 
nos vídeos(acredito que seja até propositalmente, para nos fazer buscar por
conteúdos fora da plataforma), enfim, só estou dizendo por descargo de consciência. 
(obs: agora eu sei que é usada para identificar e manipular espaços em branco nas strings).
*/

function arrayMaxMin(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        } if (array[i] > max) {
            max = array[i];
        }
    }

    return [min, max];
}

console.log(arrayMaxMin([1, 52, 59, 16, 13, 9]));
console.log(arrayMaxMin([2, 30, 33, 11, 51, 56]));
console.log(arrayMaxMin([35, 9, 10, 58, 55, 44]));
console.log(arrayMaxMin([52, 58, 47, 31, 37, 5]));
console.log(arrayMaxMin([16, 11, 13, 35, 49, 50]));
console.log(arrayMaxMin([59, 57, 28, 22, 13, 5]));