function toggleSignUp() {
    const signUpForm = document.getElementById('signUpForm');
    signUpForm.classList.toggle('open');
}

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const track = document.querySelector('.carousel-track');
const itemWidth = items[0].offsetWidth + 30; // Including margin

function showNextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    const offset = -currentIndex * itemWidth;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(${offset}px)`;

    if (currentIndex === totalItems - 5) {
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(0)';
            currentIndex = 0;
        }, 500);
    }
}

setInterval(showNextItem, 2000);

function scrollDown() {
    window.scrollBy({
        top: 740,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('myChart').getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(10, 77, 124, 0.8)'); // #0A4D7C in rgba
    gradient.addColorStop(1, 'rgba(1, 31, 71, 0.8)');  // #011F47 in rgba  
    
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'High',
                data: [3, 2, 2, 3, 4, 5, 4],
                backgroundColor: gradient,
                borderColor: 'rgba(1, 30, 70, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Medium',
                data: [2, 3, 3, 2, 3, 4, 3],
                backgroundColor: gradient,
                borderColor: 'rgba(7, 60, 105, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }, {
                label: 'Low',
                data: [1, 2, 1, 2, 2, 3, 2],
                backgroundColor: gradient,
                borderColor: 'rgba(52, 105, 143, 1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                x: {
                    display: false // Hide x-axis grid
                },
                y: {
                    display: false, // Hide y-axis grid
                    beginAtZero: true
                }
            },
            elements: {
                point: {
                    radius: 0 // Hide points
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                },
                tooltip: {
                    enabled: true,
                    mode: 'index',
                    intersect: false
                }
            }
        }
    });
});

function showBubble(index, button) {
    const bubbles = document.querySelectorAll('.bubble');
    const adviceText = document.getElementById('advice-text');

    bubbles.forEach(bubble => bubble.style.display = 'none');
    adviceText.style.display = 'none';

    if (index === 5) {
        adviceText.style.display = 'block';
    } else {
        document.getElementById(`bubble-${index}`).style.display = 'block';
    }

    const buttons = document.querySelectorAll('.button-rect');
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}

let lastScrollTop = 0;
const fixedHeader = document.getElementById('fixedHeader');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down
        if (scrollTop > 100) { // Adjust this value if needed
            fixedHeader.style.top = '0';
        }
    } else {
        // Scroll up
        fixedHeader.style.top = '-80px'; // Adjust based on your fixed header height
    }

    if (scrollTop <= 0) {
        // At the top of the page
        fixedHeader.style.top = '0';
    }

    lastScrollTop = scrollTop;
});
