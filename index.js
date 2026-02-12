// console.log(1);

// setTimeout(
//     () => {
//         console.log(2)
//     },
//     0
// )

// console.log(3);

// t = [1, 12, 11, 4];

// console.log(t.sort(
//     (a,b) => a-b
// ));

const lampe = document.querySelector('.lampe')

setInterval(
    () => {
        lampe.classList.toggle('on')
        lampe.classList.toggle('off')
    },
    1500
)

const regions = ['Djerba', 'Kasserine', 'Sfax', 'Sousse', 'Kef', 'Gafsa', 'Bizerte','Tataouin']
const ol = document.querySelector('.regions');
let index = 0;
setInterval(() => {
    if(!(index%regions.length)) {
        ol.innerHTML = '';
    }
    let actualRegion = document.createElement('li');
    actualRegion.innerHTML = regions[index % regions.length];
    index++;
    ol.insertBefore(actualRegion,ol.firstChild);
}, 1500)