import HistoryComponent from "@/components/HistoryComponent";
import { getAuthSession } from "@/lib/nextauth";
import { redirect } from "next/navigation";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import React from "react";
import Link from "next/link";
import { LucideLayoutDashboard } from "lucide-react";

type Props = {};

const History = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px]">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">History</p>
            <Button color="primary" className="ml-12">
              <Link href="/dashboard" className="items-center flex">
                <LucideLayoutDashboard className="mr-2" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </CardHeader>
        <CardBody className="max-h-[60vh] overflow-scroll">
          <HistoryComponent limit={100} userId={session.user.id} />
        </CardBody>
      </Card>
    </div>
  );
};

export default History;
