const a = document.querySelector('a');

a.addEventListener('click', (e) => {
    console.log({e});
    if(!confirm('etes vous sur de vouloir quitter la page ?'))
        e.preventDefault()
})

const ol = document.querySelector('#numbers');
        ol.addEventListener(
            'click',
            (e) => {
                // console.log(e);
                e.target.style.color =
                  e.target.style.color == "red" ? "yellow" : "red";
            }
        )
const body = document.querySelector('body');

body.addEventListener('dblclick', (e) => {
    e.target.parentNode.removeChild(e.target)
})

