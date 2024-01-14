import { useState, useEffect } from 'react';
import { operators, ExerciseConfig } from '../utils/exercises-generator';

type StoreData = {
    history?: any;
} & ExerciseConfig

const getInitialValue = () => {
    const data = getStorageData();
    const { add, substract, multiply, divide } = operators;

    if (data) {
        return data;
    }

    return {
        operators: [add, substract, multiply, divide],
        range: [1, 10]
    } as StoreData;
};

const useStore = () => {
    const store = useState<StoreData>(getInitialValue);

    useEffect(() => {
        setStorageData(store[0]);
    }, [store[0]]);

    return store;
};

const STORAGE_KEY = 'mathmania-app';

function setStorageData(newData: StoreData) {
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