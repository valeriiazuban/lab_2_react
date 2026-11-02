function Education() {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-1 inline-block">
        Освіта та досвід
      </h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border-l-4 border-blue-500">
          <span className="font-bold text-slate-800">Університет:</span>
          <span className="text-slate-600">Спеціальність "Кібербезпека"</span>
        </li>
        <li className="flex items-start gap-2 bg-slate-50 p-3 rounded-lg border-l-4 border-emerald-500">
          <span className="font-bold text-slate-800">Курси:</span>
          <span className="text-slate-600">Основи HTML, CSS та React</span>
        </li>
      </ul>
    </section>
  );
}

export default Education;