export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 py-2 px-0 shadow-sm">
      <div className="max-w-screen-xl mx-auto flex overflow-x-auto gap-4 px-4">
        {[
          "ताज़ा खबरें",
          "देश",
          "दुनिया",
          "खेल",
          "मनोरंजन",
          "बिज़नेस",
          "टेक",
          "लाइफस्टाइल",
          "वीडियो",
          "फोटो"
        ].map((cat) => (
          <a
            key={cat}
            href="#"
            className="text-gray-700 hover:text-red-600 font-semibold text-base px-3 py-1 rounded transition whitespace-nowrap"
            style={{ minWidth: "max-content" }}
          >
            {cat}
          </a>
        ))}
      </div>
    </nav>
  );
}
