let cardNumber = 1

function cardGenerator(div) {
  let card = document.createElement('div');
  let front = document.createElement('div');
  let back = document.createElement('div');

  card.classList.add('card');
  card.classList.add('cursor-pointer');
  front.classList.add('face');
  front.classList.add('front');
  back.classList.add('face');
  back.classList.add('back');


  front.appendChild(document.createTextNode('X'));
  back.appendChild(document.createTextNode(cardNumber));
  
  cardNumber += 1;

  card.appendChild(front);
  card.appendChild(back);

  return div.appendChild(card);
};

const card = document.querySelectorAll('.cards');

card.forEach((item, index) => {
  if (index % 2) {
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
  } else {
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
    cardGenerator(item);
  };
});

const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
  card.addEventListener('click', (e)=> {
    card.classList.toggle('flip');
  });
});