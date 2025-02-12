const removeDuplicates = require("./index.js");

describe("Many duplicates", () => {
  test("#1", () => {
    const obj = {
      "1": ["A", "B", "C"],
      "2": ["A", "B", "D", "A"],
    };

    expect(removeDuplicates(obj)).toEqual({ "1": ["C"], "2": ["A", "B", "D"] });
  });

  test("#2", () => {
    const obj = {
      "1": ["C", "F", "G"],
      "2": ["A", "B", "C"],
      "3": ["A", "B", "D"],
    };

    expect(removeDuplicates(obj)).toEqual({
      "1": ["F", "G"],
      "2": ["C"],
      "3": ["A", "B", "D"],
    });
  });

  test("#3", () => {
    const obj = {
      "1": ["A"],
      "2": ["A"],
      "3": ["A"],
    };

    expect(removeDuplicates(obj)).toEqual({ "1": [], "2": [], "3": ["A"] });
  });

  test("#4", () => {
    const obj = {
      "432": ["A", "A", "B", "D"],
      "53": ["L", "G", "B", "C"],
      "236": ["L", "A", "X", "G", "H", "X"],
      "11": ["P", "R", "S", "D"],
    };

    expect(removeDuplicates(obj)).toEqual({
      "11": ["P", "R", "S"],
      "53": ["C"],
      "236": ["L", "X", "G", "H"],
      "432": ["A", "B", "D"],
    });
  });

  test("#5", () => {
    const obj = {
      "350": ["C", "A", "A"],
      "291": ["C", "C", "A", "A", "A", "C", "G"],
      "236": ["L", "A", "X", "G", "H", "X"],
      "91": ["P", "R", "S", "D"],
      "53": ["L", "G", "B", "C"],
      "12": ["A", "A", "B", "D"],
    };

    expect(removeDuplicates(obj)).toEqual({
      "12": [],
      "53": ["B"],
      "91": ["P", "R", "S", "D"],
      "236": ["L", "X", "H"],
      "291": ["G"],
      "350": ["C", "A"],
    });
  });

  test("#6", () => {
    const obj = {
      "4": ["A"],
      "10": ["B"],
      "3": ["C"],
      "1": ["D"],
      "2": ["E"],
      "26": ["F", "Z"],
      "5": ["G"],
      "8": ["H"],
      "11": ["I", "B"],
      "12": ["J", "I"],
      "13": ["K", "J"],
      "14": ["L", "K"],
      "15": ["M", "L"],
      "7": ["N"],
      "6": ["O"],
      "16": ["P", "M"],
      "9": ["Q"],
      "17": ["R", "P"],
      "18": ["S", "R"],
      "19": ["T", "S"],
      "20": ["T", "U"],
      "21": ["V", "T"],
      "22": ["W", "V"],
      "23": ["X", "W"],
      "24": ["X", "Y"],
      "25": ["Y", "Z"],
    };

    expect(removeDuplicates(obj)).toEqual({
      "1": ["D"],
      "2": ["E"],
      "3": ["C"],
      "4": ["A"],
      "5": ["G"],
      "6": ["O"],
      "7": ["N"],
      "8": ["H"],
      "9": ["Q"],
      "10": [],
      "11": ["B"],
      "12": ["I"],
      "13": ["J"],
      "14": ["K"],
      "15": ["L"],
      "16": ["M"],
      "17": ["P"],
      "18": ["R"],
      "19": ["S"],
      "20": ["U"],
      "21": ["T"],
      "22": ["V"],
      "23": ["W"],
      "24": ["X"],
      "25": ["Y"],
      "26": ["F", "Z"],
    });
  });
});
