const Wallet = require('./index.js');
const {verifySignature} = require('../util');

describe('Wallet()', () => {

    let wallet;

    beforeEach(() => {

       wallet = new Wallet();

    });


    it('has a `balance`', () => {

        expect(wallet).toHaveProperty('balance');
    });


    it('has a `publicKey`', () => {

        expect(wallet).toHaveProperty('publicKey');
    });




    describe('signing data', () => {

        const data = 'diego marafetti';


        it('verifies a signature', () => {

            expect(
                verifySignature({
                    publicKey: wallet.publicKey,
                    data,
                    signature: wallet.sign(data)
                })
            ).toBe(true);

        });

        it('does not verifies an invalid signature', () => {

            expect(
                verifySignature({
                    publicKey: wallet.publicKey,
                    data,
                    signature: new Wallet().sign(data)
                })
            ).toBe(false);

        });

    });

});
