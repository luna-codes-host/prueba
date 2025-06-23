document.getElementById('from-tarea'). addEventListener('submit',function (e){
    e.preventDefault();

    const nombre= document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const descripcion= document.getElementById('descripcion').value.trim();
    const tipo= document.getElementById('tipo').value;
    const prioridad = document.querySelector('input[name="prioridad"]:checked');

    if(!nombre || !fecha || !tipo || !prioridad){
        alert("Por favor completa los datos obligatorios.");
        return;
    }

    const tareaDiv = document.createElement('div');
    tareaDiv.className = 'tarea';

    tareaDiv.innerHTML=`
    <strong>${nombre}<strong> (${tipo})<br>
    Fecha: ${fecha} <br>
    Prioridad: ${prioridad.value}<br>
    <em>${descripcion}</em>
    `;

    document.getElementById('lista-tareas').appendChild(tareaDiv);

    document.getElementById('form-tarea').requestFullscreen();
});
