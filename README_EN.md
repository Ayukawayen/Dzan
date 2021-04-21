# Dzan Pre-Alpha

**(Out-of-date. This document may not match current version)**

### [Commander Viewer](https://ayukawayen.github.io/Dzan/commander.html) ###

![Sample Commander Image](https://images.plurk.com/1vTC0zBuHjRJlqfwdFWSH7.png)

## Commander Name ##

There are 125 possible surnames and 192 possible given-names, see [name list](https://github.com/Ayukawayen/Dzan/blob/Pre-Alpha/%E5%A7%93%E5%90%8D%E5%80%99%E9%81%B8%E7%94%A8%E5%AD%97%E6%B8%85%E5%96%AE.md).

There are 24000 unique names in total.

Name of commander is chosen by server when token created and independent with Token ID.

### Name Romanization ###

Using [Mandarin Phonetic Symbols II](https://en.wikipedia.org/wiki/Mandarin_Phonetic_Symbols_II).


## Commander Attributes ##

Attributes determined by Token ID：

| Bits  | length | description  | status |
| ----: | ---: | :----- | :--- |
|  0- 7 |  8 | Reserverd(Version) | TBD |
|  8-22 | 15 | Solider Class | Tentative |
| 23-39 | 17 | Soliders | Tentative |
| 40-59 | 20 | Offense/Defense | Tentative |
| 60-71 | 12 | Skill Domain | Tentative |
| 72-?? | ?? | Skill Detail | TBD |
| ??-?? | ?? | Appearance | TBD |
| 231-255 | 24 | Reserverd(Name) | TBD |

### Solider Class ###

n is a 15-bit integer between 0~32767.

| Condition           | Weight | Class | Symbol |
| ------------------: | ---: | :---- | :--- |
|     0 ≦ n ≦  5460 | 5461 | 🐴>🔱>🏹 | TBD |
|  5461 ≦ n ≦ 10921 | 5461 | 🐴>🏹>🔱 | TBD |
| 10922 ≦ n ≦ 16382 | 5461 | 🔱>🏹>🐴 | TBD |
| 16383 ≦ n ≦ 21843 | 5461 | 🔱>🐴>🏹 | TBD |
| 21844 ≦ n ≦ 27304 | 5461 | 🏹>🐴>🔱 | TBD |
| 27305 ≦ n ≦ 32765 | 5461 | 🏹>🔱>🐴 | TBD |
| 32766 ≦ n ≦ 32767 |    2 | NONE | TBD |

Commander with solider class 'NONE' has soliders [1000,1000,1000], ignore 'soliders' attribute in Token ID.

### Soliders ###

n is a 17-bit integer between 0~131071.

There are 507 possible outcomes. [1000,1000,1000] has weight 18, and other 506 outcomes have weight 259. See [list](https://github.com/Ayukawayen/Dzan/blob/Pre-Alpha/%E5%85%B5%E7%A8%AE%E9%85%8D%E7%BD%AE%E6%B8%85%E5%96%AE.md).

Commander with solider class 'NONE' has soliders [1000,1000,1000], ignore this attribute.


### Offense/Defense ###

[n0,n1,n2,n3,n4] are five 4-bit integers, each between 0~15.

Offense of commander = 25 + (n0 + n1 + n2 + n3 + n4). Final value will between 25~100.

Defense of commander = 100 - (n0 + n1 + n2 + n3 + n4). Final value will between 25~100.


### Skill Domain ###

n is a 12-bit integer between 0~4095.

| Condition          | Weight | Domain |
| -----------------: | ---: | :---- |
|     0 ≦ n ≦ 1637 | 1638 | If Offense>62.5: Offesive skill<br/>If Offense<62.5: Defesive skill |
|  1638 ≦ n ≦ 3275 | 1638 | If Offense>62.5: Offesive+Morale skill<br/>If Offense<62.5: Defesive+Morale skill |
|  3276 ≦ n ≦ 4095 |  820 | Morale skill |

### Skill Detail ###

To be designed.

There are some samples：

- If there are 1600+ horsemans in A Yu Brigade: Horsemans in A Yu Brigade get ⚔️+36.0%
- If A Yu Brigade is placed in left wing: All soliders in Bi Chian Brigade get 🛡️+16.5%
