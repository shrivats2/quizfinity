"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { BrainCircuit } from "lucide-react";

type Props = {};

const QuizMeCard = (props: Props) => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      isPressable
      onPress={() => {
        router.push("/quiz");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <p className="text-2xl font-bold">Quiz me!</p>
        <BrainCircuit size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardBody>
        <p className="text-sm text-muted-foreground">
          Challenge yourself to a quiz with a topic of your choice.
        </p>
      </CardBody>
    </Card>
  );
};

export default QuizMeCard;
