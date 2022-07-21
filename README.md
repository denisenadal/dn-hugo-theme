# DN Hugo Theme
1st Hugo project, based on Vimux's blank starter theme and the paid version of the Huge UI-Lite theme by Arvind. 

## General Structure
This theme includes an home page with sections for an introduction, skills, experience, work gallery and contact form. It supports three content types: default (pages), blog (posts), and work. For "work" content, we have a works index/archive page and single page templates. It also has a 404 page template for missing pages

### Layouts
**TODO** fill this out

### Partials
**TODO** fill this out

## Development
Use NPM to install all the necessary build packages, including Sass and Bootstrap 4. The npm package file also includes a few build scripts, 2 for the sass and 3 for the changelog. The sass build scripts run `rsync` before runtime, which we run to normalize the bootstrap directory. (This makes sure bootstrap's sass files are in the same directly regardless of whether we're building the site locally or remotely, or whether its a stand-alone theme or sitting inside of the themes folder.)

This theme expects 2 environment variables to enable the contact form:`FORMSPREE_ID` and `FORMSPREE_RECAPTCHA`. 

## TODOs
* fill out changelog
* clean up static css folder
* figure out what's the deal with the variables.scss file?