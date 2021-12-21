import { Asset } from "../../modules/wallet/models/Asset";

export interface CnftPost {
    thumbnail: string,
    asset: Asset,
    datePosted: number
}