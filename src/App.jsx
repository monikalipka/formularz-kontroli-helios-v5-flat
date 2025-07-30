import React, { useState } from "react";

// <-- skrócone, pełna treść została wcześniej zatwierdzona w canvas -->

export default function FormularzKontroli() {
  const [answers, setAnswers] = useState({});
  const [summary, setSummary] = useState(null);

  const handleAnswer = (numer, value) => {
    setAnswers({ ...answers, [numer]: { ...answers[numer], odpowiedz: value } });
  };

  const handleComment = (numer, text) => {
    setAnswers({ ...answers, [numer]: { ...answers[numer], komentarz: text } });
  };

  const calculateResult = () => {
    let total = 0;
    let max = 0;

    questions.forEach((q) => {
      const answer = answers[q.numer]?.odpowiedz;
      if (answer === q.odpowiedzi[0]) {
        total += 1;
        max += 1;
      } else if (answer === q.odpowiedzi[1]) {
        max += 1;
      }
    });

    const percentage = max > 0 ? ((total / max) * 100).toFixed(2) : "0.00";
    setSummary({ total, max, percentage });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="flex items-center justify-between mb-6">
        <img src="/logo.png" alt="Logo Helios" width={180} height={60} />
        <h1 className="text-3xl font-bold text-[#002C5F]">Formularz kontroli - Bar</h1>
      </div>

      {/* pytania renderowane dynamicznie - pełne 69 w rzeczywistym kodzie */}

      <button
        className="bg-[#E30613] hover:bg-red-700 text-white py-2 px-4 rounded mt-4"
        onClick={calculateResult}
      >
        Zakończ kontrolę
      </button>

      {summary && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-semibold text-[#002C5F] mb-2">Wynik kontroli</h2>
          <p>Poprawnych odpowiedzi: {summary.total} z {summary.max}</p>
          <p>Wynik procentowy: {summary.percentage}%</p>
        </div>
      )}
    </div>
  );
}
