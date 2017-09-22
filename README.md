#Sass-Starter

SASS Starter - SCSS for SMACSS

Starter code for SASS based on [Scalar and Modular Architecture for CSS (SMACSS)](https://smacss.com/).
SMACSS (pronounced “smacks”) is more style guide than rigid framework. This allows for more customization to the structure as we see fit. Sass Starter is an open source project.

##Features:

* SMACSS structure for SASS.
* Mixins for BEM naming conventions and Media queries.
* SASS functions for unit conversions.
* Bootstrap Grid and Print CSS.
* Normalize CSS.
* Live reloading with BrowserSync.
* Packages such as JS/CSS minification and CSS autoprefixer included.

## Getting Started

> If not installed, please install ```node``` and ```npm```.

> If not installed, please install gulp by doing ```npm install -g gulp```.

> If not installed, please install ```ruby```.

> Install ```gulp-ruby-sass``` by doinf ```npm install -g gulp-ruby-sass``` for global or ```npm install --save-dev gulp-ruby-sass``` for local.

1. Clone Sass Starter repo with ```git clone git@github.com:sshikhrakar/Sass-Starter.git``` (Using SSH) or download the zip.
2. Go to your project folder using a terminal, and do ```npm install```.
3. After npm package install, do ```gulp``` to start the server. Your default browser will open automatically and the server will be hosted at ```http://localhost:3000```.

For building your minified css code and optimized images do ```gulp build```. All files will be created at ```dist\``` folder.

> Include or remove bootstrap at ```utilities\_manifest.scss```.

### Prerequisites
```
1. Node/NPM
2. Ruby
3. gulp
4. gulp-ruby-sass
```

## Contributing

Please read the [CONTRIBUTING guidelines](https://github.com/sshikhrakar/Sass-Starter/blob/master/CONTRIBUTING.md) for details on how to contribute.
Also read the Code of Conduct [here](https://github.com/sshikhrakar/Sass-Starter/blob/master/CODE_OF_CONDUCT.md).

See also the list of [contributors](https://github.com/sshikhrakar/Sass-Starter/graphs/contributors) who participated in this project.

## Bugs and Features

Report a bug or request a new feature by opening an [issue](https://github.com/sshikhrakar/Sass-Starter/issues/new).

Guidelines for bug report at [CONTRIBUTING.md](https://github.com/sshikhrakar/Sass-Starter/blob/master/CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sshikhrakar/Sass-Starter/blob/master/LICENSE) file for details.

## Acknowledgments

This project uses awesome work of other projects:
* [normalize.css](http://necolas.github.io/normalize.css/)
* [bootstrap](https://github.com/twbs/bootstrap)
* [SMACSS](https://smacss.com/)
