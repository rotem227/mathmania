export const operatorsData = {
    add: {
        symbol: '+',
        action: (a: number, b: number) => a + b,
    },
    substract: {
        symbol: '−',
        action: (a: number, b: number) => a - b,
    },
    divide: {
        symbol: '÷',
        action: (a: number, b: number) => a / b,
    },
    multiply: {
        symbol: '×',
        action: (a: number, b: number) => a * b,
    },
} as const;

type OperatorKey = keyof typeof operatorsData;

type OperatorData = typeof operatorsData[OperatorKey];

type Operators = {
    [key in OperatorKey]: key;
}

export const operators = Object.keys(operatorsData).reduce((data, key) => {
    return { ...data, [key]: key };
}, {} as Operators);


export type ExcerciseConfig = {
    range: [number, number];
    operators?: OperatorKey[];
}

const getRandomOperator = (allowedOperators: OperatorData[]) => {
    const rand = Math.round(Math.random() * (allowedOperators.length - 1));

    return allowedOperators[rand];
};

const getRandomNumber = (from: number, to: number) => {
    return Math.round(Math.random() * (to - from)) + from;
};

const getOrderedRandomPair = (from: number, to: number) => {
    const first = getRandomNumber(from, to);
    const second = getRandomNumber(from, to);

    return [first, second].sort((a, b) => b - a);
};

const getDivisionOrderedRandomNumbers = (from: number, to: number) => {
    const randomPair = getOrderedRandomPair(from, to).map((value) => value === 0 ? ++value : value);
    const multiplyAction = operatorsData.multiply.action;
    const result = multiplyAction(randomPair[0], randomPair[1]);
    const randomNumbersIndex = getRandomNumber(0, 1);

    return [result, randomPair[randomNumbersIndex]];
};

const { add, substract, multiply, divide } = operators;

export const generateExcercise = ({ range, operators = [add, substract, multiply, divide] }: ExcerciseConfig) => {
    const [minNumber, maxNumber] = range.sort();
    const selectedoperators = operators.map((key) => operatorsData[key]);
    const operator = getRandomOperator(selectedoperators);
    const isDivision = operator.symbol === operatorsData.divide.symbol;
    // Division require specific numbers for NOT getting decimal point results (e.g. 7 / 5).
    const [firstNumber, secondNumber] = isDivision ? getDivisionOrderedRandomNumbers(minNumber, maxNumber) : getOrderedRandomPair(minNumber, maxNumber);
    const { symbol, action } = operator;


    return {
        symbol,
        action,
        firstNumber,
        secondNumber,
        expected: action(firstNumber, secondNumber),
    };
};