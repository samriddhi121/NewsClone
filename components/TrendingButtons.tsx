export default function TrendingTags() {
  const tags = [
    "चिप जस्टिस सूर्यकांत", "SIR", "अनुछेद 240",
    "दिल्ली कार घटना", "बिग बॉस 19", "मौसम",
    "आज का राशिफल", "शेयर मार्केट"
  ];

  return (
    <div className="container my-lg flex items-center gap-sm px-lg overflow-x-auto scrollbar-hide py-md">
      <button className="flex-shrink-0 border border-border-gray p-sm rounded-full hover:border-brand-red hover:text-brand-red transition font-bold text-dark-gray">
        ❮
      </button>

      {tags.map(tag => (
        <button
          key={tag}
          className="flex-shrink-0 border border-border-gray px-lg py-sm rounded-full text-xs font-bold text-dark-gray hover:bg-brand-red hover:text-white hover:border-brand-red transition whitespace-nowrap"
        >
          {tag}
        </button>
      ))}

      <button className="flex-shrink-0 border border-border-gray p-sm rounded-full hover:border-brand-red hover:text-brand-red transition font-bold text-dark-gray">
        ❯
      </button>
    </div>
  );
}
