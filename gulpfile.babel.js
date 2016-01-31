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
        appFile = "app.js";
    return {srcRoot, distRoot, js, appFile};
})();

const options = {
    browserify: {
        basedir: paths.srcRoot,
        debug: true
    }
};

gulp.task("default", () => {
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
        .pipe(source(`${paths.js}/${paths.appFile}`))
        .pipe(buffer())
        .pipe(gulp.dest(`${paths.distRoot}`));
});
