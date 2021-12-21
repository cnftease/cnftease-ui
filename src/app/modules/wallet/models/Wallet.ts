import { Store } from "@ngrx/store";
import { BlockfrostService } from "src/app/core/services/blockfrost.service";
import { LogService } from "src/app/core/services/log.service";
import { WalletService } from "../service/wallet.service";
import { Asset } from "./Asset";

export class Wallet {
    name: string;
    address: string;
    stakeAddress?: string;
    assets?: Asset[];
};