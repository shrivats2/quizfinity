import React from "react";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Target } from "lucide-react";
type Props = { accuracy: number };

const AccuracyCard = ({ accuracy }: Props) => {
  accuracy = Math.round(accuracy * 100) / 100;
  return (
    <Card className="md:col-span-3">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <p className="text-2xl font-bold">Average Accuracy</p>
        <Target />
      </CardHeader>
      <CardBody>
        <div className="text-sm font-medium">{accuracy.toString() + "%"}</div>
      </CardBody>
    </Card>
  );
};

export default AccuracyCard;
