/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    const adjustDisplayArr = () => {
        fruits.splice(0, 1, "banana");
        fruits.splice(-1, 1, "kiwi");

        fruits.forEach((fruit) => {           
            const resNode = document.getElementById("result")
            let liNode = document.createElement("li");
            liNode.appendChild(document.createTextNode(fruit));
            resNode.appendChild(liNode);
        });
    }
 
    document.getElementById("run").addEventListener("click", adjustDisplayArr);

})();
