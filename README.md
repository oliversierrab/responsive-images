# responsive-images
Responsive image generator.

1) 	Install VIPS [vips](http://www.vips.ecs.soton.ac.uk/index.php?title=Build_on_OS_X)

	brew install homebrew/science/vips --with-webp --with-graphicsmagick --without-check

	
	* Go for a coffee...

2)	npm install

-

# Configuration

###### `config.json`
```json
{
    "quality": 80,
    "pngcompression": 9,
    "paths" : {
        "source" : "src/**/*",
        "destination" : "output"
    },
    "suffix" :{
        "small": "-small",
        "small2x": "-small2x",
        "medium": "-medium",
        "medium2x": "-medium2x",
        "large": "-large",
        "large2x": "-large2x"
    },
    "sizes" :{
        "small": 736,
        "small2x": 1200,
        "medium": 1050,
        "medium2x": 2100,
        "large": 1600,
        "large2x": 3000
    }
}
```

-

Dependencies (included in package.json)
* [sharp](http://sharp.dimens.io/en/stable/install/)	
* [gulp-responsive](https://github.com/mahnunchik/gulp-responsive)

Pre-requisites
* [brew](http://brew.sh/)
* [node](https://github.com/nodejs/node)
* [gulp](https://www.npmjs.com/package/gulp)

# Issues installing vips?
Try:

1) brew doctor
2) brew update
3) Wiwi: https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/Troubleshooting.md#troubleshooting
