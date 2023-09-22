"use client";
import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
  Link,
} from "@nextui-org/react";
import { conatcts } from "../components/utils/Lists";

export default function App() {
  return (
    <div className="flex justify-center mt-48 m-2">
      <Card className="md:w-[600px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="md"
              src="https://th.bing.com/th/id/OIP.a_4TeF45eItISh081Dt41QHaEs?pid=ImgDet&rs=1"
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Eyad Zoubi
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                @ugnwb
              </h5>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>Fullstack web developer</p>
          <span className="pt-2"></span>
          <p>
            This website was made as a final project for Dot Python training
            course.
          </p>
          <div className="mt-8 md:flex justify-center">
            {conatcts.map((item, index) => (
              <Link href={item.link} target="_blank" key={index}>
                <Button className="m-2" href={item.icon} variant="ghost">
                  <span>{item.name}</span>
                  {item.icon}
                </Button>
              </Link>
            ))}
          </div>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
           
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
