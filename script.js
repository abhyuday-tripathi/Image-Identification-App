Webcam.set({
  width: 350,
  height: 300,
  image_format: 'png',
  png_quality: 90,
});

Webcam.attach('#webcam-container');

const takeSnapshot = () => {
  Webcam.snap((data_uri) => {
    document.getElementById(
      'output'
    ).innerHTML = `<img src="${data_uri}" id="img" />`;
  });
};

console.log('ml 5 version :', ml5.version);

const modelLoaded = () => console.log('Model loaded');

const classifier = ml5.imageClassifier(
  'https://teachablemachine.withgoogle.com/models/eA8kqJSzw/model.json',
  modelLoaded
);

const check = () => {
  image = document.getElementById('img');
};
