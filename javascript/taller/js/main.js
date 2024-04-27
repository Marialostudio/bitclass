'use strict'
console.log('Works!');

const d = document;
const $empleados = d.getElementById('empleados');
const $boton = d.getElementById('boton');

$boton.addEventListener('click', cambiarImagen);

async function cambiarImagen() {
    try {
        const respuesta = await fetch('https://random-d.uk/api/v2/random', {
            mode: 'cors'
          });
        const pato = await respuesta.json();
        console.log(pato);
        const $imagenAleatoria = d.getElementById('imagenAleatoria');
        $imagenAleatoria.setAttribute('src', pato.url);
        $imagenAleatoria.setAttribute('alt', pato.message);
    } catch (error) {
        console.log('Algo salió mal');
    }
}


async function obtenerEmpleados() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
        const empleados = await respuesta.json();
        console.log(empleados);
        let html = '';
        for (const empleado of empleados) {
            html += `
            <tr>
                <th scope="row">${empleado.id}</th>
                <td>${empleado.name}</td>
                <td>${empleado.email}</td>
                <td>${empleado.phone}</td>
                <td>${empleado.address.city}</td>
                <td>${empleado.company.name}</td>
            </tr>
            `;
        }
        $empleados.innerHTML = html;

    } catch (error) {
        console.log(error);        
    }
}

obtenerEmpleados();

