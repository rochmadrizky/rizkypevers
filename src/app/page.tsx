import HomeContent from "./components/home/HomeContent";

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url('/background/topography.svg')` }}
    >
      <div>
        <HomeContent />
      </div>
    </div>
  );
}
