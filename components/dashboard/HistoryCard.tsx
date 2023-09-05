"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { History } from "lucide-react";

type Props = {};

const HistoryCard = (props: Props) => {
  const router = useRouter();
  return (
    <Card
      className="hover:cursor-pointer hover:opacity-75"
      isPressable
      onPress={() => {
        router.push("/history");
      }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <p className="text-2xl font-bold">History</p>
        <History size={28} strokeWidth={2.5} />
      </CardHeader>
      <CardBody>
        <p className="text-sm text-muted-foreground">
          View past quiz attempts.
        </p>
      </CardBody>
    </Card>
  );
};

export default HistoryCard;
