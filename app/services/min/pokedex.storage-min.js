!function(){"use strict";function e(e){return{pokedex:function(s){e.get("/data/pokedex.json").success(s)},types:function(s){e.get("/data/types.json").success(s)},skills:function(s){e.get("/data/skills.json").success(s)}}}angular.module("pokedexApp.services").factory("pokemonStorage",e),e.$inject=["$http"]}();