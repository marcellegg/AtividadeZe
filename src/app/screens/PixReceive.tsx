import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Copy, Share2, Check, QrCode } from "lucide-react";
import { useState } from "react";

export default function PixReceive() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [selectedKey, setSelectedKey] = useState("cpf");

  const myKeys = [
    { type: "cpf", label: "CPF", value: "123.456.789-32" },
    { type: "email", label: "E-mail", value: "carlos@email.com" },
    { type: "phone", label: "Telefone", value: "(11) 98765-1234" },
    { type: "random", label: "Chave aleatória", value: "a1b2c3d4-e5f6-7g8h..." },
  ];

  const handleCopy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate("/app/pix")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Receber PIX</h1>
        </div>
        <p className="text-white/90 ml-10">
          Compartilhe sua chave ou QR Code
        </p>
      </div>

      <div className="px-6 py-6">
        {/* QR Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 shadow-lg mb-6 text-center"
        >
          <div className="w-48 h-48 mx-auto bg-white rounded-2xl p-4 border-4 border-[#E8ECF2] mb-4">
            <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxRTNBNUYiLz48L3N2Zz4=')] bg-center bg-cover rounded-xl opacity-10" />
            <QrCode className="w-full h-full text-[#1E3A5F] absolute inset-0 m-auto opacity-20" />
          </div>
          <p className="text-sm font-semibold text-[#1E3A5F] mb-1">
            QR Code PIX
          </p>
          <p className="text-xs text-[#8B9AA8]">
            Salve ou compartilhe para receber
          </p>
          <div className="flex gap-3 mt-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-[#F5F7FA] text-[#0066FF] font-semibold py-3 rounded-xl hover:bg-[#E8ECF2] transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white font-semibold py-3 rounded-xl shadow-lg shadow-[#0066FF]/30 flex items-center justify-center gap-2"
            >
              Salvar
            </motion.button>
          </div>
        </motion.div>

        {/* My Keys */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
            Minhas chaves PIX
          </h3>
          <div className="space-y-3">
            {myKeys.map((key) => (
              <motion.div
                key={key.type}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedKey(key.type)}
                className={`bg-white rounded-2xl p-4 shadow-md border-2 transition-all cursor-pointer ${
                  selectedKey === key.type
                    ? "border-[#00C853]"
                    : "border-transparent"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs text-[#8B9AA8]">{key.label}</p>
                  {selectedKey === key.type && (
                    <div className="w-5 h-5 bg-[#00C853] rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-[#1E3A5F] text-sm">
                    {key.value}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(key.value);
                    }}
                    className="p-2 hover:bg-[#F5F7FA] rounded-lg transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-[#00C853]" />
                    ) : (
                      <Copy className="w-4 h-4 text-[#0066FF]" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Share Selected Key */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#00C853] to-[#00E676] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#00C853]/30 flex items-center justify-center gap-2"
        >
          <Share2 className="w-5 h-5" />
          Compartilhar chave selecionada
        </motion.button>

        {/* Info */}
        <div className="mt-6 bg-[#E8F5E9] border border-[#A5D6A7] rounded-2xl p-4">
          <p className="text-xs text-[#2E7D32] leading-relaxed">
            💡 <span className="font-semibold">Dica:</span> Compartilhe suas
            chaves PIX com segurança. Qualquer pessoa com sua chave pode enviar
            dinheiro para você.
          </p>
        </div>
      </div>
    </div>
  );
}
