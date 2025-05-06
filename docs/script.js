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
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
            
            // 更新活动链接
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// 视差效果
window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    let scrollPosition = window.pageYOffset;
    parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});

// 粒子效果初始化
particlesJS('particles-js', {
    particles: {
        number: {
            value: 30,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#ffcc00' // 吃豆人经典黄色
        },
        shape: {
            type: 'circle',
            image: {
                src: 'assets/pacman.jpg',
                width: 32,
                height: 32
            }
        },
        opacity: {
            value: 1,
            random: false,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 16,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 8,
                sync: false
            }
        },
        line_linked: {
            enable: false
        },
        move: {
            enable: true,
            speed: 4,
            direction: 'right',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: true,
            attract: {
                enable: false
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'bubble'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 200,
                size: 10,
                duration: 2,
                opacity: 0.8,
                speed: 3
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// 自定义光标
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

cursor.style.backgroundImage = "url('assets/pacman.jpg')";
cursorFollower.style.backgroundImage = "url('assets/ghost.png')";

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.7)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
});

// 链接和按钮的光标效果
const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorFollower.style.borderColor = 'rgba(0, 255, 170, 0.5)';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.borderColor = 'rgba(0, 255, 170, 1)';
    });
});

// 滚动动画
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
reveal(); // 初始检查

// 滚动监听，更新导航活动状态
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200 && 
            window.pageYOffset < sectionTop + sectionHeight - 200) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
});

// GSAP动画
gsap.registerPlugin(ScrollTrigger);

// 标题动画
gsap.from('.glitch', {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

gsap.from('.subtitle', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

// 滚动触发动画
gsap.utils.toArray('.section:not(#home)').forEach(section => {
    gsap.from(section.querySelectorAll('h2, .content-box, .resources-grid'), {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });
});

// 添加图片预加载功能
function preloadImages() {
    const pacmanImg = new Image();
    pacmanImg.src = 'assets/pacman.jpg';
    
    const ghostImg = new Image();
    ghostImg.src = 'assets/ghost.png';
    
    pacmanImg.onload = function() {
        console.log('吃豆人图片加载成功');
        // 加载成功后可以切换粒子形状为图片
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.shape.type = 'image';
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    };
    
    ghostImg.onload = function() {
        console.log('幽灵图片加载成功');
    };
}

// 页面加载完成后执行预加载
window.addEventListener('load', preloadImages);

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 滚动动画
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight * 0.8) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始化容器样式
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(50px)';
        container.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // 首次加载时检查
    animateOnScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', animateOnScroll);
    
    // GSAP动画
    if (typeof gsap !== 'undefined') {
        gsap.from('.title', {
            duration: 1.5,
            y: 50,
            opacity: 0,
            ease: 'power4.out'
        });
        
        gsap.from('.subtitle', {
            duration: 1.5,
            y: 30,
            opacity: 0,
            ease: 'power4.out',
            delay: 0.5
        });
        
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
            
            gsap.utils.toArray('.section:not(#home)').forEach(section => {
                gsap.from(section.querySelectorAll('h2, .content-box, .resources-grid'), {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none none'
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.3,
                    ease: 'power3.out'
                });
            });
        }
    }
}); 