function minCoin(coins, amount, memo = {}){
    if(amount in memo) return memo[amount]
    if(amount === 0) return 0
    if(amounr < 0) return -1

    let minCoinsCount = Infinity

    for (const coin of coins) {
        const result = minCoin(coins, amount - coin, memo)
        if (result !== -1){
            minCoinsCount = Math.min(minCoinsCount, result + 1)
        }
    }

    memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount

    return memo[amount]
}