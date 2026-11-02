import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Автоматичне відкриття модального вікна через 1 хвилину (60000 мс)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative border border-slate-100">
        {/* Кнопка закриття */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl font-bold p-1"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-slate-800 mb-2">Зворотний зв'язок</h2>
        <p className="text-slate-600 text-sm mb-4">
          Заповніть форму, щоб зв'язатися зі мною.
        </p>

        <form
          action="https://formspree.io/f/mljjowwj"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Ваше ім'я</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Іван Іванов"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Номер телефону</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+380..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Повідомлення</label>
            <textarea
              name="message"
              rows="3"
              required
              placeholder="Ваше повідомлення..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition-colors shadow-md"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;