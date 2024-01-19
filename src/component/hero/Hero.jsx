import React from "react";
import Button from "../global/Button";
import { GiSteeringWheel } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import { CiBatteryCharging } from "react-icons/ci";

import Card from "../Card";

const Hero = () => {
  return (
    <div className="md:w-full md:full h-screen  relative lg:overflow-hidden">
      <img
        src="../../src/assets/hero.jpg"
        className="sm:w-full sm:h-full bg-bottom"
        alt=""
      />
      <div className="  absolute top-0 lg:flex h-full w-full justify-between">
        <div className="  sm:bg-white/30 md:bg-transparent  sm:py-10 w-full px-20 md:flex flex-col justify-end  gap-6 mb-10">
          <span className="bg-black rounded-full w-fit text-white px-2 -y-1">
            mini Cars
          </span>
          <h1 className="text-6xl">Mini</h1>
          <h1 className="text-7xl font-semibold">Electric Car</h1>
          <p className="text-2xl text-black font-thin">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
            molestiae amet nesciunt labore blanditiis, aliquam doloremque odit
            nobis fugit incidunt.
          </p>
          <span>
            From* <strong>$40000</strong>
          </span>
          <div className="flex gap-2">
            <Button
              className="bg-blue-500 py-2 px-4
             rounded-full text-white 
             flex justify-center items-center"
            >
              Build Your Car
            </Button>
            <Button
              className="bg-gray-500 py-2 px-4 
            rounded-full flex justify-center 
            items-center text-white"
            >
              <CiBatteryCharging />

            </Button>
          </div>
        </div>
        <div className=" w-full"></div>
        <div className=" w-full  flex  flex-col justify-end mb-10 px-14">
          <div className="grid grid-cols-2 gap-4">
            <Card
              className="bg-white/15  flex flex-col justify-center items-center py-5 rounded-lg"
              heading="200kmh"
              description="Top Speed"
            >
              <GiSteeringWheel size={25} />
            </Card>
            <Card
              className="bg-white/15   flex flex-col justify-center items-center py-5 rounded-lg"
              heading="200kmh"
              description="Top Speed"
            >
              <FaCarSide  size={25} />
            </Card>
           
            <Card
              className="bg-white/15   flex flex-col justify-center items-center py-5 rounded-lg"
              heading="200kmh"
              description="Top Speed"
            >
              <FaCarSide  size={25} />
            </Card>
         
            <Card
              className="bg-white/15   flex flex-col justify-center items-center py-5 rounded-lg"
              heading="200kmh"
              description="Top Speed"
            >
              <FaCarSide  size={25} />
            </Card>
            <div className="bg-white/15  col-start-1 col-end-3 rounded-lg overflow-hidden">
              <img
                src="../../src/assets/images (3).jpg"
                className="w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
