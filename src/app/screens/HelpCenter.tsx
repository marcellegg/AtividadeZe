import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Search,
  MessageCircle,
  Phone,
  Mail,
  HelpCircle,
  CreditCard,
  Send,
  Lock,
  FileText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

export default function HelpCenter() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const contactOptions = [
    {
      icon: MessageCircle,
      label: "Chat online",
      description: "Fale com nosso time agora",
      color: "#0066FF",
      status: "Disponível",
    },
    {
      icon: Phone,
      label: "Central telefônica",
      description: "4020-1234 (Capitais e regiões metropolitanas)",
      color: "#00C853",
      status: "24h",
    },
    {
      icon: Mail,
      label: "E-mail",
      description: "ajuda@finbank.com.br",
      color: "#9C27B0",
      status: "Resposta em 24h",
    },
  ];

  const categories = [
    { icon: Send, label: "PIX", color: "#00C853" },
    { icon: CreditCard, label: "Cartões", color: "#9C27B0" },
    { icon: Lock, label: "Segurança", color: "#FF6B00" },
    { icon: FileText, label: "Conta", color: "#0066FF" },
  ];

  const faqs = [
    {
      question: "Como fazer um PIX?",
      answer:
        "Para fazer um PIX, acesse a área PIX no menu principal, escolha 'Enviar PIX', selecione o tipo de chave (CPF, e-mail, telefone ou chave aleatória), digite a chave do destinatário, insira o valor e confirme a transação.",
    },
    {
      question: "Como aumentar o limite do cartão?",
      answer:
        "Você pode solicitar aumento de limite acessando a área de Cartões, selecionando o cartão desejado e clicando em 'Solicitar aumento de limite'. Analisaremos seu pedido em até 48 horas.",
    },
    {
      question: "Como cadastrar uma chave PIX?",
      answer:
        "Acesse a área PIX, role até 'Minhas chaves PIX' e clique em 'Cadastrar nova chave'. Escolha o tipo de chave que deseja cadastrar (CPF, e-mail, telefone ou chave aleatória) e siga as instruções.",
    },
    {
      question: "O que fazer se perdi meu cartão?",
      answer:
        "Em caso de perda ou roubo, acesse imediatamente a área de Cartões e clique em 'Bloquear cartão'. Você também pode solicitar a 2ª via do cartão na mesma área.",
    },
    {
      question: "Como alterar minha senha?",
      answer:
        "Acesse seu Perfil, depois vá em Segurança e selecione 'Alterar senha'. Digite sua senha atual e depois a nova senha duas vezes para confirmar.",
    },
  ];

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0066FF] to-[#0080FF] px-6 pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate("/app/profile")} className="text-white">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-white">Central de Ajuda</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Como podemos ajudar?"
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl text-[#1E3A5F] placeholder:text-[#8B9AA8] focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B9AA8]" />
        </div>
      </div>

      <div className="px-6 py-6">
        {/* Contact Options */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">Fale conosco</h3>
          <div className="space-y-3">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <motion.button
                  key={option.label}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${option.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: option.color }} />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-[#1E3A5F]">
                          {option.label}
                        </h4>
                        <span
                          className="px-2 py-0.5 rounded-full text-xs font-semibold"
                          style={{
                            backgroundColor: `${option.color}15`,
                            color: option.color,
                          }}
                        >
                          {option.status}
                        </span>
                      </div>
                      <p className="text-sm text-[#8B9AA8]">
                        {option.description}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-[#8B9AA8]" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
            Buscar por categoria
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.label}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <p className="text-xs font-semibold text-[#1E3A5F] text-center">
                    {category.label}
                  </p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-[#1E3A5F] mb-3">
            Perguntas frequentes
          </h3>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            {filteredFaqs.map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className={`w-full flex items-center justify-between p-4 hover:bg-[#F5F7FA] transition-colors ${
                    index !== filteredFaqs.length - 1 || expandedFaq === index
                      ? "border-b border-[#E8ECF2]"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1 text-left">
                    <HelpCircle className="w-5 h-5 text-[#0066FF] flex-shrink-0" />
                    <p className="font-semibold text-[#1E3A5F] text-sm">
                      {faq.question}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#8B9AA8]" />
                  </motion.div>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-sm text-[#8B9AA8] leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="bg-white rounded-3xl p-8 text-center shadow-lg">
              <HelpCircle className="w-12 h-12 text-[#8B9AA8] mx-auto mb-3" />
              <p className="text-sm text-[#8B9AA8]">
                Nenhuma pergunta encontrada
              </p>
            </div>
          )}
        </div>

        {/* Emergency Alert */}
        <div className="bg-[#FFEBEE] border border-[#FFCDD2] rounded-3xl p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-[#FF1744] rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-[#C62828] text-sm mb-2">
                Em caso de emergência
              </h4>
              <p className="text-xs text-[#C62828] leading-relaxed mb-3">
                Se você suspeita de fraude ou teve seu cartão roubado, bloqueie
                imediatamente através do app ou ligue para nossa central.
              </p>
              <button className="text-sm font-semibold text-[#FF1744] hover:text-[#C62828] transition-colors">
                Central de bloqueio 24h: 0800 123 4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
