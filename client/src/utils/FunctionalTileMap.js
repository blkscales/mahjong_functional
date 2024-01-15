//Mahjong Tile to number id
export const FunctionalTileMap = {
  Functional_pin:       ['1pin','2pin','3pin','4pin','5pin','6pin','7pin','8pin','9pin'],
  Functional_sou:       ['1sou','2sou','3sou','4sou','5sou','6sou','7sou','8sou','9sou'],
  Functional_man:       ['1man','2man','3man','4man','5man','6man','7man','8man','9man'],
  Functional_PSM:       ['1pin','2pin','3pin','4pin','5pin','6pin','7pin','8pin','9pin',
                         '1sou','2sou','3sou','4sou','5sou','6sou','7sou','8sou','9sou',
                         '1man','2man','3man','4man','5man','6man','7man','8man','9man'],
  Functional_wind:      ['Wind_east','Wind_south','Wind_west','Wind_north'],
  Functional_arrow:     ['Arrow_RedDragon','Arrow_GreenDragon','Arrow_WhiteDragon'],
  Functional_AW:        ['Wind_east','Wind_south','Wind_west','Wind_north',
                         'Arrow_RedDragon','Arrow_GreenDragon','Arrow_WhiteDragon'],
  Functional_Joker:     ['1pin','2pin','3pin','4pin','5pin','6pin','7pin','8pin','9pin',
                         '1sou','2sou','3sou','4sou','5sou','6sou','7sou','8sou','9sou',
                         '1man','2man','3man','4man','5man','6man','7man','8man','9man',
                         'Wind_east','Wind_south','Wind_west','Wind_north',
                         'Arrow_RedDragon','Arrow_GreenDragon','Arrow_WhiteDragon'],
  Functional_Terminal:  ['1pin','9pin','1sou','9sou','1man','9man',
                         'Wind_east','Wind_south','Wind_west','Wind_north',
                         'Arrow_RedDragon','Arrow_GreenDragon','Arrow_WhiteDragon'],
  Functional_258:       ['2pin','5pin','8pin','2sou','5sou','8sou','2man','5man','8man'],
  Functional_37:        ['3pin','7pin','3sou','7sou','3man','7man'],
  Functional_46:        ['4pin','6pin','4sou','6sou','4man','6man']

}


export const FunctionalNumMap = {
  61:   [11,12,13,14,15,16,17,18,19],
  62:   [21,22,23,24,25,26,27,28,29],
  63:   [31,32,33,34,35,36,37,38,39],
  64:   [41,42,43,44],
  65:   [45,46,47],
  66:   [41,42,43,44,45,46,47],
  67:   [11,12,13,14,15,16,17,18,19,
         21,22,23,24,25,26,27,28,29,
         31,32,33,34,35,36,37,38,39],    
  68:   [11,12,13,14,15,16,17,18,19,
         21,22,23,24,25,26,27,28,29,
         31,32,33,34,35,36,37,38,39,
          41,42,43,44,45,46,47],
  69:   [11,19,21,29,31,39,
         41,42,43,44,45,46,47],
  70:   [12,15,18,22,25,28,32,35,38],
  71:   [13,17,23,27,33,37],
  72:   [14,16,24,26,34,36],

}

export default {FunctionalTileMap, FunctionalNumMap}