export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-gray mt-2xl">
      <div className="container py-2xl grid grid-cols-1 md:grid-cols-3 gap-2xl px-lg">
        <div>
          <img src="/images/logo.svg" alt="Hindustan Times" className="h-12 mb-lg" />
          <p className="text-sm text-medium-gray leading-relaxed">
            हिंदुस्तान टाइम्स स्टाइल न्यूज़ क्लोन — ताज़ा और भरोसेमंद खबरें आपके लिए।
          </p>
        </div>

        <div>
          <h4 className="font-bold text-dark-gray mb-lg text-sm">अन्वेषण करें</h4>
          <ul className="text-sm text-medium-gray space-y-md">
            <li><a href="#" className="hover:text-brand-red transition font-medium">विश्व</a></li>
            <li><a href="#" className="hover:text-brand-red transition font-medium">व्यवसाय</a></li>
            <li><a href="#" className="hover:text-brand-red transition font-medium">मनोरंजन</a></li>
            <li><a href="#" className="hover:text-brand-red transition font-medium">खेल</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-dark-gray mb-lg text-sm">सदस्य बनें</h4>
          <p className="text-sm text-medium-gray mb-md leading-relaxed">
            प्रतिदिन शीर्ष शीर्षलेख प्राप्त करें।
          </p>
          <div className="flex gap-md">
            <input 
              aria-label="email" 
              type="email" 
              placeholder="आपका@ईमेल.com" 
              className="border border-border-gray rounded px-md py-sm text-sm w-full outline-none focus:border-brand-red transition text-dark-gray"
            />
            <button className="bg-brand-red text-white px-lg py-sm rounded text-xs font-bold hover:bg-opacity-90 transition whitespace-nowrap">
              शामिल
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-border-gray py-lg text-center text-xs text-medium-gray font-medium">
        © {new Date().getFullYear()} हिंदुस्तान टाइम्स — डेमो प्रोजेक्ट | सभी अधिकार सुरक्षित
      </div>
    </footer>
  );
}
