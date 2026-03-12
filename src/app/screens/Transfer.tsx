import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Building2, User } from "lucide-react";

export default function Transfer() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bank: "",
    accountType: "corrente",
    agency: "",
    account: "",
    cpf: "",
    name: "",
    amount: "",
  });

  const banks = [
    "Banco do Brasil",
    "Bradesco",
    "Caixa Econômica",
    "Itaú",
    "Santander",
    "Nubank",
    "Inter",
    "Outros",
  ];

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate("/app/receipt/new");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => (step === 1 ? navigate("/app") : setStep(step - 1))}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Transferência</h1>
        </div>
        <p className="text-[#B8D4FF] ml-10">TED ou DOC</p>
        
        <div className="flex gap-2 mt-4 ml-10">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all ${
                s <= step ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="px-6 py-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                Banco
              </label>
              <select
                value={formData.bank}
                onChange={(e) => setFormData({ ...formData, bank: e.target.value })}
                className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all appearance-none"
              >
                <option value="">Selecione o banco</option>
                {banks.map((bank) => (
                  <option key={bank} value={bank}>
                    {bank}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-3">
                Tipo de conta
              </label>
              <div className="grid grid-cols-2 gap-3">
                {["corrente", "poupanca"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setFormData({ ...formData, accountType: type })}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      formData.accountType === type
                        ? "border-[#0066FF] bg-[#F0F8FF]"
                        : "border-[#E8ECF2] bg-white"
                    }`}
                  >
                    <p
                      className={`font-semibold ${
                        formData.accountType === type
                          ? "text-[#0066FF]"
                          : "text-[#1E3A5F]"
                      }`}
                    >
                      {type === "corrente" ? "Conta Corrente" : "Poupança"}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Agência
                </label>
                <input
                  type="text"
                  value={formData.agency}
                  onChange={(e) =>
                    setFormData({ ...formData, agency: e.target.value })
                  }
                  placeholder="0000"
                  className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Conta
                </label>
                <input
                  type="text"
                  value={formData.account}
                  onChange={(e) =>
                    setFormData({ ...formData, account: e.target.value })
                  }
                  placeholder="00000-0"
                  className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                CPF/CNPJ do favorecido
              </label>
              <input
                type="text"
                value={formData.cpf}
                onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                placeholder="000.000.000-00"
                className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                Nome do favorecido
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Nome completo"
                className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
              />
            </div>

            <div className="bg-[#F0F8FF] border border-[#B8D4FF] rounded-2xl p-4 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-semibold text-[#0066FF] mb-1">
                  Dados bancários
                </p>
                <p className="text-xs text-[#1E3A5F]">
                  {formData.bank || "Banco"} • Ag: {formData.agency || "0000"} • Cc:{" "}
                  {formData.account || "00000-0"}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-5"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg">
              <p className="text-xs text-[#8B9AA8] mb-3">Transferindo para</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#0080FF] rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-[#1E3A5F]">{formData.name || "Nome"}</p>
                  <p className="text-xs text-[#8B9AA8]">{formData.bank}</p>
                </div>
              </div>
              <div className="pt-4 border-t border-[#E8ECF2] text-xs text-[#8B9AA8] space-y-1">
                <p>CPF: {formData.cpf || "000.000.000-00"}</p>
                <p>
                  Agência: {formData.agency || "0000"} • Conta:{" "}
                  {formData.account || "00000-0"}
                </p>
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
                  value={formData.amount}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    const formatted = (Number(value) / 100).toFixed(2);
                    setFormData({ ...formData, amount: formatted });
                  }}
                  placeholder="0,00"
                  className="w-full pl-16 pr-4 py-6 bg-white border border-[#E8ECF2] rounded-2xl text-3xl font-bold text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>
              <p className="text-xs text-[#8B9AA8] mt-2 ml-2">
                Saldo disponível: R$ 12.547,32
              </p>
            </div>

            <div className="bg-[#FFF3E0] border border-[#FFD699] rounded-2xl p-4">
              <p className="text-xs text-[#E65100]">
                ⚠️ <span className="font-semibold">Taxa TED:</span> R$ 0,00
                (gratuito) • Prazo: até 30 minutos
              </p>
            </div>
          </motion.div>
        )}

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          className="w-full bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#0066FF]/30 mt-8"
        >
          {step === 3 ? "Confirmar transferência" : "Continuar"}
        </motion.button>
      </div>
    </div>
  );
}
