import numeral from "numeral";

declare global {
  interface Window {
    DocumentTouch: any;
  }
}

window.DocumentTouch = window.DocumentTouch || {};

function getFormat(val: any) {
  return val < 1000 ? "0a" : "0.[0]a";
}

export const useHelpers = () => {
  const shortFormat = (val: any) => {
    if (!val && val !== 0) return "N/A";

    return numeral(val).format(getFormat(val));
  };

  const percentFormat = (val: any) => {
    if (!val && val !== 0) return "N/A";

    return numeral(val).format("0.[00]a");
  };

  const moneyFormat = (val: any) => {
    if (!val && val !== 0) return "N/A";

    return numeral(val).format("0,0");
  };

  const sortByKey = (array: any, key: any, type: any, isNum: boolean) => {
    return array.sort(function (a: any, b: any) {
      let x = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
      let y = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

      if (type === "desc") {
        return isNum ? y - x : x > y ? -1 : x < y ? 1 : 0;
      } else {
        return isNum ? x - y : x < y ? -1 : x > y ? 1 : 0;
      }
    });
  };

  const urlParams = (obj: any) => {
    const newObj = { ...obj };

    for (let i in newObj) {
      if (newObj[i] === null || i === "isFetching") {
        delete newObj[i];
      }
    }

    return Object.keys(newObj)
      .filter((i: any) => newObj[i] !== null)
      .map(function (k) {
        return decodeURIComponent(k) + "=" + decodeURIComponent(newObj[k]);
      })
      .join("&");
  };

  const chartColors = () => {
    return [
      "#794AFF",
      "#FF4D3C",
      "#90cf55",
      "#00F0FF",
      "#FF7D05",
      "#F20BB5",
      "#9ACE07",
      "#8c6350",
      "#4caaec",
      "#8e15ef",
      "#f2f34f",
      "#fb8989",
    ];
  };

  const checkSize = (img: any) => {
    const size = 150;
    if (img) {
      if (img.indexOf("sz=50") > -1) {
        img = img.replace("sz=50", "sz=" + size);
      } else if (img.indexOf("s800") > -1) {
        img = img.replace("s800", "s100");
      } else {
        img = img.replace("s88", "s" + size);
      }
      return img;
    }
  };

  const validEmail = (mail: string) => {
    let pattern = new RegExp(
      /^(([\w-\s]+)|([\w-]+(?:\.[\w-]+)*)|([\w-\s]+)([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    return pattern.test(mail);
  };

  const localStorageGetItem = (name: any) => {
    let a: any = localStorage.getItem(name);

    return JSON.parse(a) || {};
  };

  const truncMid = (str: any, maxlength: number) => {
    let max: number = str ? str.length : 0,
      mid: number = str ? max - maxlength : 0;

    if (str && str.length > maxlength) {
      return (
        str.substr(0, maxlength / 2) +
        "..." +
        str.substr(maxlength / 2 + mid, max)
      );
    }
    return str;
  };

  const secToFormat = (time: any) => {
    var totalLength = {
      H: 0,
      M: 0,
      S: 0,
      all: 0,
    };

    totalLength["H"] = Math.floor(Math.floor(time) / 3600);
    totalLength["M"] = Math.floor((Math.floor(time) % 3600) / 60);
    totalLength["S"] = Math.floor((Math.floor(time) % 3600) % 60);

    for (var k in totalLength) {
      if (totalLength[k].toString().length === 1) {
        totalLength[k] = "0" + totalLength[k];
      }
    }

    return totalLength["M"] + ":" + totalLength["S"];
  };

  const isTouchDevice = () => {
    return (
      !!(
        typeof window !== "undefined" &&
        ("ontouchstart" in window ||
          (window.DocumentTouch &&
            typeof document !== "undefined" &&
            document instanceof window.DocumentTouch))
      ) || !!(typeof navigator !== "undefined" && navigator.maxTouchPoints)
    );
  };

  const isValidPassword = (pass: any) => {
    let pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z-_=+()\d]{6,}$/i);

    return pattern.test(pass);
  };

  const pick = (object: any, keys: any) => {
    return keys.reduce((obj: any, key: any) => {
      if (object && object.hasOwnProperty(key)) {
        obj[key] = object[key];
      }
      return obj;
    }, {});
  };

  const ckeckBodyKey = (body: any) => {
    const newBody = { ...body };

    for (let i in newBody) {
      if (newBody[i] === null || i === "isFetching" || newBody[i] === "") {
        delete newBody[i];
      }
    }

    return newBody;
  };

  const translate = (str: string) => {
    str = str
      .split("")
      .map((item) => (["", "—", "`"].includes(item) ? "" : item))
      .join("");

    const translateArr = {
      " ": "_",
      а: "a",
      б: "b",
      в: "v",
      г: "g",
      д: "d",
      е: "e",
      ж: "zh",
      з: "z",
      и: "i",
      й: "y",
      к: "k",
      л: "l",
      м: "m",
      н: "n",
      о: "o",
      п: "p",
      р: "r",
      с: "s",
      т: "t",
      у: "u",
      ф: "f",
      ы: "i",
      э: "e",
      А: "A",
      Б: "B",
      В: "V",
      Г: "G",
      Д: "D",
      Е: "E",
      Ж: "G",
      З: "Z",
      И: "I",
      Й: "Y",
      К: "K",
      Л: "L",
      М: "M",
      Н: "N",
      О: "O",
      П: "P",
      Р: "R",
      С: "S",
      Т: "T",
      У: "U",
      Ф: "F",
      Ы: "I",
      Э: "E",
      ё: "yo",
      х: "h",
      ц: "ts",
      ч: "ch",
      ш: "sh",
      щ: "shch",
      ъ: "",
      ь: "",
      ю: "yu",
      я: "ya",
      Ё: "YO",
      Х: "H",
      Ц: "TS",
      Ч: "CH",
      Ш: "SH",
      Щ: "SHCH",
      Ъ: "",
      Ь: "",
      Ю: "Yu",
      Я: "YA",
    };

    str = str.replace(/ /g, "_");
    const replacer = function (a: any) {
      return translateArr[a] || a;
    };
    return str.replace(/[А-яёЁ]/g, replacer);
  };

  const onlyUnique = (value: any, index: any, self: any) => {
    return self.indexOf(value) === index;
  };

  const arraysEqual = (a: any, b: any) => {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  return {
    shortFormat,
    moneyFormat,
    sortByKey,
    urlParams,
    chartColors,
    checkSize,
    validEmail,
    localStorageGetItem,
    truncMid,
    secToFormat,
    percentFormat,
    isTouchDevice,
    isValidPassword,
    pick,
    ckeckBodyKey,
    translate,
    onlyUnique,
    arraysEqual,
  };
};
