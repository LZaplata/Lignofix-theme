let mix = require("laravel-mix");

mix.setPublicPath("assets/")
    .options({
        processCssUrls: false
    })
    .sass("assets/src/sass/theme.sass", "css/")
    .browserSync({
        proxy: "localhost81/hucr/stachema.cz/lignofix",
        files: [
            "layouts/**/*",
            "pages/**/*",
            "partials/**/*",
            "assets/src/sass/*",
            "assets/src/js/*",
        ],
    });
