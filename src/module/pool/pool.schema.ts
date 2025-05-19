export interface StablecoinPair {
    id: string;
    baseToken: string;
    quoteToken: string;
    currentRate: number;
    lastUpdated: Date;
    updatedBy: string;
    type: 'major' | 'fiat' | 'regional';
    isActive: boolean;
    // Additional pool data
    pairAddress?: string;
    lastPrice?: number;
    volume24h?: number;
    liquidity?: number;
}

export interface RateUpdate {
    pairId: string;
    newRate: number;
    updatedBy: string;
    timestamp: Date;
}

export interface PoolResponse {
    success: boolean;
    data?: StablecoinPair | StablecoinPair[];
    message?: string;
}

// Mock data for stablecoin pairs
export const STABLECOIN_PAIRS: { [key: string]: string } = {
    'usdc-usdt': '0x...', // Replace with actual pair addresses
    'usdc-dai': '0x...',
    'usdt-dai': '0x...',
    'usdc-eurc': '0x...',
    'usdc-gbpc': '0x...',
    'usdc-sgd': '0x...',
    'usdc-hkd': '0x...'
}; 