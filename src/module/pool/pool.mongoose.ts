import mongoose, { Document, Schema } from 'mongoose';

export interface IStablecoinPair extends Document {
    baseToken: string;
    quoteToken: string;
    currentRate: number;
    lastUpdated: Date;
    updatedBy: string;
    type: 'major' | 'fiat-pegged' | 'regional';
    isActive: boolean;
    pairAddress?: string;
    lastPrice?: number;
    volume24h?: number;
    liquidity?: number;
    createdAt: Date;
    updatedAt: Date;
}

const StablecoinPairSchema = new Schema<IStablecoinPair>({
    baseToken: { type: String, required: true },
    quoteToken: { type: String, required: true },
    currentRate: { type: Number, required: true },
    lastUpdated: { type: Date, default: Date.now },
    updatedBy: { type: String, required: true },
    type: { 
        type: String, 
        required: true,
        enum: ['major', 'fiat-pegged', 'regional']
    },
    isActive: { type: Boolean, default: true },
    pairAddress: { type: String },
    lastPrice: { type: Number },
    volume24h: { type: Number },
    liquidity: { type: Number }
}, {
    timestamps: true
});

// Create compound index for baseToken and quoteToken
StablecoinPairSchema.index({ baseToken: 1, quoteToken: 1 }, { unique: true });

export const StablecoinPair = mongoose.model<IStablecoinPair>('StablecoinPair', StablecoinPairSchema); 