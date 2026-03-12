import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Lock,
  Fingerprint,
  Smartphone,
  Key,
  Shield,
  Eye,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";

export default function Security() {
  const navigate = useNavigate();

  const securityOptions = [
    {
      icon: Lock,
      label: "Alterar senha",
      description: "Troque sua senha de acesso",
      color: "#0066FF",
      enabled: true,
    },
    {
      icon: Fingerprint,
      label: "Biometria",
      description: "Login com impressão digital ou Face ID",
      color: "#00C853",
      enabled: true,
    },
    {
      icon: Smartphone,
      label: "Autenticação em duas etapas",
      description: "Proteja sua conta com verificação extra",
      color: "#FF6B00",
      enabled: false,
    },
    {
      icon: Key,
      label: "Chaves de segurança",
      description: "Gerencie suas chaves PIX",
      color: "#9C27B0",
      enabled: true,
    },
    {
      icon: Eye,
      label: "Dispositivos conectados",
      description: "Veja onde sua conta está ativa",
      color: "#00BCD4",
      enabled: true,
    },
  ];

  const recentActivity = [
    {
      action: "Login realizado",
      device: "iPhone 14 Pro",
      location: "São Paulo, SP",
      time: "Hoje, 08:30",
    },
    {
      action: "Senha alterada",
      device: "Web Browser",
      location: "São Paulo, SP",
      time: "5 dias atrás",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00C853] to-[#00E676] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={() => navigate("/app/profile")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Segurança</h1>
        </div>
        <p className="text-white/90 ml-10">
          Proteja sua conta e seus dados
        </p>
      </div>

      <div className="px-6 py-6">
        {/* Security Score */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-lg mb-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#00C853] to-[#00E676] rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-[#1E3A5F] mb-1">
                Nível de Segurança
              </h3>
              <p className="text-sm text-[#8B9AA8]">Sua conta está protegida</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#00C853]">85%</p>
              <p className="text-xs text-[#8B9AA8]">Alto</p>
            </div>
          </div>
          <div className="bg-[#E8ECF2] rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#00C853] to-[#00E676] h-full rounded-full"
              style={{ width: "85%" }}
            />
          </div>
        </motion.div>

        {/* Security Options */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
            Opções de segurança
          </h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            {securityOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.label}
                  className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                    index !== securityOptions.length - 1
                      ? "border-b border-[#E8ECF2]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${option.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: option.color }} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-[#1E3A5F] text-sm">
                        {option.label}
                      </p>
                      <p className="text-xs text-[#8B9AA8]">
                        {option.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {option.enabled ? (
                      <div className="w-10 h-6 bg-[#00C853] rounded-full relative">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    ) : (
                      <div className="w-10 h-6 bg-[#E8ECF2] rounded-full relative">
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    )}
                    <ChevronRight className="w-4 h-4 text-[#8B9AA8]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
            Atividades recentes
          </h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className={`p-4 ${
                  index !== recentActivity.length - 1
                    ? "border-b border-[#E8ECF2]"
                    : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#00C853] rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="font-semibold text-[#1E3A5F] text-sm mb-1">
                      {activity.action}
                    </p>
                    <p className="text-xs text-[#8B9AA8] mb-1">
                      {activity.device} • {activity.location}
                    </p>
                    <p className="text-xs text-[#8B9AA8]">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Recommendations */}
        <div className="bg-[#FFF3E0] border border-[#FFD699] rounded-3xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-[#E65100] text-sm mb-2">
                Recomendações de segurança
              </h4>
              <ul className="space-y-2 text-xs text-[#E65100]">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Ative a autenticação em duas etapas para mais proteção</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Use senhas únicas e fortes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Nunca compartilhe seus dados de acesso</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Emergency Button */}
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#FF1744] to-[#F44336] text-white font-semibold py-4 rounded-2xl shadow-lg shadow-[#FF1744]/30 flex items-center justify-center gap-2"
        >
          <Lock className="w-5 h-5" />
          Bloquear conta temporariamente
        </motion.button>

        {/* Help */}
        <div className="text-center mt-6">
          <button
            onClick={() => navigate("/app/help")}
            className="text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors"
          >
            Precisa de ajuda com segurança?
          </button>
        </div>
      </div>
    </div>
  );
}
