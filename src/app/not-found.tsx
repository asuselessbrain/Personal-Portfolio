import Image from "next/image";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-[90%] mx-auto h-[100vh] flex items-center justify-center">
      <Image
        src="https://img.freepik.com/premium-vector/problem-concept-website-webpage-template-maintenance-work-something-went-wrong-computer_118813-27709.jpg?w=1380"
        width={1000}
        height={500}
        priority
        alt="not found page"
        className="w-full max-h-[90vh] rounded-3xl"
      />
    </div>
  );
};

export default NotFoundPage;
