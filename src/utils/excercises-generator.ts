type OperatorNames = 'add' | 'substract' | 'divide' | 'multiply';

type OperatorSymbols = '+' | '−' | '÷' | '×';

type Operator = {
    symbol: OperatorSymbols,
    action: (a: number, b: number) => number,
}

type Operators = {
    [key in OperatorNames]: Operator;
}

export type ExcerciseConfig = {
    range: readonly [number, number];
    operators?: Operator[];
}

export const operatorsData: Operators = {
    add: {
        symbol: '+',
        action: (a, b) => a + b,
    },
    substract: {
        symbol: '−',
        action: (a, b) => a - b,
    },
    divide: {
        symbol: '÷',
        action: (a, b) => a / b,
    },
    multiply: {
        symbol: '×',
        action: (a, b) => a * b,
    },
};

const getRandomOperator = (allowedOperators: Operator[]) => {
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

export const generateExcercise = ({ range, operators: allowedOperators = Object.values(operatorsData) }: ExcerciseConfig) => {
    const [minNumber, maxNumber] = range;
    const operator = getRandomOperator(allowedOperators);
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