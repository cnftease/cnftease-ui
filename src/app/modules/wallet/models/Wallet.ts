import { Asset } from "./Asset";

export class Wallet {
    name: string;
    address: string;
    stakeAddress: string;
    assets?: Asset[];
};