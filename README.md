# grunt-tivwp-po

> Grunt TIVWP PO/MO

## Why?

The `grunt-wp-i18n` Grunt plugin for WordPress has an option to make PO files. However, there are situations when you need to do some tasks between creating POT and merging POs. For example, upload the POT to Transifex and download POs from there, and only then - merge and make MOs.

> `msgmerge` and `msgfmt` must be available in order to run this plugin.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-tivwp-po --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-tivwp-po');
```

## The "tivwp_po" task

### Overview
In your project's Gruntfile, add a section named `tivwp_po` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  tivwp_po: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.pot_file

Type: `String`

Default value: `''`

The relative path to the `.pot` file.

#### options.do_mo

Type: `Boolean`

Default value: `true`

Whether to compile `.po` files to `.mo`. 

### Usage Example

```js
grunt.initConfig({
  tivwp_po: {
        options: {
            pot_file: "languages/my-plugin.pot",
            do_mo: true
        },
        files: [{
            expand: true,
            cwd   : "languages/",
            src   : ["*.po"]
        }]
  }
});
```

## Contributing

* You are more than welcome! Please submit issues and pull requests.

## Release History

### 0.1.0

* The first public release.

## License

* MIT

## Author

* [Gregory Karpinsky](https://www.linkedin.com/in/gregorykarpinsky)
