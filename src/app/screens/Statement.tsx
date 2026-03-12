import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Filter,
  Download,
  Send,
  TrendingUp,
  TrendingDown,
  Barcode,
  ShoppingBag,
  Coffee,
  Car,
  ChevronRight,
} from "lucide-react";

export default function Statement() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  const transactions = [
    {
      id: "1",
      type: "pix-sent",
      name: "Maria Silva",
      category: "PIX",
      date: "Hoje, 14:32",
      amount: -150.0,
      icon: Send,
      color: "#FF6B00",
    },
    {
      id: "2",
      type: "purchase",
      name: "Supermercado ABC",
      category: "Compras",
      date: "Hoje, 10:15",
      amount: -234.5,
      icon: ShoppingBag,
      color: "#9C27B0",
    },
    {
      id: "3",
      type: "pix-received",
      name: "João Santos",
      category: "PIX",
      date: "Ontem, 18:45",
      amount: 500.0,
      icon: TrendingUp,
      color: "#00C853",
    },
    {
      id: "4",
      type: "bill",
      name: "Conta de Luz - Março",
      category: "Contas",
      date: "Ontem, 09:20",
      amount: -350.0,
      icon: Barcode,
      color: "#FF6B00",
    },
    {
      id: "5",
      type: "purchase",
      name: "Cafeteria Bom Dia",
      category: "Alimentação",
      date: "12/03/2026",
      amount: -28.5,
      icon: Coffee,
      color: "#795548",
    },
    {
      id: "6",
      type: "purchase",
      name: "Posto Shell",
      category: "Combustível",
      date: "11/03/2026",
      amount: -200.0,
      icon: Car,
      color: "#FF9800",
    },
    {
      id: "7",
      type: "pix-received",
      name: "Ana Costa",
      category: "PIX",
      date: "10/03/2026",
      amount: 300.0,
      icon: TrendingUp,
      color: "#00C853",
    },
  ];

  const filterOptions = [
    { value: "all", label: "Todas" },
    { value: "income", label: "Entradas" },
    { value: "expense", label: "Saídas" },
    { value: "pix", label: "PIX" },
    { value: "bills", label: "Contas" },
  ];

  const filteredTransactions = transactions.filter((t) => {
    if (filter === "all") return true;
    if (filter === "income") return t.amount > 0;
    if (filter === "expense") return t.amount < 0;
    if (filter === "pix") return t.type.includes("pix");
    if (filter === "bills") return t.type === "bill";
    return true;
  });

  const totalIncome = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  
  const totalExpense = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A2342] via-[#1E3A5F] to-[#0066FF] px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate("/app")} className="text-white">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-bold text-white">Extrato</h1>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white"
            >
              <Filter className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-[#00E676]" />
              <p className="text-xs text-white/80">Entradas</p>
            </div>
            <p className="text-xl font-bold text-white">
              R$ {totalIncome.toFixed(2)}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-[#FF6B00]" />
              <p className="text-xs text-white/80">Saídas</p>
            </div>
            <p className="text-xl font-bold text-white">
              R$ {totalExpense.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="px-6 py-4 bg-white border-b border-[#E8ECF2]"
        >
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-all ${
                  filter === option.value
                    ? "bg-[#0066FF] text-white"
                    : "bg-[#F5F7FA] text-[#8B9AA8]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Transactions List */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
          {filteredTransactions.map((transaction, index) => {
            const Icon = transaction.icon;
            return (
              <motion.button
                key={transaction.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(`/app/receipt/${transaction.id}`)}
                className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                  index !== filteredTransactions.length - 1
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
                    <p className="text-xs text-[#8B9AA8]">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right flex items-center gap-2">
                  <div>
                    <p
                      className={`font-bold text-sm ${
                        transaction.amount > 0
                          ? "text-[#00C853]"
                          : "text-[#1E3A5F]"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : ""}R${" "}
                      {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-xs text-[#8B9AA8]">
                      {transaction.category}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8B9AA8]" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#8B9AA8]">Nenhuma transação encontrada</p>
          </div>
        )}
      </div>
    </div>
  );
}
