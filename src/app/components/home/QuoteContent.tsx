import { IconGridGoldenratio } from "@tabler/icons-react";
import React from "react";

const QuoteContent = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="py-12">
          <IconGridGoldenratio className="stroke-1" />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center px-4">
          <div className="max-w-lg">
            <div className="p-4">
              <h1 className="text-2xl font-bold">RIZKYPUTRA</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti repellendus aut sint architecto fugit saepe, voluptas
                iusto odio aspernatur illo quasi impedit nulla hic?
              </p>
            </div>
          </div>

          <div className="p-4">
            <img
              src="me/thisIsMe.png"
              alt="me"
              className="rounded-full mx-auto w-36 h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteContent;
