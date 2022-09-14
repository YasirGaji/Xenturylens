import React from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Testimonial from "./testimonial";

const Testimonials: React.FC = () => {
  return (
    <div>
      <Carousel className="bg-black text-white py-10 lg:py-20">
        <CarouselItem index={0}>
          <Testimonial by="Rambo {Fazsion}">
            I love the way the products designed by Xenturylens are so unique and different from the rest of the brands. I have been using their products for a while now and I am very happy with the quality and the design.
          </Testimonial>
        </CarouselItem>
      </Carousel>
    </div>
  )
}

export default Testimonials;
