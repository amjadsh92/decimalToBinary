const decimalToRoman = (dec) => {
  if (dec / 10 < 1) {
    return singulars(dec);
  } else if (dec / 10 >= 1 && dec / 100 < 1) {
    return tens(Math.floor(dec / 10)) + decimalToRoman(dec % 10);
  } else if (dec / 100 >= 1 && dec / 1000 < 1) {
    return hundreds(Math.floor(dec / 100)) + decimalToRoman(dec % 100);
  } else if (dec / 1000 >= 1) {
    return thouthands(Math.floor(dec / 1000)) + decimalToRoman(dec % 1000);
  }
};

const singulars = (dec) => {
  if (!dec) {
    return "";
  } else if (dec >= 1 && dec <= 3) {
    return "I".repeat(dec);
  } else if (dec === 4) {
    return "IV";
  } else if (dec === 5) {
    return "V";
  } else if (dec >= 6 && dec <= 8) {
    return "V" + "I".repeat(dec - 5);
  } else if (dec === 9) {
    return "IX";
  }
};

const tens = (dec) => {
  if (!dec) {
    return "";
  }

  if (dec >= 1 && dec < 4) {
    return "X".repeat(dec);
  } else if (dec === 4) {
    return "XL";
  } else if (dec >= 5 && dec < 9) {
    return "L" + "X".repeat(dec - 5);
  } else if (dec === 9) {
    return "XC";
  }
};

const hundreds = (dec) => {
  if (!dec) {
    return "";
  }

  if (dec >= 1 && dec < 4) {
    return "C".repeat(Math.floor(dec));
  } else if (dec === 4) {
    return "CD";
  } else if (dec >= 5 && dec < 9) {
    return "D" + "C".repeat(Math.floor(dec) - 5);
  } else if (dec === 9) {
    return "CM";
  }
};

const thouthands = (dec) => {
  if (!dec) {
    return "";
  }

  if (dec >= 1 && dec < 4) {
    return "M".repeat(Math.floor(dec));
  }
};

// console.log(decimalToRoman(1217));


/*function decimalToRoman2(arabic) {
    const romanMap = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I'
    }

   const orderedRomans = Object.keys(
        romanMap
    ).sort((a, b) => {
        return b - a;
    });

    let converted = '';
    while (arabic > 0) {
        for (const roman of orderedRomans) {
            if (arabic - roman < 0) {
                continue;
            }

            converted += romanMap[roman];
            arabic -= roman;

            break;
        }
    }

    return converted;
}*/


console.log(decimalToRoman(399));
