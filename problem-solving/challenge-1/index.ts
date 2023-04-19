

export const numbersFractionCalculator = (numbers: number[]) => {
    const size = numbers.length
    const schema = numbers.reduce((prev, current) => {
        if (current > 0) {
            prev.positives++
        }
        else if (current < 0) {
            prev.negative++
        } else {
            prev.zeros++
        }
        return prev
    }, {
        positives: 0,
        negative: 0,
        zeros: 0
    })

    return {
        positives: (schema.positives / size).toFixed(6),
        negative: (schema.negative / size).toFixed(6),
        zeros: (schema.zeros / size).toFixed(6),
    }
};
