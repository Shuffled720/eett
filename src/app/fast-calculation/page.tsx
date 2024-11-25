"use client";
import { useState, useRef, useEffect } from 'react';
// import { Button, Input, Label } from '@/components/ui'; // Assuming you are using ShadCN UI components
// import { v4 as uuidv4 } from 'uuid'; // For generating unique question IDs
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { motion } from 'framer-motion'; // Importing framer-motion for animations


interface GameProps { }

const FastCalculationGame: React.FC<GameProps> = () => {
    const [numTerms, setNumTerms] = useState(2);
    const [numDigits, setNumDigits] = useState(1);
    const [operation, setOperation] = useState('+');
    const [currentQuestion, setCurrentQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [startTime, setStartTime] = useState<number | null>(null);
    const [timeTaken, setTimeTaken] = useState<number | null>(null);
    const answerInputRef = useRef<HTMLInputElement | null>(null);

    const generateQuestion = () => {
        let terms = [];
        for (let i = 0; i < numTerms; i++) {
            const max = Math.pow(10, numDigits) - 1;
            const min = Math.pow(10, numDigits - 1);
            let term = Math.floor(Math.random() * (max - min + 1)) + min;
            terms.push(term);
        }
        const question = terms.join(` ${operation} `);
        setCurrentQuestion(question);
        setAnswer('');
        setStartTime(Date.now());
        setTimeout(() => {
            if (answerInputRef.current) {
                answerInputRef.current.focus();
            }
        }, 0);
    };

    const checkAnswer = () => {
        const correctAnswer = eval(currentQuestion);
        if (Number(answer) === correctAnswer) {
            setCorrectCount(correctCount + 1);
        } else {
            setWrongCount(wrongCount + 1);
        }
        if (startTime) {
            setTimeTaken(Date.now() - startTime);
        }
        setTimeout(generateQuestion, 500); // Automatically generate the next question after 500ms
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    };

    return (
        <motion.div className="game-container p-6 max-w-xl mx-auto bg-gradient-to-b from-blue-200 to-purple-200 text-gray-800 shadow-2xl rounded-xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-center text-3xl font-bold text-blue-800 mb-6" initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
                Fast Calculation Game
            </motion.h1>
            <motion.div className="settings space-y-6 p-6 bg-white shadow-lg rounded-lg" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                <motion.div initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
                    <Label htmlFor="terms" className="text-gray-700">Number of Terms:</Label>
                    <Input
                        type="number"
                        id="terms"
                        value={numTerms}
                        onChange={(e) => setNumTerms(e.target.value === '' ? 1 : Math.max(1, Number(e.target.value)))}
                        className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-300"
                    />
                </motion.div>
                <motion.div initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.6 }}>
                    <Label htmlFor="digits" className="text-gray-700">Number of Digits:</Label>
                    <Input
                        type="number"
                        id="digits"
                        value={numDigits}
                        onChange={(e) => setNumDigits(e.target.value === '' ? 1 : Number(e.target.value))}
                        className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-300"
                    />
                </motion.div>
                <motion.div initial={{ x: -50 }} animate={{ x: 0 }} transition={{ duration: 0.7 }}>
                    <Label htmlFor="operation" className="text-gray-700">Operation:</Label>
                    <Select value={operation} onValueChange={(value) => setOperation(value)}>
                        <SelectTrigger className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:border-blue-500 focus:ring focus:ring-blue-300">
                            {operation}
                        </SelectTrigger>
                        <SelectContent className="rounded-lg shadow-lg bg-white text-gray-800">
                            <SelectItem value="+">Addition (+)</SelectItem>
                            <SelectItem value="-">Subtraction (-)</SelectItem>
                            <SelectItem value="*">Multiplication (*)</SelectItem>
                            <SelectItem value="/">Division (/)</SelectItem>
                        </SelectContent>
                    </Select>
                </motion.div>
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
                    <Button onClick={generateQuestion} className="w-full p-3 mt-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg hover:from-blue-500 hover:to-purple-600 shadow-md">
                        Start Game
                    </Button>
                </motion.div>
            </motion.div>
            <div className="question-section mt-8">
                {currentQuestion && (
                    <motion.div initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="p-6 bg-white rounded-lg shadow-md">
                        <p className="text-lg font-semibold text-gray-800">Question: {currentQuestion}</p>
                        <Label htmlFor="answer" className="mt-4 block text-gray-700">Your Answer:</Label>
                        <Input
                            type="number"
                            id="answer"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            onKeyDown={handleKeyDown}
                            ref={answerInputRef}
                            className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-800 focus:border-purple-500 focus:ring focus:ring-purple-300 mt-2"
                        />
                        <Button onClick={checkAnswer} className="w-full p-3 mt-4 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 shadow-md">
                            Submit Answer
                        </Button>
                    </motion.div>
                )}
            </div>
            <motion.div className="scoreboard mt-8 p-6 bg-white rounded-lg shadow-md" initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
                <motion.p initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className="text-blue-600 text-lg font-semibold">
                    Correct: {correctCount}
                </motion.p>
                <motion.p initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} className="text-red-600 text-lg font-semibold">
                    Wrong: {wrongCount}
                </motion.p>
                {timeTaken && (
                    <motion.p initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.7 }} className="text-gray-700 text-lg font-semibold">
                        Time Taken: {timeTaken / 1000}s
                    </motion.p>
                )}
            </motion.div>
        </motion.div>
    );
};

export default FastCalculationGame;
