const salaModel = require('../model/salaModel')

exports.get = async function (){
    
    return await salaModel.listarSalas();
}
