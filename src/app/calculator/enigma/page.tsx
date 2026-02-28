"use client";

import { useState } from "react";
import { customRotorCipher } from "@/lib/crypto/enigma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Trash2, Settings2 } from "lucide-react";

export default function EnigmaCalculator() {
  // State Dinamis
  const [reference, setReference] = useState("ABCDE");
  const [rotors, setRotors] = useState(["CDEAB", "BEACD", "EADBC"]);
  const [input, setInput] = useState("");

  // Handler untuk mengubah isi spesifik rotor
  const updateRotor = (index: number, value: string) => {
    const newRotors = [...rotors];
    newRotors[index] = value.toUpperCase().replace(/\s/g, ""); // Hapus spasi
    setRotors(newRotors);
  };

  // Handler untuk menambah rotor baru
  const addRotor = () => {
    setRotors([...rotors, ""]);
  };

  // Handler untuk menghapus rotor
  const removeRotor = (index: number) => {
    if (rotors.length > 1) {
      const newRotors = rotors.filter((_, i) => i !== index);
      setRotors(newRotors);
    }
  };

  // Jalankan perhitungan
  const { result, cleanInput } = customRotorCipher(input, rotors, reference);

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12 text-slate-100">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-amber-400">Simulator Mesin Rotor Custom</h1>
          <p className="text-slate-400 text-sm">Buat konfigurasi kuncimu sendiri dan lihat bagaimana mesin memprosesnya.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* SISI KIRI: PANEL KONFIGURASI */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="bg-[#1E293B] border-slate-700 shadow-xl">
              <CardHeader className="bg-slate-800/50 border-b border-slate-700 flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-sm flex items-center gap-2 text-slate-300">
                  <Settings2 className="w-4 h-4 text-amber-400" /> Konfigurasi Mesin
                </CardTitle>
                <Button onClick={addRotor} size="sm" variant="outline" className="h-8 border-amber-500/50 text-amber-400 hover:bg-amber-500/20">
                  <Plus className="w-4 h-4 mr-1" /> Tambah Kunci
                </Button>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                
                <div className="space-y-2">
                  <Label className="text-slate-300 text-xs uppercase font-bold tracking-wider">Alfabet Referensi P(i)</Label>
                  <Input 
                    value={reference}
                    onChange={(e) => setReference(e.target.value.toUpperCase().replace(/\s/g, ""))}
                    className="bg-[#0F172A] border-amber-500/50 text-amber-400 font-mono tracking-[0.2em] font-bold"
                    placeholder="Contoh: ABCDE"
                  />
                  <p className="text-[10px] text-slate-500 italic">Panjang Referensi: {reference.length} karakter</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-700">
                  <Label className="text-slate-300 text-xs uppercase font-bold tracking-wider mb-2 block">Daftar Kunci Substitusi</Label>
                  {rotors.map((rotor, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="bg-[#0F172A] border border-slate-700 px-3 py-2 rounded-md text-xs font-bold text-slate-400 w-12 text-center">
                        K{index}
                      </div>
                      <Input 
                        value={rotor}
                        onChange={(e) => updateRotor(index, e.target.value)}
                        className={`bg-[#0F172A] border-slate-700 font-mono tracking-widest ${rotor.length !== reference.length ? 'text-rose-400 focus:ring-rose-500' : 'text-slate-200 focus:ring-amber-500'}`}
                        placeholder={`Masukkan ${reference.length} huruf...`}
                        maxLength={reference.length}
                      />
                      <Button 
                        onClick={() => removeRotor(index)} 
                        variant="ghost" 
                        size="icon" 
                        className="shrink-0 text-slate-500 hover:text-rose-400 hover:bg-rose-400/10"
                        disabled={rotors.length === 1}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                  <p className="text-[10px] text-slate-500 italic mt-2">
                    *Pastikan panjang setiap kunci sama dengan panjang referensi ({reference.length}).
                  </p>
                </div>

              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-slate-700">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Pesan Input (Plaintext)</Label>
                  <Textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value.toUpperCase())}
                    placeholder={`Ketik pesan menggunakan huruf ${reference}...`}
                    className="bg-[#0F172A] border-slate-700 text-white font-mono tracking-[0.2em]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* SISI KANAN: TABEL HASIL */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="bg-[#1E293B] border-amber-500/30 overflow-hidden">
              <div className="bg-amber-500/10 px-4 py-2 border-b border-amber-500/20 flex justify-between items-center">
                <span className="text-xs font-bold text-amber-400 uppercase">Ciphertext Output</span>
                <span className="text-[10px] text-amber-400/70 font-mono">Jumlah Kunci: {rotors.length}</span>
              </div>
              <CardContent className="p-4">
                <div className="bg-[#0F172A] p-4 rounded-lg font-mono text-2xl text-center text-white break-all border border-slate-800 tracking-[0.3em]">
                  {result || <span className="text-slate-700 italic text-sm tracking-normal">---</span>}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-slate-700 h-full">
              <CardHeader className="border-b border-slate-800">
                <CardTitle className="text-sm text-slate-400">Log Proses Enkripsi</CardTitle>
              </CardHeader>
              <CardContent className="p-0 overflow-x-auto">
                <Table>
                  <TableHeader className="bg-slate-800/50">
                    <TableRow>
                      <TableHead className="text-center text-slate-300">i</TableHead>
                      <TableHead className="text-center text-slate-300">Rotor</TableHead>
                      <TableHead className="text-center text-slate-300">P(i)</TableHead>
                      <TableHead className="text-center text-amber-400 font-bold">Kunci Aktif</TableHead>
                      <TableHead className="text-center text-amber-400 font-bold">C(i)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cleanInput.split("").map((char, i) => {
                      const currentRotorIndex = i % rotors.length;
                      return (
                        <TableRow key={i} className="border-slate-800 hover:bg-slate-800/20">
                          <TableCell className="text-center font-mono text-xs">{i}</TableCell>
                          <TableCell className="text-center font-mono text-amber-500 text-xs">{currentRotorIndex}</TableCell>
                          <TableCell className="text-center font-bold">{char}</TableCell>
                          <TableCell className="text-center font-mono text-[10px] text-slate-400 tracking-widest">
                            {rotors[currentRotorIndex] || "?"}
                          </TableCell>
                          <TableCell className="text-center font-black text-white">
                            K{currentRotorIndex}({char}) = <span className="text-amber-400">{result[i]}</span>
                          </TableCell>
                        </TableRow>
                      )
                    })}
                    {cleanInput.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-10 text-slate-600 italic text-sm">
                          Ketik pesan untuk melihat simulasi tabel.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}