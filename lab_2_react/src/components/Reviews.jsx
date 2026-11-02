import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/14/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження відгуків:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300 col-span-1 md:col-span-2">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b-2 border-blue-500 pb-1 inline-block">
        Відгуки попередніх роботодавців
      </h2>

      {loading ? (
        <p className="text-slate-500 italic">Завантаження відгуків...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 flex flex-col justify-between"
            >
              <p className="text-slate-700 text-sm italic mb-3">
                "{comment.body}"
              </p>
              <div>
                <p className="text-xs font-bold text-slate-900">{comment.name}</p>
                <p className="text-xs text-blue-600">{comment.email}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;