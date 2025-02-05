export default function Square({ value, onSquareClick }: { value: string | null; onSquareClick: () => void }) {
  return (
    <button onClick={onSquareClick} className="w-[34px] bg-white h-[34px] p-0 border border-gray-500 mr-[-1px] mt-[-1px] float-left">
      {value}
    </button>
  );
}
