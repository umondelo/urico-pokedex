# Urico's Pokedex (AngularJA Developer Assignment)

This application is intended for Technical Assesment only, based on this requirements
[https://github.com/shlinka/Pokedex-assignment](https://github.com/shlinka/Pokedex-assignment)

I use Angular-seed to quickly bootstrap my angular assessment and dev environment for this
project.

### Application Description
This app shows a list of pokemons (fetch from different json files) which can be filtered. 
When clicked on each pokemon, the container expand to show pokemon details.
Also, the app support a responsive view on all browsers.

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
git clone https://github.com/umondelo/urico-pokedex.git
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
  directives/                --> contains all directives
    searh-sort.html          --> search and sorting directive
    derective.module.js      --> directive module
    skill-description.html   --> Pokedex skill description
  filter/               --> 
    filter.module.js         --> filter module
    app.filter.js            --> Filter for removing special chars & whitespace
    app.filter_test.js       --> Tried testing
  pokemonlist/          --> 
    pokemon-list.html          --> initial page/ pokemon listing
    pokemonlist.module.js      --> pokemonlist module
    pokemonlist.controller.js  --> contains: json data binding to scope | dynamic sorting | toggle function for Pokemon details    
  SASS                  --> Contains all scss files
  Services              --> Contains all scss files
    service.module.js          --> service module
    pokedex.storage.js         --> Get $http of all json files
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
  scenarios.js          --> end-to-end scenarios to be run by Protractor
```

## Contact

Urico Mondelo
[http://uricomondelo.com](http://uricomondelo.com)