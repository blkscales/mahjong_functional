//Mahjong Tile to number id

const TileMap = new Map([
  ["1pin", 11],["2pin", 12],["3pin", 13],["4pin", 14],["5pin", 15],["6pin", 16],["7pin", 17],["8pin", 18],["9pin", 19],
  ["1sou", 21],["2sou", 22],["3sou", 23],["4sou", 24],["5sou", 25],["6sou", 26],["7sou", 27],["8sou", 28],["9sou", 29],
  ["1man", 31],["2man", 32],["3man", 33],["4man", 34],["5man", 35],["6man", 36],["7man", 37],["8man", 38],["9man", 39],
  ["Wind_east", 41],["Wind_south", 42],["Wind_west", 43],["Wind_north", 44],["Arrow_RedDragon", 45],["Arrow_GreenDragon", 46],["Arrow_WhiteDragon", 47],
  ["Functional_pin", 51],["Functional_sou", 52],["Functional_man", 53],["Functional_PSM", 54],["Functional_wind", 55],["Functional_arrow", 56],["Functional_AW", 57],["Functional_Joker", 58]
]);

export default TileMap