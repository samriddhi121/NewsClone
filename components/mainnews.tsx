import Image from "next/image";

interface NewsItem {
  id?: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  date: string;
}

interface MainNewsProps {
  news: NewsItem[];
}

export default function MainNews({ news }: MainNewsProps) {
  const sampleImages = ["/images/news1.svg", "/images/news2.svg"];

  // Featured news (first item)
  const featured = news[0];
  const restNews = news.slice(1);

  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 px-4 py-4">
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <h2 className="text-4xl font-extrabold text-gray-900">ताज़ा समाचार</h2>
          <span className="text-xs text-gray-500 font-medium">अपडेट: 2 घंटे पहले</span>
        </div>

        {/* Featured News Card */}
        {featured && (
          <article className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl border border-gray-200 shadow hover:shadow-xl transition mb-8">
            <div className="w-full md:w-80 h-56 relative flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={featured.image || sampleImages[0]}
                alt={featured.title || 'समाचार छवि'}
                fill
                className="object-cover hover:scale-105 transition duration-300"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold uppercase">
                    {featured.category || 'समाचार'}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">{featured.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {featured.description}
                </p>
              </div>
              <a href="#" className="text-sm font-bold text-red-600 hover:underline inline-flex items-center gap-1">
                पूरी खबर पढ़ें <span>→</span>
              </a>
            </div>
          </article>
        )}

        {/* Grid for other news */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {restNews.map((item: NewsItem, idx: number) => (
            <article 
              key={item.id || idx} 
              className="flex flex-col bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition"
            >
              <div className="w-full h-40 relative rounded-lg overflow-hidden bg-gray-100 mb-3">
                <Image
                  src={item.image || sampleImages[(idx+1) % sampleImages.length]}
                  alt={item.title || 'समाचार छवि'}
                  fill
                  className="object-cover hover:scale-105 transition duration-300"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-red-50 text-red-600 rounded text-xs font-bold uppercase">
                  {item.category || 'समाचार'}
                </span>
                <span className="text-xs text-gray-500 font-medium">{item.date}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2 flex-grow">
                {item.description}
              </p>
              <a href="#" className="text-xs font-bold text-red-600 hover:underline inline-flex items-center gap-1">
                पूरी खबर पढ़ें <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>

      <aside className="space-y-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            विज्ञापन
          </h2>
          <div className="rounded-xl overflow-hidden bg-gray-100 hover:shadow-md transition">
            <img src="/images/ad_large.svg" alt="विज्ञापन" className="w-full h-auto" />
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow">
          <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
            ज़रूर पढ़ें
          </h3>
          <div className="space-y-3">
            {[
              "वास्तु शास्त्र: गिफ्ट में ये गलती न करें...",
              "PM मोदी ने आज बड़ा ऐलान किया...",
              "CID ने बड़े ठिकानों पर रेड मारी...",
              "इमरान खान जेल में, एक्सपर्ट बोले..."
            ].map((item, i) => (
              <div key={i} className="pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
                <a href="#" className="text-sm text-gray-900 font-medium hover:text-red-600 transition leading-snug">
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
