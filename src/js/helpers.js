let timeout = function(sec) { return new Promise(function(a, b) { setTimeout(function() { b(new Error(`Request took to long! Timeout after ${sec} seconds!`)); }, sec * 1000); }); };


/* In caz de succes ne returneaza o 'Fullfied Promise' ce are ca valoare o variabila 'object' ce urmeaza sa o folosim in folderul 'model.js'. */
export let getJSON = async function(url) {
    try {
        let response = await Promise.race([fetch(url), timeout(10)]);
        let object = await response.json();
        if (object.results === 0) throw new Error('We have no results for this product!');
        return object;
    } catch(err) {
        console.log("Error in getJSON() function from 'helpers.js'!");
        throw err;
    }
};