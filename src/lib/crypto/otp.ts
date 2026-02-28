/**
 * Logika One-Time Pad (OTP) Klasik
 * Rumus: C = (P + K) mod 26
 */

export const otpCipher = (text: string, key: string, decrypt = false) => {
  if (!text || !key) return "";
  
  const pText = text.toUpperCase().replace(/[^A-Z]/g, "");
  // Kunci dibersihkan jadi angka (misal kunci berbentuk "8, 15, 17...") 
  // atau teks yang diubah jadi angka.
  const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, "");

  let result = "";
  for (let i = 0; i < pText.length; i++) {
    const p = pText.charCodeAt(i) - 65;
    // Ambil kunci pada posisi yang sama
    const k = cleanKey.charCodeAt(i % cleanKey.length) - 65;

    let res;
    if (decrypt) {
      res = (p - k + 26) % 26;
    } else {
      res = (p + k) % 26;
    }
    
    result += String.fromCharCode(res + 65);
  }
  return result;
};

// Generate kunci berupa huruf acak sepanjang pesan
export const generateRandomKey = (length: number) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * 26));
  }
  return result;
};