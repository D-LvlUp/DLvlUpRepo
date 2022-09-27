export type KeyValue<T, U> = {
    key: T,
    value: U
};

export type ApiMethod = "POST" | "GET";

export type Header = {
    [key: string]: any
}

export type Params = {
    [key: string]: any
}
