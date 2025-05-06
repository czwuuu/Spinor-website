// 这里可以添加一些动态效果，比如滚动时的动画
document.addEventListener('scroll', () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;
        if (slideTop < window.innerHeight * 0.75) {
            slide.style.opacity = 1;
            slide.style.transform = 'translateY(0)';
        }
    });
});

// 初始化AOS动画库
AOS.init({
    duration: 800,
    once: true
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 视差效果
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
}); 