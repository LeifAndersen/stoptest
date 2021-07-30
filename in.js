const prog = `
for(let i = 0; i < 100000000000; i++) {
  if(i%10000000 === 0) {
    console.log(i);
  }
}
`;

window.stopify = require('@stopify/stopify');
let runner = stopify.stopifyLocally(prog);
runner.g = {console};
runner.run(() => {
    console.log("DONE!");
});
setTimeout(() => {
    console.log("Pausing...");
    runner.pauseImmediate(() => {console.log("PAUSED");});
}, 3000);
