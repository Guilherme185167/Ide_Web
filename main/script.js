// document.querySelectorAll('.menu').forEach(menu => {
//     menu.addEventListener('click', () => {
//         // document.querySelectorAll('.menu').forEach(m => m.classList.remove('grande'));

//         menu.classList.toggle('grande');
//     });
// });
function ativarMenu(id) {
    const menuClicado = document.getElementById(id);
    const jaExpandido = menuClicado.classList.contains('grande');

    // Recolhe todos os menus
    document.querySelectorAll('.menu').forEach(menu => {
        menu.classList.remove('grande');
    });

    // Se não estava expandido, expande agora
    if (!jaExpandido) {
        menuClicado.classList.add('grande');
    }
}
document.querySelectorAll('.sub').forEach(sub => {
    sub.addEventListener('click', function(event) {
        event.stopPropagation();
        // Aqui você pode adicionar lógica do submenu, se quiser
        console.log('Submenu clicado!');
    });
});