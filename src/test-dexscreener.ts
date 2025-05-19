import axios from 'axios';

interface DexScreenerPair {
    chainId: string;
    dexId: string;
    pairAddress: string;
    baseToken: {
        address: string;
        name: string;
        symbol: string;
    };
    quoteToken: {
        address: string;
        name: string;
        symbol: string;
    };
    priceUsd: string;
    liquidity: {
        usd: string;
    };
}

async function testDexScreener() {
    try {
        console.log('Testing DexScreener API for Sui pairs...\n');

        // 1. Test direct pair search with chain filter
        console.log('1. Testing direct pair search for Sui...');
        const pairResponse = await axios.get('https://api.dexscreener.com/latest/dex/pairs/sui');
        const pairs = pairResponse.data.pairs as DexScreenerPair[];
        console.log(`Found ${pairs?.length || 0} total Sui pairs\n`);

        if (pairs && pairs.length > 0) {
            // Display first few pairs
            pairs.slice(0, 5).forEach(pair => {
                console.log(`Pair: ${pair.baseToken.symbol}/${pair.quoteToken.symbol}`);
                console.log(`DEX: ${pair.dexId}`);
                console.log(`Address: ${pair.pairAddress}`);
                console.log(`Price: $${pair.priceUsd}`);
                console.log(`Liquidity: $${pair.liquidity.usd}\n`);
            });
        }

        // 2. Test specific DEX search (Cetus)
        console.log('2. Testing Cetus DEX pairs...');
        const cetusResponse = await axios.get('https://api.dexscreener.com/latest/dex/pairs/sui/cetus');
        const cetusPairs = cetusResponse.data.pairs as DexScreenerPair[];
        console.log(`Found ${cetusPairs?.length || 0} Cetus pairs\n`);

        if (cetusPairs && cetusPairs.length > 0) {
            // Display first few Cetus pairs
            cetusPairs.slice(0, 5).forEach(pair => {
                console.log(`Pair: ${pair.baseToken.symbol}/${pair.quoteToken.symbol}`);
                console.log(`Address: ${pair.pairAddress}`);
                console.log(`Price: $${pair.priceUsd}`);
                console.log(`Liquidity: $${pair.liquidity.usd}\n`);
            });
        }

        // 3. Test token search
        console.log('3. Testing USDC token pairs on Sui...');
        const tokenResponse = await axios.get('https://api.dexscreener.com/latest/dex/tokens/sui/USDC');
        const tokenPairs = tokenResponse.data.pairs as DexScreenerPair[];
        console.log(`Found ${tokenPairs?.length || 0} USDC pairs on Sui\n`);

        if (tokenPairs && tokenPairs.length > 0) {
            // Display first few token pairs
            tokenPairs.slice(0, 5).forEach(pair => {
                console.log(`Pair: ${pair.baseToken.symbol}/${pair.quoteToken.symbol}`);
                console.log(`DEX: ${pair.dexId}`);
                console.log(`Address: ${pair.pairAddress}`);
                console.log(`Price: $${pair.priceUsd}`);
                console.log(`Liquidity: $${pair.liquidity.usd}\n`);
            });
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

testDexScreener(); 