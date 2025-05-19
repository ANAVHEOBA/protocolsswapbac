import axios from 'axios';

export async function findPairAddress(baseToken: string, quoteToken: string): Promise<string | null> {
    try {
        // Search for pairs on Sui
        const response = await axios.get(`https://api.dexscreener.com/latest/dex/search/?q=${baseToken}${quoteToken}`);
        
        if (response.data && response.data.pairs) {
            // Filter for Sui pairs
            const suiPairs = response.data.pairs.filter((pair: any) => 
                pair.chainId === 'sui' && 
                pair.baseToken.symbol === baseToken && 
                pair.quoteToken.symbol === quoteToken
            );

            if (suiPairs.length > 0) {
                return suiPairs[0].pairAddress;
            }
        }
        return null;
    } catch (error) {
        console.error('Error finding pair address:', error);
        return null;
    }
}

export async function initializePairAddresses(): Promise<{ [key: string]: string }> {
    const pairs = {
        'USDC/USDT': await findPairAddress('USDC', 'USDT'),
        'USDC/DAI': await findPairAddress('USDC', 'DAI'),
        'USDT/DAI': await findPairAddress('USDT', 'DAI'),
        'USDC/BUSD': await findPairAddress('USDC', 'BUSD'),
        'USDT/BUSD': await findPairAddress('USDT', 'BUSD'),
        // Add more pairs as needed
    };

    // Filter out null values and ensure type safety
    const validPairs: { [key: string]: string } = {};
    
    for (const [key, value] of Object.entries(pairs)) {
        if (value !== null) {
            validPairs[key] = value;
        }
    }

    return validPairs;
} 