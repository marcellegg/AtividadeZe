import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Bell,
  CreditCard,
  TrendingUp,
  Gift,
  AlertCircle,
  Settings,
} from "lucide-react";

export default function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: "1",
      type: "transaction",
      icon: TrendingUp,
      color: "#00C853",
      title: "PIX recebido",
      message: "Você recebeu R$ 500,00 de João Santos",
      time: "Há 2 horas",
      unread: true,
    },
    {
      id: "2",
      type: "card",
      icon: CreditCard,
      color: "#9C27B0",
      title: "Fatura disponível",
      message: "Sua fatura de março já está disponível. Vencimento em 20/03.",
      time: "Há 5 horas",
      unread: true,
    },
    {
      id: "3",
      type: "promo",
      icon: Gift,
      color: "#FF6B00",
      title: "Novo benefício desbloqueado!",
      message: "Você ganhou 1.000 pontos extras no programa de rewards",
      time: "Ontem",
      unread: false,
    },
    {
      id: "4",
      type: "alert",
      icon: AlertCircle,
      color: "#0066FF",
      title: "Lembrete de pagamento",
      message: "Não esqueça: sua fatura vence em 5 dias",
      time: "Ontem",
      unread: false,
    },
    {
      id: "5",
      type: "transaction",
      icon: TrendingUp,
      color: "#00C853",
      title: "Rendimento mensal",
      message: "Seu investimento rendeu R$ 87,23 este mês",
      time: "2 dias atrás",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/app")} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-white">Notificações</h1>
          </div>
          <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
            <Settings className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[#B8D4FF] ml-10">
          {notifications.filter((n) => n.unread).length} não lidas
        </p>
      </div>

      <div className="px-6 py-6">
        {/* Mark all as read */}
        <button className="text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors mb-4">
          Marcar todas como lidas
        </button>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`bg-white rounded-3xl p-5 shadow-lg ${
                  notification.unread ? "border-l-4 border-[#0066FF]" : ""
                }`}
              >
                <div className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${notification.color}15` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: notification.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-bold text-[#1E3A5F] text-sm">
                        {notification.title}
                      </h3>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-[#0066FF] rounded-full" />
                      )}
                    </div>
                    <p className="text-sm text-[#8B9AA8] leading-relaxed mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-[#8B9AA8]">{notification.time}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Empty State (if needed) */}
        {notifications.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-[#F5F7FA] rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-10 h-10 text-[#8B9AA8]" />
            </div>
            <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">
              Nenhuma notificação
            </h3>
            <p className="text-sm text-[#8B9AA8]">
              Você está em dia com tudo!
            </p>
          </div>
        )}

        {/* Settings Info */}
        <div className="mt-8 bg-[#F0F8FF] border border-[#B8D4FF] rounded-3xl p-5">
          <h4 className="font-bold text-[#0066FF] text-sm mb-2">
            ⚙️ Preferências de notificação
          </h4>
          <p className="text-xs text-[#1E3A5F] leading-relaxed mb-3">
            Personalize quais notificações você deseja receber
          </p>
          <button className="text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors">
            Gerenciar notificações
          </button>
        </div>
      </div>
    </div>
  );
}
