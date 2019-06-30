const { src, dest, series, parallel, watch, lastRun } = require('gulp');
const gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    newer = require('gulp-newer'),
    fileinclude = require('gulp-file-include'),
    htmlhint = require("gulp-htmlhint"),
    sass = require('gulp-sass'),
    csscomb = require('gulp-csscomb'),
    cssmin = require('gulp-cssmin'),
    gcmq = require('gulp-group-css-media-queries'),
    jshint = require('gulp-jshint'),
    babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    template = require('gulp-template'),
    filemapGenerator = require('gulp-filemap-generator'),
    browsersync = require("browser-sync").create(),
    del = require('del'),
    fs = require('fs'),
    zip = require('gulp-zip')
    sassdoc = require('sassdoc'),
    jsdoc = require('gulp-jsdoc3'),
    jsdoc2md = require('jsdoc-to-markdown'),
    cached = require('gulp-cached'),
    webpackStream  = require('webpack-stream'),
    named = require('vinyl-named'),
    origin = "source",
    project = "build",
    docs = "docs";

const webpackConfig = {
    watch: false,
    mode: 'development',
    // output: {
    //     filename: 'entry.js',
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env','@babel/preset-react']
                    }
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
              vendors: {
                  filename: 'entry.bundle.js'
              }
          }
        },
    },
}

const clean = async (done) => {
    await del([`${project}`]);
    done();
}

const html = ()=> src([`${origin}/**/*.html`, `!${origin}/include/*.html`, `!${origin}/map.html`], {since: lastRun(html)})
    .pipe(newer(`${project}`))
    .pipe(fileinclude({
        prefix: '@@',
        basepath: `${origin}/include`,
        context: {
            name: 'example'
        }
    }))
    .pipe(htmlhint('hint/.htmlhintrc'))
    .pipe(template())
    .pipe(dest(`${project}`))
    // .pipe(browsersync.stream());

const generateFilemap = () => src([`${project}/**/*.html`, `!${origin}/include/*.html`, `!${origin}/map.html`], {since: lastRun(html)})
    .pipe(filemapGenerator({
        'template':`map.html`,
        'templatePath':`${origin}`,
        'title':'-',
        'author':'cruel32',
        'description':'설명이 없어요',
        'stream' : false,
        'baseDir' : `${project}`,
        'listName' : 'maps',
        'hrefBaseDir' : ``,
        'toJson' : false,
        "jsonName" : "maps",
        "jsonDest" : `${project}`
    }))
    .pipe(dest(`${project}`))


const react = ()=> src(`${origin}/js/react/entry.js`) //, {since: lastRun(react)}
    // .pipe(newer(`${project}/js/react/entry.js`))
    .pipe(named())
    .pipe(webpackStream(webpackConfig,
        // compiler,
        // function(err, stats) {
        //     console.log('err : ', err);
        // }
    ))
    .pipe(dest(`${project}/js/react`))

const scripts = ()=> src([`${origin}/js/**/*.js`, `!${origin}/js/react/**/*.js`], {since: lastRun(scripts)})
    .pipe(newer(`${project}/js/**/*.js`))
    .pipe(plumber({errorHandler : gutil.log}))
    .pipe(jshint())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest(`${project}/js`))
    // .pipe(browsersync.stream());


const styles = () => src([`${origin}/styles/**/*.{scss,sass}`,`!${origin}/styles/import/**/*.{scss,sass}`], {since: lastRun(styles)})
    .pipe(newer(`${project}/styles/**/*.{scss,sass}`))
    .pipe(sass.sync().on('error', sass.logError))
    // .pipe(sass().on('error', sass.logError))
    .pipe(src([`${origin}/styles/**/*.css`]), {passthrough: true})
    .pipe(gcmq())
    .pipe(csscomb({
        configPath: 'hint/.csscomb.json'
    }))
    .pipe(cssmin())
    .pipe(dest(`${project}/styles`))
    // .pipe(browsersync.stream());

const images = () => src([
        `${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`,
        `!${origin}/images/sprite/**/*.png`,
        `!${origin}/images/svg/**/*.svg`
    ], {since: lastRun(images)})
    .pipe(newer(`${project}/images/**/*.{gif,jpeg,jpg,png,svg}`))
    .pipe(dest(`${project}/images`))

const browserSyncInit = (done)=>{
    browsersync.init({
        index:'map.html',
        server: {
            baseDir: `${project}/`,
        },
        port: 5000
    },(err,bs)=>{
        // console.log('err : ', err);
        // console.log('server : ', bs.options.get('server'));
        // console.log('urls : ', bs.options.get('urls'));
    });
    done();
}

const packing = () => 
    src(`${project}/**/*`)
    .pipe(zip(`${project}.zip`))
    .pipe(dest(`./`))

const cleanDocs = async (done) => {
    await del([`${docs}`]);
    done();
}

const sassdocfy = () =>
    src(`${origin}/styles/**/*.{scss,sass}`)
    .pipe(sassdoc({
        dest: `./${docs}/sass`,
        // theme : `./node_modules/sassdoc-theme-jigsass`
    }))
    .resume();

const jsdocfy = () => src([`${origin}/js/**/*.js`], {read: false})
    .pipe(jsdoc({
        "opts": {
            "destination": `./${docs}/js`,
            "template": "./node_modules/docdash"
        },
    }))

const api = (done) => {
    jsdoc2md.render({ files: `${origin}/js/**/*.js` })
    .then(output => fs.writeFileSync(`./readme.md`, output))
    done();
}

const watcher = () => {
    watch([`${origin}/html/**/*.html`, `${origin}/json/**/*.json`], html).on('change', browsersync.reload);
    watch([`${origin}/styles/**/*.{scss,sass.css}`], styles).on('change', browsersync.reload);
    watch([`${origin}/js/**/*.js`, `!${origin}/js/react/**/*.js`], scripts).on('change', browsersync.reload);
    watch([`${origin}/js/react/**/*.js`], react).on('change', browsersync.reload);
    watch([`${origin}/images/**/*.{gif,jpeg,jpg,png,svg}`], images).on('change', browsersync.reload);
}

exports.default = series(clean, parallel(html, scripts, react, styles, images), generateFilemap, parallel(browserSyncInit, watcher) );
exports.filemap = generateFilemap;
exports.clean = clean;
exports.pack = series(clean, parallel(html, scripts, react, styles, images), packing);
exports.docs = series(cleanDocs, parallel(sassdocfy, jsdocfy));
exports.api = api;

//jsdocs 간편 사용법
//함수앞에 /* 이 함수는 무슨 함수다  */ 이런식으로 주석달기
// *표 두개 후 아래처럼 주석달기
/**
     * 클래스.
     * @constructor
     * @param {string} name - 설명을 적는다
     */
/**
     * 이 함수는 이름+문자를 리턴
     * @name setName
     * @name function
     * @name global
     * @param {string} str - 설명을 적는다
     * @returns {string}
*/
//위와 같이 annotation달기
//자세한 사용법 http://usejsdoc.org/ 참고

//sassdocs 간편 사용법
// /를 3개 입력후 아래처럼 주석달기
//
/// @group 그룹이름
/// @author 작성자
///
/// @param {타입값적기} $name [기본값적기] - 설명을 적는다
/// @output `font-size`설명을 적는다.
///
/// @example scss - 설명을 적는다
///   .foo {
///       @include pc_only {
///         display:block;
///       }
///   }
//자세한 사용법 http://sassdoc.com/getting-started/ 참고