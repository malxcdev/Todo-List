
document.addEventListener('DOMContentLoaded',()=> {
    //variables
    const inputTarea = document.getElementById('inputTarea')
    const btnNuevaTarea = document.getElementById('btnNuevaTarea')
    const btnRegistrar = document.getElementById('btnRegistrar')
    const overlay = document.getElementById('overlay')
    const nuevaTarea = document.getElementById('nuevaTarea')
    const btnClose = document.getElementById('btnClose')
    const contenedorTareas = document.getElementById('contenedorTareas')
    
    //Manejador para sacar popup para crear nueva tarea
    btnNuevaTarea.addEventListener('click', ()=>{
        overlay.classList.remove('hidden')
        nuevaTarea.classList.remove('hidden')
    })

    //Manejador para cerrar popup
    btnClose.addEventListener('click', ()=>{
        overlay.classList.add('hidden')
        nuevaTarea.classList.add('hidden')
    })

    //Manejador para poner check en las tareas
    contenedorTareas.addEventListener('click', (e)=>{
        const check = e.target.closest('.check')
        if(!check) return
        const itemTarea = check.parentElement;
        const icono = check.querySelector('.icono')
        const titulo = itemTarea.querySelector('.tareaTitulo')
        console.log(itemTarea);

        itemTarea.classList.toggle('completed')

        if(itemTarea.classList.contains('completed')){
            icono.className = 'icono fa-solid fa-circle-check'
            titulo.className = 'completed-text tareaTitulo'
        }else{
            icono.className = 'icono fa-regular fa-circle-check'
            titulo.className = 'tareaTitulo'
        } 
    })

    //Manejador para crear Tareas
    btnRegistrar.addEventListener('click', ()=>{
        let texto = inputTarea.value
        let contenido = `
        <li>
              <div class="tareaContenedor">
                <h3 class="tareaTitulo">
                  ${texto}
                </h3>
                <p class="tareaContenido">Crypto Wallet Redesign</p>
              </div>
              <span class="check"><i class="icono fa-regular fa-circle-check"></i></span>
            </li>
        
        `
        contenedorTareas.innerHTML += contenido
        overlay.classList.add('hidden')
        nuevaTarea.classList.add('hidden')

        inputTarea.value = ''
    })



})