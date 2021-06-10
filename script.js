let darkMode = confirm('¿Quieres ver la página en modo nocturno?')
let bodyClass = document.querySelector('body')

if (darkMode) {
bodyClass.classList.toggle('dark');    
}

/* Para que se cambie constantemente.
setInterval(() => {
    body.classList.toggle('dark');
}, 3000)*/