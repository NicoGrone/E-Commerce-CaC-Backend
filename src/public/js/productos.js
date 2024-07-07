document.addEventListener('DOMContentLoaded', async function () {

    await fetch('http://localhost:3000/api/productos/listar') 
        .then(response => response.json())
        .then(data => {    
            const productos = document.querySelector ("table")
            console.log("Producto ", data)
            data.forEach(producto => {
                const productoElement = document.createElement ('tr');
                productoElement.innerHTML = `<td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.descripcion}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.stock}</td>
                        <td><a href="/editProductos.html?id" class="btnEdit" >Editar</a></td>
                        <td><button> Borrar</button></td>`;
                productos.appendChild(productoElement)
            });

        })
        .catch(error => {
            console.error('Error:', error)
        });

    });