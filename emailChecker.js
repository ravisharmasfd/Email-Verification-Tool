import EmailValidator from 'email-deep-validator';

const emailChecker = async(email)=>{
    const emailValidator = new EmailValidator();
    return await emailValidator.verify(email);
}

export default emailChecker;