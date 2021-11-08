// require("./build/gulp.css.js")
const { src, dest, series } = require('gulp')
const fs = require('fs')
const through2 = require('through2');

// 迭代 components 下的所有 md 文件,并合并到 website/components 下的同名文件
function generateMd(){
  return src('./components/**/*.md').pipe(through2.obj(function (file, _, cb) {

    let filename = file.path.split('/').pop()
    console.log(filename)
    if (file.isBuffer()) {
      try{
        fs.readFile(`./website/components/${filename}`, (err, data) => {
          if (err) throw err;
          let fileContent = file.contents.toString() + '\n\n' + data
          fs.writeFile(`./website/components/${filename}`, fileContent , (err)=>{
            if(err)return console.error(err)
            console.log(`写入 ${filename} 成功`)
            cb()
          })
        });
      }catch(exception){
        cb()
      }
    }
  }))
}

function copyFile(){
    return src(['./dist/*.js','./dist/css/*.css','./documents/index.html']).pipe(dest('./website/'))
  }
require("./build/gulp.css.js")
exports.default = series(generateMd,copyFile)

  