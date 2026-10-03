import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="progress-bar"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  );
}
