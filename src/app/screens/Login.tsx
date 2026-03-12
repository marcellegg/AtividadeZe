import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Wallet, Eye, EyeOff, ArrowRight } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/app");
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }
    return cpf;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A2342] via-[#1E3A5F] to-[#0066FF] flex flex-col">
      {/* Header */}
      <div className="pt-16 pb-12 px-6 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4"
        >
          <Wallet className="w-9 h-9 text-[#0066FF]" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold text-white mb-2"
        >
          Bem-vindo de volta
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#B8D4FF]"
        >
          Acesse sua conta FinBank
        </motion.p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex-1 bg-white rounded-t-[32px] px-6 pt-8 pb-6"
      >
        <form onSubmit={handleLogin} className="space-y-5">
          {/* CPF Input */}
          <div>
            <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
              CPF
            </label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(formatCPF(e.target.value))}
              placeholder="000.000.000-00"
              className="w-full px-4 py-4 bg-[#F5F7FA] border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
              maxLength={14}
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
              Senha
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-4 bg-[#F5F7FA] border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B9AA8] hover:text-[#0066FF] transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => navigate("/forgot-password")}
              className="text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors"
            >
              Esqueci minha senha
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#0066FF]/30 hover:shadow-xl hover:shadow-[#0066FF]/40 transition-all flex items-center justify-center gap-2 mt-8"
          >
            Entrar
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </form>

        {/* Register Link */}
        <div className="text-center mt-8">
          <p className="text-[#8B9AA8]">
            Ainda não tem conta?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-[#0066FF] font-semibold hover:text-[#0052CC] transition-colors"
            >
              Abrir conta grátis
            </button>
          </p>
        </div>

        {/* Biometric Login */}
        <div className="mt-12 text-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center w-14 h-14 bg-[#F5F7FA] rounded-full hover:bg-[#E8ECF2] transition-colors"
          >
            <svg
              className="w-6 h-6 text-[#0066FF]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
          </motion.button>
          <p className="text-xs text-[#8B9AA8] mt-2">Usar biometria</p>
        </div>
      </motion.div>
    </div>
  );
}
