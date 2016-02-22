import gulp from "gulp";
import jest from "gulp-jest-iojs";
import babel from "gulp-babel";


const paths = (() => {
    const
        srcRoot = "./src",
        distRoot = "./dist",
        appFile = "App.js";
    return {srcRoot, distRoot, appFile};
})();

const options = {
    jest: {
        scriptPreprocessor: "../../../node_modules/babel-jest",
        unmockedModulePathPatterns: [
            ".*"
        ]
    }
};

gulp.task('test', () =>
    gulp.src("./src/js/__tests__").pipe(jest(options.jest))
);

gulp.task('copy-resources', () => {
    return gulp.src(`${paths.srcRoot}/js/**/!(*.js)`)
        .pipe(gulp.dest(paths.distRoot));
});

gulp.task('babel', () => {
    return gulp.src(`${paths.srcRoot}/js/**/*.js`)
        .pipe(babel())
        .pipe(gulp.dest(paths.distRoot));
});

gulp.task("default", ["test", "copy-resources", "babel"]);
