
document.addEventListener('DOMContentLoaded', function () {
    const firstPhoto = document.querySelector('.title-with-img__photo');
    const container = document.querySelector('.titles');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            const target = entry.target;

            if (entry.isIntersecting) {
                // If the element is intersecting and not currently animated, add the 'animate' class
                if (!container.classList.contains('animate')) {
                    container.classList.add('animate');
                }
            } else {
                // If the element is not intersecting and currently animated, remove the 'animate' class
                if (container.classList.contains('animate')) {
                    container.classList.remove('animate');
                }
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    observer.observe(container);
});
// document.addEventListener('DOMContentLoaded', function () {
    
//     const firstPhoto = document.querySelector('.composition__photo');
//     const allPhotos = document.querySelectorAll('.composition__photo');


//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             const target = entry.target;
//             if (entry.isIntersecting) {
//                 // If the element is intersecting and not currently animated, add the 'animated' class
//                 if (!target.classList.contains('animate')) {
//                     allPhotos.forEach(photo => photo.classList.add('animate'));
//                 }
//               } else {
//                 if (target.classList.contains('animate')) {
//                     allPhotos.forEach(photo => photo.classList.remove('animate'))
//                 }
//               }
//         });
//     }, { threshold: 0.5 }); // Adjust the threshold as needed

//      observer.observe(firstPhoto);
// });
