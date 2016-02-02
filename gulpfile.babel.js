import gulp from "gulp";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import browserify from "browserify";
import babelify from "babelify";


const paths = (() => {
    const
        srcRoot = "./src",
        distRoot = "./dist",
        js = "js",
        appFile = "app.jsx",
        bundleName = "app.js";
    return {srcRoot, distRoot, js, appFile, bundleName};
})();

const options = {
    browserify: {
        basedir: paths.srcRoot,
        debug: true
    }
};

gulp.task("copy-html", () => {
    gulp.src("./src/**/*.html")
        .pipe(gulp.dest(`${paths.distRoot}`));
});

gulp.task("copy-css", () => {
    gulp.src("./src/**/*.css")
        .pipe(gulp.dest(`${paths.distRoot}`));
});

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

gulp.task("default", ["copy-html", "copy-css", "copy-img", "browserify"]);
