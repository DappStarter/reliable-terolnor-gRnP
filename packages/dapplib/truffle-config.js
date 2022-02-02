require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom security chat crater remind million include kiwi breeze text'; 
let testAccounts = [
"0x31912f234efe39a8f0bc4d853c73d7f7657314e02c1b333d05726c09cf2db7ff",
"0xc97102e66089d1a086a8b56f3c99a8654bb8b56115791f18c58fc6e1bc386bc8",
"0x695514fc436cba390cc3ed15af10f06fa0160c1d7fb07e60b72a0e49e2b9406d",
"0xdaf32b154c65837ce2e0252d2d7be8c5dfce8539c9adf1787fff7b550692b5af",
"0x4d624a36aaf1c7b98fcd4590a84407e7b1db7158c257fb9c2ca3717ef2f8c2fe",
"0x25bb90a18a7b45d646b3090f0451aad7cc216a849f918e581d12cb852571c53b",
"0xfb4a34d26b79037401a1228f67b8d8c7bcaf80a04b48de77debe99367aedaa57",
"0x4aa58ae36c0e2424fc573e57b09d5cfb9743e6be0f704428195798a251365bab",
"0x62530a7dd9c543daab8875c3eb5b4bbb00b1db3de8e94c0a31b99a4f7c52be62",
"0x4a87d20968d13a3a003664fd970b66ba6b1bdbe59d872cc0eafe9a28032224e0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


