# Teleopti styleguide [![Build Status](https://travis-ci.org/Teleopti/styleguide.svg?branch=master)](https://travis-ci.org/Teleopti/styleguide)

Take a look to the [styleguide here](http://teleopti.github.io/styleguide/styleguide)

## How to contribute

To be able to generate the styleguide you need kss-node:

		npm install -g kss
		npm install

To generate it:

		grunt dist

You can also use the watch task. The styleguide is generated after each scss change:

		grunt

Then, run a local instance (via visual studio for example). The local styleguide is accessible by the url [mylocalserver]/styleguide/styleguide


### Submit your contribution:

* create your own branch

* commit

* create a pull request from this branch to master.


## Atom packages for this project

If you use Atom you can install those packages to help you following the guidelines

* jscs-fixer

* jshint

* linter-jscs
