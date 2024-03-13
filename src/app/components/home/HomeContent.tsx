"use client";

import { useState, useRef } from "react";

const HomeContent = () => {
  const konten = [
    {
      gambar:
        "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      judul: "HEY THERE, I AM",
      deskripsi: "RIZKY PUTRA",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      judul: "MY FIELD AS",
      deskripsi: "FRONT END DEVELOPER",
    },
    {
      gambar:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      judul: "CREATIVITY",
      deskripsi: "ABOVE ALL",
    },
  ];

  const [indeksSaatIni, mengaturIndeksSaatIni] = useState(0);
  const [seretDariX, mengaturSeretDariX] = useState(0);
  const [titikAktif, mengaturTitikAktif] = useState(0);
  const penggeser = useRef<HTMLDivElement>(null);

  const sebelumnya = () => {
    const pengechekan =
      indeksSaatIni === 0 ? konten.length - 1 : indeksSaatIni - 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const selanjutnya = () => {
    const pengechekan =
      indeksSaatIni === konten.length - 1 ? 0 : indeksSaatIni + 1;
    mengaturIndeksSaatIni(pengechekan);
    mengaturTitikAktif(pengechekan);
  };

  const tekanMouse = (
    klik: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if ("touches" in klik) {
      mengaturSeretDariX(klik.touches[0].pageX);
    } else {
      mengaturSeretDariX(klik.pageX);
    }
  };

  const pergerakanMouse = (
    gerakan: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (seretDariX === 0 || !penggeser.current) return;

    let posisiX;
    if ("touches" in gerakan) {
      posisiX = gerakan.touches[0].pageX;
    } else {
      posisiX = gerakan.pageX;
    }

    const perbedaan = posisiX - seretDariX;

    if (perbedaan > 50 && indeksSaatIni !== 0) {
      sebelumnya();
      mengaturSeretDariX(0);
    } else if (perbedaan < -50 && indeksSaatIni !== konten.length - 1) {
      selanjutnya();
      mengaturSeretDariX(0);
    }
  };

  const lepasKlikMouse = () => {
    mengaturSeretDariX(0);
  };

  const titik = konten.map((_, urutan) => (
    <span
      key={urutan}
      className={`h-2 w-2 bg-black rounded-full mx-1 cursor-pointer ${
        urutan === titikAktif && "ring-1 p-1.5 ring-black"
      }`}
      onClick={() => ubahKontenDenganTitik(urutan)}
    />
  ));

  const ubahKontenDenganTitik = (urutanIndex: number) => {
    mengaturTitikAktif(urutanIndex);
    mengaturIndeksSaatIni(urutanIndex);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="px-4 flex flex-col items-center justify-center"
        ref={penggeser}
        onMouseDown={tekanMouse}
        onMouseMove={pergerakanMouse}
        onMouseUp={lepasKlikMouse}
        onTouchStart={tekanMouse}
        onTouchMove={pergerakanMouse}
        onTouchEnd={lepasKlikMouse}
      >
        <div className="flex flex-col items-center justify-center relative pb-4">
          <div className="flex items-center justify-center relative">
            <div
              className="h-[240px] w-[280px] md:h-[320px] md:w-[440px] lg:w-[680px] overflow-hidden bg-center bg-cover duration-500 rounded-l-2xl"
              style={{
                backgroundImage: `url(${konten[indeksSaatIni].gambar})`,
              }}
            ></div>

            <div className="bg-black h-[280px] w-[140px] md:h-[360px] md:w-[280px] absolute -right-4 -z-10 rounded-r-2xl"></div>
          </div>

          <div className="flex flex-col items-center justify-center absolute bottom-5 -left-10 md:-left-32">
            <div className="text-center p-4">
              <h2 className="text-xl md:text-4xl font-bold">
                {konten[indeksSaatIni].judul}
              </h2>
              <p className="text-base md:text-2xl">
                {konten[indeksSaatIni].deskripsi}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6">{titik}</div>
      </div>
    </div>
  );
};

export default HomeContent;
