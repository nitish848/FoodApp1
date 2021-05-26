const state = {};
const carouselList = document.querySelector('.card');
const carouselItems = document.querySelectorAll('.card-item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
  var newActive = event.target;
  var carouselItem = newActive.closest('.card-item');

  if (!carouselItem || newActive.classList.contains('carousel__item_active')) {
    return;
  };
  
  update(carouselItem);
});

const update = function(newActive) {
  const newActivePos = newActive.dataset.pos;

  const current = elems.find((elem) => elem.dataset.pos == 0);
  const prev = elems.find((elem) => elem.dataset.pos == -1);
  const next = elems.find((elem) => elem.dataset.pos == 1);
  const second = elems.find((elem) => elem.dataset.pos == -2);
  const secondlast = elems.find((elem) => elem.dataset.pos == 2);
  const first = elems.find((elem) => elem.dataset.pos == -3);
  const last = elems.find((elem) => elem.dataset.pos == 3);
  
  current.classList.remove('carousel__item_active');
  
  [current, prev, next,second, first,secondlast, last].forEach(item => {
    var itemPos = item.dataset.pos;

    item.dataset.pos = getPos(itemPos, newActivePos)
  });
};

const getPos = function (current, active) {
  const diff = current - active;

  if (Math.abs(current - active) > 3) {
    return -current
  }

  return diff;
}
