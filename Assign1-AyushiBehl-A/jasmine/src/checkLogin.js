const validUserName = 'aybehl';
const validPassword = 'Ayu$h!2710';
const validMd5Password = md5Encrypt(validPassword);
/**
 * The checkLogin function is used to Validate the user inputs - user name and 
 * the corresponding password against the valid username and password
 * For password validation the md5Encrypt function is used
 * @param {string} username - a string user name input
 * @param {string} password  - a string password input 
 * @returns {string or boolean}
 */
function checkLogin(username, password){
    if(username === ''){
        return 'No username entered.';
    } else if(password === ''){
        return 'No password entered.';
    }

    let isUserNameMatch = validUserName === username ? true: false;
    let isPasswordMatch = validMd5Password === md5Encrypt(password) ? true: false;

    if(isUserNameMatch && isPasswordMatch){
        return true;
    } else {
        return 'Invalid Username or Password.';
    }
}