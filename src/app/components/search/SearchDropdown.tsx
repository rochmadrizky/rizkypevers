import React from "react";

interface SearchDropdownProps {
  opsional: string[];
  deskripsi: string[];
  opsiYangDipilih: number;
  menanganiPilihan: (option: string) => void;
  mengaturOpsiYangDipilih: (index: number) => void;
  pencarianDalamModal: string;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({
  opsional,
  deskripsi,
  opsiYangDipilih,
  menanganiPilihan,
  mengaturOpsiYangDipilih,
  pencarianDalamModal,
}) => {
  return (
    <ul className="absolute top-9 w-full bg-white border-b-2 border-blue-500 rounded-b-lg shadow-lg overflow-hidden -z-10">
      {opsional.map((opsi, isi) => {
        const awalIndex = opsi
          .toLowerCase()
          .indexOf(pencarianDalamModal.toLowerCase());
        const penandaOpsi = (
          <span className="font-prefix">
            {opsi.substring(0, awalIndex)}
            <mark className="bg-blue-300">
              {opsi.substring(
                awalIndex,
                awalIndex + pencarianDalamModal.length
              )}
            </mark>
            {opsi.substring(awalIndex + pencarianDalamModal.length)}
          </span>
        );

        return (
          <li
            key={isi}
            className={`px-4 py-2 ${
              opsi === "results not found"
                ? "text-blue-300 font-prefix text-center py-4 cursor-default"
                : "cursor-pointer hover:bg-gray-200"
            } ${opsiYangDipilih === isi ? "bg-gray-300" : ""}`}
            onClick={() => {
              if (opsi !== "results not found") {
                menanganiPilihan(opsi);
              }
            }}
            onMouseEnter={() => {
              if (opsi !== "results not found") {
                mengaturOpsiYangDipilih(isi);
              }
            }}
          >
            {opsi === "results not found" ? (
              opsi
            ) : (
              <div className="border-b-2 py-2">
                {penandaOpsi}
                {deskripsi[isi] && (
                  <p className="text-sm text-gray-500 font-description">
                    {deskripsi[isi]
                      .toLowerCase()
                      .includes(pencarianDalamModal.toLowerCase())
                      ? deskripsi[isi]
                          .split(new RegExp(`(${pencarianDalamModal})`, "gi"))
                          .map((pecahan, index) =>
                            pecahan.toLowerCase() ===
                            pencarianDalamModal.toLowerCase() ? (
                              <mark key={index} className="bg-blue-300">
                                {pecahan}
                              </mark>
                            ) : (
                              <span key={index}>{pecahan}</span>
                            )
                          )
                      : deskripsi[isi]}
                  </p>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default SearchDropdown;
