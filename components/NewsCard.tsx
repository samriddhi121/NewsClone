import Image from "next/image";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  author: string;
}

export default function NewsCard({ article }: { article: Article }) {
  return (
    <div className="card card-hover p-lg rounded-sm">
      <div className="relative w-full h-48 mb-md rounded-sm overflow-hidden bg-light-gray">
        <Image
          src={article.image || "/images/placeholder.svg"}
          width={400}
          height={250}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h3 className="headline-secondary mb-sm text-dark-gray leading-tight">
          {article.title}
        </h3>

        <p className="text-body text-medium-gray mb-md line-clamp-2">
          {article.description || "कोई विवरण उपलब्ध नहीं है।"}
        </p>

        <p className="text-tiny text-medium-gray font-medium">
          By {article.author}
        </p>
      </div>
    </div>
  );
}
