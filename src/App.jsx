
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import AppRoutes from "./Routers/AppRoutes";

export default function App() {
  return (
    <div className="
      min-h-screen
      bg-white text-gray-900
      dark:bg-gray-950 dark:text-gray-200
      transition-colors duration-300
    ">
      <Navbar />

      {/* Main Content */}
      <main className="pt-20">
       <AppRoutes/>
      </main>

      <Footer />
    </div>
  );
}
