# shopify-theme-dev-postcss
Gulp + PostCSS build setup for Shopify theme development

## Setup
- clone repo
- run `npm install` to install modules
- `npm run gulp` runs build process

## Build Process
- gulp looks at `src/style.css`
- `postcss-partial-import` imports partials
- `autoprefixer` adds any required prefixes
- `postcss_shopify_settings_variables` converts variables to liquid-style variables. ie `$(headline_color)` becomes `{{ settings.headline_color }}`
- `gulp-rename`sets file extension to `.css.liquid`
- generated file added to `/assets` folder
