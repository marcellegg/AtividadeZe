import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Send,
  Download,
  QrCode,
  Copy,
  User,
  Clock,
  ChevronRight,
} from "lucide-react";

export default function Pix() {
  const navigate = useNavigate();

  const pixActions = [
    {
      icon: Send,
      label: "Enviar PIX",
      description: "Transferir para qualquer pessoa",
      path: "/app/pix/send",
      color: "#0066FF",
    },
    {
      icon: Download,
      label: "Receber PIX",
      description: "Gerar QR Code ou compartilhar chave",
      path: "/app/pix/receive",
      color: "#00C853",
    },
    {
      icon: QrCode,
      label: "QR Code",
      description: "Ler ou pagar com QR Code",
      path: "/app/pix/qrcode",
      color: "#9C27B0",
    },
    {
      icon: Copy,
      label: "Copia e Cola",
      description: "Pagar com código PIX",
      path: "/app/pix/copy-paste",
      color: "#FF6B00",
    },
  ];

  const myKeys = [
    { type: "CPF", value: "•••.•••.•••-32", icon: User },
    { type: "E-mail", value: "carlos@email.com", icon: User },
    { type: "Telefone", value: "(11) •••••-1234", icon: User },
  ];

  const recentPix = [
    { name: "Maria Silva", date: "Hoje, 14:32", avatar: "MS" },
    { name: "João Santos", date: "Hoje, 10:15", avatar: "JS" },
    { name: "Ana Costa", date: "Ontem", avatar: "AC" },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("/app")}
            className="text-white"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Área PIX</h1>
        </div>
        <p className="text-[#B8D4FF] ml-10">
          Transferências rápidas e gratuitas
        </p>
      </div>

      {/* PIX Actions */}
      <div className="px-6 -mt-4 mb-6">
        <div className="space-y-3">
          {pixActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(action.path)}
                className="w-full bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all flex items-center gap-4"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${action.color}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: action.color }} />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-bold text-[#1E3A5F] mb-1">
                    {action.label}
                  </h3>
                  <p className="text-xs text-[#8B9AA8]">{action.description}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B9AA8]" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* My PIX Keys */}
      <div className="px-6 mb-6">
        <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
          Minhas chaves PIX
        </h3>
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {myKeys.map((key, index) => {
            const Icon = key.icon;
            return (
              <div
                key={key.type}
                className={`flex items-center justify-between p-4 ${
                  index !== myKeys.length - 1
                    ? "border-b border-[#E8ECF2]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F0F8FF] rounded-full flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0066FF]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8B9AA8]">{key.type}</p>
                    <p className="font-semibold text-[#1E3A5F] text-sm">
                      {key.value}
                    </p>
                  </div>
                </div>
                <button className="text-[#0066FF]">
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            );
          })}
          <button className="w-full p-4 text-center text-sm font-semibold text-[#0066FF] hover:bg-[#F5F7FA] transition-colors">
            + Cadastrar nova chave
          </button>
        </div>
      </div>

      {/* Recent PIX */}
      <div className="px-6 pb-6">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-[#8B9AA8]" />
          <h3 className="text-sm font-bold text-[#1E3A5F]">PIX recentes</h3>
        </div>
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {recentPix.map((contact, index) => (
            <button
              key={contact.name}
              onClick={() => navigate("/app/pix/send")}
              className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                index !== recentPix.length - 1
                  ? "border-b border-[#E8ECF2]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#0080FF] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {contact.avatar}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#1E3A5F] text-sm">
                    {contact.name}
                  </p>
                  <p className="text-xs text-[#8B9AA8]">{contact.date}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8B9AA8]" />
            </button>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-6 pb-8">
        <div className="bg-[#F0F8FF] border border-[#B8D4FF] rounded-3xl p-5">
          <h4 className="font-bold text-[#0066FF] text-sm mb-2">
            🔒 Segurança PIX
          </h4>
          <p className="text-xs text-[#1E3A5F] leading-relaxed">
            Suas transações são protegidas com criptografia de ponta a ponta.
            Nunca compartilhe suas senhas ou dados pessoais.
          </p>
        </div>
      </div>
    </div>
  );
}
