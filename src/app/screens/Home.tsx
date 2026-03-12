import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Eye,
  EyeOff,
  Send,
  ArrowDownUp,
  Barcode,
  CreditCard,
  Smartphone,
  Gift,
  TrendingUp,
  Bell,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [showBalance, setShowBalance] = useState(true);

  const quickActions = [
    { icon: Send, label: "Área PIX", path: "/app/pix", color: "#00C853" },
    {
      icon: ArrowDownUp,
      label: "Transferir",
      path: "/app/transfer",
      color: "#0066FF",
    },
    {
      icon: Barcode,
      label: "Pagar",
      path: "/app/bill-payment",
      color: "#FF6B00",
    },
    {
      icon: CreditCard,
      label: "Cartões",
      path: "/app/cards",
      color: "#9C27B0",
    },
    {
      icon: Smartphone,
      label: "Recarga",
      path: "/app/help",
      color: "#00BCD4",
    },
    { icon: Gift, label: "Rewards", path: "/app/help", color: "#FF1744" },
  ];

  const recentTransactions = [
    {
      id: "1",
      type: "PIX",
      name: "Maria Silva",
      date: "Hoje, 14:32",
      amount: -150.0,
    },
    {
      id: "2",
      type: "Pagamento",
      name: "Supermercado ABC",
      date: "Hoje, 10:15",
      amount: -234.5,
    },
    {
      id: "3",
      type: "PIX",
      name: "João Santos",
      date: "Ontem",
      amount: 500.0,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A2342] via-[#1E3A5F] to-[#0066FF] px-6 pt-12 pb-32 rounded-b-[32px]">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-[#B8D4FF] text-sm mb-1">Olá,</p>
            <h1 className="text-white text-xl font-bold">Carlos Eduardo</h1>
          </div>
          <button
            onClick={() => navigate("/app/notifications")}
            className="relative w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
          >
            <Bell className="w-5 h-5 text-white" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF1744] rounded-full" />
          </button>
        </div>

        {/* Balance Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 shadow-xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-[#0066FF] to-[#0080FF] rounded-lg flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path
                    fillRule="evenodd"
                    d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-[#1E3A5F]">
                Conta Corrente
              </span>
            </div>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-[#8B9AA8] hover:text-[#0066FF] transition-colors"
            >
              {showBalance ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="mb-2">
            <p className="text-xs text-[#8B9AA8] mb-1">Saldo disponível</p>
            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              {showBalance ? "R$ 12.547,32" : "R$ •••••"}
            </h2>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#E8ECF2]">
            <div>
              <p className="text-xs text-[#8B9AA8] mb-1">Rendimento do mês</p>
              <p className="text-sm font-bold text-[#00C853] flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                {showBalance ? "+ R$ 87,23" : "+ R$ ••••"}
              </p>
            </div>
            <button
              onClick={() => navigate("/app/statement")}
              className="text-xs font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors flex items-center gap-1"
            >
              Ver extrato
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 -mt-20 mb-6">
        <div className="bg-white rounded-3xl p-6 shadow-lg">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-4">
            Ações rápidas
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(action.path)}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-[#F5F7FA] transition-colors"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${action.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: action.color }} />
                  </div>
                  <span className="text-xs font-medium text-[#1E3A5F] text-center">
                    {action.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-bold text-[#1E3A5F]">
            Transações recentes
          </h3>
          <button
            onClick={() => navigate("/app/statement")}
            className="text-xs font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors"
          >
            Ver todas
          </button>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {recentTransactions.map((transaction, index) => (
            <motion.button
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/app/receipt/${transaction.id}`)}
              className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                index !== recentTransactions.length - 1
                  ? "border-b border-[#E8ECF2]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.amount > 0
                      ? "bg-[#E8F5E9]"
                      : "bg-[#FFF3E0]"
                  }`}
                >
                  {transaction.amount > 0 ? (
                    <TrendingUp className="w-5 h-5 text-[#00C853]" />
                  ) : (
                    <Send className="w-5 h-5 text-[#FF6B00]" />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-[#1E3A5F] text-sm">
                    {transaction.name}
                  </p>
                  <p className="text-xs text-[#8B9AA8]">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`font-bold text-sm ${
                    transaction.amount > 0
                      ? "text-[#00C853]"
                      : "text-[#1E3A5F]"
                  }`}
                >
                  {transaction.amount > 0 ? "+" : ""}
                  R$ {Math.abs(transaction.amount).toFixed(2)}
                </p>
                <ChevronRight className="w-4 h-4 text-[#8B9AA8] inline" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Credit Card Banner */}
      <div className="px-6 pb-8">
        <motion.div
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate("/app/cards")}
          className="bg-gradient-to-r from-[#9C27B0] to-[#E91E63] rounded-3xl p-6 text-white cursor-pointer"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Cartão de Crédito</p>
              <h3 className="text-2xl font-bold">R$ 8.450,00</h3>
              <p className="text-xs opacity-80 mt-1">Limite disponível</p>
            </div>
            <CreditCard className="w-8 h-8 opacity-80" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Fatura atual: R$ 1.550,00</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
