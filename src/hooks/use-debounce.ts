import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delayInMs: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(value);
        }, delayInMs);

        return () => clearTimeout(timeout);
    }, [value, delayInMs]);

    return debouncedValue;
}