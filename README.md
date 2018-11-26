# Mercari Client
This simple library simulates interactions with an open API for [Mercari](https://www.mercari.com/), which doesn't exist. It does so by scraping web pages using [mercari-parser](https://github.com/louistio/mercari-parser).

## Setup
```console
npm install git+https://github.com/louistio/mercari-client.git --save
```

## Usage
You can retrieve info for an item with its id. The id is located after `item/` in the url, for example in the url `https://www.mercari.com/us/item/m000000/`, the item id is `m000000`.
```js
import { MercariClient } from 'mercari-client';

const client = new MercariClient();

const item = await client.getItem('m000000');
```

Resulting `item` will look like:
```json
{
  "id": "...",
  "title": "...",
  "description": "...",
  "price": "...",
  "location": "...",
  "date": "...",
  "images": [
    "...",
    "..."
  ],
  "seller": {
    "userId": "...",
    "username": "...",
    "profile": "https://.../"
  }
}
```