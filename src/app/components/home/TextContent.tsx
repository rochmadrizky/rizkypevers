import React from "react";

const TextContent = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="w-96 h-12 border-t border-l border-r rounded-t-2xl border-black"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-20 px-4">
          <div className="max-w-lg rounded-2xl bg-gray-100">
            <div className="p-4 text-center">
              <h1>Hai ini text sebelah kiri</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat nesciunt nam, in minima, eligendi cum consequuntur ad
                itaque maiores aliquam odit commodi provident iure perspiciatis!
                Nobis temporibus laudantium saepe quisquam.
              </p>
            </div>
          </div>

          <div className="max-w-lg rounded-2xl bg-gray-100">
            <div className="p-4 text-center">
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

        <div className="w-60 h-10 border-b border-l border-r rounded-b-2xl border-black"></div>
      </div>
    </div>
  );
};

export default TextContent;
