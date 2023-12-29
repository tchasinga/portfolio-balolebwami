export default function Links() {
  const items = [
    "Homepage",
    "Service",
    "Skills",
    "Portfolio",
    "Contact",
  ];

  return (
    <div className="links">
      {items.map((item) => (
        <a className="font-thin" href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}
