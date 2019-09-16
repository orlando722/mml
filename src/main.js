/**
 * Minimum module load | mml
 * Library to create small and manage modules in javascript.
 * @author Orlando De La Rosa
 * @copyright 2019
 * @version 1.0.0
 * @license MIT
 */
(function(root, factoryModule) {
    if(root && typeof factoryModule === 'function') {
        root['mml'] = factoryModule();
    }
}(this, function() {
    return function(mainModule, modules) {
        var _allNameModule = modules.map(function(module) { return module.name; });
        var _cacheNameModules = [];
        var _cacheModules = [];
    
        function nameModuleExists(context, name) {
            return context.indexOf(name) != -1;
        }
    
        function getIndexModule(context, name) {
            return context.indexOf(name);
        }
    
        function getModule(name) {
            var index = -1;
    
            if(nameModuleExists(_cacheNameModules, name)) {
                index = getIndexModule(_cacheNameModules, name);
                if(!_cacheModules[index].expose) {
                    throw new Error('The ' + name + ' module exists. But it was detected that it is not valid, verify that it is not null or undefined');
                }
                return _cacheModules[index].expose;
            }
    
            if(!nameModuleExists(_allNameModule, name)) {
                throw error('The ' + name + ' module does not exist');
            }
    
            index = getIndexModule(_allNameModule, name);
    
            var newModule = {
                name: name,
                expose: {}
            };
    
            _cacheNameModules.push(name);
            _cacheModules.push(newModule);
    
            modules[index].logic.call(newModule.expose, newModule.expose, getModule);
    
            return newModule.expose;
        }

        return getModule(mainModule);
    };
}));