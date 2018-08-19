'use strict';var _extends=Object.assign||function(a){for(var c,b=1;b<arguments.length;b++)for(var d in c=arguments[b],c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d]);return a};Object.defineProperty(exports,'__esModule',{value:!0});exports.register=register,exports.store=store,exports.state=state,exports.action=action,exports.computed=computed,exports.assign=assign,exports.init=init,exports.helper=helper;var _mobx=require('mobx'),mobx=_interopRequireWildcard(_mobx);function _interopRequireWildcard(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b.default=a,b}var $={store:{},state:{},action:{},computed:{},helper:{}};function _store(a,b){$.store[a]=b}function _state(a,b,c){$.state[a]||($.state[a]={}),$.state[a][b]=c}function _action(a,b,c){$.action[a]||($.action[a]={}),$.action[a][b]=c}function _computed(a,b,c){$.computed[a]||($.computed[a]={}),$.computed[a][b]=c}function _helper(a,b){a!==void 0&&b!==void 0&&($.helper[a]=b)}function register(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},c={},d={};b=_extends({state:{},computed:{},action:{}},b),Object.keys(b.state).forEach(function(f){'_'!==f[0]&&(c[f]=mobx.observable,d[f]=b.state[f])}),Object.keys(b.computed).forEach(function(f){var g=Object.getOwnPropertyDescriptor(b.computed,f);'_'!==f[0]&&g&&!g.writable&&(c[f]=mobx.computed,d[f]=b.computed[f])}),Object.keys(b.action).forEach(function(f){'_'!==f[0]&&'function'==typeof b.action[f]&&(c[f]=mobx.action.bound,_action(a,f,b.action[f]),d[f]=b.action[f])});var e=mobx.observable.object(d,c);return _store(a,e),Object.keys(e).forEach(function(f){var g=Object.getOwnPropertyDescriptor(b.computed,f);g&&!g.writable?_computed(a,f,e[f]):_state(a,f,e[f])}),e}function store(a){return void 0===a?$.store:$.store[a]}function state(a){return void 0===a?$.state:$.state[a]}function action(a){return void 0===a?$.action:$.action[a]}function computed(a){return void 0===a?$.computed:$.computed[a]}function assign(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.state,c=a.computed,d=a.action;return{state:b||{},computed:c||{},action:d||{}}}function init(a){'function'==typeof a&&a($)}function helper(a,b){return void 0===b?void 0===a?$.helper:$.helper[a]:void _helper(a,b)}exports.default={register:register,store:store,state:state,action:action,computed:computed,assign:assign,init:init,helper:helper,runInAction:mobx.runInAction};