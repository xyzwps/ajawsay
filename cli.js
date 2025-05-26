#!/usr/bin/env node
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/ansis/index.cjs
var require_ansis = __commonJS((exports, module) => {
  var e;
  var t;
  var r;
  var { defineProperty: n, setPrototypeOf: l, create: o, keys: s } = Object;
  var i = "";
  var { round: c, max: a } = Math;
  var p = (e2) => {
    let t2 = /([a-f\d]{3,6})/i.exec(e2)?.[1], r2 = t2?.length, n2 = parseInt(6 ^ r2 ? 3 ^ r2 ? "0" : t2[0] + t2[0] + t2[1] + t2[1] + t2[2] + t2[2] : t2, 16);
    return [n2 >> 16 & 255, n2 >> 8 & 255, 255 & n2];
  };
  var u = (e2, t2, r2) => e2 ^ t2 || t2 ^ r2 ? 16 + 36 * c(e2 / 51) + 6 * c(t2 / 51) + c(r2 / 51) : 8 > e2 ? 16 : e2 > 248 ? 231 : c(24 * (e2 - 8) / 247) + 232;
  var d = (e2) => {
    let t2, r2, n2, l2, o2;
    return 8 > e2 ? 30 + e2 : 16 > e2 ? e2 - 8 + 90 : (232 > e2 ? (o2 = (e2 -= 16) % 36, t2 = (e2 / 36 | 0) / 5, r2 = (o2 / 6 | 0) / 5, n2 = o2 % 6 / 5) : t2 = r2 = n2 = (10 * (e2 - 232) + 8) / 255, l2 = 2 * a(t2, r2, n2), l2 ? 30 + (c(n2) << 2 | c(r2) << 1 | c(t2)) + (2 ^ l2 ? 0 : 60) : 30);
  };
  var g = (() => {
    let r2 = (e2) => o2.some((t2) => e2.test(t2)), n2 = globalThis, l2 = n2.process ?? {}, o2 = l2.argv ?? [], i2 = l2.env ?? {}, c2 = -1;
    try {
      e = "," + s(i2).join(",");
    } catch (e2) {
      i2 = {}, c2 = 0;
    }
    let a2 = "FORCE_COLOR", p2 = { false: 0, 0: 0, 1: 1, 2: 2, 3: 3 }[i2[a2]] ?? -1, u2 = a2 in i2 && p2 || r2(/^--color=?(true|always)?$/);
    return u2 && (c2 = p2), ~c2 || (c2 = ((r3, n3, l3) => (t = r3.TERM, { "24bit": 3, truecolor: 3, ansi256: 2, ansi: 1 }[r3.COLORTERM] || (r3.CI ? /,GITHUB/.test(e) ? 3 : 1 : n3 && t !== "dumb" ? l3 ? 3 : /-256/.test(t) ? 2 : 1 : 0)))(i2, !!i2.PM2_HOME || i2.NEXT_RUNTIME?.includes("edge") || !!l2.stdout?.isTTY, l2.platform === "win32")), !p2 || i2.NO_COLOR || r2(/^--(no-color|color=(false|never))$/) ? 0 : n2.window?.chrome || u2 && !c2 ? 3 : c2;
  })();
  var f = { open: i, close: i };
  var h = 39;
  var b = 49;
  var O = {};
  var m = ({ p: e2 }, { open: t2, close: n2 }) => {
    let o2 = (e3, ...r2) => {
      if (!e3) {
        if (t2 && t2 === n2)
          return t2;
        if ((e3 ?? i) === i)
          return i;
      }
      let l2, s3 = e3.raw ? String.raw({ raw: e3 }, ...r2) : i + e3, c3 = o2.p, a2 = c3.o, p2 = c3.c;
      if (s3.includes("\x1B"))
        for (;c3; c3 = c3.p) {
          let { open: e4, close: t3 } = c3, r3 = t3.length, n3 = i, o3 = 0;
          if (r3)
            for (;~(l2 = s3.indexOf(t3, o3)); o3 = l2 + r3)
              n3 += s3.slice(o3, l2) + e4;
          s3 = n3 + s3.slice(o3);
        }
      return a2 + (s3.includes(`
`) ? s3.replace(/(\r?\n)/g, p2 + "$1" + a2) : s3) + p2;
    }, s2 = t2, c2 = n2;
    return e2 && (s2 = e2.o + t2, c2 = n2 + e2.c), l(o2, r), o2.p = { open: t2, close: n2, o: s2, c: c2, p: e2 }, o2.open = s2, o2.close = c2, o2;
  };
  var w = function(e2 = g) {
    let t2 = { Ansis: w, isSupported: () => s2, strip: (e3) => e3.replace(/[][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, i), extend(e3) {
      for (let t3 in e3) {
        let r2 = e3[t3], l2 = (typeof r2)[0], o2 = l2 === "s" ? x(...p(r2)) : r2;
        O[t3] = l2 === "f" ? { get() {
          return (...e4) => m(this, r2(...e4));
        } } : { get() {
          let e4 = m(this, o2);
          return n(this, t3, { value: e4 }), e4;
        } };
      }
      return r = o({}, O), l(t2, r), t2;
    } }, s2 = e2 > 0, c2 = (e3, t3) => s2 ? { open: `\x1B[${e3}m`, close: `\x1B[${t3}m` } : f, a2 = (e3) => (t3) => e3(...p(t3)), y2 = (e3, t3) => (r2, n2, l2) => c2(`${e3}8;2;${r2};${n2};${l2}`, t3), R = (e3, t3) => (r2, n2, l2) => c2(((e4, t4, r3) => d(u(e4, t4, r3)))(r2, n2, l2) + e3, t3), $ = (e3) => (t3, r2, n2) => e3(u(t3, r2, n2)), x = y2(3, h), T = y2(4, b), v = (e3) => c2("38;5;" + e3, h), C = (e3) => c2("48;5;" + e3, b);
    e2 === 2 ? (x = $(v), T = $(C)) : e2 === 1 && (x = R(0, h), T = R(10, b), v = (e3) => c2(d(e3), h), C = (e3) => c2(d(e3) + 10, b));
    let E, M = { fg: v, bg: C, rgb: x, bgRgb: T, hex: a2(x), bgHex: a2(T), visible: f, reset: c2(0, 0), bold: c2(1, 22), dim: c2(2, 22), italic: c2(3, 23), underline: c2(4, 24), inverse: c2(7, 27), hidden: c2(8, 28), strikethrough: c2(9, 29) }, I = "Bright";
    return "black,red,green,yellow,blue,magenta,cyan,white,gray".split(",").map((e3, t3) => {
      E = "bg" + e3[0].toUpperCase() + e3.slice(1), 8 > t3 ? (M[e3 + I] = c2(90 + t3, h), M[E + I] = c2(100 + t3, b)) : t3 = 60, M[e3] = c2(30 + t3, h), M[E] = c2(40 + t3, b);
    }), t2.extend(M);
  };
  var y = new w;
  module.exports = y, y.default = y;
});

// node_modules/ansi-regex/index.js
function ansiRegex({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const pattern = [
    `[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?${ST})`,
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? undefined : "g");
}

// node_modules/strip-ansi/index.js
var regex = ansiRegex();
function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}

// node_modules/get-east-asian-width/lookup.js
function isAmbiguous(x) {
  return x === 161 || x === 164 || x === 167 || x === 168 || x === 170 || x === 173 || x === 174 || x >= 176 && x <= 180 || x >= 182 && x <= 186 || x >= 188 && x <= 191 || x === 198 || x === 208 || x === 215 || x === 216 || x >= 222 && x <= 225 || x === 230 || x >= 232 && x <= 234 || x === 236 || x === 237 || x === 240 || x === 242 || x === 243 || x >= 247 && x <= 250 || x === 252 || x === 254 || x === 257 || x === 273 || x === 275 || x === 283 || x === 294 || x === 295 || x === 299 || x >= 305 && x <= 307 || x === 312 || x >= 319 && x <= 322 || x === 324 || x >= 328 && x <= 331 || x === 333 || x === 338 || x === 339 || x === 358 || x === 359 || x === 363 || x === 462 || x === 464 || x === 466 || x === 468 || x === 470 || x === 472 || x === 474 || x === 476 || x === 593 || x === 609 || x === 708 || x === 711 || x >= 713 && x <= 715 || x === 717 || x === 720 || x >= 728 && x <= 731 || x === 733 || x === 735 || x >= 768 && x <= 879 || x >= 913 && x <= 929 || x >= 931 && x <= 937 || x >= 945 && x <= 961 || x >= 963 && x <= 969 || x === 1025 || x >= 1040 && x <= 1103 || x === 1105 || x === 8208 || x >= 8211 && x <= 8214 || x === 8216 || x === 8217 || x === 8220 || x === 8221 || x >= 8224 && x <= 8226 || x >= 8228 && x <= 8231 || x === 8240 || x === 8242 || x === 8243 || x === 8245 || x === 8251 || x === 8254 || x === 8308 || x === 8319 || x >= 8321 && x <= 8324 || x === 8364 || x === 8451 || x === 8453 || x === 8457 || x === 8467 || x === 8470 || x === 8481 || x === 8482 || x === 8486 || x === 8491 || x === 8531 || x === 8532 || x >= 8539 && x <= 8542 || x >= 8544 && x <= 8555 || x >= 8560 && x <= 8569 || x === 8585 || x >= 8592 && x <= 8601 || x === 8632 || x === 8633 || x === 8658 || x === 8660 || x === 8679 || x === 8704 || x === 8706 || x === 8707 || x === 8711 || x === 8712 || x === 8715 || x === 8719 || x === 8721 || x === 8725 || x === 8730 || x >= 8733 && x <= 8736 || x === 8739 || x === 8741 || x >= 8743 && x <= 8748 || x === 8750 || x >= 8756 && x <= 8759 || x === 8764 || x === 8765 || x === 8776 || x === 8780 || x === 8786 || x === 8800 || x === 8801 || x >= 8804 && x <= 8807 || x === 8810 || x === 8811 || x === 8814 || x === 8815 || x === 8834 || x === 8835 || x === 8838 || x === 8839 || x === 8853 || x === 8857 || x === 8869 || x === 8895 || x === 8978 || x >= 9312 && x <= 9449 || x >= 9451 && x <= 9547 || x >= 9552 && x <= 9587 || x >= 9600 && x <= 9615 || x >= 9618 && x <= 9621 || x === 9632 || x === 9633 || x >= 9635 && x <= 9641 || x === 9650 || x === 9651 || x === 9654 || x === 9655 || x === 9660 || x === 9661 || x === 9664 || x === 9665 || x >= 9670 && x <= 9672 || x === 9675 || x >= 9678 && x <= 9681 || x >= 9698 && x <= 9701 || x === 9711 || x === 9733 || x === 9734 || x === 9737 || x === 9742 || x === 9743 || x === 9756 || x === 9758 || x === 9792 || x === 9794 || x === 9824 || x === 9825 || x >= 9827 && x <= 9829 || x >= 9831 && x <= 9834 || x === 9836 || x === 9837 || x === 9839 || x === 9886 || x === 9887 || x === 9919 || x >= 9926 && x <= 9933 || x >= 9935 && x <= 9939 || x >= 9941 && x <= 9953 || x === 9955 || x === 9960 || x === 9961 || x >= 9963 && x <= 9969 || x === 9972 || x >= 9974 && x <= 9977 || x === 9979 || x === 9980 || x === 9982 || x === 9983 || x === 10045 || x >= 10102 && x <= 10111 || x >= 11094 && x <= 11097 || x >= 12872 && x <= 12879 || x >= 57344 && x <= 63743 || x >= 65024 && x <= 65039 || x === 65533 || x >= 127232 && x <= 127242 || x >= 127248 && x <= 127277 || x >= 127280 && x <= 127337 || x >= 127344 && x <= 127373 || x === 127375 || x === 127376 || x >= 127387 && x <= 127404 || x >= 917760 && x <= 917999 || x >= 983040 && x <= 1048573 || x >= 1048576 && x <= 1114109;
}
function isFullWidth(x) {
  return x === 12288 || x >= 65281 && x <= 65376 || x >= 65504 && x <= 65510;
}
function isWide(x) {
  return x >= 4352 && x <= 4447 || x === 8986 || x === 8987 || x === 9001 || x === 9002 || x >= 9193 && x <= 9196 || x === 9200 || x === 9203 || x === 9725 || x === 9726 || x === 9748 || x === 9749 || x >= 9776 && x <= 9783 || x >= 9800 && x <= 9811 || x === 9855 || x >= 9866 && x <= 9871 || x === 9875 || x === 9889 || x === 9898 || x === 9899 || x === 9917 || x === 9918 || x === 9924 || x === 9925 || x === 9934 || x === 9940 || x === 9962 || x === 9970 || x === 9971 || x === 9973 || x === 9978 || x === 9981 || x === 9989 || x === 9994 || x === 9995 || x === 10024 || x === 10060 || x === 10062 || x >= 10067 && x <= 10069 || x === 10071 || x >= 10133 && x <= 10135 || x === 10160 || x === 10175 || x === 11035 || x === 11036 || x === 11088 || x === 11093 || x >= 11904 && x <= 11929 || x >= 11931 && x <= 12019 || x >= 12032 && x <= 12245 || x >= 12272 && x <= 12287 || x >= 12289 && x <= 12350 || x >= 12353 && x <= 12438 || x >= 12441 && x <= 12543 || x >= 12549 && x <= 12591 || x >= 12593 && x <= 12686 || x >= 12688 && x <= 12773 || x >= 12783 && x <= 12830 || x >= 12832 && x <= 12871 || x >= 12880 && x <= 42124 || x >= 42128 && x <= 42182 || x >= 43360 && x <= 43388 || x >= 44032 && x <= 55203 || x >= 63744 && x <= 64255 || x >= 65040 && x <= 65049 || x >= 65072 && x <= 65106 || x >= 65108 && x <= 65126 || x >= 65128 && x <= 65131 || x >= 94176 && x <= 94180 || x === 94192 || x === 94193 || x >= 94208 && x <= 100343 || x >= 100352 && x <= 101589 || x >= 101631 && x <= 101640 || x >= 110576 && x <= 110579 || x >= 110581 && x <= 110587 || x === 110589 || x === 110590 || x >= 110592 && x <= 110882 || x === 110898 || x >= 110928 && x <= 110930 || x === 110933 || x >= 110948 && x <= 110951 || x >= 110960 && x <= 111355 || x >= 119552 && x <= 119638 || x >= 119648 && x <= 119670 || x === 126980 || x === 127183 || x === 127374 || x >= 127377 && x <= 127386 || x >= 127488 && x <= 127490 || x >= 127504 && x <= 127547 || x >= 127552 && x <= 127560 || x === 127568 || x === 127569 || x >= 127584 && x <= 127589 || x >= 127744 && x <= 127776 || x >= 127789 && x <= 127797 || x >= 127799 && x <= 127868 || x >= 127870 && x <= 127891 || x >= 127904 && x <= 127946 || x >= 127951 && x <= 127955 || x >= 127968 && x <= 127984 || x === 127988 || x >= 127992 && x <= 128062 || x === 128064 || x >= 128066 && x <= 128252 || x >= 128255 && x <= 128317 || x >= 128331 && x <= 128334 || x >= 128336 && x <= 128359 || x === 128378 || x === 128405 || x === 128406 || x === 128420 || x >= 128507 && x <= 128591 || x >= 128640 && x <= 128709 || x === 128716 || x >= 128720 && x <= 128722 || x >= 128725 && x <= 128727 || x >= 128732 && x <= 128735 || x === 128747 || x === 128748 || x >= 128756 && x <= 128764 || x >= 128992 && x <= 129003 || x === 129008 || x >= 129292 && x <= 129338 || x >= 129340 && x <= 129349 || x >= 129351 && x <= 129535 || x >= 129648 && x <= 129660 || x >= 129664 && x <= 129673 || x >= 129679 && x <= 129734 || x >= 129742 && x <= 129756 || x >= 129759 && x <= 129769 || x >= 129776 && x <= 129784 || x >= 131072 && x <= 196605 || x >= 196608 && x <= 262141;
}

// node_modules/get-east-asian-width/index.js
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}

