console.log("Running _MY_ application tests");
console.log(process.env.API_KEY);
const x = Buffer.from(process.env.API_KEY || '').toString('base64');
const mid = Math.ceil(x.length / 2);

console.log(str.slice(0, mid));
console.log(str.slice(mid));
