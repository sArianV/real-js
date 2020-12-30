# Real-js

----
  _La idea fue hacer un sistema para gestionar productos y las ventas. El cliente puede cargar su producto, a cuando lo compro y de ahi le calculamos las ganancias y estadisticas de las ventas. Esa informacion la enviamos al servidor y calculamos el promedio de todos los que usan el sistema para informarle al cliente si lo esta vendiendo muy barato o caro._

* **URL**

  _/article-delete/:id_

* **Method:**

   `POST` 

*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**
  
  * **Code:** 200 
    **Content:** `{status: 'success', article: articleRemoved}`
 
* **Error Response:**

  * **Code:** 404 Not Found
    **Content:** `{status: 'error',message: 'No se ha podido borrar el articulo, no existe'}`

  OR

  * **Code:** 500 Server Error
    **Content:** `{status: 'error',message: 'Error al borrar'}`

#### https://gist.github.com/iros/3426278