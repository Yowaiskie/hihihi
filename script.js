const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'I Love You Too :)';
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width));
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height));
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

// Update button positions when window is resized
window.addEventListener('resize', () => {
    const newWrapperRect = wrapper.getBoundingClientRect();
    noBtn.style.left = Math.min(parseInt(noBtn.style.left), newWrapperRect.width - noBtnRect.width) + 'px';
    noBtn.style.top = Math.min(parseInt(noBtn.style.top), newWrapperRect.height - noBtnRect.height) + 'px';
});
