export const slider = () => {
  console.log(1)
  const cards = document.querySelector('.slider__cards');
  const buttons = document.querySelectorAll('.slider__control');
  let currentCard = 0;

  const openCard = (event) => {
    const cardWidth = cards.offsetWidth;
    console.log(1)
    currentCard = event.target.id;
    console.log(cardWidth)
    console.log(currentCard)

    cards.classList.add('animate-margin');
    cards.style.marginLeft = `${-cardWidth * (currentCard)}px`;
  }

  const changeLeftMargin = () => {
    const cardWidth = cards.offsetWidth;
    console.log(cardWidth)

    cards.classList.remove('animate-margin');
    cards.style.marginLeft = `${-cardWidth * (currentCard)}px`;
  }

  buttons.forEach(button => button.addEventListener('click', openCard));
  window.addEventListener('resize', changeLeftMargin);
}