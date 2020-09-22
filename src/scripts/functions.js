import { key } from "./keys.js";
// var CryptoJS = require('crypto-js');
import { AES, enc } from "crypto-js";

// saving scores locally
export const getHighscore = () => {
  let highscore;
  try {
    highscore = parseInt(decrypt(
      localStorage.getItem("highscore"),
      key,
    )) || 0;
  } catch {
    highscore = 0;
  }
  return highscore;
};

export const setHighscore = (val) => {
  const ciphertext = encrypt(val);
  localStorage.setItem("highscore", ciphertext);
};

// crypto
export const encrypt = (text) => {
  const ciphertext = AES.encrypt(text.toString(), key).toString();
  return ciphertext;
};

export const decrypt = (ciphertext) => {
  const bytes = AES.decrypt(ciphertext, key);
  const original = bytes.toString(enc.Utf8);
  return original;
};

// saving username locally
export const saveUsername = (username) => {
  // remove html tags
  username = sanitize(username);
  localStorage.setItem("username", username);
};

export const getUsername = () => {
  const username = localStorage.getItem("username") || null;
  return username;
};

// sansitize
export const sanitize = (text) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  text = div.innerText;
  text = text.toString().split("<").join("");
  text = text.toString().split(">").join("");
  return text;
};
