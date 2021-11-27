require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process only venture strong radar mirror code gown light army gas'; 
let testAccounts = [
"0xbda56f1a74d7274aa79a5122b31e8fc8ea76231357264ac7bba76bf7f1335c72",
"0x646db600d75c2f12a3533cde2c7415552b0abac8df6bea62778ee8d2709c95ba",
"0x666a81a5b08274c434c4f0e0d3eafb9ba10d0acbe854055bffb363302740061a",
"0x4a4136527d72604a23072a4d36ad2cd6f0f4d6b187088c443d42e80f8b9b41ac",
"0x65c4b376b6e851699032e0ad1378d196a2ecfb2eef4a21e0e7c4796ec1576fcf",
"0x14af7035751601fcbc928f303cc41489ebd34b3484a7e6e0e3877d646b37aced",
"0x8fe5d0497859519a83f7b85e70d6c6fd6bd8c7ae2e184e503546c81c570397cb",
"0x316b79f4782b51f369861eb5d5fe070e10092873b3d1dea849bba71cf5002121",
"0x8cf91d3b0713a34160d8d14f0e880316297e03504be020e0a5ddfe8c2c6dc5bb",
"0x60d0071eab007ea424e2904bc930287f4c9334b75f46d1dacdffa8763c5acad0"
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


