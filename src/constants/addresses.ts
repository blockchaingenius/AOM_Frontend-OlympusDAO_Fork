import { Networks } from "./blockchain";

// const AVAX_MAINNET = {
//     DAO_ADDRESS: "0x78a9e536EBdA08b5b9EDbE5785C9D1D50fA3278C",
//     MEMO_ADDRESS: "0x136Acd46C134E8269052c62A67042D6bDeDde3C9",
//     TIME_ADDRESS: "0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
//     MIM_ADDRESS: "0x130966628846BFd36ff31a822705796e8cb8C18D",
//     STAKING_ADDRESS: "0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9",
//     STAKING_HELPER_ADDRESS: "0x096BBfB78311227b805c968b070a81D358c13379",
//     TIME_BONDING_CALC_ADDRESS: "0x819323613AbC79016f9D2443a65E9811545382a5",
//     TREASURY_ADDRESS: "0x1c46450211CB2646cc1DA3c5242422967eD9e04c",
//     ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae",
//     WMEMO_ADDRESS: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
//     //DISTRIBUTOR: 0xea61f76c3ee66b4E66822Fc1d408a13Eb30011EC
// };
const AVAX_MAINNET = {
    DAO_ADDRESS: "0x70ce6821b7c38c8878ca971b4718c957f0566a4f",
    MEMO_ADDRESS: "0x882019BE4a711537975cF6b1123647517873728E",
    TIME_ADDRESS: "0xea0046DA84fc6b108D7Cc687552e381ea8B093Fd",
    MIM_ADDRESS: "0xa6d68596564079D1f91c108c40bB72E6b03f152a",
    STAKING_ADDRESS: "0x8d6D221B7CDDD310713A7f5e5C629701Cb141BA1",
    STAKING_HELPER_ADDRESS: "0xfc20210482349cDe7CE98cc39561E82a8B9e4192",
    TIME_BONDING_CALC_ADDRESS: "0x33cf32B9Afbf019944680cFE58aDb23C15E81A62",
    TREASURY_ADDRESS: "0x32e90C06D3c66b6CCc9ECDEDBDf81bE5905b7A3B",
    ZAPIN_ADDRESS: "0x9aF6A2d8e83BBED6aeBD05478F046Dcbc2b7e9bA",
    WMEMO_ADDRESS: "0xa1C0Aa096c761A0ada8d994F3F3C266B1DF7d67F",
    DISTRIBUTOR_ADDRESS: "0x27C70AC221b788A365b3D07C235DC4A9f05bC996",
    DAI_ADDRESS: "0x6341f5C463017E98a3FB9a5d59CC898a5443e65B",
    USDC_ADDRESS: "0x9BF72e2A50f203662a0eDE314C68818708d371eD",
    DAILP_ADDRESS: "0xa68909d7002251d810387E6AF4fCEA5988B8164e",
    USDCLP_ADDRESS: "0xA11e35624697E9AD0536dE312625BD5aF8C4FF8e",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;
    throw Error("Network don't support");
};