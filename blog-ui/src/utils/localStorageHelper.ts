export const saveToLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const getFromLocalStorage = (key: string) => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}
