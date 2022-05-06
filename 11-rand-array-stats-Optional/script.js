/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const numArr = [
        25,
        36,
        45,
        12,
        36,
        98,
        24,
        25,
        69,
        2
    ];

    document.getElementById("run").addEventListener("click", () => {
        
        numArr.forEach((num, index) => {
            let currId = "n-" + (index + 1).toString();
            let value = num.toString();
            document.getElementById(currId).innerText = value;
        });

        document.getElementById("min").innerText = Math.min(...numArr);
        document.getElementById("max").innerText = Math.max(...numArr);
        const sum = numArr.reduce((prev, next) => prev + next, 0);
        document.getElementById("sum").innerText = sum;
        document.getElementById("average").innerText = sum / numArr.length;

    });

})();
