import { StablecoinPair } from './pool.schema';

class PoolModel {
    private pools: Map<string, StablecoinPair> = new Map();

    async updatePoolData(pairId: string, data: Partial<StablecoinPair>): Promise<void> {
        const existingPool = this.pools.get(pairId);
        if (existingPool) {
            this.pools.set(pairId, { ...existingPool, ...data, lastUpdated: new Date() });
        } else {
            // Create new pool with all required fields
            const newPool: StablecoinPair = {
                id: pairId,
                baseToken: data.baseToken || '',
                quoteToken: data.quoteToken || '',
                currentRate: data.currentRate || 0,
                lastUpdated: new Date(),
                updatedBy: data.updatedBy || 'system',
                type: data.type || 'major',
                isActive: data.isActive ?? true,
                // Optional fields
                pairAddress: data.pairAddress,
                lastPrice: data.lastPrice,
                volume24h: data.volume24h,
                liquidity: data.liquidity
            };
            this.pools.set(pairId, newPool);
        }
    }

    getPoolData(pairId: string): StablecoinPair | undefined {
        return this.pools.get(pairId);
    }

    getAllPools(): StablecoinPair[] {
        return Array.from(this.pools.values());
    }

    async fetchDexScreenerData(pairAddress: string): Promise<any> {
        try {
            const response = await fetch(`https://api.dexscreener.com/latest/dex/pairs/sui/${pairAddress}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching DexScreener data:', error);
            throw error;
        }
    }
}

export const poolModel = new PoolModel(); 