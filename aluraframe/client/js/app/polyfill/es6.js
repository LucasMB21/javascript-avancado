if(!Array.prototype.includes) {
    console.log('Polyfill para Array.includes aplicado.');
    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    };
}