window.addEventListener('resize', function() {
    console.log('Window width:', window.innerWidth);
    console.log('Window height:', window.innerHeight);
});


//task21//
document.addEventListener('DOMContentLoaded', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    scrollToTopBtn.addEventListener('click', scrollToTop);
});

//task22//
document.addEventListener('DOMContentLoaded', function() {
    let preventLink = document.getElementById('preventLink');
    function preventDefaultAndDisplayMessage(event) {
        event.preventDefault(); 
        alert('Default link behavior prevented!');
    }
    preventLink.addEventListener('click', preventDefaultAndDisplayMessage);
});

//task23//
document.addEventListener('DOMContentLoaded', function() {
    var elementWithTooltip = document.getElementById('elementWithTooltip');
    var tooltip = document.getElementById('tooltip');
    function showTooltip() {
        tooltip.style.display = 'block';
    }
    function hideTooltip() {
        tooltip.style.display = 'none';
    }
    elementWithTooltip.addEventListener('mouseenter', showTooltip);
    elementWithTooltip.addEventListener('mouseleave', hideTooltip);
});


