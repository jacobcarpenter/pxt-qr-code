namespace SpriteKind {
    //% isKind
    export const QRCode = SpriteKind.create();
}

//% block="QR Code" icon="\uf029"
//% groups='["Sprite", "Image"]'
namespace qrcode {
    //% block="sprite QR Code %value"
    //% blockSetVariable=qrCode
    //% group=Sprite
    //% value.defl="Hello, Arcade! 👋"
    export function spriteQRCode(value: string) {
        const qrCode = qrcodegen.QrCode.encodeText(value, qrcodegen.QrCode.Ecc.LOW);
        const qrCodeImage = qrCode.createImage(1, 4);
        return sprites.create(qrCodeImage, SpriteKind.QRCode);
    }

    //% block="create image QR Code %value"
    //% group=Image
    //% value.defl="Hello, Arcade! 👋"
    export function imageQRCode(value: string) {
        const qrCode = qrcodegen.QrCode.encodeText(value, qrcodegen.QrCode.Ecc.LOW);
        return qrCode.createImage(1, 4);
    }
}
