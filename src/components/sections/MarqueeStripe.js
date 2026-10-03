export default function MarqueeStripe() {
  const bits = [
    "Modern Gurukul · Dehradun",
    "Einstein Labs & campus Wi-Fi",
    "16+ sports with coaches",
    "Student councils that actually meet",
    "Vegetarian mess · 24/7 infirmary",
    "MUN · Trinity · IAYP",
  ];
  const loop = [...bits, ...bits];

  return (
    <div className="stripe" aria-hidden="true">
      <div className="stripe-track">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
