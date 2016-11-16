import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import del from 'del';

gulp.task('clean', () => del('dist'));

gulp.task('babel', ['clean'], () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('prepublish', ['babel']);

gulp.task('default', ['prepublish']);
