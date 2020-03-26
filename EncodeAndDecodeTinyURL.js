// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

// Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.

let object={}

const encode = longUrl=> {
    let code = Math.random().toString(32).slice(2)
    object[code]=longUrl
    return 'http://tinyurl.com/'+ code
};

const decode = shortUrl =>{
    let key = shortUrl.split('.com/')[1]
    return object[key]
};