import fs from "fs";
import path from "path";

import Header from "../components/Header";
import TopBar from "../components/TopBar";
import CategoryTabs from "../components/categoryNavbar";
import BigAdBanner from "../components/AdBanner";
import TrendingTags from "../components/TrendingButtons";
import MainNews from "../components/mainnews";
import VideoSection from "../components/VideoSection";
import Footer from "../components/Footer";

export default function Home() {
  const filePath = path.join(process.cwd(), "fakenews.json");
  const news = JSON.parse(fs.readFileSync(filePath, "utf8"));

  return (
    <div className="min-h-screen bg-light-gray">
      <TopBar />
      <Header />
      <CategoryTabs />
      <BigAdBanner />
      <TrendingTags />
      <MainNews news={news} />
      <VideoSection />
      <Footer />
    </div>
  );
}

