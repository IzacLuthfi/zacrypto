/**
 * Logika Matematika Vigenère Cipher
 * Rumus: Ci = (Pi + Ki) mod 26
 */

export const vigenereCipher = (text: string, key: string, decrypt = false) => {
  if (!key) return text;
  
  const cleanKey = key.toLowerCase().replace(/[^a-z]/g, "");
  if (cleanKey.length === 0) return text;

  let keyIndex = 0;

  return text
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const isUpperCase = char === char.toUpperCase();
        const charCode = char.toLowerCase().charCodeAt(0) - 97;
        const keyCode = cleanKey[keyIndex % cleanKey.length].charCodeAt(0) - 97;

        let resultIndex;
        if (decrypt) {
          // Rumus Dekripsi: (C - K + 26) mod 26
          resultIndex = (charCode - keyCode + 26) % 26;
        } else {
          // Rumus Enkripsi: (P + K) mod 26
          resultIndex = (charCode + keyCode) % 26;
        }

        keyIndex++; // Kunci hanya bergeser jika karakter adalah huruf
        const resultChar = String.fromCharCode(resultIndex + 97);
        return isUpperCase ? resultChar.toUpperCase() : resultChar;
      }
      return char; // Spasi dan simbol dilewati
    })
    .join("");
};