import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Camera, Image, Scan } from "lucide-react";

export default function PixQRCode() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => {
      navigate("/app/pix/send");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A2342]">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => navigate("/app/pix")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white">Ler QR Code</h1>
          <button className="text-white">
            <Image className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scanner Area */}
      <div className="px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative aspect-square bg-gradient-to-br from-[#1E3A5F] to-[#0A2342] rounded-3xl overflow-hidden mb-6"
        >
          {/* Scanner Frame */}
          <div className="absolute inset-8 border-4 border-white/30 rounded-3xl" />
          
          {/* Corner Markers */}
          <div className="absolute top-8 left-8 w-12 h-12 border-t-4 border-l-4 border-[#00E676] rounded-tl-2xl" />
          <div className="absolute top-8 right-8 w-12 h-12 border-t-4 border-r-4 border-[#00E676] rounded-tr-2xl" />
          <div className="absolute bottom-8 left-8 w-12 h-12 border-b-4 border-l-4 border-[#00E676] rounded-bl-2xl" />
          <div className="absolute bottom-8 right-8 w-12 h-12 border-b-4 border-r-4 border-[#00E676] rounded-br-2xl" />

          {/* Scanning Line Animation */}
          {scanning && (
            <motion.div
              initial={{ top: "10%" }}
              animate={{ top: "90%" }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="absolute left-8 right-8 h-1 bg-gradient-to-r from-transparent via-[#00E676] to-transparent shadow-lg shadow-[#00E676]/50"
            />
          )}

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={scanning ? { scale: [1, 1.1, 1] } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center"
            >
              <Scan className="w-12 h-12 text-white" />
            </motion.div>
          </div>

          {/* Camera Background Simulation */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <p className="text-white font-semibold mb-2">
            {scanning ? "Lendo QR Code..." : "Posicione o QR Code no centro"}
          </p>
          <p className="text-white/60 text-sm">
            {scanning
              ? "Aguarde enquanto processamos"
              : "Mantenha o código dentro da área marcada"}
          </p>
        </motion.div>

        {/* Action Button */}
        {!scanning && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScan}
            className="w-full bg-gradient-to-r from-[#00C853] to-[#00E676] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#00C853]/30 flex items-center justify-center gap-2 mb-4"
          >
            <Camera className="w-5 h-5" />
            Iniciar leitura
          </motion.button>
        )}

        {/* Alternative Options */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/app/pix/copy-paste")}
            className="bg-white/10 backdrop-blur-sm text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-colors"
          >
            Copia e Cola
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-colors"
          >
            Galeria
          </motion.button>
        </div>

        {/* Tips */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
          <p className="text-xs text-white/80 leading-relaxed">
            💡 <span className="font-semibold">Dica:</span> Certifique-se de que
            o ambiente está bem iluminado para uma leitura mais rápida do QR Code.
          </p>
        </div>
      </div>
    </div>
  );
}
