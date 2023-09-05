import React from "react";
import { Card } from "@nextui-org/react";
import { CheckCircle2, XCircle } from "lucide-react";
import { Divider } from "@nextui-org/react";

type Props = {
  correct_answers: number;
  wrong_answers: number;
};

const MCQCounter = ({ correct_answers, wrong_answers }: Props) => {
  return (
    <Card className="flex flex-row items-center justify-center p-2">
      <CheckCircle2 color="green" size={30} />
      <span className="mx-3 text-2xl text-[green]">{correct_answers}</span>

      <Divider orientation="vertical" />

      <span className="mx-3 text-2xl text-[red]">{wrong_answers}</span>
      <XCircle color="red" size={30} />
    </Card>
  );
};

export default MCQCounter;