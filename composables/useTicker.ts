
export const useTicker = () => useState<number>('ticker', () => Date.now())