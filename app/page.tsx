"use client";

import { signIn, useSession } from "next-auth/react";
import { Button, Image } from "@nextui-org/react";
import quiz from "../assets/quiz.png";
import quizQs from "../assets/quizQs.png";
import stats from "../assets/stats.png";
import QuizCreate from "../assets/QuizCreate.png";
import history from "../assets/history.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const user = session?.user;
  const router = useRouter();
  return (
    <div>
      <main>
        <div className="flex justify-center bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#32103a] via-[#101125] to-[#111225]">
          <div className="flex flex-col items-center justify-center gap-3 w-full sm:flex-row sm:mt-20 m-12 ">
            <div className="space-y-4 basis-3/5">
              <div className="space-y-2">
                <span className="rounded-full text-white uppercase bg-gray-500 px-3 py-0.5 text-sm font-semibold leading-5 dark:text-white">
                  🤖 Quizfinity
                </span>
                <h1 className="text-4xl text-slate-200 font-bold tracking-tight dark:text-white sm:text-5xl md:text-6xl">
                  <span className="sm:text-6xl"></span> Quiz and Trivia
                  Application{" "}
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600">
                    Quizfinity
                  </span>
                  <br />
                  <span className="text-3xl">Explore, Create, Play!</span>
                </h1>
              </div>

              <p className="text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Quizfinity is a web-based quiz and trivia game application that
                allows users to create and play quizzes on various topics.
              </p>
              {user ? (
                <Button
                  onClick={() => {
                    router.push("/dashboard");
                  }}
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Goto Dashboard
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    signIn("google").catch(console.error);
                  }}
                  className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Get Started
                </Button>
              )}
            </div>
            <div className="hidden sm:block basis-2/5 lg:flex md:flex md:justify-center lg:justify-center">
              <Image
                src="https://img.freepik.com/premium-photo/navigating-uncertainty-finding-solutions-questions_1036975-114913.jpg?ga=GA1.1.157286925.1716276974&semt=ais_user_ai_gen"
                className="overflow-hidden "
                alt="Mockup"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <hr className="inset-0 left-0 mt-10 w-[90%]" />
        </div>
        <div className="max-w-6xl mx-auto container">
          <div className="mt-8 relative space-y-6">
            <div className="border-8 border-border rounded-md overflow-hidden m-5 ">
              <Image
                src={quiz.src}
                alt="screenshot"
                className="w-full rounded-[1px]"
              />
            </div>
            <div className="pt-24">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">
                Quiz Performance Tracking Dashboard
              </h2>
              <p className="text-center text-muted-foreground mt-4 text-lg md:text-xl">
                Track and analyze your quiz performance live
              </p>

              <div className="mt-4 text-lg md:text-xl text-center tracking-tight">
                📊 Stay updated on your quiz progress in real time. Dive into
                your quiz history to review past quizzes and track your
                performance over time. Gain insights into trending topics 🔥 and
                discover what other users are quizzing themselves with, allowing
                you to stay engaged and informed.
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-center">
                🎉 Explore Exciting Live Features 🎉
              </h2>
              <p className="text-center text-muted-foreground mt-4 text-lg md:text-xl">
                🧠 Engage in an immersive quiz experience and quiz yourself on
                anything! 🚀
              </p>
            </div>
            <div className="space-y-16 md:space-y-10 mt-16 flex flex-col md:gap-28 lg:gap-28 xl:gap-28 2xl:gap-28">
              <div className="rounded-lg border shadow-sm bg-muted/50 bg-[#f4f4f580] dark:bg-[#26262680] dark:text-white dark:border-[#27272a]">
                <div className="flex flex-col md:gap-8 md:flex-row m-5">
                  <Image
                    src={quizQs.src}
                    className="border-1 border-border rounded-md overflow-hidden"
                    alt="chat screenshot"
                  />
                  <div className="col-span-12 md:col-span-5 mt-4 md:mt-0">
                    <h3 className="tracking-tight text-xl md:text-2xl text-center md:text-left font-medium mb-2 md:mb-4">
                      🤖 AI-Generated Questions
                    </h3>
                    <p className="text-lg md:text-xl text-center md:text-left">
                      🧠 Challenge yourself with dynamic quizzes featuring
                      AI-generated questions. Each quiz includes a timer for an
                      engaging experience. Track your progress with real-time
                      updates on correct and incorrect answers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border shadow-sm bg-muted/50 bg-[#f4f4f580] dark:bg-[#26262680] dark:text-white dark:border-[#27272a]">
                <div className="flex flex-col md:gap-8 md:flex-row m-5">
                  <div className="col-span-12 md:col-span-5 mt-4 md:mt-0 row-start-2 md:row-start-1">
                    <h3 className="tracking-tight text-xl md:text-2xl text-center md:text-left font-medium mb-2 md:mb-4">
                      📊 Performance Statistics
                    </h3>
                    <p className="text-lg md:text-xl text-center md:text-left">
                      📈 Explore detailed insights on your quiz performance,
                      including accuracy and time spent on each question. Track
                      progress and identify areas for improvement to enhance
                      your quiz skills.
                    </p>
                  </div>

                  <Image
                    src={stats.src}
                    className="border-1 border-border rounded-md overflow-hidden m-2"
                    alt="chat screenshot"
                  />
                </div>
              </div>
              <div className="rounded-lg border shadow-sm bg-muted/50 bg-[#f4f4f580] dark:bg-[#26262680] dark:text-white dark:border-[#27272a]">
                <div className="flex flex-col md:gap-8 md:flex-row m-5">
                  <Image
                    src={QuizCreate.src}
                    className="border-1 border-border rounded-md overflow-hidden m-2"
                    alt="chat screenshot"
                  />
                  <div className="col-span-12 md:col-span-5 mt-4 md:mt-0">
                    <h3 className="tracking-tight text-xl md:text-2xl text-center md:text-left font-medium mb-2 md:mb-4">
                      🧠 Generate Custom Quizzes
                    </h3>
                    <p className="text-lg md:text-xl text-center md:text-left">
                      📝 Create personalized quizzes tailored to your interests.
                      Choose the topic, number of questions, and type
                      (multiple-choice or open-ended) to customize your quiz
                      experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border shadow-sm bg-muted/50 bg-[#f4f4f580] dark:bg-[#26262680] dark:text-white dark:border-[#27272a]">
                <div className="flex flex-col md:gap-8 md:flex-row m-5">
                  <div className="col-span-12 md:col-span-5 mt-4 md:mt-0 row-start-2 md:row-start-1 basis-[50%]">
                    <h3 className="tracking-tight text-xl md:text-2xl text-center md:text-left font-medium mb-2 md:mb-4">
                      📚 Quiz History
                    </h3>
                    <p className="text-lg md:text-xl text-center md:text-left">
                      🕰️ Explore your past quiz performances with our Quiz
                      History feature. Review previous quizzes played, track
                      your progress, and analyze your performance over time.
                      Stay informed and improve your knowledge with Quizfinity.
                    </p>
                  </div>

                  <Image
                    src={history.src}
                    className="border-1 border-border rounded-md overflow-hidden m-2 basis-[50%]"
                    alt="chat screenshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-slate-900 text-white mt-24">
        <div className="container max-w-6xl py-4 mx-auto">
          <div className="text-[12px] md:text-sm text-center mt-2">
            Quizfinity · &copy;2023
          </div>
        </div>
      </footer>
    </div>
  );
}
