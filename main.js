const object1 = {
    a: 'somestring',
    b: "weird",
    c: "false",
    d: 'something else'
};
console.log(Object.keys(object1), Object.values(object1));
function search(term){
    term = term.toLowerCase();
    let postermk = [];
    let postermv = [];
    for (let key in object1) {
        //let letters = object1[key].split('');
        if (object1[key].includes(term)) {
            postermk.push(key);
            console.log(key);
        }
    }
    for (let i = 0; i < postermk.length; i++) {
        postermv.push(object1[postermk[i]]);
    }
    document.getElementById("searchResult").innerHTML = postermk, postermv;
}