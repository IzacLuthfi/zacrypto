const modInverse = (a: number, m: number) => {
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) return x;
  }
  return null;
};

export const hillCipher = (text: string, matrix: number[][], decrypt = false) => {
  if (!text) return "";
  const size = matrix.length;
  const pText = text.toUpperCase().replace(/[^A-Z]/g, "");
  if (pText.length === 0) return "";
  
  let paddedText = pText;
  while (paddedText.length % size !== 0) {
    paddedText += "X";
  }

  let finalMatrix = matrix;

  if (decrypt) {
    let det = 0;
    if (size === 2) {
      det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    } else {
      det = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]) -
            matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]) +
            matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
    }

    const invDet = modInverse(det, 26);
    if (invDet === null) return "Matriks tidak valid (Determinannya tidak memiliki invers mod 26)";

    if (size === 2) {
      finalMatrix = [
        [((matrix[1][1] * invDet) % 26 + 26) % 26, ((-matrix[0][1] * invDet) % 26 + 26) % 26],
        [((-matrix[1][0] * invDet) % 26 + 26) % 26, ((matrix[0][0] * invDet) % 26 + 26) % 26]
      ];
    } else {
      const adj = [
        [
          (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1]),
          -(matrix[0][1] * matrix[2][2] - matrix[0][2] * matrix[2][1]),
          (matrix[0][1] * matrix[1][2] - matrix[0][2] * matrix[1][1])
        ],
        [
          -(matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0]),
          (matrix[0][0] * matrix[2][2] - matrix[0][2] * matrix[2][0]),
          -(matrix[0][0] * matrix[1][2] - matrix[0][2] * matrix[1][0])
        ],
        [
          (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]),
          -(matrix[0][0] * matrix[2][1] - matrix[0][1] * matrix[2][0]),
          (matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0])
        ]
      ];
      // Transpose & Multiply with invDet
      finalMatrix = [
        [((adj[0][0] * invDet) % 26 + 26) % 26, ((adj[1][0] * invDet) % 26 + 26) % 26, ((adj[2][0] * invDet) % 26 + 26) % 26],
        [((adj[0][1] * invDet) % 26 + 26) % 26, ((adj[1][1] * invDet) % 26 + 26) % 26, ((adj[2][1] * invDet) % 26 + 26) % 26],
        [((adj[0][2] * invDet) % 26 + 26) % 26, ((adj[1][2] * invDet) % 26 + 26) % 26, ((adj[2][2] * invDet) % 26 + 26) % 26]
      ];
    }
  }

  let result = "";
  for (let i = 0; i < paddedText.length; i += size) {
    for (let row = 0; row < size; row++) {
      let sum = 0;
      for (let col = 0; col < size; col++) {
        sum += finalMatrix[row][col] * (paddedText.charCodeAt(i + col) - 65);
      }
      result += String.fromCharCode(((sum % 26) + 26) % 26 + 65);
    }
  }
  return result;
};