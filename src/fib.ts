import * as b from "@thi.ng/bench";

// test functions
const fib = (n: number): number => n > 2 ? fib(n - 1) + fib(n - 2) : n > 0 ? 1 : 0;

const fib2 = (n: number) => {
    const res = [0, 1];
    for(let i = 2; i <= n; i++) {
        res[i] = res[i-1]! + res[i-2]!;
    }
    return res[n];
};

// measure single execution time
b.timed(() => fib(40));
// 714ms
// 102334155
b.timed(() => fib2(40));
// 0ms
// 102334155

// measure 1mil iterations (default)
b.bench(() => fib(10), 1e6);
// 395ms
// 55

b.bench(() => fib2(10), 1e6);
// 53ms
// 55

b.suite(
    [
        { title: "fib2(10)", fn: () => fib2(10) },
        { title: "fib2(20)", fn: () => fib2(20) },
        { title: "fib2(30)", fn: () => fib2(30) },
        { title: "fib2(40)", fn: () => fib2(40) },
    ],
    { iter: 10, size: 100000, warmup: 5, format: b.FORMAT_MD }
)
