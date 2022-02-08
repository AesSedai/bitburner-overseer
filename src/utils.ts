export const niceRound = (n: number): number => {
    return Math.round((n + Number.EPSILON) * 100) / 100
}

export const dateFormatter = new Intl.DateTimeFormat("en", {
    fractionalSecondDigits: 3,
    minute: "2-digit",
    hour: "2-digit"
    // day: "2-digit",
    // month: "2-digit",
    // year: "numeric"
})

export const formatDate = (d: Date | number) => {
    return dateFormatter.format(d).replace(",", "")
}
