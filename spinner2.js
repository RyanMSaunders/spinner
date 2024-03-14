
const spinnerArray = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', "\n" ];

let x = -100;
for (let val of spinnerArray) {
  x += 200;
  setTimeout(() => {
    process.stdout.write(`\r${val}   `);
  }, x);

}