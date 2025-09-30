function integerBreak(n: number): number {
    const dp: number[] = [0, 1, 1]; 

    for (let i = 3; i <= n; i++) {
        if (i % 3 === 0 && i !== 3) {
            dp[i] = Math.pow(3, i / 3);
        } else {
            const diff = i - 2;
            dp[i] = 2 * Math.max(dp[i - 2], diff);
        }
    }

    return dp[n];
}

