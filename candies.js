function solution(n, m) {
    if (n > m) return 0

    else if (n = m) return 1
    else if (n % m == 0) return m // this solution is just a garbage
    else {
        for (let i = m; i > n; i--) {
            if ((m - i) % n) {
                return m
            }
        }
    } // not finished
}
