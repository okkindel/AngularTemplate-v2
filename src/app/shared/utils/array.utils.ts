// take(2, ['foo', 'bar', 'baz']); // => ['foo', 'bar']
const take = <T>(number: number, array: T[]): T[] => array.slice(0, number);

// tail(["foo", "bar", "baz"]) // => ["bar", "baz"]
const tail = <T>(array: T[]): T[] => array.slice(1);

// head(["foo", "bar"]) // => "foo"
const head = <T>(array: T[]): T => array[0];

// last(["foo", "bar"]) // => "bar"
const last = <T>(array: T[]): T => array.slice(-1)[0];

// removeAt(["foo", "bar"], 1) => ["foo"]
const removeAt = <T>(array: T[], index: number): T[] => array.splice(index, 1);

// at("1900", 1) => 9
const at = (data: string, index: number): number => Number(data[index]);

export { take, tail, head, last, removeAt, at };
