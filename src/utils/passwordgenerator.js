function generatePassword(passwordLength, boolupper , boolnums, boolspecial) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "@$#%?|=+-";
    let chars = lower;


    if (boolupper) chars +=upperChar;
    if (boolnums) chars += numbers;
    if (boolspecial) chars += symbols;

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randIdx = Math.floor(Math.random() * chars.length);
        password += chars[randIdx];
    }

    return password;
}

export default generatePassword;

