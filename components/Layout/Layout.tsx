import { Noto_Sans_KR } from "next/font/google";
import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import Controls from "./Controls";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--google-font-noto-sans-kr",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={`${notoSansKR.variable} relative font-sans`}>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
      <Controls />
    </main>
  );
};

export default Layout;
