export const slider = () => {
  console.log(1)
  const cards = document.querySelector('.slider__cards');
  const buttons = document.querySelectorAll('.slider__control');

  const openCard = () => {
    console.log(1)
    cards.style.marginLeft = `${-700}px`;
  }

  buttons.forEach(button => button.addEventListener('click', openCard));
}