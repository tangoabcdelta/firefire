const { exec, spawn } = require("child_process");
const ls = spawn("ls", ["-la"]);
const url = "https://www.youtube.com/watch?v=EngW7tLk6R8";
const ytd = spawn("youtube-dl", [
    "extract-audio",
    "audio-format",
    "mp3",
    `${url}`
]);


ls.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});
ls.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});
ls.on('error', (error) => {
    console.log(`error: ${error.message}`);
});
ls.on("close", code => {
    console.log(`child process exited with code ${code}`);
});


ytd.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});
ytd.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});
ytd.on('error', (error) => {
    console.log(`error: ${error.message}`);
});
ytd.on("close", code => {
    console.log(`child process exited with code ${code}`);
});
