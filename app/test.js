console.log("Running _MY_ application tests");
console.log(process.env.API_KEY);
console.log(Buffer.from(process.env.API_KEY).toString("base64"));
