export default function discountPrice(originalPrice:number,discountPercent:number){
    return originalPrice- (originalPrice * (discountPercent / 100))
}