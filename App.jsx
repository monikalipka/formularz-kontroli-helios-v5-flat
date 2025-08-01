import React, { useState } from "react";
import questions from "./questions";
import exportToPDF from "./exportPDF";
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
    <div className="container">
      <header>
        <img src="./logo.png" alt="Logo Helios" className="logo" />
        <h1>Formularz kontroli - Bar</h1>
      </header>

      {questions.map((q, index) => (
        <div key={q.numer} className="question-block">
          {(index === 0 || questions[index - 1].sekcja !== q.sekcja) && (
            <h2 className="section-title">{q.sekcja}</h2>
          )}
          <p className="question-text">
            {q.numer}. {q.tresc}
          </p>
          <div className="options">
            {q.odpowiedzi.map((opt, idx) => (
              <label key={idx} className={`option option-${idx}`}>
                <input
                  type="radio"
                  name={`q-${q.numer}`}
                  value={opt}
                  checked={answers[q.numer]?.odpowiedz === opt}
                  onChange={() => handleAnswer(q.numer, opt)}
                />
                {opt}
              </label>
            ))}
          </div>
          <p className="description">{q.opis}</p>
          <textarea
            placeholder="Komentarz (opcjonalny)"
            value={answers[q.numer]?.komentarz || ""}
            onChange={(e) => handleComment(q.numer, e.target.value)}
          />
        </div>
      ))}

      <button onClick={calculateResult}>Zakończ kontrolę</button>
      <button onClick={() => exportToPDF(questions, answers, summary)}>Eksport do PDF</button>

      {summary && (
        <div className="summary">
          <h2>Wynik kontroli</h2>
          <p>Poprawnych odpowiedzi: {summary.total} z {summary.max}</p>
          <p>Wynik procentowy: {summary.percentage}%</p>
        </div>
      )}
    </div>
  );
}