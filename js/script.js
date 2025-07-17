const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
    mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
    mobileMenu.classList.toggle('hidden');
});
function openModal() {
    document.getElementById('modal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

function submitForm() {
    // Validación simple del formulario
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const vacante = document.getElementById('vacante').value;
    const cv = document.getElementById('cv').value;

    if (!nombre || !telefono || !email || !vacante || !cv) {
        alert('Por favor complete todos los campos del formulario.');
        return;
    }

    // Aquí iría la lógica para enviar el formulario
    alert('¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.');
    closeModal();

    // Resetear formulario
    document.querySelector('form').reset();
}

// Cerrar modal con ESC
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});