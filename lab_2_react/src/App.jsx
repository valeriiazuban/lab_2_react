import { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Contacts from "./components/Contacts";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Отримуємо поточну годину
    const currentHour = new Date().getHours();

    // Денна тема: від 07:00 до 21:00, інакше — нічна
    if (currentHour >= 7 && currentHour < 21) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  // Функція для ручного перемикання теми
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen font-sans flex flex-col justify-between transition-colors duration-300 ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-100 text-slate-800"
      }`}
    >
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-4xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-grow">
        <About theme={theme} />
        <Education theme={theme} />
        <Contacts theme={theme} />
        <Reviews theme={theme} />
      </main>

      <Footer theme={theme} />
      <ContactForm />
    </div>
  );
}

export default App;