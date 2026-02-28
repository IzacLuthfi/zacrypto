/**
 * Logika Playfair Cipher
 * Menggunakan Tabel 5x5 (I/J digabung)
 */

export const preparePlayfairKey = (key: string) => {
  const alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // Tanpa J
  const cleanKey = (key.toUpperCase() + alphabet).replace(/J/g, "I").replace(/[^A-Z]/g, "");
  const uniqueKey = Array.from(new Set(cleanKey));
  
  const matrix: string[][] = [];
  for (let i = 0; i < 5; i++) {
    matrix.push(uniqueKey.slice(i * 5, i * 5 + 5));
  }
  return matrix;
};

export const playfairCipher = (text: string, key: string, decrypt = false) => {
  if (!key) return text;
  const matrix = preparePlayfairKey(key);
  const flatMatrix = matrix.flat();
  
  // Persiapan Plaintext
  let preparedText = text.toUpperCase().replace(/J/g, "I").replace(/[^A-Z]/g, "");
  let digraphs: string[] = [];
  
  for (let i = 0; i < preparedText.length; i += 2) {
    let a = preparedText[i];
    let b = preparedText[i + 1] || "X";
    if (a === b) {
      digraphs.push(a + "X");
      i--; // Ulangi b untuk pasangan berikutnya
    } else {
      digraphs.push(a + b);
    }
  }

  const findPos = (char: string) => {
    const idx = flatMatrix.indexOf(char);
    return { r: Math.floor(idx / 5), c: idx % 5 };
  };

  return digraphs.map(pair => {
    const p1 = findPos(pair[0]);
    const p2 = findPos(pair[1]);
    const shift = decrypt ? 4 : 1; // Geser ke kiri/atas adalah +4 mod 5

    if (p1.r === p2.r) { // Baris yang sama
      return matrix[p1.r][(p1.c + shift) % 5] + matrix[p2.r][(p2.c + shift) % 5];
    } else if (p1.c === p2.c) { // Kolom yang sama
      return matrix[(p1.r + shift) % 5][p1.c] + matrix[(p2.r + shift) % p2.c];
    } else { // Membentuk persegi panjang
      return matrix[p1.r][p2.c] + matrix[p2.r][p1.c];
    }
  }).join(" ");
};