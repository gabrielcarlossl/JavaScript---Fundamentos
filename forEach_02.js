const aprovados = ["gabriel", "carlos", "lucas", "ana"];

Array.prototype.forEach2 = function(callback) {
    for (let i=0; i< this.length; i++){
        callback(this[i], i, this)
    }
}


aprovados.forEach2((nome, i) => {

  console.log( 
    `${i + 1}) ${nome}
    `
    );

});