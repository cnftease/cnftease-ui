import { Wallet } from "../Wallet";

fdescribe('WalletModel', () => {
    it('should have the correct properties', () => {
        const wallet: Wallet = {
            address: 'addr1',
            name: 'batman',
            assets: [],
            stakeAddress: 'addr2',
        }
        expect(wallet.address).toBeDefined();
        expect(wallet.name).toBeDefined();
        expect(wallet.assets).toBeDefined();
        expect(wallet.stakeAddress).toBeDefined();
    });
    it('should have the correct optional properties', () => {
        const wallet: Wallet = {
            address: 'addr2',
            name: 'batman',
            stakeAddress: 'addr1'
        }
        expect(wallet.address).toBeDefined();
        expect(wallet.name).toBeDefined();
        expect(wallet.assets).toBeUndefined();
        expect(wallet.stakeAddress).toBeDefined();
    })
});
