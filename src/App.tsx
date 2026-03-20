import { useState } from "react";
import "./App.css";
import Square from "./components/Square";

function App() {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [squares, setSquares] = useState<Array<string | null>>(Array(9).fill(null));

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);
  let status: string = "";
  if (winner) {
    status = "Ganador: " + winner;
  } else if (isDraw) {
    status = "Empate";
  } else {
    status = "Siguiente jugador: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function resetGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  function calculateWinner(squares: Array<string | null>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fafc,#e2e8f0_45%,#cbd5f5_100%)] px-4 py-10 text-slate-900">
      <div className="mx-auto w-full max-w-4xl">
        <header className="mb-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">React Study Project</p>
              <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Tic Tac Toe</h1>
            </div>
            <button onClick={resetGame} className="rounded-full border border-slate-900/10 bg-white/90 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              Reiniciar partida
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-slate-700">Tablero 3x3</span>
            <span className="rounded-full border border-slate-900/10 bg-white/80 px-3 py-1 text-slate-700">Turnos alternos</span>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <section className="rounded-3xl border border-white/80 bg-white/70 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="text-sm font-medium text-slate-600">Estado del juego</div>
              <div className={["rounded-full px-3 py-1 text-sm font-semibold", winner ? "bg-emerald-100 text-emerald-700" : isDraw ? "bg-amber-100 text-amber-700" : "bg-slate-900 text-white"].join(" ")}>{status}</div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} className="h-20 w-20 text-3xl sm:h-24 sm:w-24 md:h-28 md:w-28" />
            </div>
          </section>

          <aside className="rounded-3xl border border-white/80 bg-white/70 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
            <div className="text-sm font-semibold text-slate-600">Siguiente movimiento</div>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-2xl font-bold text-white">{winner || isDraw ? "-" : xIsNext ? "X" : "O"}</div>
              <div className="text-sm text-slate-600">{winner ? "Partida finalizada. Buen juego." : isDraw ? "Tablero completo. Intenta otra vez." : "Elige una casilla para avanzar."}</div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-300/70 bg-white/60 p-4 text-xs text-slate-500">Consejo: ganar en diagonal requiere controlar el centro.</div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default App;
