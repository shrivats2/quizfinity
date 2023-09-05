"use client";
import { quizCreationSchema } from "@/schemas/form/quiz";
import React from "react";
import { useState } from "react";
import { Checkbox, Divider, Input, Link } from "@nextui-org/react";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import {Textarea} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
// import { Input } from "@nextui-org/react";
import { BookOpen, CopyCheck, Loader2 } from "lucide-react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import LoadingQuestions from "../LoadingQuestions";

type Props = {
  topic: string;
};

type Input = z.infer<typeof quizCreationSchema>;

const QuizCreation = ({ topic: topicParam }: Props) => {
  const router = useRouter();
  const [showLoader, setShowLoader] = React.useState(false);
  const [finishedLoading, setFinishedLoading] = React.useState(false);

  const { mutate: getQuestions, isLoading } = useMutation({
    mutationFn: async ({ amount, topic, type }: Input) => {
      const response = await axios.post("/api/game", { amount, topic, type });
      return response.data;
    },
  });

  const [selectedType, setSelectedType] = useState("mcq");

  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      topic: topicParam,
      type: "mcq",
      amount: 3,
    },
  });

  const onSubmit = async (data: Input) => {
    setShowLoader(true);
    getQuestions(data, {
      onError: (error) => {
        setShowLoader(false);
        if (error instanceof AxiosError) {
          if (error.response?.status === 500) {
            toast.error("Something went wrong. Please try again later.");
          }
        }
      },
      onSuccess: ({ gameId }: { gameId: string }) => {
        setFinishedLoading(true);
        setTimeout(() => {
          if (form.getValues("type") === "mcq") {
            router.push(`/play/mcq/${gameId}`);
          } else if (form.getValues("type") === "open_ended") {
            router.push(`/play/open-ended/${gameId}`);
          }
        }, 2000);
      },
    });
  };
  if (showLoader) {
    return <LoadingQuestions finished={finishedLoading} />;
  }
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
      <Card className="col-span-4">
        <CardHeader>
          <div>
            <p className="text-2xl font-bold">Quiz Creation</p>
            <p className="pt-2">Choose a topic</p>
          </div>
        </CardHeader>
        <CardBody>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Input
              autoFocus
              label="Topic"
              placeholder="Eg-Web Dev"
              variant="bordered"
              onChange={(e) => {
                form.setValue("topic", e.target.value);
              }}
            />
            {form.formState.errors.topic && (
              <p className="text-red-600 text-sm">
                {form.formState.errors.topic.message}
              </p>
            )}
            <Input
              label="Number Of Questions"
              placeholder="Enter no. of questions"
              type="number"
              variant="bordered"
              onChange={(e) => {
                form.setValue("amount", parseInt(e.target.value));
              }}
              min={1}
              max={10}
            />
            <div className="flex justify-between">
              <Button
                color={selectedType === "mcq" ? "secondary" : "default"}
                variant={selectedType === "mcq" ? "flat" : "bordered"}
                className="w-1/2 rounded-none rounded-l-lg"
                onClick={() => {
                  form.setValue("type", "mcq");
                  setSelectedType("mcq");
                }}
                type="button"
              >
                <CopyCheck className="w-9 h-9 mr-2" /> Multiple Choice
              </Button>
              <Divider orientation="vertical" />
              <Button
                color={selectedType === "open_ended" ? "secondary" : "default"}
                variant={selectedType === "mcq" ? "bordered" : "flat"}
                onClick={() => {
                  form.setValue("type", "open_ended");
                  setSelectedType("open_ended");
                }}
                type="button"
                className="w-1/2 rounded-none rounded-r-lg"
              >
                <BookOpen className="w-4 h-4 mr-2" /> Open Ended
              </Button>
            </div>
            <Button disabled={isLoading} type="submit" color="primary">
              {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Submit
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuizCreation;
