import { provideMockStore } from "@ngrx/store/testing";
import { WalletService } from "../service/wallet.service";
import { initialState } from "../store/reducers/wallet.reducer";
import { MockWalletService } from "./mocks";

export const defaultWalletProviders: any[] = [
    {provide: WalletService, useClass: MockWalletService},
    provideMockStore({initialState})
];