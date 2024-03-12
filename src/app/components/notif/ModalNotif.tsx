import { useRef, useEffect } from "react";

interface ModalNotifProps {
  tampilkan: boolean;
  menutup: () => void;
}

const ModalNotif: React.FC<ModalNotifProps> = ({ tampilkan, menutup }) => {
  const modal = useRef<HTMLDivElement>(null);

  const menutupModal = () => {
    menutup();
  };

  const klikDiluar = (klik: MouseEvent) => {
    if (modal.current && !modal.current.contains(klik.target as Node)) {
      menutupModal();
    }
  };

  const klikEscape = (klik: KeyboardEvent) => {
    if (klik.key === "Escape") {
      menutupModal();
    }
  };

  useEffect(() => {
    if (tampilkan) {
      document.addEventListener("mousedown", klikDiluar);
      document.addEventListener("keydown", klikEscape);
    } else {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    }

    return () => {
      document.removeEventListener("mousedown", klikDiluar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [tampilkan, menutup]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity ${
        tampilkan ? "opacity-100 duration-500" : "opacity-0 pointer-events-none"
      }`}
    >
      <div ref={modal} className="p-8">
        <div className="max-w-md bg-gray-100 p-6 rounded-xl border-t-2 border-b-2 border-blue-500">
          <div className="p-2 text-center">
            <h2 className="text-2xl mb-4">Thank you very much</h2>
            <p>you have visited my personal website,</p>
            <p>once again I thank you very much.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNotif;
