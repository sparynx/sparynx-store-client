// import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import Product from '../products/Product';

const heroSection = [
  {name: "Woman's Fashion", href: "/",},
  {name: "Men's Fashion", href: "/",},
  {name: "Electronics", href: "/",},
  {name: "Home & Lifestyle", href: "/",},
  {name: "Medicine", href: "/",},
  {name: "Sports & Outdoor", href: "/",},
  {name: "Baby's & Toys", href: "/",},
  {name: "Groceries & Pets", href: "/",},
  {name: "Health & Beauty", href: "/",},

]
 
const HeroSection = () => {
  return (

    <div className='hero-container flex '>
      {/* left */}
      <div className='w-[50vw] hidden lg:flex justify-start border-r border-gray-300'>
        <ul className='ml-16'>
              {
                heroSection.map((items) => (
                  <li key={items.name} className='py-1 flex items-center justify-start px-6'>
                    <Link to={items.href}>
                      {items.name}
                    </Link>
                    <FaAngleRight />

                  </li>
                ))
              }
        </ul>

        
      </div>

      {/* right */}
      <div className='w-full  flex items-center justify-center px-10 '>
          <Product/>
      </div>

    </div>


  )
}

export default HeroSection
