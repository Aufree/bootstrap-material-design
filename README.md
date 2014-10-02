Material Design for Bootstrap
=========================

bootstrap-material-design provides the [Bootstrap-Material-Design](https://github.com/FezVrasta/bootstrap-material-design) web fonts, javascripts and stylesheets as a Rails engine for use with the asset pipeline.

You can check out [the demo at this link](http://fezvrasta.github.io/bootstrap-material-design/).

## Installation

Add this line to your application's Gemfile:

    gem 'bootstrap-material-design'

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install bootstrap-material-design

## Usage

Make sure you have installed the Bootstrap in your Rails application.

You should include the theme right after the Bootstrap CSS and include the javascript at the end of your document, everything will be converted to Material Design (paper) style.

Just like this:

application.js:

```javascript
//= require bootstrap-material-design
```
application.css:

```css
/*
 *= require bootstrap-material-design
 */
```

Then restart your webserver if it was previously running.

That's it, hava fun!

Also you can see more details about bootstrap-material-design at [this link](https://github.com/FezVrasta/bootstrap-material-design).

## Thanks
* [Bootstrap](http://getbootstrap.com/)
* [Bootstrap Material Design](https://github.com/FezVrasta/bootstrap-material-design)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
