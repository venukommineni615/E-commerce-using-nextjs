"use client"
import Link from "next/link"
export default function LandingPageCarousel() {
  return (
    <div className="carousel w-full p-2">
    <Link href="/product">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.freepik.com/free-photo/men-shoes_1203-8387.jpg?size=626&ext=jpg&ga=GA1.1.554225291.1693991113&semt=sph"
          className="w-full"
          />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    
      </Link>
      </div>
      );
}
