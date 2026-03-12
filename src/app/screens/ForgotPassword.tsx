import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Mail, CheckCircle } from "lucide-react";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="w-20 h-20 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle className="w-10 h-10 text-white" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-[#1E3A5F] mb-3">
            E-mail enviado!
          </h1>
          <p className="text-[#8B9AA8] mb-8 max-w-sm">
            Enviamos instruções para recuperação de senha para o e-mail{" "}
            <span className="font-semibold text-[#1E3A5F]">{email}</span>
          </p>

          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-[#0066FF]/30"
          >
            Voltar para o login
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] px-6 pt-12 pb-8">
        <button onClick={() => navigate("/login")} className="text-white mb-6">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-bold text-white mb-2">
          Recuperar senha
        </h1>
        <p className="text-[#B8D4FF]">
          Digite seu e-mail cadastrado para receber instruções
        </p>
      </div>

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <div className="bg-white rounded-3xl p-6 mb-6 flex items-start gap-4">
          <div className="w-12 h-12 bg-[#F0F8FF] rounded-full flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-[#0066FF]" />
          </div>
          <div>
            <h3 className="font-semibold text-[#1E3A5F] mb-1">
              Verifique sua caixa de entrada
            </h3>
            <p className="text-sm text-[#8B9AA8]">
              Enviaremos um link de recuperação para o e-mail cadastrado
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-[#1E3A5F] mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full px-4 py-4 bg-white border border-[#E8ECF2] rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-[#0066FF] to-[#0080FF] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#0066FF]/30"
          >
            Enviar instruções
          </motion.button>
        </form>
      </div>
    </div>
  );
}
