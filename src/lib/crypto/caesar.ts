/**
 * Logika Matematika Caesar Cipher
 * Rumus: C = (P + K) mod 26
 */

export const caesarCipher = (text: string, shift: number, decrypt = false) => {
  // Jika dekripsi, balikkan arah pergeseran
  const s = decrypt ? (26 - (shift % 26)) % 26 : shift % 26;

  return text
    .split("")
    .map((char) => {
      // Proses hanya huruf alfabet
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        const base = code >= 65 && code <= 90 ? 65 : 97;
        // Rumus Modulo 26
        return String.fromCharCode(((code - base + s) % 26) + base);
      }
      // Karakter non-huruf (spasi, angka, simbol) tidak diubah
      return char;
    })
    .join("");
};