import React, { useState } from "react";
import questions from "./questions_full";
import "./style.css";

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

      {questions.map((q, index) => (
        <div key={q.numer} className="mb-8 border p-4 rounded border-[#002C5F] bg-white shadow">
          {(index === 0 || questions[index - 1].sekcja !== q.sekcja) && (
            <h2 className="text-xl font-bold text-[#002C5F] mb-2">{q.sekcja}</h2>
          )}

          <div className="space-y-4">
            <div>
              <p className="font-semibold text-[#002C5F]">
                {q.numer}. {q.tresc}
              </p>
            </div>

            <div className="space-y-2">
              {q.odpowiedzi.map((opt, idx) => (
                <label key={idx} className="flex items-start space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`q-${q.numer}`}
                    value={opt}
                    checked={answers[q.numer]?.odpowiedz === opt}
                    onChange={() => handleAnswer(q.numer, opt)}
                    className="accent-[#002C5F] mt-1"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>

            <p className="text-sm text-gray-600 italic">{q.opis}</p>

            <textarea
              placeholder="Komentarz (opcjonalny)"
              value={answers[q.numer]?.komentarz || ""}
              onChange={(e) => handleComment(q.numer, e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
      ))}

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