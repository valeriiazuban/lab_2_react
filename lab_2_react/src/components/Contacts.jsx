function Contacts() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300 sm:col-span-2 md:col-span-1">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-1 inline-block">
        Контакти
      </h2>
      <div className="space-y-2 text-slate-600">
        <p className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">Email:</span>
          <a
            href="mailto:valeriia.zuban.kb.2025@lpnu.ua"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            valeriia.zuban.kb.2025@lpnu.ua
          </a>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-semibold text-slate-700">GitHub:</span>
          <a
            href="https://github.com/valeriiazuban"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium transition-colors"
          >
            github.com/valeriiazuban
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contacts;