// node_modules/emoji-regex/index.mjs
var emoji_regex_default = () => {
  return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};

// node_modules/string-width/index.js
var segmenter = new Intl.Segmenter;
var defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if (emoji_regex_default().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}

// src/ajaw.ts
var ajaw_default = {
  data: `            \x1B[30m\x1B[48;2;1;88;116m \x1B[30m\x1B[38;2;11;159;104m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\x1B[30m\x1B[30m \x1B[49m\x1B[39m
             \x1B[30m\x1B[38;2;1;88;116m▀\x1B[39m\x1B[39m\x1B[30m\x1B[48;2;11;159;104m\x1B[30m\x1B[38;2;1;88;116m▄\x1B[30m\x1B[30m             \x1B[30m\x1B[38;2;1;88;116m▀▀▀█\x1B[30m\x1B[30m\x1B[49m\x1B[39m
              \x1B[30m\x1B[38;2;132;119;86m▄\x1B[39m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m\x1B[30m\x1B[38;2;220;212;78m▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m\x1B[30m\x1B[38;2;11;159;104m▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀\x1B[30m\x1B[30m\x1B[30m\x1B[38;2;1;88;116m▀▀\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;11;159;104m\x1B[30m\x1B[38;2;1;88;116m▀▀▀\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m
              \x1B[30m\x1B[48;2;0;0;0m \x1B[30m\x1B[38;2;52;227;104m▄\x1B[30m\x1B[30m     \x1B[30m\x1B[38;2;220;212;78m▀▀\x1B[30m\x1B[30m\x1B[30m\x1B[38;2;52;227;104m▄\x1B[30m\x1B[30m      \x1B[30m\x1B[38;2;220;212;78m▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m\x1B[30m\x1B[38;2;11;159;104m▀▀▀\x1B[30m\x1B[30m \x1B[49m\x1B[39m
               \x1B[30m\x1B[48;2;0;0;0m      \x1B[30m\x1B[38;2;220;212;78m██\x1B[30m\x1B[30m      \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m    \x1B[49m\x1B[39m\x1B[30m\x1B[38;2;1;88;116m█▄▄▄\x1B[39m\x1B[39m
               \x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[30m\x1B[38;2;0;0;0m▄▄▄▄▄▄▄\x1B[30m\x1B[30m    \x1B[30m\x1B[38;2;225;117;42m▀\x1B[30m\x1B[30m\x1B[30m\x1B[38;2;225;117;42m▄\x1B[30m\x1B[30m\x1B[30m\x1B[38;2;225;117;42m▀\x1B[30m\x1B[30m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;11;159;104m   \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m
               \x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;0;0;0m \x1B[30m\x1B[38;2;225;117;42m▀▀▀▀▀\x1B[30m\x1B[30m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m    \x1B[30m\x1B[38;2;225;117;42m▀\x1B[30m\x1B[30m \x1B[30m\x1B[38;2;225;117;42m▀\x1B[30m\x1B[30m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m \x1B[30m\x1B[38;2;220;212;78m▄▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m\x1B[30m\x1B[38;2;11;159;104m▄▄▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m\x1B[30m\x1B[38;2;220;212;78m▄▄▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[38;2;132;119;86m▄\x1B[39m\x1B[39m
               \x1B[30m\x1B[48;2;132;119;86m \x1B[30m\x1B[38;2;220;212;78m▀▀▀▀▀▀▀▀▀▀▀▀\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m     \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;11;159;104m\x1B[30m\x1B[38;2;1;88;116m▄▄▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m \x1B[30m\x1B[38;2;11;159;104m▄▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m\x1B[30m\x1B[38;2;1;88;116m▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m
                     \x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;214;214;216m     \x1B[30m\x1B[38;2;132;119;86m▄▄▄▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;11;159;104m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m\x1B[30m\x1B[38;2;132;119;86m▄\x1B[30m\x1B[30m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;11;159;104m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m
             \x1B[30m\x1B[48;2;132;119;86m \x1B[30m\x1B[38;2;220;212;78m▄▄\x1B[30m\x1B[30m \x1B[49m\x1B[39m    \x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;214;214;216m     \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m\x1B[30m\x1B[38;2;1;88;116m▀\x1B[30m\x1B[30m \x1B[30m\x1B[38;2;220;212;78m▀▀▀▀▀\x1B[30m\x1B[30m\x1B[30m\x1B[38;2;1;88;116m▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m  \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m\x1B[30m\x1B[38;2;1;88;116m▄\x1B[30m\x1B[30m\x1B[49m\x1B[39m
             \x1B[30m\x1B[48;2;132;119;86m \x1B[30m\x1B[38;2;220;212;78m▀▀\x1B[30m\x1B[30m \x1B[49m\x1B[39m    \x1B[30m\x1B[48;2;132;119;86m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;214;214;216m     \x1B[30m\x1B[38;2;132;119;86m▀▀▀▀\x1B[30m\x1B[30m\x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m         \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;132;119;86m   \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;1;88;116m \x1B[49m\x1B[39m
                     \x1B[30m\x1B[38;2;132;119;86m▀▀▀█\x1B[39m\x1B[39m\x1B[30m\x1B[48;2;214;214;216m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m \x1B[49m\x1B[39m\x1B[30m\x1B[38;2;132;119;86m█▀▀█\x1B[39m\x1B[39m\x1B[30m\x1B[48;2;214;214;216m \x1B[49m\x1B[39m\x1B[30m\x1B[48;2;220;212;78m \x1B[49m\x1B[39m\x1B[30m\x1B[38;2;132;119;86m█▀▀▀▀▀▀\x1B[39m\x1B[39m\x1B[30m\x1B[38;2;1;88;116m▀▀▀\x1B[39m\x1B[39m
                        \x1B[30m\x1B[48;2;132;119;86m \x1B[30m\x1B[38;2;214;214;216m▀\x1B[30m\x1B[30m\x1B[30m\x1B[38;2;220;212;78m▀\x1B[30m\x1B[30m \x1B[49m\x1B[39m  \x1B[30m\x1B[48;2;132;119;86m \x1B[30m\x1B[38;2;214;214;216m▀\x1B[30m\x1B[30m\x1B[30m\x1B[38;2;220;212;78m▀\x1B[30m\x1B[30m \x1B[49m\x1B[39m`
};

