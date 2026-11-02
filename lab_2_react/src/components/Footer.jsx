import { useEffect, useState } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    const info = `${navigator.userAgent} (${navigator.platform})`;

    localStorage.setItem('sys_info', info);

    const savedInfo = localStorage.getItem('sys_info');
    setSysInfo(savedInfo || info);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-400 py-6 text-center mt-12 border-t border-slate-800 text-xs sm:text-sm px-4">
      <p>© 2026 Валерія. Усі права захищено.</p>
      {sysInfo && (
        <div className="mt-3 p-2 bg-slate-800/60 rounded text-slate-400 max-w-2xl mx-auto border border-slate-700/50">
          <span className="font-semibold text-slate-300">Системні дані (localStorage):</span> {sysInfo}
        </div>
      )}
    </footer>
  );
}

export default Footer;