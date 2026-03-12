import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Barcode, Camera, Type } from "lucide-react";

export default function BillPayment() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<"barcode" | "typed" | null>(null);
  const [code, setCode] = useState("");

  const handleScan = () => {
    setTimeout(() => {
      setCode("34191.79001 01043.510047 91020.150008 1 96610000035000");
      setMethod("barcode");
    }, 1500);
  };

  const handleContinue = () => {
    navigate("/app/receipt/new");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate("/app")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Pagar Boleto</h1>
        </div>
        <p className="text-white/90 ml-10">
          Escaneie ou digite o código de barras
        </p>
      </div>

      <div className="px-6 py-6">
        {!method && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleScan}
              className="w-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#FFF3E0] rounded-2xl flex items-center justify-center">
                  <Camera className="w-8 h-8 text-[#FF6B00]" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-[#1E3A5F] mb-1">
                    Escanear código de barras
                  </h3>
                  <p className="text-sm text-[#8B9AA8]">
                    Use a câmera para ler o boleto
                  </p>
                </div>
              </div>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setMethod("typed")}
              className="w-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#F0F8FF] rounded-2xl flex items-center justify-center">
                  <Type className="w-8 h-8 text-[#0066FF]" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-[#1E3A5F] mb-1">
                    Digitar código
                  </h3>
                  <p className="text-sm text-[#8B9AA8]">
                    Digite manualmente o código de barras
                  </p>
                </div>
              </div>
            </motion.button>

            <div className="bg-[#F0F8FF] border border-[#B8D4FF] rounded-2xl p-4 mt-6">
              <p className="text-xs text-[#1E3A5F] leading-relaxed">
                💡 <span className="font-semibold">Dica:</span> Para uma leitura
                mais rápida, certifique-se de que o código de barras está nítido
                e bem iluminado.
              </p>
            </div>
          </motion.div>
        )}

        {method === "typed" && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                Código de barras
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="00000.00000 00000.000000 00000.000000 0 00000000000000"
                className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all font-mono text-sm"
              />
              <p className="text-xs text-[#8B9AA8] mt-2 ml-2">
                Digite os números do código de barras
              </p>
            </div>

            {code && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-[#8B9AA8] mb-1">Beneficiário</p>
                    <p className="font-bold text-[#1E3A5F]">
                      Companhia de Energia Elétrica
                    </p>
                  </div>
                  <Barcode className="w-8 h-8 text-[#8B9AA8]" />
                </div>
                <div className="space-y-3 pt-4 border-t border-[#E8ECF2]">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B9AA8]">Valor</span>
                    <span className="font-bold text-[#1E3A5F]">R$ 350,00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B9AA8]">Vencimento</span>
                    <span className="font-semibold text-[#1E3A5F]">
                      15/03/2026
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#8B9AA8]">Status</span>
                    <span className="font-semibold text-[#00C853]">
                      No prazo
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {method === "barcode" && code && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs text-[#8B9AA8] mb-1">Beneficiário</p>
                  <p className="font-bold text-[#1E3A5F]">
                    Companhia de Energia Elétrica
                  </p>
                </div>
                <Barcode className="w-8 h-8 text-[#8B9AA8]" />
              </div>
              <div className="space-y-3 pt-4 border-t border-[#E8ECF2]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B9AA8]">Valor</span>
                  <span className="font-bold text-[#1E3A5F]">R$ 350,00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B9AA8]">Vencimento</span>
                  <span className="font-semibold text-[#1E3A5F]">15/03/2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#8B9AA8]">Status</span>
                  <span className="font-semibold text-[#00C853]">No prazo</span>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                Código de barras
              </label>
              <div className="bg-[#F5F7FA] rounded-2xl p-4">
                <p className="text-sm text-[#1E3A5F] font-mono break-all">
                  {code}
                </p>
              </div>
            </div>

            <div className="bg-[#FFF3E0] border border-[#FFD699] rounded-2xl p-4">
              <p className="text-xs text-[#E65100] leading-relaxed">
                ⚠️ <span className="font-semibold">Atenção:</span> Confira os
                dados antes de confirmar o pagamento. Esta operação não poderá
                ser cancelada.
              </p>
            </div>
          </motion.div>
        )}

        {code && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#FF6B00]/30 mt-8"
          >
            Pagar R$ 350,00
          </motion.button>
        )}
      </div>
    </div>
  );
}
