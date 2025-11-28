export default function VideoSection() {
  return (
    <div className="container mt-2xl mb-2xl px-lg py-md">
      <div className="pb-lg mb-2xl border-b border-border-gray">
        <h2 className="text-4xl font-bold text-dark-gray">वीडियो: आज की बड़ी खबरें</h2>
      </div>

      <div className="space-y-2xl">
        <div className="relative w-full bg-dark-gray rounded overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/jfKfPfyJRdk"
            title="वीडियो 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="relative w-full bg-dark-gray rounded overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ"
            title="वीडियो 2"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
