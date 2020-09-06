// vue.config.js
module.exports = {
    // настройки...

    // для url адреса, для пути
    publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
    assetsDir: '',
    // assetsDir создает папку в dist при сборке билд

    productionSourceMap: false,
    // отключение карты где лежат файлы все в дев тулс 

    filenameHashing:false
    // filenameHashing ХЭШ, не стоить ставить фолс, т.е. отключать его
  }