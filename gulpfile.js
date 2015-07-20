/// <binding BeforeBuild='beforeBuild' />
// Node modules
var fs = require('fs'), vm = require('vm'), merge = require('deeply'), chalk = require('chalk'), es = require('event-stream'), ss = require('stream-series');

// Gulp and plugins
var gulp = require('gulp'), rjs = require('gulp-requirejs-bundler'), concat = require('gulp-concat'), clean = require('gulp-clean'), file = require('gulp-file'), minifyCSS = require('gulp-minify-css'),
    replace = require('gulp-replace'), uglify = require('gulp-uglify'), htmlreplace = require('gulp-html-replace'), typescript = require('gulp-tsc'), less = require('gulp-less'), git = require('gulp-git');

gulp.task('default', ['tsApp', 'tsComponents', 'css']), function (callback) {
    callback();
    console.log(chalk.green('\nModule default task Compiled '));
}

// Task to run before build to compile all Typescript files
gulp.task('beforeBuild', ['tsApp', 'tsComponents'], function (callback) {
    callback();
    console.log(chalk.green('\nTypeScript Files was Compiled '));
});

// Clone all Typescript Definition Files from remote repo on github
gulp.task('cloneTsDef', function () {
    git.clone('https://github.com/borisyankov/DefinitelyTyped.git', { args: 'Scripts/definitions/definitelyTyped' });
});

// Compile all .ts files, producing .js and source map files alongside them
gulp.task('tsApp', function () {
    return gulp.src(['Scripts/app/**/*.ts'])
        .pipe(typescript({
            module: 'amd',
            sourcemap: true,
            outDir: './'
        }))
        .pipe(gulp.dest('./Scripts/app/'));
});
gulp.task('tsComponents', function () {
    return gulp.src(['Scripts/components/**/*.ts'])
        .pipe(typescript({
            module: 'amd',
            sourcemap: true,
            outDir: './'
        }))
        .pipe(gulp.dest('./Scripts/components/'));
});

// Concatenates CSS files, rewrites relative paths to Bootstrap fonts, copies Bootstrap fonts
gulp.task('css', ['less'], function () {
    var bootstrapCss = gulp.src('./Styles/css/bootstrap.css'),
        bootstrapDatepicker = gulp.src('./Styles/css/build3.css'),
        toastCss = gulp.src('./Scripts/bower_modules/toastr/toastr.min.css'),
        appCss = gulp.src('./Styles/css/timetracking.css'),
        combinedCss = ss(bootstrapCss, bootstrapDatepicker, toastCss, appCss).pipe(concat('timetracking.css')),
        fontFiles = gulp.src('./Styles/less/bootstrap/fonts/*', { base: './Scripts/bower_modules/components-bootstrap/' });
    return ss(combinedCss, fontFiles)
        .pipe(minifyCSS())
        .pipe(gulp.dest('./Styles'));
});

// compile the less files for the theme including bootstrap
gulp.task('less', function () {
    return gulp.src(['./Styles/less/bootstrap/bootstrap.less', './Styles/less/bootstrap-datepicker/build/build3.less', './Styles/less/app/timetracking.less'])
        .pipe(less())
        .pipe(gulp.dest('./Styles/css'));
});