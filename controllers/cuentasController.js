var cuenta = require('../schemas/cuenta.js');
var mongoose = require('mongoose');
const boom = require('boom');

exports.getCuentas = {
  
  handler: function(request, reply){
    var cuentas = cuenta.find({});
    return(cuentas);
  }
}
exports.getCuentaId = {
  
  handler : async function(request, reply){
    try {
      var Cuenta = await cuenta.findById(request.params._id).exec();
      return reply.response(Cuenta);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // cuenta.findOne({'_id' : request.params._id}, function(err, Cuenta){
    //   if(!err && Cuenta){
    //     this.envio = (Cuenta);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'Cuenta not found'));
    //   }
    // });return envio;
  }
}
exports.getCuentaUsuario = {
  handler : async function(request, reply){
    try {
      var Cuenta = await cuenta.find({'idUsuario': request.params.idUsuario}).exec();
      return reply.response(Cuenta);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // cuenta.find({'idUsuario' : request.params.idUsuario}, function(err, Usuarios){
    //   if(!err && Usuarios){
    //     this.envio = (Usuarios);
    //   }else if(!err){
    //     this.envio = (boom.notFound());
    //   }else if(err){
    //     this.envio = (boom.wrap(err, 'Usuario not found'));
    //   }
    // });return envio;
  }
}
exports.getCuentaTotal = {
  
  handler : async function(request, reply){
    try {
      var Cuenta = await cuenta.find({'total': request.params.total}).exec();
      return reply.response(Cuenta);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio = "w";
    // cuenta.find({'total' : request.params.total}, function(err, Cuentas){
    //   if(!err && Cuentas){
    //     this.envio =(Cuentas);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'total not found'));
    //   }
    // });return envio;
  }
}
exports.getCuentaEstado = {
  handler : async function(request, reply){
    try {
      var Cuenta = await cuenta.find({'estado': request.params.estado}).exec();
      return reply.response(Cuenta);
    } catch (error){
      throw boom.notFound();
    }
    // this.envio ="w";
    // cuenta.find({'estado' : request.params.estado}, function(err, Cuentas){
    //   if(!err && Cuentas){
    //     this.envio =(Cuentas);
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }else if(err){
    //     this.envio =(boom.wrap(err, 'estado not found'));
    //   }
    // });return envio;
  }
}
exports.modifyCuenta = {
  
  handler: async function(request, reply){
    try {
      var result = await cuenta.findByIdAndUpdate(request.params._id, request.payload, { new: true });
      return reply.response(result);
    } catch (error) {
        throw boom.badRequest();
    }
    // this.envio ="w";
    // cuenta.update(
    //   {'_id': request.params._id},
    //   {$set:
    //     {
    //       idUsuario : request.payload.idUsuario,
    //       total : request.payload.total,
    //       estado : request.payload.estado,
    //     }
    //   }, function(err){
    //     if(err){
    //       this.envio =(boom.wrap(err, 'cuenta not found'));
    //     }else{
    //       this.envio =('updated succesfully');
    //     }
    //   }
    // );return envio;
  }
}
exports.deleteCuenta = {
  
  handler: async function(request, reply){
    try {
      var result = await cuenta.findByIdAndDelete(request.params._id);
      return reply.response({success: true});
  } catch (error) {
    throw boom.badRequest();
  }
    // this.envio ="w";
    // cuenta.findOne({'_id' : request.params._id}, function(err, Cuenta){
    //   if(err){
    //     this.envio =(boom.badRequest("Could not delete cuenta"));
    //   }else if(!err && Cuenta){
    //     Cuenta.remove();
    //     this.envio =('cuenta deleted succesfully');
    //   }else if(!err){
    //     this.envio =(boom.notFound());
    //   }
    // });return envio;
  }
}
exports.createCuenta = {
  
  handler: async function(request, reply){
    try {
      var newCuenta = new cuenta({
        idUsuario : request.payload.idUsuario,
        total : request.payload.total,
        estado : request.payload.estado,
    });
    var result = await newCuenta.save();
    return reply.response({success: true, cuenta: result});
} catch (error) {
  throw boom.badRequest();
}
    // this.envio ="w";
    // var newCuenta = new cuenta({
    //     idUsuario : request.payload.idUsuario,
    //     total : request.payload.total,
    //     estado : request.payload.estado,
    // });
    // newCuenta.save(function(err){
    //   if(!err){
    //     this.envio ={
    //       success: true
    //     };
    //   }else{
    //     this.envio ={
    //       success: false
    //     }
    //   }
    // });return envio;
  }
}
