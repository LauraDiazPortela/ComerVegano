
$(document).ready(function() {
                $('#Formulario').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                 fields: {
                    Nombre: { // nombre de input a validar.
                        trigger:'blur', // La validación se produce cuando el campo pierde el foco.
                        validators: {
                            notEmpty: {
                            message: 'Por favor, introduzca un nombre.'
                                      } // notempty
                                    }// validators
                            },//Nombre
                    Telefono: { // nombre de input a validar.
                        trigger:'blur', // La validación se produce cuando el campo pierde el foco.
                        validators: {
                            digits: {
                              message: 'Introduzca valores numéricos'
                            }, // digits
                            notEmpty: {
                            message: 'Por favor, introduzca un numero de telefono.'
                                      } // notempty
                                    }// validators
                            },//Telefono
                    Email: { // nombre de input a validar.
                        trigger:'blur', // La validación se realiza cuando se pulsa una tecla
                        validators: {
                             notEmpty: {
                                message: 'Por favor, introduzca una direccion de correo electronico.'
                                      }, // notempty
                             emailaddress: { 
                                message: 'La direccion de correo,no es válida'
                                } // emailaddress
                          }// validators
                         },//Email
                    Poblacion: { // nombre de input a validar.
                        trigger:'blur', // La validación se realiza cuando se pulsa una tecla
                        validators: {
                             notEmpty: {
                                message: 'Por favor, introduzca la poblacion'
                                      } // notempty
                            }// validators
                           },//Poblacion  
                    Asunto: { // nombre de input a validar.
                        trigger:'blur', // La validación se realiza cuando se pulsa una tecla
                        validators: {
                            notEmpty: {
                            message: 'Por favor, introduzca un mensaje'
                            } // notempty
                          }// validators
                        }//Asunto
                    }//fields
               }); // bootstrapvalidator
           });// document.ready