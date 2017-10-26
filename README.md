# iu-ejercicio1
Interfaces Usuarios Ejercicio #1: Página básica

User interfaces first assignment. Create a webpage using HTML and CSS

#### Todo:
* Al dar al botón “guardar” se almacenará una cookie con el correo electrónico y
toda la información contenida en el formulario. Si ya existe una cookie con el
mismo correo electrónico, se comprobará si alguna información contenida en
los campos ha sido modificada. En caso afirmativo se enseñará una caja de
dialogo modal informando del cambio, mientras que en caso negativo se
comunicará que no ha habido cambios.

* on the above note, that's why I made the variable `originalCookie`
* You'll notice than when you click submit, the modal window pops up. the page gets reloaded, and the url contains all sorts of form information. Constraint validation (putting things like required, or type=email in the input tag) only happen on submit, but submit requires an action (usually php). This is where I'm stuck
