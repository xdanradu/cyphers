
const message1 = '391813c092a2d5ac9acb705dfe41be3df08de67d1145cbcc3f';//Hello bob ! How are you ? xor-ed in hexa 
const message2 = '03adeae2c8c2f2336c8a8d312733c2456e76e0b2d9068adc3f';//
const message3 = '72d0954e354045f09461dc4c911d0b58ff8963efb12c34303f';

function hex2bin(hex){
    hex = hex.replace("0x", "").toLowerCase();
    var out = "";
    for(var c of hex) {
        switch(c) {
            case '0': out += "0000"; break;
            case '1': out += "0001"; break;
            case '2': out += "0010"; break;
            case '3': out += "0011"; break;
            case '4': out += "0100"; break;
            case '5': out += "0101"; break;
            case '6': out += "0110"; break;
            case '7': out += "0111"; break;
            case '8': out += "1000"; break;
            case '9': out += "1001"; break;
            case 'a': out += "1010"; break;
            case 'b': out += "1011"; break;
            case 'c': out += "1100"; break;
            case 'd': out += "1101"; break;
            case 'e': out += "1110"; break;
            case 'f': out += "1111"; break;
            default: return "";
        }
    }

    return out;
}

function xor(a, b) {
    let ans = "";
        for (let i = 0; i < a.length; i++)
        {
            if (a.charAt(i) == b.charAt(i))
                ans += "0";
            else
                ans += "1";
        }
        return ans;
    }


const message1Binary = hex2bin(message1);
const message2Binary = hex2bin(message2);
const message3Binary = hex2bin(message3);
const message = xor(xor(message1Binary, message2Binary), message3Binary);

function toASCII(bin) {
    return bin.replace(/\s*[01]{8}\s*/g, function(bin) {
      return String.fromCharCode(parseInt(bin, 2))
    })
}

console.log(toASCII(message));//Hello bob ! How are you ?