//task #6
;(function() {
  var imgArr = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
  var currentSlide = 0;

  showNextSlide();
  showCurrentSlide();
  showNextSlide();
  showCurrentSlide();
  showPreviousSlide();
  showCurrentSlide();
  showPreviousSlide();
  showCurrentSlide();
  showNthSlide(-1);
  showCurrentSlide();
  insertSlide({image: 'something.jpg', alt: 'Something'}, 5);
  console.log(imgArr);
  showNthSlide(0);
  showCurrentSlide();
  deleteSlide(0);
  showCurrentSlide();
  console.log(imgArr);

  function showNextSlide() {
    if (currentSlide === imgArr.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    return currentSlide;
  }

  function showPreviousSlide() {
    if (currentSlide === 0) {
      currentSlide = imgArr.length - 1;
    } else {
      currentSlide--;
    }
    return currentSlide;
  }

  function showNthSlide(number) {
    if (imgArr.indexOf(number) === -1) {
      console.log("There is no such number");
      if (number < 0) {
        currentSlide = 0;
      } else {
        currentSlide = imgArr.length - 1;
      }
    } else {
      currentSlide = number;
    }
    return currentSlide;
  }

  function showCurrentSlide() {
    console.log(imgArr[currentSlide]);
  }

  function insertSlide(obj, position) {
    if (position < 0) {
      imgArr.unshift(obj);
      currentSlide++;
    }
    else if (position < currentSlide) {
      imgArr.splice(position, 0, obj);
      currentSlide++;
    } else {
      imgArr.splice(position, 0, obj);
    }
  }

  function deleteSlide(position) {
    if (position < 0) {
      if (currentSlide > 0) {
        imgArr.shift();
        currentSlide--;
      } else {
        imgArr.shift();
      }
    } else if (position > imgArr.length - 1) {
      imgArr.pop();
    } else {
      console.log('second');
      if (position < currentSlide && currentSlide > 0) {
        imgArr.splice(position, 1);
        currentSlide--;
      } else {
        if (currentSlide === imgArr.length - 1) {
          imgArr.splice(position, 1);
          currentSlide--;
        } else {
          imgArr.splice(position, 1);
        }
      }
    }
  }
}());

