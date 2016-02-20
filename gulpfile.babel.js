import gulp from "gulp";
import jasmine from "gulp-jasmine";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import browserify from "browserify";
import babelify from "babelify";
import sass from "gulp-sass";


const paths = (() => {
    const
        srcRoot = "./src",
        distRoot = "./dist",
        js = "js",
        appFile = "App.jsx",
        bundleName = "App.js";
    return {srcRoot, distRoot, js, appFile, bundleName};
})();

const options = {
    browserify: {
        basedir: paths.srcRoot,
        debug: true
    },
    sass : {
        outputStyle: "compressed"
    },
    jasmine: {
        verbose: true,
        includeStackTrace: true
    }
};

gulp.task('test', function () {
    return gulp.src('./src/js/__test__/**/*.js').pipe(jasmine(options.jasmine));
});

gulp.task("copy-html", () => {
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest(`${paths.distRoot}`));
});

gulp.task(
    "compile-css",
    () => gulp.src("./src/sass/**/*.scss")
        .pipe(sass(options.sass).on(
            "error",
            sass.logError)
        )
        .pipe(gulp.dest(`${paths.distRoot}/css`))
);

gulp.task("copy-img", () => {
    gulp.src("./src/**/*.png")
        .pipe(gulp.dest(`${paths.distRoot}`));
});

gulp.task("browserify", () => {
    browserify(
        `${paths.js}/${paths.appFile}`,
        options.browserify
    )
        .transform(babelify)
        .bundle()
        .on(
            "error",
            (err) => console.error(err)
        )
        .pipe(source(`${paths.js}/${paths.bundleName}`))
        .pipe(buffer())
        .pipe(gulp.dest(`${paths.distRoot}`));
});

gulp.task("default", ["test", "copy-html", "compile-css", "copy-img", "browserify"]);
