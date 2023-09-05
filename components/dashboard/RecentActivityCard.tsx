import React from "react";
import { Card, CardHeader,CardBody} from "@nextui-org/card";
import Link from "next/link";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import HistoryComponent from "../HistoryComponent";
import { prisma } from "@/lib/db";

type Props = {};

const RecentActivityCard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  const games_count = await prisma.game.count({
    where: {
      userId: session.user.id,
    },
  });
  return (
    <Card className="col-span-4 lg:col-span-3">
      <CardHeader>
        <div>
        <p className="text-2xl font-bold">
          <Link href="/history">Recent Activity</Link>
        </p>
        <p className="pt-2">
          You have played a total of {games_count} quizzes.
        </p>
        </div>
      </CardHeader>
      <CardBody className="max-h-[580px] overflow-scroll">
        <HistoryComponent limit={10} userId={session.user.id} />
      </CardBody>
    </Card>
  );
};

export default RecentActivityCard;