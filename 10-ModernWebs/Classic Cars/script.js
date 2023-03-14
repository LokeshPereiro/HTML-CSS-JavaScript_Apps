document.querySelector('.menu').addEventListener('click', ()=> { //Escuchamos el click en el menu

    document.querySelectorAll('.target').forEach((item)=> { //Seleccionamos la clase target que encontremos

        item.classList.toggle("change"); //Añadimos la clase 'change' a los elementos que no la tiene, al mismo tiempo se lo quitamos a los elentos que sí la tienen
    })
});

//Selcciones
document.querySelectorAll('.wrapper').forEach((item)=> {
    item.addEventListener('click', ()=> {
        document.querySelectorAll('.target').forEach((item)=> { 

            item.classList.remove("change"); 
        })
    })
});//De esta manera, si damos  click en el menu se deplazarán las selcciones. Y si volvemos a dar click en la seccion, oculta el menu

const videos = document.querySelectorAll('.video');

videos.forEach((video)=> {
    video.addEventListener('mouseover', ()=> {
        video.play();
    })
    video.addEventListener('mouseout', ()=> {
        video.pause();
    })
});