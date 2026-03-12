import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  CreditCard,
  Lock,
  Eye,
  EyeOff,
  ChevronRight,
  Plus,
  Smartphone,
} from "lucide-react";
import { useState } from "react";

export default function Cards() {
  const navigate = useNavigate();
  const [showNumbers, setShowNumbers] = useState(false);

  const cards = [
    {
      id: "1",
      type: "credit",
      name: "Cartão de Crédito",
      number: "•••• 4532",
      limit: 10000,
      available: 8450,
      invoice: 1550,
      dueDate: "20/03/2026",
      gradient: "from-[#9C27B0] to-[#E91E63]",
    },
    {
      id: "2",
      type: "debit",
      name: "Cartão de Débito",
      number: "•••• 8721",
      gradient: "from-[#0066FF] to-[#0080FF]",
    },
  ];

  const cardActions = [
    {
      icon: Lock,
      label: "Bloquear cartão",
      color: "#FF1744",
    },
    {
      icon: Eye,
      label: "Ver senha",
      color: "#0066FF",
    },
    {
      icon: CreditCard,
      label: "Solicitar 2ª via",
      color: "#9C27B0",
    },
    {
      icon: Smartphone,
      label: "Cartão virtual",
      color: "#00C853",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A2342] via-[#1E3A5F] to-[#0066FF] px-6 pt-12 pb-32 rounded-b-[32px]">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/app")} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-white">Meus Cartões</h1>
          </div>
          <button
            onClick={() => setShowNumbers(!showNumbers)}
            className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
          >
            {showNumbers ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Cards Carousel */}
      <div className="px-6 -mt-24 mb-6">
        <div className="space-y-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/app/cards/${card.id}`)}
              className={`bg-gradient-to-br ${card.gradient} rounded-3xl p-6 text-white shadow-2xl cursor-pointer`}
            >
              <div className="flex items-start justify-between mb-12">
                <div>
                  <p className="text-sm opacity-90 mb-1">{card.name}</p>
                  <h3 className="text-2xl font-bold">
                    {showNumbers ? "4532 7891 2345 6789" : card.number}
                  </h3>
                </div>
                <CreditCard className="w-10 h-10 opacity-80" />
              </div>

              {card.type === "credit" ? (
                <div className="space-y-3">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xs opacity-80 mb-1">Limite disponível</p>
                      <p className="text-xl font-bold">
                        R$ {card.available.toLocaleString("pt-BR")}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs opacity-80 mb-1">Limite total</p>
                      <p className="text-sm font-semibold">
                        R$ {card.limit.toLocaleString("pt-BR")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-white h-full rounded-full"
                      style={{
                        width: `${(card.available / card.limit) * 100}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <span className="opacity-90">
                      Fatura atual: R$ {card.invoice.toLocaleString("pt-BR")}
                    </span>
                    <span className="opacity-90">Venc: {card.dueDate}</span>
                  </div>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs opacity-80 mb-1">Válido até</p>
                    <p className="text-lg font-bold">12/2028</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-80 mb-1">Titular</p>
                    <p className="text-sm font-semibold">CARLOS EDUARDO</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Add Card Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-dashed border-[#E8ECF2] flex items-center justify-center gap-3 text-[#0066FF]"
          >
            <Plus className="w-6 h-6" />
            <span className="font-semibold">Solicitar novo cartão</span>
          </motion.button>
        </div>
      </div>

      {/* Card Actions */}
      <div className="px-6 pb-6">
        <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
          Gerenciar cartões
        </h3>
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {cardActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <button
                key={action.label}
                className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                  index !== cardActions.length - 1
                    ? "border-b border-[#E8ECF2]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${action.color}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: action.color }} />
                  </div>
                  <span className="font-semibold text-[#1E3A5F] text-sm">
                    {action.label}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B9AA8]" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-6 pb-8">
        <div className="bg-gradient-to-r from-[#9C27B0] to-[#E91E63] rounded-3xl p-6 text-white">
          <h4 className="font-bold mb-2">💳 Programa de Pontos</h4>
          <p className="text-sm opacity-90 mb-4">
            Você tem <span className="font-bold">12.450 pontos</span> acumulados
          </p>
          <button className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold hover:bg-white/30 transition-colors">
            Ver benefícios
          </button>
        </div>
      </div>
    </div>
  );
}
