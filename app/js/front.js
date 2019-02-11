
function servicesFunctions() {

    const services = document.querySelectorAll('.services .card');
    const servicesImage = ['./app/img/design.jpg', './app/img/develop.jpg', './app/img/apps.jpg', './app/img/cursos.jpg'];
    const servicesAnimated = ['./app/img/design.gif', './app/img/develop.gif', './app/img/apps.gif', './app/img/cursos.gif'];


    for (let index = 0; index < services.length; index++) {
        services[index].addEventListener('mouseover', function () {
            animateOnHover(services[index], servicesAnimated[index]);
        });
        services[index].addEventListener('mouseleave', function () {
            staticOnLeave(services[index], servicesImage[index]);
        });
    }



    function animateOnHover(element, image) {
        element.querySelectorAll('.holder-image')[0].setAttribute('src', image);
    }

    function staticOnLeave(element, image) {
        element.querySelectorAll('.holder-image')[0].setAttribute('src', image);
    }

}

servicesFunctions();

