import HomeContent from "./components/home/HomeContent";
import QuoteContent from "./components/home/QuoteContent";
import TextContent from "./components/home/TextContent";

export default function Home() {
  return (
    <>
      <div
        className="h-[484px] flex items-center justify-center"
        style={{ backgroundImage: `url('/background/topography.svg')` }}
      >
        <div className="md:pt-10">
          <HomeContent />
        </div>
      </div>

      <div>
        <TextContent />
      </div>

      <div>
        <QuoteContent />
      </div>
    </>
  );
}
