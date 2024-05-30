//carrusel modificado

const miCarrusel = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(miCarrusel, {
  interval: 3000,
  ride: true,
  pause: false
})

miCarrusel.addEventListener('slide.bs.carousel', function(){
    //console.log('Se muestra un slide');
    //document.getElementById('veces').innerText = 
   //document.getElementById('contador').innerHTML += '<p> Ha pasado el slide </p>'
})

//Funcion modal para manipular los eventos

const miVentanaEmergente = document.getElementById('ventanaEmergente');

// Agregar un observador sobre el modal

miVentanaEmergente.addEventListener('show.bs.modal', function(event){
      console.log('Se está abriendo el modal');

      //reconocer el elemento que habilita el evento modal 

      let boton = event.relatedTarget //etiquetado relacionado

      let mensaje = boton.getAttribute('data-titulo') //sacando el valor definido en data-titulo

      let  contenido = boton.getAttribute('data-contenido')
      
      document.getElementById('tituloModal').innerText = mensaje

      document.querySelector('.modal-body').innerHTML = contenido

      


    })

miVentanaEmergente.addEventListener('shown.bs.modal', function(){
  console.log('Está abierto el modal');
})

miVentanaEmergente.addEventListener('hide.bs.modal', function(){
  console.log('Se está cerrando el modal');
})

miVentanaEmergente.addEventListener('hidden.bs.modal', function(){
  console.log('Está cerrado el modal');
})
