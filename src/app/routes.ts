import { createBrowserRouter } from "react-router";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import ForgotPassword from "./screens/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Home from "./screens/Home";
import Pix from "./screens/Pix";
import PixSend from "./screens/PixSend";
import PixReceive from "./screens/PixReceive";
import PixQRCode from "./screens/PixQRCode";
import PixCopyPaste from "./screens/PixCopyPaste";
import Transfer from "./screens/Transfer";
import BillPayment from "./screens/BillPayment";
import Statement from "./screens/Statement";
import Cards from "./screens/Cards";
import CardDetails from "./screens/CardDetails";
import Notifications from "./screens/Notifications";
import Receipt from "./screens/Receipt";
import Profile from "./screens/Profile";
import Security from "./screens/Security";
import HelpCenter from "./screens/HelpCenter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/app",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "pix", Component: Pix },
      { path: "pix/send", Component: PixSend },
      { path: "pix/receive", Component: PixReceive },
      { path: "pix/qrcode", Component: PixQRCode },
      { path: "pix/copy-paste", Component: PixCopyPaste },
      { path: "transfer", Component: Transfer },
      { path: "bill-payment", Component: BillPayment },
      { path: "statement", Component: Statement },
      { path: "cards", Component: Cards },
      { path: "cards/:cardId", Component: CardDetails },
      { path: "notifications", Component: Notifications },
      { path: "receipt/:transactionId", Component: Receipt },
      { path: "profile", Component: Profile },
      { path: "security", Component: Security },
      { path: "help", Component: HelpCenter },
    ],
  },
]);
