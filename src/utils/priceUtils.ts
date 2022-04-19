export function formatPrice(price: number | string): string {
    let priceNum = Number(price);
    if (isNaN(priceNum)) {
        return ''
    }
    return `$ ${priceNum.toFixed(2)}`
}
