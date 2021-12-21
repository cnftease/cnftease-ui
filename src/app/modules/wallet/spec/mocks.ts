import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Wallet } from "../models/Wallet";
import { WalletService } from "../service/wallet.service";

export const MOCK_WALLET_BOB: Wallet = {
    name: 'bob',
    address:"addr123456789",
}

export const MOCK_WALLET_ROSS: Wallet = {
    name: 'ross',
    address: "addr987654321",
}

export const MOCK_WALLETS: Wallet[] = [
    MOCK_WALLET_BOB,
    MOCK_WALLET_ROSS,
];

@Injectable()
export class MockWalletService extends WalletService{
    getWallets() {   
        return of(MOCK_WALLETS); 
    }

    removeWallet(address: string){
           
    }
}