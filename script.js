const placementConfig = {
  2: ['two-end', 'eight-end'],
  3: ['two-end', 'five', 'eight-end'],
  4: ['one', 'three', 'ten', 'eleven'],
  5: ['one', 'three', 'five', 'ten', 'eleven'],
  6: ['one', 'three', 'four-center', 'six-center', 'ten', 'eleven'],
  7: ['one', 'two', 'three', 'four-center', 'six-center', 'ten', 'eleven'],
  8: [
    'one',
    'two',
    'three',
    'four-center',
    'six-center',
    'eight',
    'ten',
    'eleven',
  ],
  9: ['one', 'three', 'four', 'five', 'six', 'seven', 'nine', 'ten', 'eleven'],
  10: [
    'one',
    'two',
    'three',
    'four',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
  ],
};

const cards = document.querySelectorAll('.card');

cards.forEach(addCardElements);

function addCardElements(card) {
  const value = card.dataset.value;

  const valueAsNumber = parseInt(value);
  if (isNaN(valueAsNumber)) {
    card.append(createPip());
  } else {
    for (let i = 0; i < valueAsNumber; i++) {
      const positions = placementConfig[value];
      const pipPosition = positions[i];
      card.append(createPip(pipPosition));
    }
  }

  card.append(createCornerNumber('top', value));
  card.append(createCornerNumber('bottom', value));
}

function createCornerNumber(position, value) {
  const corner = document.createElement('div');
  corner.textContent = value;
  corner.classList.add('corner-number');
  corner.classList.add(position);
  return corner;
}

function createPip(position) {
  const pip = document.createElement('div');
  pip.classList.add('pip');
  pip.classList.add(position);
  return pip;
}
