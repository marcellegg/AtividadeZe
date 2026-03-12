import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    cpf: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return formData.cpf;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }
    return formData.phone;
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleSubmit = () => {
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] px-6 pt-12 pb-6">
        <button
          onClick={() => (step === 1 ? navigate("/login") : setStep(step - 1))}
          className="text-white mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-white mb-2">
          {step === 1 && "Dados Pessoais"}
          {step === 2 && "Contato"}
          {step === 3 && "Segurança"}
        </h1>
        <p className="text-[#B8D4FF]">Etapa {step} de 3</p>

        {/* Progress Bar */}
        <div className="mt-4 flex gap-2">
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

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-5"
        >
          {step === 1 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Digite seu nome completo"
                  className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  CPF
                </label>
                <input
                  type="text"
                  value={formData.cpf}
                  onChange={(e) =>
                    setFormData({ ...formData, cpf: formatCPF(e.target.value) })
                  }
                  placeholder="000.000.000-00"
                  className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                  maxLength={14}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="seu@email.com"
                  className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: formatPhone(e.target.value),
                    })
                  }
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                  maxLength={15}
                />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    placeholder="Crie uma senha forte"
                    className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B9AA8]"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
                  Confirmar senha
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Digite a senha novamente"
                  className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                />
              </div>

              <div className="bg-[#F0F8FF] border border-[#B8D4FF] rounded-2xl p-4 space-y-2">
                <p className="text-xs font-semibold text-[#0066FF] mb-2">
                  A senha deve conter:
                </p>
                <div className="flex items-center gap-2 text-xs text-[#1E3A5F]">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                  Mínimo de 8 caracteres
                </div>
                <div className="flex items-center gap-2 text-xs text-[#1E3A5F]">
                  <CheckCircle2 className="w-4 h-4 text-[#00C853]" />
                  Letras e números
                </div>
              </div>
            </>
          )}
        </motion.div>

        {/* Next/Submit Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={step === 3 ? handleSubmit : handleNext}
          className="w-full bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#0066FF]/30 flex items-center justify-center gap-2 mt-8"
        >
          {step === 3 ? "Criar conta" : "Continuar"}
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-sm text-[#8B9AA8]">
            Já tem uma conta?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-[#0066FF] font-semibold"
            >
              Fazer login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
