export default function NavMenu() {
  const menu = [
    "होम", "राज्य", "देश", "क्रिकेट", "लाइव स्कोर",
    "मनोरंजन", "बिज़नेस", "करियर", "विदेश",
    "धर्म", "राशिफल", "लाइफस्टाइल", "ऑटो", "मेगाजेंस"
  ];

  return (
    <div className="bg-white w-full border-b">
      <div className="flex space-x-6 px-4 py-3 text-red-700 font-medium text-sm overflow-x-auto">
        {menu.map((item) => (
          <span key={item} className="cursor-pointer hover:text-black whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
