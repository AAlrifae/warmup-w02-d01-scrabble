// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
const word = {
    e:1, a:1, i:1, o:1, n:1, r:1, t:1, l:1, s:1, u:1,
    d:2, g:2,
    b:3, c:3, m:3, p:3,
    f:4, h:4, v:4, w:4, y:4,
    k:5,
    j:8, x:8,
    q:10, z:10,
}
const scrabble = function(text){
total = 0;
wordsToLowerCase = text.toLowerCase();
splitWord = wordsToLowerCase.splt('');
    for (var splitWord in word) {
      total += word[key];
        console.log(total);        
}
}

