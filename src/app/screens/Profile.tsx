import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  ChevronRight,
  Edit,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const profileInfo = [
    { icon: Mail, label: "E-mail", value: "carlos@email.com" },
    { icon: Phone, label: "Telefone", value: "(11) 98765-1234" },
    { icon: MapPin, label: "Endereço", value: "São Paulo, SP" },
    { icon: CreditCard, label: "CPF", value: "•••.•••.•••-32" },
  ];

  const menuItems = [
    {
      icon: User,
      label: "Dados pessoais",
      path: "/app/profile",
      color: "#0066FF",
    },
    {
      icon: Shield,
      label: "Segurança",
      path: "/app/security",
      color: "#00C853",
    },
    {
      icon: Bell,
      label: "Notificações",
      path: "/app/notifications",
      color: "#FF6B00",
    },
    {
      icon: CreditCard,
      label: "Meus cartões",
      path: "/app/cards",
      color: "#9C27B0",
    },
    {
      icon: HelpCircle,
      label: "Central de ajuda",
      path: "/app/help",
      color: "#00BCD4",
    },
    {
      icon: Settings,
      label: "Configurações",
      path: "/app/profile",
      color: "#607D8B",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-20">
      {/* Header with Profile */}
      <div className="bg-gradient-to-br from-[#0A2342] via-[#1E3A5F] to-[#0066FF] px-6 pt-12 pb-24 rounded-b-[32px]">
        <h1 className="text-2xl font-bold text-white mb-8">Perfil</h1>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0066FF] to-[#0080FF] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              CE
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-[#1E3A5F] mb-1">
                Carlos Eduardo
              </h2>
              <p className="text-sm text-[#8B9AA8]">Conta Corrente</p>
              <p className="text-xs text-[#8B9AA8]">Agência 0001 • Conta 12345-6</p>
            </div>
            <button className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center text-[#0066FF] hover:bg-[#E8ECF2] transition-colors">
              <Edit className="w-5 h-5" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="space-y-3 pt-6 border-t border-[#E8ECF2]">
            {profileInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-8 h-8 bg-[#F0F8FF] rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#0066FF]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#8B9AA8]">{item.label}</p>
                    <p className="font-semibold text-[#1E3A5F]">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Menu Items */}
      <div className="px-6 -mt-16 mb-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                  index !== menuItems.length - 1
                    ? "border-b border-[#E8ECF2]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: item.color }} />
                  </div>
                  <span className="font-semibold text-[#1E3A5F] text-sm">
                    {item.label}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B9AA8]" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Account Info */}
      <div className="px-6 mb-6">
        <div className="bg-[#F0F8FF] border border-[#B8D4FF] rounded-3xl p-5">
          <h4 className="font-bold text-[#0066FF] text-sm mb-2">
            ℹ️ Informações da conta
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#1E3A5F]">Cliente desde</span>
              <span className="font-semibold text-[#1E3A5F]">Janeiro/2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1E3A5F]">Tipo de conta</span>
              <span className="font-semibold text-[#1E3A5F]">Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/login")}
          className="w-full bg-white border-2 border-[#FF1744] text-[#FF1744] font-semibold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#FFF5F5] transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sair da conta
        </motion.button>
      </div>

      {/* Version */}
      <div className="text-center mt-8 pb-4">
        <p className="text-xs text-[#8B9AA8]">FinBank v1.0.0</p>
      </div>
    </div>
  );
}
