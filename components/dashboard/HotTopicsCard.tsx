import React from "react";
import { Card, CardHeader,CardBody} from "@nextui-org/react";
import { prisma } from "@/lib/db";
import WordCloud from "../WordCloud";

type Props = {};

const HotTopicsCard = async (props: Props) => {
  const topics = await prisma.topic_count.findMany({});
  const formattedTopics = topics.map((topic) => {
    return {
      text: topic.topic,
      value: topic.count,
    };
  });
  return (
    <Card className="col-span-4">
      <CardHeader>
        <div>
        <p className="text-2xl font-bold">Hot Topics</p>
        <p className="pt-2">
          Click on a topic to start a quiz on it.
        </p>
        </div>
      </CardHeader>
      <CardBody className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardBody>
    </Card>
  );
};

export default HotTopicsCard;