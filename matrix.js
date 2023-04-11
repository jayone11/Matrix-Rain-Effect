let canvas = document.querySelector('canvas');

let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let str = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
let matrix = str.split('');
let font_size = 12;
let col = width / font_size;
let arr = [];

for (let i = 0; i < col; i++) {
    arr[i] = 1;
}

const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#00FF00';
    ctx.font_size = `${font_size}px system-ui`;

    for (let i = 0; i < arr.length; i++) {
        let text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, arr[i] * font_size);
        
        if (arr[i] * font_size > height && Math.random() > 0.985) {
            arr[i] = 0;
        }
        arr[i]++;
    }
}

setInterval(draw, 33);

// This is to reload the page when the window is resized
// window.addEventListener('resize', () => location.reload());





// class MatrixSystem {
//     constructor() {
//         this.rain = [];
//         for (let i = 0; i < 150; i++) {
//             this.rain.push(new MatrixCharacter());
//         }
//     }

//     update(date) {
//         this.rain.forEach(character => {
//             character.update(date);
//         });
//     }
// }

// class MatrixCharacter {
//     constructor() {
//         this.id = Math.random();
//         this.symbol = Math.random() < 0.9 ? '0' : '1';
//         this.position = { x: Math.random(), y: Math.random() };
//         this.birthdate = new Date();
//         this.speed = Math.random() * 0.1 + 0.05;
//         this.fontSize = Math.floor(Math.random() * 10) + 10;
//         this.color = Math.floor(Math.random() * 256 * 256 * 256);
//     }

//     update(date) {
//         this.position.y += this.speed;
//         if (this.position.y >= 1) {
//             this.position.y = 0;
//             this.birthdate = date;
//         }
//     }
// }

// const katakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
// const system = new MatrixSystem();

// function draw() {
//     const canvas = document.getElementById('matrix-canvas');
//     const context = canvas.getContext('2d');
//     const { width, height } = canvas;

//     // Set black background with opacity
//     context.fillStyle = 'rgba(0, 0, 0, 0.1)';
//     context.fillRect(0, 0, width, height);

//     system.update(new Date());
//     system.rain.forEach(character => {
//         const age = new Date().getTime() - character.birthdate.getTime();

//         context.font = `${character.fontSize}px Arial`;
//         context.fillStyle = '#0F0'; // Green color
//         context.fillText(katakana[Math.floor(Math.random() * katakana.length)], character.position.x * width, height - (height * character.position.y) - (age * character.speed));
//     });

//     requestAnimationFrame(draw);
// }


// window.addEventListener('load', () => {
//     const canvas = document.getElementById('matrix-canvas');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     draw();
// });
