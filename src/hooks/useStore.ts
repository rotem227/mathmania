import { useState, useEffect } from 'react';
import { operators, ExcerciseConfig } from '../utils/excercises-generator';

type StoreData = {
    history?: any;
} & ExcerciseConfig

const getInitialValue = () => {
    const data = getStorageData();
    const { add, substract, multiply, divide } = operators;

    if (data) {
        return data;
    }

    return {
        operators: [add, substract, multiply, divide],
        range: [1, 3]
    };
};

const useStore = () => {
    const [state, setState] = useState<StoreData>(getInitialValue);

    useEffect(() => {
        setStorageData(state);
    }, [state]);

    return [state, setState];
};

const STORAGE_KEY = 'mathmania-app';

function setStorageData(newData) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
};

function getStorageData() {
    const data = window.localStorage.getItem(STORAGE_KEY);

    if (!data) {
        return;
    }

    return JSON.parse(data) as StoreData;
};

export default useStore;