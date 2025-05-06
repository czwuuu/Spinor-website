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