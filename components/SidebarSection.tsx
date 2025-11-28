export default function SidebarSection() {
  const items = [
    "वास्तु शास्त्र: ग़लतियां जो घर में नुकसान लाती हैं",
    "धर्म रक्षा: गीता पाठ के बीच PM मोदी क्यों करें सिन्दूर की चर्चा",
    "CID इंस्पेक्टर मधुर ठाकुर पर रेड",
    "पूर्व PM इमरान खान की स्थिति गंभीर",
  ];

  return (
    <div className="card p-lg rounded-sm">
      <h2 className="text-xl font-bold text-brand-red mb-md">जरूर पढ़ें</h2>

      <div className="space-y-md">
        {items.map((txt, i) => (
          <p key={i} className="cursor-pointer hover:text-brand-red text-medium-gray">{txt}</p>
        ))}
      </div>
    </div>
  );
}
