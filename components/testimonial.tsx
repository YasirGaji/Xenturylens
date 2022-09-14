import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  by: string;
}

const Testimonial: React.FC<Props> = ({ children, by }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-5 md:px-10 lg:px-20">
      <div className="text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-light mb-4">
        &ldquo;{children}&rdquo;
      </div>
      <div className="mt-6 text-xl">
        &mdash; {by}
      </div>
    </div>
  )
}

export default Testimonial;
