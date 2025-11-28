export default function CategoryTabs() {
  const tabs = [
    "होम", "राज्य", "देश", "क्रिकेट", "लाइव स्कोर",
    "मनोरंजन", "बिजनेस", "करियर", "विदेश",
    "धर्म", "राशिफल", "लाइफस्टाइल", "ऑटो", "गैजेट्स", "..."
  ];

  return (
    <nav className="bg-white border-b border-border-gray sticky top-16 z-40">
      <div className="container flex gap-xl px-lg py-md overflow-x-auto scrollbar-hide">
        {tabs.map((tab, i) => (
          <a
            key={i}
            href="#"
            className={`pb-md text-xs font-semibold transition-colors whitespace-nowrap ${
              i === 0 
                ? "text-brand-red border-b-2 border-brand-red" 
                : "text-dark-gray hover:text-brand-red border-b-2 border-transparent hover:border-brand-red"
            }`}
          >
            {tab}
          </a>
        ))}
      </div>
    </nav>
  );
}
