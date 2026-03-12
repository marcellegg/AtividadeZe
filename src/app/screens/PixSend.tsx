import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, User, Mail, Smartphone, CreditCard, Search } from "lucide-react";

export default function PixSend() {
  const navigate = useNavigate();
  const [selectedKeyType, setSelectedKeyType] = useState("");
  const [keyValue, setKeyValue] = useState("");
  const [amount, setAmount] = useState("");
  const [step, setStep] = useState(1);

  const keyTypes = [
    { type: "cpf", label: "CPF/CNPJ", icon: User },
    { type: "email", label: "E-mail", icon: Mail },
    { type: "phone", label: "Telefone", icon: Smartphone },
    { type: "random", label: "Chave aleatória", icon: CreditCard },
  ];

  const handleNext = () => {
    if (step === 1 && keyValue) {
      setStep(2);
    } else if (step === 2 && amount) {
      navigate("/app/receipt/new");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => (step === 1 ? navigate("/app/pix") : setStep(1))} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Enviar PIX</h1>
        </div>
        <div className="flex gap-2 ml-10">
          <div className={`h-1 w-16 rounded-full ${step >= 1 ? "bg-white" : "bg-white/30"}`} />
          <div className={`h-1 w-16 rounded-full ${step >= 2 ? "bg-white" : "bg-white/30"}`} />
        </div>
      </div>

      <div className="px-6 py-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
                Escolha o tipo de chave
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {keyTypes.map((key) => {
                  const Icon = key.icon;
                  return (
                    <motion.button
                      key={key.type}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedKeyType(key.type)}
                      className={`p-4 rounded-2xl border-2 transition-all ${
                        selectedKeyType === key.type
                          ? "border-[#0066FF] bg-[#F0F8FF]"
                          : "border-[#E8ECF2] bg-white"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 mb-2 mx-auto ${
                          selectedKeyType === key.type
                            ? "text-[#0066FF]"
                            : "text-[#8B9AA8]"
                        }`}
                      />
                      <p
                        className={`text-xs font-semibold ${
                          selectedKeyType === key.type
                            ? "text-[#0066FF]"
                            : "text-[#1E3A5F]"
                        }`}
                      >
                        {key.label}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {selectedKeyType && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Digite a chave PIX
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={keyValue}
                    onChange={(e) => setKeyValue(e.target.value)}
                    placeholder={
                      selectedKeyType === "cpf"
                        ? "000.000.000-00"
                        : selectedKeyType === "email"
                        ? "exemplo@email.com"
                        : selectedKeyType === "phone"
                        ? "(00) 00000-0000"
                        : "Cole a chave aleatória"
                    }
                    className="w-full pl-12 pr-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9AA8]" />
                </div>
              </motion.div>
            )}

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              disabled={!keyValue}
              className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                keyValue
                  ? "bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white shadow-lg shadow-[#0066FF]/30"
                  : "bg-[#E8ECF2] text-[#8B9AA8] cursor-not-allowed"
              }`}
            >
              Continuar
            </motion.button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <p className="text-xs text-[#8B9AA8] mb-1">Enviando para</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#0080FF] rounded-full flex items-center justify-center text-white font-bold">
                  MS
                </div>
                <div>
                  <p className="font-bold text-[#1E3A5F]">Maria Silva</p>
                  <p className="text-xs text-[#8B9AA8]">{keyValue}</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                Valor
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-[#1E3A5F]">
                  R$
                </span>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    const formatted = (Number(value) / 100).toFixed(2);
                    setAmount(formatted);
                  }}
                  placeholder="0,00"
                  className="w-full pl-16 pr-4 py-6 bg-white border border-[#E8ECF2] rounded-2xl text-3xl font-bold text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>
              <p className="text-xs text-[#8B9AA8] mt-2 ml-2">
                Saldo disponível: R$ 12.547,32
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                Mensagem (opcional)
              </label>
              <textarea
                placeholder="Adicione uma mensagem"
                rows={3}
                className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all resize-none"
              />
            </div>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleNext}
              disabled={!amount || Number(amount) <= 0}
              className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                amount && Number(amount) > 0
                  ? "bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white shadow-lg shadow-[#0066FF]/30"
                  : "bg-[#E8ECF2] text-[#8B9AA8] cursor-not-allowed"
              }`}
            >
              Enviar PIX de R$ {amount || "0,00"}
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
