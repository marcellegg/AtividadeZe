import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, Send, CreditCard, Receipt, User } from "lucide-react";
import { motion } from "motion/react";

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/app", icon: Home, label: "Início" },
    { path: "/app/pix", icon: Send, label: "PIX" },
    { path: "/app/cards", icon: CreditCard, label: "Cartões" },
    { path: "/app/statement", icon: Receipt, label: "Extrato" },
    { path: "/app/profile", icon: User, label: "Perfil" },
  ];

  const isActive = (path: string) => {
    if (path === "/app") {
      return location.pathname === "/app";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F7FA]">
      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20">
        <Outlet />
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E8ECF2] safe-area-bottom">
        <nav className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
          {navItems.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="flex flex-col items-center justify-center flex-1 relative py-2"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="relative"
                >
                  <Icon
                    className={`w-6 h-6 mb-1 transition-colors ${
                      active ? "text-[#0066FF]" : "text-[#8B9AA8]"
                    }`}
                  />
                  {active && (
                    <motion.div
                      layoutId="bottomNavIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0066FF] rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
                <span
                  className={`text-xs font-medium ${
                    active ? "text-[#0066FF]" : "text-[#8B9AA8]"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