// node_modules/ansis/index.mjs
var import__ = __toESM(require_ansis(), 1);
var { Ansis, fg, bg, rgb, bgRgb, hex, bgHex, reset, inverse, hidden, visible, bold, dim, italic, underline, strikethrough, black, red, green, yellow, blue, magenta, cyan, white, gray, redBright, greenBright, yellowBright, blueBright, magentaBright, cyanBright, whiteBright, bgBlack, bgRed, bgGreen, bgYellow, bgBlue, bgMagenta, bgCyan, bgWhite, bgGray, bgRedBright, bgGreenBright, bgYellowBright, bgBlueBright, bgMagentaBright, bgCyanBright, bgWhiteBright } = import__.default;

// src/balloon.ts
var B = "#847756";
var Y = "#dcd44e";
var bd = (text) => black.hex(B)(text);
var bg2 = (text) => black.bgHex(Y)(text);
function balloon(text) {
  const lines = text.replace(/\r\n/g, `
`).split(`
`);
  const cw = [];
  let mw = 0;
  for (const line of lines) {
    mw = Math.max(mw, stringWidth(line));
    cw.push(line.length);
  }
  const pw = cw.map((w, i) => w + mw - stringWidth(lines[i]));
  const bl = bd("█");
  const borderTop = `  ${bd("▄".repeat(mw + 4))}  `;
  const borderBotttom = `  ${bd("▀▀")}${bd("█")}${bd("▀".repeat(mw + 1))}  `;
  const paddingTopBottom = ` ${bl}${bg2(" ".repeat(mw + 4))}${bl}`;
  const arrow = bd("▀▄");
  const b = [
    borderTop,
    paddingTopBottom,
    ...lines.map((line, i) => ` ${bl}${black.bgHex(Y)(`  ${line.padEnd(pw[i])}  `)}${bl}`),
    paddingTopBottom,
    borderBotttom
  ].map((it) => `   ${it}`).join(`
`);
  return `${b}
        ${arrow}
          ${arrow}
`;
}

// src/say.ts
function say(text) {
  const w = stringWidth(text);
  const tail = w === 0 ? "  " : w === 1 ? " " : "";
  return `${balloon(text + tail)}
${ajaw_default.data}

`;
}

// src/index.ts
var src_default = say;

// cli.ts
var args = process.argv[2];
if (args === undefined || args === "--help" || args === "-h") {
  console.log("Usage: ajawsay [text]");
} else {
  console.log(src_default(args));
}
