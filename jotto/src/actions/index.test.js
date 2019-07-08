import moxios from 'moxios';

import { storeFactory } from '../../tests/testUtils';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    it('adds response word to state when response is good', async () => {
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200, 
                response: secretWord,
            });
        });

        await store.dispatch(getSecretWord())
        const newState = store.getState();
        
        expect(newState.secretWord).toBe(secretWord);
    });

    it('sets secret word to `ERROR` when response is bad', async () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 500, 
            });
        });

        await store.dispatch(getSecretWord())
        const newState = store.getState();
        
        expect(newState.secretWord).toBe('ERROR');
    });

    it('sets secret word to `EMPTY` when response is `200` but contains no word', async () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200, 
            });
        });

        await store.dispatch(getSecretWord())
        const newState = store.getState();
        
        expect(newState.secretWord).toBe('EMPTY');
    });

    it('sets secret word to `TIMEOUT` when request times out', async () => {
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWithTimeout();
        });

        await store.dispatch(getSecretWord())
        const newState = store.getState();
        
        expect(newState.secretWord).toBe('TIMEOUT');
    });
});