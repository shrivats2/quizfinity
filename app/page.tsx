import SignInButton from "@/components/SignInButton";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession();
  if (session?.user) {
    redirect("/dashboard");   
  } 
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card  className="w-[300px] sm:w-[400px] border-solid border-2 border-gray-600" shadow="lg">
          <CardHeader>
		  <p className="text-lg ">Welcome to Quizfinity 🔥!</p>
			</CardHeader>
          <CardBody>
            Quizfinity is a platform for creating quizzes using AI!. Get started
            by loggin in below!
          </CardBody>
        <CardFooter >
          <SignInButton text="Sign In with Google" />
        </CardFooter>
      </Card>
    </div>
  );
}