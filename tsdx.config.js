const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const images = require('@rollup/plugin-image');
const url = require("postcss-url")

module.exports = {
    rollup(config, options) {
        config.plugins = [
            images(),
            postcss({
                plugins: [
                    url({
                        url: "inline", // enable inline assets using base64 encoding
                        maxSize: 10, // maximum file size to inline (in kilobytes)
                        fallback: "copy", // fallback method to use if max size is exceeded
                    }),
                    autoprefixer(),
                    cssnano({
                        preset: 'default',
                    }),
                ],
                modules: true,
                inject: true,
                extract: false,
                stylus: true,
                minimize: true,
            }),
            ...config.plugins,
        ]
        return config;
    },
};