"use client";
import { Button, Image, Progress } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { GoArrowSwitch } from "react-icons/go";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { Bebas, rowdies } from "./components/utils/Fonts";
import Infocard from "./components/Infocard";

const Home = () => {
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [matchRate, setMatchRate] = useState<any>("");
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState("");

  useEffect(() => {
    setLoading(false);
  }, []);
  const handleImageUpload = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("image1", e.target.image1.files[0]);
    formData.append("image2", e.target.image2.files[0]);

    try {
      const response = await fetch(
        "https://eyadzoubi.pythonanywhere.com/upload_images",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setLoading(false);
        const data = await response.json();
        setImage1(data.image1);
        setImage2(data.image2);
        setMatchRate(data.match_rate);
        setError("");
      } else {
        setLoading(false);
        console.error("Error uploading images:", response.statusText);
        setError("You must upload 2 images");
      }
    } catch (error) {
      setLoading(false);
      setError("Something went wrong, Please try again.");
    }
  };

  return (
    <>
      <div className="flex justify-center mt-32">
        <form onSubmit={handleImageUpload}>
          <div className="flex justify-center text-center">
            <span>
              <h1 className={`${rowdies.className} md:text-5xl text-3xl text`}>
                Facial Comparison Tool
              </h1>
              <p className={`${rowdies.className} text`}>
                Eyad's Final Project
              </p>
            </span>
          </div>

          <div className="xl:flex block m-2">
            <div className="m-2">
              <label htmlFor="image1" style={{ cursor: "pointer" }}>
                {image1 ? (
                  <Image
                    isLoading={isLoading}
                    src={`data:image/jpeg;base64,${image1}`}
                    alt="Image 1"
                    className="h-[400px] w-[500px] object-center"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center justify-center h-[400px] sm:w-[500px] md:w-[720px] xl:w-[500px] border border-gray-300 rounded-lg cursor-pointer"
                    style={{
                      border: "2px solid transparent", // Set a transparent border
                      backgroundImage:
                        "linear-gradient(135deg, #6B46C1, #9333EA, #3B82F6)", // Gradient background
                      backgroundOrigin: "border-box", // Clip the background to the border box
                      backgroundClip: "content-box, border-box", // Clip both background layers
                    }}
                  >
                    <AiOutlineCloudUpload className="h-16 w-16 text-white" />
                    <p className="mt-2 text-white text-xl font-semibold">
                      Upload Image 1
                    </p>
                    <p className="text-sm text-gray-200">
                      Supported formats: PNG, JPEG
                    </p>
                    <p className="text-xs text-gray-200">Maximum size: 5MB</p>
                  </div>
                )}
              </label>
              <input
                type="file"
                accept="image/*"
                name="image1" // Unique name attribute for image 1
                id="image1"
                style={{ display: "none" }}
              />
            </div>
            <div className="mt-auto mb-auto text-4xl animate-pulse">
              <span className="xl:block hidden">
                <GoArrowSwitch />
              </span>
            </div>
            <div className="text-4xl animate-pulse flex justify-center">
              <span className="xl:hidden block">
                <HiOutlineSwitchVertical />
              </span>
            </div>
            <div className="m-2">
              <label htmlFor="image2" style={{ cursor: "pointer" }}>
                {image2 ? (
                  <Image
                    isLoading={isLoading}
                    src={`data:image/jpeg;base64,${image2}`}
                    alt="Image 2"
                    className="h-[400px] w-[500px] object-center"
                  />
                ) : (
                  <div
                    className="flex flex-col items-center justify-center h-[400px] sm:w-[500px] md:w-[720px] xl:w-[500px] border border-gray-300 rounded-lg cursor-pointer"
                    style={{
                      border: "2px solid transparent", // Set a transparent border
                      backgroundImage:
                        "linear-gradient(135deg, #6B46C1, #9333EA, #3B82F6)", // Gradient background
                      backgroundOrigin: "border-box", // Clip the background to the border box
                      backgroundClip: "content-box, border-box", // Clip both background layers
                    }}
                  >
                    <AiOutlineCloudUpload className="h-16 w-16 text-white" />
                    <p className="mt-2 text-white text-xl font-semibold">
                      Upload Image 2
                    </p>
                    <p className="text-sm text-gray-200">
                      Supported formats: PNG, JPEG
                    </p>
                    <p className="text-xs text-gray-200">Maximum size: 5MB</p>
                  </div>
                )}
              </label>
              <input
                type="file"
                accept="image/*"
                name="image2" // Unique name attribute for image 2
                id="image2"
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="flex justify-center p-2">
            <Progress
              aria-label={matchRate}
              value={matchRate}
              showValueLabel={true}
              label="Match Rate"
              className="w-full"
              placeholder={matchRate}
              color={
                matchRate < 50
                  ? "danger"
                  : matchRate < 70
                  ? "secondary"
                  : "success"
              }
            />
          </div>
          <div className="flex justify-center">
            <Button
              isLoading={isLoading}
              type="submit"
              className="mt-4 w-48"
              variant="ghost"
              color="default"
            >
              Compare Images
            </Button>
          </div>
          {isError.length > 2 && (
            <p className="text-red-500 text-center mt-4">{isError}</p>
          )}
        </form>
      </div>
      <div className="flex justify-center mt-12 mb-12">
        <Infocard />
      </div>
    </>
  );
};

export default Home;
