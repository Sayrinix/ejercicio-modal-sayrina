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