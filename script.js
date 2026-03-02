/**
 * Shymkent Cycling Community - Interactive Logic
 */

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

const formData = {
    age: '',
    style: ''
};

function selectChip(type, value) {
    const groupId = type === 'age' ? 'ageGroup' : 'styleGroup';
    const chips = document.querySelectorAll(`#${groupId} .chip`);

    chips.forEach(chip => {
        if (chip.textContent === value) {
            chip.classList.add('active');
        } else {
            chip.classList.remove('active');
        }
    });

    formData[type] = value;
}

function submitToWhatsapp() {
    const name = document.getElementById('userName').value.trim();
    const adminPhone = '77083447253';

    if (!name) {
        alert('Пожалуйста, введите ваше имя');
        return;
    }
    if (!formData.age) {
        alert('Пожалуйста, выберите ваш возраст');
        return;
    }
    if (!formData.style) {
        alert('Пожалуйста, выберите ваш стиль катания');
        return;
    }

    const message = `Привет меня зовут ${name} , мне ${formData.age} лет, я катаю ${formData.style}.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

// Close modal when clicking outside the content
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Parallax effect removed per user request

// Subtle reveal animation for gallery items
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.photo-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(item);
});
