import gulp from "gulp";
import jasmine from "gulp-jasmine";
import jest from "gulp-jest-iojs";
import tar from "gulp-tar";
import gzip from "gulp-gzip";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import browserify from "browserify";
import babelify from "babelify";
import sass from "gulp-sass";
import maven from "gulp-maven-deploy";


const version = "0.0.1-SNAPSHOT";

const paths = {
    srcRoot: "./src",
    buildRoot: "./build",
    distRoot: "./dist",
    js: "js",
    appFile: "App.jsx",
    bundleName: "App.js"
};

const options = {
    browserify: {
        basedir: paths.srcRoot,
        debug: true
    },
    sass: {
        outputStyle: "uncompressed"
    },
    jasmine: {
        verbose: false,
        includeStackTrace: true
    },
    jest: {
        scriptPreprocessor: "../../../node_modules/babel-jest",
        unmockedModulePathPatterns: [
            ".*"
        ]
    },
    maven: {
        config: {
            groupId: "io.mstream.website-client",
            type: "tgz",
            repositories: [
                {
                    id: "nexus",
                    url: "http://vps252510.ovh.net:8081/nexus/content/repositories/snapshots/"
                }
            ]
        }
    }
};

gulp.task(
    "test",
    () =>
        gulp.src('./src/js/__tests__')
            .pipe(jest(options.jest))
);

gulp.task(
    "copy-html",
    ["test"],
    () =>
        gulp.src("./src/**/*.html")
            .pipe(gulp.dest(`${paths.buildRoot}`))
);

gulp.task(
    "compile-css",
    () =>
        gulp.src("./src/sass/**/*.scss")
            .pipe(sass(options.sass).on(
                "error",
                sass.logError)
            ).pipe(gulp.dest(`${paths.buildRoot}/css`))
);

gulp.task(
    "copy-img",
    ["test"],
    () =>
        gulp.src("./src/**/*.png")
            .pipe(gulp.dest(`${paths.buildRoot}`))
);

gulp.task(
    "browserify",
    ["test"],
    () =>
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
            .pipe(gulp.dest(`${paths.buildRoot}`))
);

gulp.task(
    "tarball",
    ["browserify", "compile-css", "copy-img", "copy-html"],
    () =>
        gulp.src(`${paths.buildRoot}/*`)
            .pipe(tar(`website-client-${version}.tar`))
            .pipe(gzip())
            .pipe(gulp.dest(paths.distRoot))
);

gulp.task(
    "publish",
    () =>
        gulp.src(`paths.distRoot/website-client-${version}.tar.gz`)
            .pipe(maven.deploy(options.maven))
);

gulp.task(
    "default",
    ["test", "browserify", "compile-css", "copy-html", "copy-img", "tarball"]
);

