
// export default (data) => {
//     let error = {}
//     if (/\S+@\S+\.\S+/.test(data.email) || data.email.length > 35 ||  data.email === ''){
//         error.e1 = 'El email no es valido'
//     }
//     if (/^[0-9]1$/.test(data.password) || data.password.length < 6 && data.password.length > 10) {
//         error.e2 = 'Contraseña incorrecta'
//     }
// }

export default (data) => {
    let  errors = {};

    if(!data.email.includes('@')){
        errors.e1 = 'Email is not valid';
    }
    if(!data.email){
        errors.e2 = 'Ingrese Email'
    }
    if(data.email.length > 35){
        errors.e3 = 'Menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menos debe tener un numero'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'Longitud incorrecta'
    }
    return errors
};