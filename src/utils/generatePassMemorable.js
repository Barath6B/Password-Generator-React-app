

const rand = (str) => str[Math.floor(Math.random() * str.length)];


function shuffleString(str) {
  const arr = str.split("");

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr.join("");
}

function GeneratePasswordMemorable(
  inputValues,
  passLength,
  boolupper,
  boolnums,
  boolspecial
) {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "@$#%?|=+-";
  const pool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@$#%?|=+-";

  let password = inputValues.split('');

  if(boolupper){
    password.push(rand(upperChar));
  }

  if(boolnums){
    password.push(rand(numbers));
  }

  if(boolspecial){
    password.push(rand(symbols));
  }

  while (password.length < passLength){
    if(boolupper && boolnums && boolspecial){
      password.push(rand(pool));
    }
    password.push(rand(lower));
  }
  password = shuffleString(password.join(''));
  return password;
}



export default GeneratePasswordMemorable;
