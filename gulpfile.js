const { exec } = require("child_process");
const { series, watch } = require("gulp");

const [dir] = process.argv.slice(4);

function build(cb) {
  exec(`webpack -c ./${dir}/webpack.config.js`, (error, stdout, stderr) => {
    if (stdout) {
      console.log(`stdout: ${stdout}`);
    }
    if (error) {
      console.log(`error: ${error.message}`);
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
    }
    cb();
  });
}

function watchAndReBuild(cb) {
  watch([`./${dir}`], { ignoreInitial: false }, series(build)).on('end', cb);
}

exports.build = series(watchAndReBuild);