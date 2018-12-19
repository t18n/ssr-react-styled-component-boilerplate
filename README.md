## React TSCB
**React TSCB** is an abbreviation of 'React Turbo's Styled-Component Boilerplate' to distinguise with others boilerplate implementations out there.

### Prerequisite
1. Package manager: Preferably `yarn` but `npm` is also compatible
2. `Node` >=8.9.0 - Use `nvm` if you want to use different `node` version
   
### Technologies
**React TSCB** is opinionated in using newest technologies in its stack. This boilerplate includes these technologies:
1. `Webpack 4`
2. `Babel 7`
3. `Styled-Components`
4. `React-router`
5. `Props-type`
6. `React-Helmet`
7. `SSR` with `Express`

### Key Features
1. SEO optimized
  * robots.txt
  * Auto generate sitemap
  * `meta` tags added allow easy configuration
  * Social media sharing optimized
2. Easy development experience with hot-loader
3. Add `Polyfill` automatically to browser (This is redundant since Babel 7)
4. Automatically resolve stastic path (like `assets/images/img.png` instead of `../../assets/images/img.png`)
5. `SASS` / `SCSS` compiler (easy to customize predecesor of your own with `LESS`, `Stylus`... using the same format)
6. `CSS` bundle with option to easily hash className with CSS module
7. Uglify `CSS`, `JS`
8. Automaticaly create `Analyzer` file after build
9. Create `/compressed` folder for extra optimization (use optionally)
10. Add Image optimization
11. Split build to chunks for caching and fast loading
12. Lazy-loading enabled

### Get started
*React Turbo Boilerplate* using  Component-Container architecture, which help you to manage `stateful` and `stateless` component yet making it super flexible.
1. Know the structure
  * `/src/components` -> Where holds all dummies components and components stylesheets. Preferrably stateless
  * `/src/containers` -> Where holds all smart components and **NO** components stylesheets. Supposably for React classes with data manipulation ability
  * `/src/routes.js` -> Defines all routes/pages within the app
2. Personalize the app
  * `/src/robots.txt` -> Change `Sitemap` to your sitemap url, or remove it if you don't have one.\
  * `package.json` -> Change App name

### Author words
The boilerplate is under MIT license, you can use it for all purposes without hesitation, as long as you keep the LICENSE file notice. If you like this boilerplate, feel free leave a stars.
If you can contribute to the repo, I am more than happy to accept the pull request.