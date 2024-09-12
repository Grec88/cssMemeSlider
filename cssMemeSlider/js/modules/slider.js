import { memeInfo } from "../../assets/data/memeInfo.js";

export const slider = () => {
  console.log(1)
  const cards = document.querySelector('.slider__cards');
  const buttons = document.querySelectorAll('.slider__control');
  const cardsDescription = document.querySelector('.slider__description');
  let currentCard = 0;

  const changeSliderDesc = (currentCard) => {

    cardsDescription.classList.add('hidden');
    setTimeout(() => {
      cardsDescription.textContent = `${memeInfo[currentCard]}`;
      cardsDescription.classList.remove('hidden');
    }, 500);
  }

  const openCard = (event) => {

    const cardWidth = cards.offsetWidth;
    console.log(1)
    currentCard = event.target.id;
    console.log(cardWidth)
    console.log(currentCard)
    changeSliderDesc(currentCard)
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