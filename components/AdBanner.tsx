export default function BigAdBanner() {
  return (
    <div className="container mt-2xl px-lg py-md">
      <div className="text-center text-xs text-medium-gray font-bold mb-md tracking-widest uppercase">
        विज्ञापन
      </div>

      <div className="rounded overflow-hidden shadow-md bg-light-gray hover:shadow-lg transition">
        <div className="w-full h-48 relative">
          <img 
            src="/images/ad_large.svg" 
            alt="विज्ञापन" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
