import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Clipboard, Check } from "lucide-react";

export default function PixCopyPaste() {
  const navigate = useNavigate();
  const [pixCode, setPixCode] = useState("");
  const [pasted, setPasted] = useState(false);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setPixCode(text);
      setPasted(true);
      setTimeout(() => setPasted(false), 2000);
    } catch (err) {
      console.error("Failed to read clipboard");
    }
  };

  const handleContinue = () => {
    if (pixCode) {
      navigate("/app/pix/send");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate("/app/pix")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">PIX Copia e Cola</h1>
        </div>
        <p className="text-white/90 ml-10">
          Cole o código PIX para pagar
        </p>
      </div>

      <div className="px-6 py-6">
        {/* Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-lg mb-6"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 bg-[#FFF3E0] rounded-full flex items-center justify-center flex-shrink-0">
              <Clipboard className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1E3A5F] mb-1">
                Como funciona?
              </h3>
              <p className="text-sm text-[#8B9AA8] leading-relaxed">
                Cole o código PIX que você recebeu para realizar o pagamento de
                forma rápida e segura.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <label className="block text-sm font-semibold text-[#1E3A5F] mb-3">
            Código PIX Copia e Cola
          </label>
          
          <div className="relative">
            <textarea
              value={pixCode}
              onChange={(e) => setPixCode(e.target.value)}
              placeholder="Cole aqui o código PIX que você recebeu..."
              rows={6}
              className="w-full px-4 py-4 bg-white border-2 border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all resize-none font-mono text-sm"
            />
            
            {/* Paste Button Overlay */}
            {!pixCode && (
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={handlePaste}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-[#FF6B00]/30 flex items-center gap-2"
              >
                {pasted ? (
                  <>
                    <Check className="w-5 h-5" />
                    Colado!
                  </>
                ) : (
                  <>
                    <Clipboard className="w-5 h-5" />
                    Colar da área de transferência
                  </>
                )}
              </motion.button>
            )}
          </div>

          {pixCode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-3 flex items-center gap-2 text-sm"
            >
              <div className="w-5 h-5 bg-[#00C853] rounded-full flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-[#00C853] font-semibold">
                Código PIX válido
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={handleContinue}
            disabled={!pixCode}
            className={`w-full py-4 rounded-2xl font-semibold transition-all ${
              pixCode
                ? "bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white shadow-lg shadow-[#FF6B00]/30"
                : "bg-[#E8ECF2] text-[#8B9AA8] cursor-not-allowed"
            }`}
          >
            Continuar pagamento
          </motion.button>

          {pixCode && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setPixCode("")}
              className="w-full bg-white border-2 border-[#E8ECF2] text-[#1E3A5F] font-semibold py-4 rounded-2xl hover:bg-[#F5F7FA] transition-colors"
            >
              Limpar código
            </motion.button>
          )}
        </div>

        {/* Security Info */}
        <div className="mt-8 bg-[#FFF3E0] border border-[#FFD699] rounded-2xl p-4">
          <p className="text-xs text-[#E65100] leading-relaxed">
            🔒 <span className="font-semibold">Segurança:</span> Verifique
            sempre os dados do destinatário antes de confirmar o pagamento. O
            código PIX contém todas as informações da transação.
          </p>
        </div>

        {/* Example */}
        <div className="mt-6">
          <button
            onClick={() =>
              setPixCode(
                "00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p65204000053039865802BR5913CARLOS SILVA6009SAO PAULO62070503***63041D3D"
              )
            }
            className="text-xs text-[#0066FF] font-semibold hover:text-[#0052CC] transition-colors"
          >
            Usar código de exemplo
          </button>
        </div>
      </div>
    </div>
  );
}
