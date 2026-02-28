"use client";

import { useState } from "react";
import { hillCipher } from "@/lib/crypto/hill";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function HillCalculator() {
  const [input, setInput] = useState("");
  const [size, setSize] = useState(2);
  const [m, setM] = useState([
    [3, 3, 0],
    [2, 5, 0],
    [0, 0, 1]
  ]);

  const updateMatrix = (r: number, c: number, val: string) => {
    const newM = [...m.map(row => [...row])];
    newM[r][c] = parseInt(val) || 0;
    setM(newM);
  };

  const currentMatrix = size === 2 
    ? [[m[0][0], m[0][1]], [m[1][0], m[1][1]]] 
    : m;

  const encrypted = hillCipher(input, currentMatrix);
  const decrypted = hillCipher(input, currentMatrix, true);

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12 text-slate-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-purple-400">Hill Cipher</h1>
            <p className="text-slate-400">Enkripsi menggunakan matriks {size}x{size}</p>
          </div>
          
          <div className="flex gap-2 bg-[#1E293B] p-1 rounded-lg border border-slate-700">
            <Button 
              onClick={() => setSize(2)} 
              variant="ghost"
              className={size === 2 ? "bg-purple-600 text-white hover:bg-purple-700" : "text-slate-400 hover:text-white"}
            >2x2</Button>
            <Button 
              onClick={() => setSize(3)} 
              variant="ghost"
              className={size === 3 ? "bg-purple-600 text-white hover:bg-purple-700" : "text-slate-400 hover:text-white"}
            >3x3</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* MATRIKS INPUT */}
          <Card className="bg-[#1E293B] border-slate-700 shadow-xl">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold text-slate-400 uppercase tracking-widest">Matriks Kunci</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 mx-auto" style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}>
                {Array.from({ length: size }).map((_, r) => (
                  Array.from({ length: size }).map((_, c) => (
                    <Input 
                      key={`${r}-${c}`}
                      type="number" 
                      value={m[r][c]} 
                      onChange={(e) => updateMatrix(r, c, e.target.value)}
                      className="bg-[#0F172A] border-slate-700 text-center text-purple-300 font-bold focus:ring-purple-500"
                    />
                  ))
                ))}
              </div>
            </CardContent>
          </Card>

          {/* TEXT AREA */}
          <Card className="md:col-span-2 bg-[#1E293B] border-slate-700 shadow-xl">
            <CardContent className="pt-6">
              <Label className="text-slate-300 font-medium">Pesan (Plaintext / Ciphertext)</Label>
              <Textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pesan di sini..."
                className="bg-[#0F172A] border-slate-700 mt-2 min-h-[120px] text-slate-100 placeholder:text-slate-600 focus:ring-purple-500"
              />
            </CardContent>
          </Card>
        </div>

        {/* HASIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#1E293B] border-purple-500/30 overflow-hidden group">
            <div className="bg-purple-500/10 px-4 py-2 border-b border-purple-500/20 text-xs font-bold text-purple-400">HASIL ENKRIPSI</div>
            <CardContent className="p-6">
              <div className="bg-[#0F172A] p-4 rounded-lg font-mono text-lg text-purple-100 break-all min-h-[80px] border border-slate-800">
                {encrypted || <span className="text-slate-700 italic text-sm">Menunggu input...</span>}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1E293B] border-emerald-500/30 overflow-hidden">
            <div className="bg-emerald-500/10 px-4 py-2 border-b border-emerald-500/20 text-xs font-bold text-emerald-400">HASIL DEKRIPSI</div>
            <CardContent className="p-6">
              <div className="bg-[#0F172A] p-4 rounded-lg font-mono text-lg text-emerald-100 break-all min-h-[80px] border border-slate-800">
                {decrypted || <span className="text-slate-700 italic text-sm">Menunggu input...</span>}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}