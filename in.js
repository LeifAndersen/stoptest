const prog = `
console.log("Hello World!");
`;

window.stopify = require('@stopify/stopify');
let runner = stopify.stopifyLocally(prog);
runner.g = {console};
runner.run(() => {
    console.log("DONE!");
});
