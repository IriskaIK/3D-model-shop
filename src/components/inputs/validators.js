export function validatePassword(password) {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

  
    if(!password){
        return {valid : false, msg: "Password is required."};
    }
    if (password.length < minLength) {
      return {valid : false, msg: "Password must be at least " + minLength + " characters long."};
    }
  
    if (!uppercaseRegex.test(password)) {
      return {valid : false, msg: "Password must contain at least one uppercase letter."};
    }
  
    if (!lowercaseRegex.test(password)) {
      return {valid : false, msg: "Password must contain at least one lowercase letter."};
    }
  

  
    return {valid:true};
}


export function validateEmail(email){
    const emailRegex = /.+@.+\..+/
    if(!email){
        return {valid : false, msg : 'E-mail is required.'}
    }
    if (!emailRegex.test(email)){
        return {valid : false, msg : 'Email must be valid.'}
    }

    return {valid : true}
    

}

export function validateName(name){
    const minLength = 2
    if(!name){
        return {valid: false, msg : 'Name is required.'}
    }
    if(name < minLength){
        return {valid : false, msg : "Name must be at least " + minLength + " characters long."}
    }
    return {valid : true}
}

export function validatePhone(phone){
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/

    if(!phone){
        return {valid : false, msg : 'Phone number is required.'}
    }
    if(!phoneRegex.test(phone)){
        return {valid : false, msg : 'Phone number is invalid'}
    }

    return {valid : true}
}