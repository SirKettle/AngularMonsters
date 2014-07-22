var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
	gulp.watch('src/app/sass/**', ['compass']);
	gulp.watch('src/app/views/*/*.scss', ['compass']);
	gulp.watch('src/app/components/*/*.scss', ['compass']);
	gulp.watch('src/images/**', ['images']);
	gulp.watch('src/htdocs/**', ['copy']);
	// Note: The browserify task handles js recompiling with watchify
});
