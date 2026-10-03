export default function Button({ href, children, variant = "solid", type = "button", onClick }) {
  const cls = `btn ${variant === "ghost" ? "btn-ghost" : variant === "light" ? "btn-light" : "btn-solid"}`;

  if (href) {
    return (
      <a className={cls} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
