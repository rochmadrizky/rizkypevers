import React from "react";

const TextContent = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-2 px-4">
        <div className="max-w-lg self-start">
          <div className="p-4 text-center md:text-left">
            <h1>Hai ini text sebelah kiri</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              nesciunt nam, in minima, eligendi cum consequuntur ad itaque
              maiores aliquam odit commodi provident iure perspiciatis! Nobis
              temporibus laudantium saepe quisquam.
            </p>
          </div>
        </div>

        <div className="max-w-lg self-end">
          <div className="p-4 text-center md:text-left">
            <h1>Hai ini text sebelah kanan</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
              mollitia quidem possimus asperiores numquam, necessitatibus
              voluptatum fuga ad non et dignissimos nulla officia adipisci
              fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
