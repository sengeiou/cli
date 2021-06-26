const path = require('path');
const gulp = require('gulp');
const clean = require('gulp-clean');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const less = require('gulp-less');
const bump = require('gulp-bump');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const merge2 = require('merge2');
const through2 = require('through2');

const babelConfig = {
    presets: [['@babel/preset-env'], '@babel/preset-react'],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        ['@babel/plugin-transform-runtime', { helpers: false }],
    ],
};

const source = [
    './components/**/*.js',
    './components/**/*.jsx',
    '!./components/**/demo',
    '!./components/**/demo/**',
];
const libDir = path.join(process.cwd(), 'lib');

gulp.task('clean', function() {
    return gulp.src(libDir, { allowEmpty: true }).pipe(clean());
});

gulp.task('js', function() {
    const jsFilesStream = babelify(gulp.src(source));
    return jsFilesStream;
});

function babelify(js) {
    let stream = js
        .pipe(sourcemaps.init())
        .pipe(babel(babelConfig))
        .pipe(
            through2.obj(function(file, encoding, next) {
                this.push(file.clone());
                if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
                    const content = file.contents.toString(encoding);
                    file.contents = Buffer.from(content.replace(/\.less/g, '.css'));
                    file.path = file.path.replace(/index\.js/, 'css.js');
                    this.push(file);
                }
                next();
            }),
        )
        .pipe(sourcemaps.write('.'));

    return stream.pipe(gulp.dest(libDir));
}

gulp.task('less', function() {
    const lessStream = gulp.src('./components/**/*.less');

    const copyLess = lessStream
        .pipe(
            through2.obj(function(file, encoding, next) {
                this.push(file.clone());
                next();
            }),
        )
        .pipe(gulp.dest(libDir));
    const lessToCss = lessStream
        .pipe(
            less({
                plugins: [new LessPluginAutoPrefix({ browsers: ['last 2 versions', 'IE 9'] })],
            }),
        )
        .pipe(gulp.dest(libDir));

    return merge2([copyLess, lessToCss]);
});

gulp.task('compile', gulp.series(['clean', 'js', 'less']));

gulp.task('bump', function() {
    return gulp
        .src('./package.json')
        .pipe(bump({ type: process.argv.slice(3)[0].replace(/-/g, '') }))
        .pipe(gulp.dest('./'));
});
