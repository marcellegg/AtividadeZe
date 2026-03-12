import { useNavigate, useParams } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ShoppingBag,
  Coffee,
  Utensils,
  Car,
  ChevronRight,
} from "lucide-react";

export default function CardDetails() {
  const navigate = useNavigate();
  const { cardId } = useParams();

  const invoiceTransactions = [
    {
      id: "1",
      name: "Amazon Brasil",
      category: "Compras",
      date: "10/03/2026",
      amount: 459.9,
      icon: ShoppingBag,
      color: "#9C27B0",
    },
    {
      id: "2",
      name: "Starbucks",
      category: "Alimentação",
      date: "09/03/2026",
      amount: 28.5,
      icon: Coffee,
      color: "#795548",
    },
    {
      id: "3",
      name: "Restaurante Bella",
      category: "Restaurante",
      date: "08/03/2026",
      amount: 185.0,
      icon: Utensils,
      color: "#FF6B00",
    },
    {
      id: "4",
      name: "Uber",
      category: "Transporte",
      date: "07/03/2026",
      amount: 32.5,
      icon: Car,
      color: "#000000",
    },
  ];

  const invoiceTotal = invoiceTransactions.reduce(
    (sum, t) => sum + t.amount,
    0
  );

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#9C27B0] to-[#E91E63] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate("/app/cards")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Fatura do Cartão</h1>
        </div>

        {/* Invoice Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
          <p className="text-white/80 text-sm mb-2">Fatura atual</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            R$ {invoiceTotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          </h2>
          <div className="flex items-center justify-between text-sm">
            <div>
              <p className="text-white/70 mb-1">Vencimento</p>
              <p className="text-white font-bold">20/03/2026</p>
            </div>
            <div className="text-right">
              <p className="text-white/70 mb-1">Pagamento mínimo</p>
              <p className="text-white font-bold">
                R${" "}
                {(invoiceTotal * 0.15).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Payment Options */}
        <div className="bg-white rounded-3xl p-5 shadow-lg mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-4">
            Opções de pagamento
          </h3>
          <div className="space-y-3">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#9C27B0] to-[#E91E63] text-white font-semibold py-4 rounded-2xl shadow-lg"
            >
              Pagar fatura total
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#F5F7FA] text-[#1E3A5F] font-semibold py-4 rounded-2xl border-2 border-[#E8ECF2]"
            >
              Pagar outro valor
            </motion.button>
          </div>
        </div>

        {/* Transactions */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
            Lançamentos da fatura
          </h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            {invoiceTransactions.map((transaction, index) => {
              const Icon = transaction.icon;
              return (
                <button
                  key={transaction.id}
                  onClick={() => navigate(`/app/receipt/${transaction.id}`)}
                  className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                    index !== invoiceTransactions.length - 1
                      ? "border-b border-[#E8ECF2]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${transaction.color}15` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: transaction.color }}
                      />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-[#1E3A5F] text-sm">
                        {transaction.name}
                      </p>
                      <p className="text-xs text-[#8B9AA8]">
                        {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <div>
                      <p className="font-bold text-sm text-[#1E3A5F]">
                        R$ {transaction.amount.toFixed(2)}
                      </p>
                      <p className="text-xs text-[#8B9AA8]">
                        {transaction.category}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#8B9AA8]" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Limit Info */}
        <div className="bg-white rounded-3xl p-6 shadow-lg mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-4">
            Limite do cartão
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-[#8B9AA8]">Limite total</span>
              <span className="font-bold text-[#1E3A5F]">R$ 10.000,00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8B9AA8]">Limite utilizado</span>
              <span className="font-bold text-[#FF6B00]">
                R$ {invoiceTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#8B9AA8]">Limite disponível</span>
              <span className="font-bold text-[#00C853]">
                R$ {(10000 - invoiceTotal).toFixed(2)}
              </span>
            </div>
            <div className="bg-[#E8ECF2] rounded-full h-2 overflow-hidden mt-4">
              <div
                className="bg-gradient-to-r from-[#9C27B0] to-[#E91E63] h-full rounded-full"
                style={{ width: `${(invoiceTotal / 10000) * 100}%` }}
              />
            </div>
          </div>
          <button className="w-full mt-4 text-sm font-semibold text-[#0066FF] hover:text-[#0052CC] transition-colors">
            Solicitar aumento de limite
          </button>
        </div>

        {/* Future Invoices */}
        <div className="bg-[#F0F8FF] border border-[#B8D4FF] rounded-3xl p-5">
          <h4 className="font-bold text-[#0066FF] text-sm mb-2">
            📅 Próximas faturas
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#1E3A5F]">Abril/2026</span>
              <span className="font-semibold text-[#1E3A5F]">R$ 0,00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#1E3A5F]">Maio/2026</span>
              <span className="font-semibold text-[#1E3A5F]">R$ 0,00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
