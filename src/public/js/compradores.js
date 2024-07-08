document.addEventListener('DOMContentLoaded', async function () {

    await fetch('http://localhost:3000/api/compradores') 
        .then(response => response.json())
        .then(data => {    
            const compradores = document.querySelector ("table")
            console.log("Producto ", data)
            data.forEach(comprador => {
                const compradorElement = document.createElement ('tr');
                compradorElement.innerHTML = `<td>${comprador.id}</td>
                        <td>${comprador.nombre}</td>
                        <td>${comprador.direccion}</td>
                        <td>${comprador.telefono}</td>
                        <td><a href="/admin/editCompradores.html?id=${comprador.id}"class="btnEdit">Editar</a></td>
                        <td><button> Borrar</button></td>`;
                compradores.appendChild(compradorElement)
                console.log(compradorElement);
            });

        })
        .catch(error => {
            console.error('Error:', error)
        });

    });