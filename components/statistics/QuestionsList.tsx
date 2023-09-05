"use client"
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Divider,
} from "@nextui-org/react";
import { Question } from "@prisma/client";

type Props = {
  questions: Question[];
};

const QuestionsList = ({ questions }: Props) => {
  return (
    <Table selectionMode="single" className="mt-5" aria-label="Questions List">
      <TableHeader >
        <TableColumn className="font-bold text-base">No.</TableColumn>
        <TableColumn className="font-bold text-base">Question & Correct Answer</TableColumn>
        <TableColumn className="font-bold text-base">Your Answer</TableColumn>
        {questions[0].questionType === "open_ended" ? (
          <TableColumn className="font-bold text-base" align="end">Accuracy</TableColumn>
        ) : (
          <TableColumn  className="w-0 font-bold text-base">Accuracy</TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {questions.map(
          (
            { answer, question, userAnswer, percentageCorrect, isCorrect },
            index
          ) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell >
              <span className="font-medium">{question}</span> 
                <br />
                <br />
                <span style={{ fontWeight: "bold" }}>{answer}</span>
              </TableCell>
              {questions[0].questionType === "open_ended" ? (
                <TableCell style={{ fontWeight: "bold" }}>
                  {userAnswer}
                </TableCell>
              ) : (
                <TableCell
                  style={{
                    color: isCorrect ? "green" : "red",
                    fontWeight: "bold",
                  }}
                >
                  {userAnswer}
                </TableCell>
              )}
              {percentageCorrect ? (
                <TableCell align="right">{percentageCorrect}</TableCell>
              ) : (
                <TableCell>{percentageCorrect}</TableCell>
              )}
              
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};

export default QuestionsList;
