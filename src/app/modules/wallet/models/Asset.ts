export interface Asset {
    asset: string,
    assetName: string,
    fingerprint: string,
    initial_mint_tx_hash: string,
    metadata: any,
    mint_or_burn_count: number,
    quantity: number,
    onchain_metadata: any,
    policy_id: string,
  }