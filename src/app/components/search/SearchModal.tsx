import React, { useState, useEffect, useRef } from "react";
import SearchDropdown from "./SearchDropdown";
import { IconEyeSearch, IconSearch } from "@tabler/icons-react";

const SearchModal: React.FC<{ membuka: boolean; menutup: () => void }> = ({
  membuka,
  menutup,
}) => {
  const [search, mengaturSearch] = useState("");
  const [opsiLengkap, mengaturOpsiLengkap] = useState<
    { opsi: string; deskripsi: string }[]
  >([]);
  const [pilihOpsiIndex, mengaturPilihOpsiIndex] = useState<number>(-1);

  const halamanInfo: Record<string, { deskripsi: string; link: string }> = {
    Abouts: { deskripsi: "Related things about me.", link: "/abouts" },
    Blogs: { deskripsi: "My blog notes are all here.", link: "/blogs" },
    Home: { deskripsi: "My introduction section or main page.", link: "/" },
    Game: { deskripsi: "I made a simple TicTacToe game.", link: "/games" },
    Carousel: {
      deskripsi: "Slide carousel content section.",
      link: "/carousel",
    },
    TodoList: {
      deskripsi: "To write or note down a list of tasks.",
      link: "/todolist",
    },
    Calculator: {
      deskripsi: "Simple calculating tool.",
      link: "/calculator",
    },
    Ratings: {
      deskripsi: "Express your assessment.",
      link: "/rating",
    },
  };

  const modal = useRef<HTMLDivElement>(null);
  const inputFokus = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const klikLuar = (klik: MouseEvent) => {
      if (modal.current && !modal.current.contains(klik.target as Node)) {
        menutup();
        mengulangSearch();
      }
    };

    const klikEscape = (klik: KeyboardEvent) => {
      if (klik.key === "Escape") {
        menutup();
        mengulangSearch();
      }
    };

    if (membuka) {
      document.addEventListener("mousedown", klikLuar);
      document.addEventListener("keydown", klikEscape);

      inputFokus.current?.focus();
    } else {
      document.removeEventListener("mousedown", klikLuar);
      document.removeEventListener("keydown", klikEscape);
    }

    return () => {
      document.removeEventListener("mousedown", klikLuar);
      document.removeEventListener("keydown", klikEscape);
    };
  }, [membuka, menutup, inputFokus, modal]);

  const mengubahKolomInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPencarian = e.target.value;
    mengaturSearch(inputPencarian);

    if (inputPencarian === "") {
      mengaturOpsiLengkap([]);
    } else {
      const opsiYangCocok: { opsi: string; deskripsi: string }[] = [];
      Object.keys(halamanInfo).forEach((halaman) => {
        const deskripsi = dapatkanDeskripsi(halaman);
        if (
          halaman.toLowerCase().includes(inputPencarian.toLowerCase()) ||
          deskripsi.toLowerCase().includes(inputPencarian.toLowerCase())
        ) {
          opsiYangCocok.push({ opsi: halaman, deskripsi });
        }
      });

      if (opsiYangCocok.length > 0) {
        mengaturOpsiLengkap(opsiYangCocok);
      } else {
        mengaturOpsiLengkap([{ opsi: "results not found", deskripsi: "" }]);
      }
    }

    if (inputPencarian.length < search.length) {
      mengaturPilihOpsiIndex(-1);
    }
  };

  const dapatkanDeskripsi = (halaman: string) => {
    return halamanInfo[halaman]?.deskripsi || "";
  };

  const pilihanLengkap = (opsi: string) => {
    if (opsi !== "results not found") {
      const halaman = halamanInfo[opsi];
      if (halaman) {
        window.location.href = halaman.link;
      }
      mengaturSearch("");
    }
    mengaturOpsiLengkap([]);
  };

  const menanganiTombol = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      if (
        opsiLengkap.length > 0 &&
        opsiLengkap[0].opsi !== "results not found"
      ) {
        let indexBerikutnya;
        if (pilihOpsiIndex === -1) {
          indexBerikutnya = e.key === "ArrowDown" ? 0 : opsiLengkap.length - 1;
        } else {
          indexBerikutnya =
            (pilihOpsiIndex +
              (e.key === "ArrowDown" ? 1 : opsiLengkap.length - 1)) %
            opsiLengkap.length;
        }
        mengaturPilihOpsiIndex(indexBerikutnya);
      }
    } else if (e.key === "Enter") {
      if (pilihOpsiIndex !== -1) {
        pilihanLengkap(opsiLengkap[pilihOpsiIndex].opsi);
      }
    } else if (e.key === "Escape") {
      menutup();
      mengulangSearch();
    }
  };

  const mengulangSearch = () => {
    mengaturSearch("");
    mengaturPilihOpsiIndex(-1);
    mengaturOpsiLengkap([]);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center transition-opacity ${
        membuka ? "opacity-100 duration-500" : "opacity-0 pointer-events-none"
      }`}
    >
      <div ref={modal} className="w-72 md:w-96 top-20 rounded-lg absolute">
        <div className="p-2">
          <div className="flex items-center relative">
            <input
              ref={inputFokus}
              name="pencarian"
              type="text"
              value={search}
              onChange={mengubahKolomInput}
              onKeyDown={menanganiTombol}
              placeholder="Please search here"
              className="w-full px-3 py-2 rounded-lg focus:outline-blue-500 focus:right-2 bg-gray-100 font-prefix"
            />

            <button
              onClick={() => pilihanLengkap(search)}
              className={`px-3 py-2 absolute top-0 right-0 transform ${
                search ? "rotate-45" : ""
              } transition duration-300`}
            >
              {search ? (
                <IconEyeSearch className=" -rotate-45" />
              ) : (
                <IconSearch />
              )}
            </button>

            {opsiLengkap.length > 0 && (
              <SearchDropdown
                opsional={opsiLengkap.map((option) => option.opsi)}
                deskripsi={opsiLengkap.map((option) => option.deskripsi)}
                opsiYangDipilih={pilihOpsiIndex}
                menanganiPilihan={pilihanLengkap}
                mengaturOpsiYangDipilih={mengaturPilihOpsiIndex}
                pencarianDalamModal={search}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
