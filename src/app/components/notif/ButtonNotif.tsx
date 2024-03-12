"use client";

import { IconBell } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import ModalNotif from "./ModalNotif";

const ButtonNotif = () => {
  const [tampilkanModal, mengaturTampilkanModal] = useState(false);
  const [tampilkanNotifikasi, mengaturTampilkanNotifikasi] = useState(true);

  useEffect(() => {
    const shortcutMembukaNotif = (klik: KeyboardEvent) => {
      if (klik.metaKey && klik.key === "u") {
        if (tampilkanModal) {
          mengaturTampilkanModal(false);
          mengaturTampilkanNotifikasi(false);
        } else {
          mengaturTampilkanModal(true);
        }
      }
    };

    window.addEventListener("keydown", shortcutMembukaNotif);

    return () => {
      window.removeEventListener("keydown", shortcutMembukaNotif);
    };
  }, [tampilkanModal]);

  const klikModal = () => {
    mengaturTampilkanModal(!tampilkanModal);
  };

  const sembunyikanNotif = () => {
    mengaturTampilkanNotifikasi(false);
  };

  return (
    <div className="relative">
      <button onClick={klikModal}>
        <IconBell />
      </button>

      <ModalNotif
        tampilkan={tampilkanModal}
        menutup={() => {
          klikModal();
          sembunyikanNotif();
        }}
      />

      {tampilkanNotifikasi && !tampilkanModal && (
        <div className="w-2 h-2 bg-blue-500 animate-bounce rounded-full absolute top-0 right-0.5"></div>
      )}
    </div>
  );
};

export default ButtonNotif;
