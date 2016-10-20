# Urico's Pokedex (AngularJA Developer Assignment)

This application is intended for Technical Assesment only based on this requirements
[https://github.com/shlinka/Pokedex-assignment(https://github.com/shlinka/Pokedex-assignment)]

I use Angular-seed to quickly bootstrap my angular assessment and dev environment for this
project.


## Getting Started
To get you started you can simply clone this repository and install the dependencies:

### Prerequisites

You need git to clone the urico-pokedex repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone urico-pokedex

Clone the urico-pokedex repository using [git][git]:

```
git https://github.com/umondelo/urico-pokedex.git
cd urico-pokedex
```

### Install Dependencies

This has a preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files


### Run the Application

The simplest way to start this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/index.html`.



## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  view1/                --> the view1 view template and logic
    view1.html            --> the partial template
    view1.js              --> the controller logic
    view1_test.js         --> tests of the controller
  view2/                --> the view2 view template and logic
    view2.html            --> the partial template
    view2.js              --> the controller logic
    view2_test.js         --> tests of the controller
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Contact

Urico Mondelo

[site]: http://uricomondelo.com