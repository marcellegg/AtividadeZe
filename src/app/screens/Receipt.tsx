import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Check, Share2, Download } from "lucide-react";

export default function Receipt() {
  const navigate = useNavigate();
  const { transactionId } = useParams();

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 pt-12 pb-8">
        <button
          onClick={() => navigate("/app")}
          className="text-white mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="px-6 -mt-4">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-24 h-24 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
        >
          <Check className="w-12 h-12 text-white" strokeWidth={3} />
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl font-bold text-[#1E3A5F] mb-2">
            Transação realizada!
          </h1>
          <p className="text-[#8B9AA8]">
            PIX enviado com sucesso
          </p>
        </motion.div>

        {/* Receipt Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-3xl p-6 shadow-lg mb-6"
        >
          {/* Amount */}
          <div className="text-center pb-6 border-b border-[#E8ECF2] mb-6">
            <p className="text-sm text-[#8B9AA8] mb-1">Valor</p>
            <h2 className="text-4xl font-bold text-[#1E3A5F]">R$ 150,00</h2>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <div>
              <p className="text-xs text-[#8B9AA8] mb-1">Para</p>
              <p className="font-bold text-[#1E3A5F]">Maria Silva</p>
            </div>

            <div>
              <p className="text-xs text-[#8B9AA8] mb-1">CPF</p>
              <p className="font-semibold text-[#1E3A5F]">•••.•••.789-32</p>
            </div>

            <div>
              <p className="text-xs text-[#8B9AA8] mb-1">Instituição</p>
              <p className="font-semibold text-[#1E3A5F]">FinBank</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E8ECF2]">
              <div>
                <p className="text-xs text-[#8B9AA8] mb-1">Data</p>
                <p className="font-semibold text-[#1E3A5F]">12/03/2026</p>
              </div>
              <div>
                <p className="text-xs text-[#8B9AA8] mb-1">Hora</p>
                <p className="font-semibold text-[#1E3A5F]">14:32</p>
              </div>
            </div>

            <div>
              <p className="text-xs text-[#8B9AA8] mb-1">ID da transação</p>
              <p className="font-mono text-xs text-[#1E3A5F]">
                E{transactionId}2026031214{Math.random()
                  .toString(36)
                  .substring(2, 9)
                  .toUpperCase()}
              </p>
            </div>

            <div>
              <p className="text-xs text-[#8B9AA8] mb-1">Tipo</p>
              <p className="font-semibold text-[#1E3A5F]">PIX</p>
            </div>

            <div>
              <p className="text-xs text-[#8B9AA8] mb-1">Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00C853] rounded-full" />
                <p className="font-semibold text-[#00C853]">Concluído</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-3 mb-6"
        >
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-[#E8ECF2] text-[#1E3A5F] font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#F5F7FA] transition-colors"
          >
            <Share2 className="w-5 h-5" />
            Compartilhar
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-[#E8ECF2] text-[#1E3A5F] font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#F5F7FA] transition-colors"
          >
            <Download className="w-5 h-5" />
            Salvar
          </motion.button>
        </motion.div>

        {/* Back to Home */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/app")}
          className="w-full bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#0066FF]/30 mb-4"
        >
          Voltar ao início
        </motion.button>

        {/* Security Info */}
        <div className="bg-[#E8F5E9] border border-[#A5D6A7] rounded-2xl p-4 mb-8">
          <p className="text-xs text-[#2E7D32] leading-relaxed text-center">
            🔒 Comprovante autenticado e válido para qualquer finalidade
          </p>
        </div>
      </div>
    </div>
  );
}
