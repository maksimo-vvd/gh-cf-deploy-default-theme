module.exports = {
    // These are the files that Purgecss will search through
    content: ["./_site/**/*.html"],

    // These are the stylesheets that will be subjected to the purge
    css: ["./_site/assets/css/style.css"],
    safelist: {
        standard: [/^col/, /^card/, /^needs-validation/, /^was-validat/, /^bg-/, /form-control-sm/],
        deep: [/^menu-item-has-children/],
        // greedy: [/yellow$/]
    }
};
