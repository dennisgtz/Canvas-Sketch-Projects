const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080],
  // pixelsPerInch: 300,
  // orientation: 'landslide'
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'blue';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;


    const width = width * 0.10;
    const height = height * 0.10;
    const gap = width * 0.03; 
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02; 

    let x, y;

    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
        x = 100 + (width + gap) * i;
        y = 100 + (height + gap) * j;

        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        if(Math.random() > 0.5) {
          context.beginPath();
          contect.rect(x + 8, y + 8, height - 16,width - 16);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
