const colores = ['bluesky', 'green', 'yellowgreen', 'pink', 'purple', 'orange', 'brown', 'black']

const btn = document.getElementById('btn')

btn.onclick = function(){
    document.body.style.backgroundColor = colores[Math.floor(Math.random()*colores.length)]
}