import logo from './logo1.jpg'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.jpg'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpeg'
import project_img_3 from './project_img_3.jpeg'
import project_img_4 from './project_img_4.jpeg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Crestview Manor",
      price: "$2,500,000",
      location: "East Legon",
      image: project_img_1
    },
    {
      title: "Vista Grande",
      price: "$1,500,000",
      location: "Cantonments",
      image: project_img_2
    },
    {
      title: "Eden View Suites",
      price: "$3,500,000",
      location: "Airport Residential",
      image: project_img_3
    },
    {
      title: "Heritage House",
      price: "$3,000,000",
      location: "Labone",
      image: project_img_4
    },
    {
      title: "Colonial Court",
      price: "$1,200,000",
      location: "Osu",
      image: project_img_5
    },
    {
      title: "Sankofa Manor",
      price: "$1,900,000",
      location: "Trassaco Valley",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Cyril Opeku",
        title: "Forex Trader",
        image: profile_img_1,
        alt: "Portrait of Cyril Opeku",
        rating: 5,
        text: "Working with Hillview Real Estate was an absolute pleasure. From the very first consultation, they understood exactly what I was looking for. I found my dream home in less than a month, and the process was smooth and stress-free. Their team is professional, knowledgeable, and truly cares about their clients. I highly recommend Hillview Real Estate to anyone in search of their perfect property."
    },
    {
        name: "Richardson Ayeh",
        title: "Freelancer",
        image: profile_img_2,
        alt: "Portrait of Richard Ayeh",
        rating: 4,
        text: "Professional, knowledgeable, and truly caring. The team went above and beyond to help me sell my property quickly and at a great price. Highly recommended!"
    },
    {
        name: "Kelvin Manu",
        title: "Entrepreneur",
        image: profile_img_3,
        alt: "Portrait of Kelvin Manu",
        rating: 5,
        text: "Great service overall. The agents were responsive and kept me updated throughout. My only suggestion would be to add more virtual tour options on the website, but otherwise everything was excellent."
    }
];