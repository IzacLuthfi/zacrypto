/**
 * Logika Mesin Rotor Dinamis (Customizable)
 */

export const customRotorCipher = (
  text: string, 
  rotors: string[], 
  reference: string
) => {
  // PERBAIKAN: Selalu kembalikan object, meskipun teksnya kosong
  if (!text || !reference || rotors.length === 0) {
    return { result: "", cleanInput: "" };
  }
  
  // Bersihkan teks input agar hanya mengandung karakter yang ada di referensi
  const cleanInput = text.toUpperCase().split("").filter(c => reference.includes(c)).join("");
  let result = "";

  for (let i = 0; i < cleanInput.length; i++) {
    const char = cleanInput[i];
    
    // Tentukan posisi rotor saat ini
    const currentRotorIndex = i % rotors.length;
    const activeRotor = rotors[currentRotorIndex];
    
    // Cari urutan huruf pada referensi
    const charPos = reference.indexOf(char);
    
    // Ambil huruf pada urutan yang sama di rotor aktif
    if (activeRotor && activeRotor.length > charPos) {
      result += activeRotor[charPos];
    } else {
      result += "?";
    }
  }

  return { result, cleanInput };
};