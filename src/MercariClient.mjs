import fetch from 'node-fetch';
import jsdom from 'jsdom';
import { MercariItemParser } from 'mercari-parser';

export class MercariClient {
    async getItem(itemId) {
        const url = `https://www.mercari.com/us/item/${itemId}/`;
        const html = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36'
            }
        }).then(res => res.text());

        const { document } = new jsdom.JSDOM(html, { url }).window;

        return new MercariItemParser(document).parse();
    }
}