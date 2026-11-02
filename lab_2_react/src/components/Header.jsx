function Header({ theme, toggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="bg-slate-900 text-white py-10 px-6 text-center shadow-lg border-b-4 border-blue-500 relative">
      {/* Кнопка перемикання теми */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 text-amber-400 p-2 px-3 rounded-xl text-sm font-semibold border border-slate-700 shadow-md transition-all flex items-center gap-2 cursor-pointer"
      >
        {isDark ? " Денна тема" : " Нічна тема"}
      </button>

      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-2 text-blue-400">
        Зубань Валерія
      </h1>
      <p className="text-xl font-medium text-slate-300">
        Студент / Web Developer
      </p>
    </header>
  );
}

export default Header;