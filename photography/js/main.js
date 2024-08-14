document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        const togglescrollTop = function () {
            window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
        }
        window.addEventListener('load', togglescrollTop);
        document.addEventListener('scroll', togglescrollTop);
        scrollTop.addEventListener('click', window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }));
    }

});

var typing = new Typed(".description", {
    strings: ["based in queens, ny"],
    typeSpeed: 100,
    backSpeed: 40,
    // loop: true,
});

// const images = [
//     { src: 'images/IMG_1352.JPG', alt: 'Boat on Calm Water' },
//     { src: 'images/IMG_1353.JPG', alt: 'Wintry Mountain Landscape' },
//     { src: "images/IMG_1354.JPG" },
//     { src: "images/IMG_1360.JPG" },
//     { src: "images/IMG_1356.JPG" },
//     { src: "images/IMG_1357.JPG" },
//     { src: "images/IMG_1358.JPG" },
//     { src: "images/IMG_1359.JPG" },
//     { src: "images/IMG_1355.JPG" },
//     { src: "images/IMG_1361.JPG" },
//     { src: "images/IMG_1362.JPG" },
//     { src: "images/IMG_1368.JPG" },
//     { src: "images/IMG_1364.JPG" },
//     { src: "images/IMG_1365.JPG" },
//     { src: "images/IMG_1363.JPG" },
//     { src: "images/IMG_1367.JPG" },
//     { src: "images/IMG_1366.JPG" },
//     { src: "images/IMG_1369.JPG" },
// ];

// // const imageContainer = document.querySelector('.container-fluid .row');
// const imageContainer = document.getElementById('image-template');

// images.forEach(image => {
//     const imgElement = document.createElement('img');
//     imgElement.src = image.src;
//     imgElement.alt = image.alt;
//     imgElement.classList.add('w-100', 'shadow-1-strong', 'rounded', 'mb-4', 'thumbnail');

//     const colDiv = document.createElement('div');
//     colDiv.classList.add('col-lg-4', 'mb-0');
//     colDiv.appendChild(imgElement);

//     imageContainer.appendChild(colDiv);
// });
