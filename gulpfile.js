const projectFolder = require('path').basename(__dirname),
    sourceFolder = 'app';

let fs = require('fs');

let path = {
    build: {
        html: projectFolder + '/',
        css: projectFolder + '/css/',
        js: projectFolder + '/js/',
        libs: projectFolder + '/libs/',
        img: projectFolder + '/img/',
        fonts: projectFolder + '/fonts/',
        json: projectFolder + '/json/',
    },
    src: {
        html: [sourceFolder + '/*.html', '!' + sourceFolder + '/template/_*.html'],
        css: sourceFolder + '/scss/style.scss',
        js: sourceFolder + '/js/main.js',
        json: sourceFolder + '/json/*.*',
        swiper: './node_modules/swiper/swiper-bundle.min.js',
        img: sourceFolder + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
        fonts: sourceFolder + '/fonts/*.ttf',
    },
    watch: {
        html: sourceFolder + '/**/*.html',
        css: sourceFolder + '/scss/**/*.scss',
        js: sourceFolder + '/js/**/*.js',
        json: sourceFolder + '/json/*.*',
        img: sourceFolder + '/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
    },
    clean: './' + projectFolder + '/',
};

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browser = require('browser-sync').create(),
    fileinclude = require('gulp-file-include'),
    del = require('del'),
    scss = require('gulp-sass')(require('sass')),
    autoprefixer = require('gulp-autoprefixer'),
    groupmedia = require('gulp-group-css-media-queries'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    uglifyes = require('gulp-uglify-es').default,
    webp = require('gulp-webp'),
    webphtml = require('gulp-webp-html'),
    webpcss = require('gulp-webp-css'),
    ttf2woff = require('gulp-ttf2woff'),
    ttf2woff2 = require('gulp-ttf2woff2'),
    fonter = require('gulp-fonter');

function browserSync(par) {
    browser.init({
        server: {
            baseDir: './' + projectFolder + '/',
        },
        port: 3000,
        notify: false,
    });
}

function html() {
    return src(path.src.html)
        .pipe(fileinclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browser.stream());
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: 'compressed',
            })
        )
        .pipe(groupmedia())
        .pipe(
            autoprefixer({
                grid: true,
                overrideBrowserlist: ['last 5 versions'],
                cascade: true,
            })
        )
        .pipe(webpcss())
        .pipe(cleancss())
        .pipe(
            rename({
                extname: '.min.css',
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browser.stream());
}

function js() {
    return src(path.src.js)
        .pipe(
            fileinclude({
                prefix: '@@',
            })
        )
        .pipe(uglifyes())
        .pipe(
            rename({
                extname: '.min.js',
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browser.stream());
}

function json() {
    return src(path.src.json).pipe(dest(path.build.json));
}

function swiperJs() {
    return src(path.src.swiper)
        .pipe(uglifyes())
        .pipe(rename('libs.js'))
        .pipe(dest(path.build.libs))
        .pipe(browser.stream());
}

function images() {
    return src(path.src.img)
        .pipe(
            webp({
                quality: 70,
            })
        )
        .pipe(dest(path.build.img))
        .pipe(browser.stream());
}

function fonts() {
    src(path.src.fonts).pipe(ttf2woff()).pipe(dest(path.build.fonts));
    return src(path.src.fonts).pipe(ttf2woff2()).pipe(dest(path.build.fonts));
}

gulp.task('otf2ttf', function () {
    return src([sourceFolder + '/fonts/*.otf'])
        .pipe(
            fonter({
                formats: ['ttf'],
            })
        )
        .pipe(dest(sourceFolder + '/fonts/'));
});

function fontsStyle(params) {
    let file_content = fs.readFileSync(sourceFolder + '/scss/fonts.scss');
    if (file_content == '') {
        fs.writeFile(sourceFolder + '/scss/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(
                            sourceFolder + '/scss/fonts.scss',
                            '@include font("' +
                                fontname +
                                '", "' +
                                fontname +
                                '", "400", "normal");\r\n',
                            cb
                        );
                    }
                    c_fontname = fontname;
                }
            }
        });
    }
}

function cb() {} // callback

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
    gulp.watch([path.watch.json], json);
}

function clean(params) {
    return del(path.clean);
}

let libs = [swiperJs];

let build = gulp.series(clean, gulp.parallel(js, json, libs, css, html, images, fonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);

// exports.script = script;
exports.swiperJs = swiperJs;

exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.json = json;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;
