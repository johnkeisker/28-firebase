import angular from 'angular';

import config from './config';
import controller from './controller';

let todos = angular.module('tiy.todos', []);

todos.config(config);
todos.controller('ToDosController', controller);

export default todos;
