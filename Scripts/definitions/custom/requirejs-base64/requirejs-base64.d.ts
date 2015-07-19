// Type definitions for Requirejs-base64 v 1.0
// Author Rolf Veinø Sørensen

interface Base64 {
    _utf8_encode(string): string;
    _utf8_decode: string;
    _hexEncode: string;
    _hexDecode: string;
    encode(input: string): string;
    decode(input: string): string;
    decodeToHex: string;
    encodeFromHex: string;
}

declare var base64: Base64;

declare module "base64" {
    export = base64;
}