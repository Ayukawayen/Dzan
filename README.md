# Dzan Alpha 1

**這個專案目前處於Alpha階段，所有Token在下個階段後不會繼續維護。可能存在重大BUG。請自行評估風險。**

### [Commander Viewer](https://ayukawayen.github.io/Dzan/commander.html) ###

![Sample Commander Image](https://images.plurk.com/1LIPqYjasxqQiz4oGyhnWh.png)


### [取得新武將](https://ayukawayen.github.io/Dzan/queue.html) ###


## 武將姓名 ##

武將均為單姓單名，姓候選字125字，名候選字192字，見[姓名候選用字清單](https://github.com/Ayukawayen/Dzan/blob/Pre-Alpha/%E5%A7%93%E5%90%8D%E5%80%99%E9%81%B8%E7%94%A8%E5%AD%97%E6%B8%85%E5%96%AE.md)，計24000姓名，武將之姓名不會重複。
(存在因BUG而姓名重複者)

姓名在武將產生時由伺服器填入，與Token ID無關。

候選字選擇原則：

- 聲母ㄓ、ㄔ、ㄕ、ㄖ、ㄗ、ㄘ者不選。(註：ㄙ可選)
- 韻母ㄤ、ㄥ、ㄦ者不選
- 拼音連三母音者不選。如ㄧㄠ韻者如「苗(Miau)」不選，但「姚(Yau)」選入。

### 姓名拼音 ###

拼音方案採[國語注音符號第二式](https://zh.wikipedia.org/wiki/%E5%9C%8B%E8%AA%9E%E6%B3%A8%E9%9F%B3%E7%AC%A6%E8%99%9F%E7%AC%AC%E4%BA%8C%E5%BC%8F)


## 武將屬性 ##

Token ID決定以下武將屬性：

| Bits  | 長度 | 說明  | 狀態 |
| ----: | ---: | :----- | :--- |
|  0- 7 |  8 | 保留(版本) | 待定 |
|  8-22 | 15 | 兵種傾向 | 暫定 |
| 23-39 | 17 | 兵種配置 | 暫定 |
| 40-59 | 20 | 攻防能力 | 暫定 |
| 60-71 | 12 | 技能領域 | 暫定 |
| 72-101 | 32 | 技能細節 | 未定 |
| ??-?? | ?? | 外觀特徵 | 待定 |
| 231-255 | 24 | 保留(姓名) | 待定 |

### 兵種傾向 ###

n為15bit整數，範圍為0~32767。

| 範圍                | 權重 |  說明  | 別稱 |
| ------------------: | ---: | :---- | :--- |
|     0 ≦ n ≦  5460 | 5461 | 馬槍弓 | 待定 |
|  5461 ≦ n ≦ 10921 | 5461 | 馬弓槍 | 待定 |
| 10922 ≦ n ≦ 16382 | 5461 | 槍弓馬 | 待定 |
| 16383 ≦ n ≦ 21843 | 5461 | 槍馬弓 | 待定 |
| 21844 ≦ n ≦ 27304 | 5461 | 弓馬槍 | 待定 |
| 27305 ≦ n ≦ 32765 | 5461 | 弓槍馬 | 待定 |
| 32766 ≦ n ≦ 32767 |    2 | 無傾向 | 待定 |

無傾向之武將，兵種配置強制為[1000,1000,1000]，忽略Token ID內兵種配置之位元值。

### 兵種配置 ###

n為17bit整數，範圍為0~131071。

共507種配置選項，其中[1000,1000,1000]之權重為18，其餘506選項權重均為259，詳細資料[另行列出](https://github.com/Ayukawayen/Dzan/blob/Pre-Alpha/%E5%85%B5%E7%A8%AE%E9%85%8D%E7%BD%AE%E6%B8%85%E5%96%AE.md)。

兵種傾向為無傾向之武將，兵種配置強制為[1000,1000,1000]，忽略此位元值之結果。


### 攻防能力 ###

[n0,n1,n2,n3,n4]為五個4bit整數，各整數之範圍為0~15。

武將之攻擊力 = 25 + (n0 + n1 + n2 + n3 + n4)；範圍為25-100。
武將之防禦力 = 100 - (n0 + n1 + n2 + n3 + n4)；範圍為25-100。

武將之攻擊力與防禦力之和恆為125。


### 技能領域 ###

n為12bit整數，範圍為0~4095。

| 範圍               | 權重 |  說明  |
| -----------------: | ---: | :---- |
|     0 ≦ n ≦ 1637 | 1638 | 若先天攻擊力>62.5：攻擊型。<br/>若先天攻擊力<62.5：防禦型。 |
|  1638 ≦ n ≦ 3275 | 1638 | 若先天攻擊力>62.5：攻擊士氣型。<br/>若先天攻擊力<62.5：防禦士氣型。 |
|  3276 ≦ n ≦ 4095 |  820 | 士氣型 |

### 技能細節 ###

未定，目前顯示的技能內容可能會在此階段變更

以下為一些技能範例：

- 當阿裕營的騎兵1600人以上：阿裕營的騎兵得到⚔️+36.0%
- 當阿裕營的騎兵1100人以上且弓兵1100人以上：阿裕營的騎兵與弓兵得到⚔️+18.0%、🔥+18.0
- 當阿裕營的所有兵種均在850人以上：阿裕營的騎兵得到🛡️+88.0%
- 當阿裕營佈陣於左軍：阿裕營的所有士兵得到⚔️+33.0%
- 當全軍團的騎兵8000人以上：軍團騎兵加成⚔️+7.2%
- 當全軍團的騎兵5500人以上且弓兵5500人以上：軍團騎兵與弓兵加成⚔️+3.6%、🔥+3.6%
- 當阿裕營的騎兵1600人以上：軍團槍兵加成🛡️+10.0%


## 狀態名詞說明 ##

狀態定義
- 決定：除非遇上Fatal等級以上的Bug，不會變更。 (Alpha階段應該不會有此狀態)
- 穩定：除非遇上Major等級以上的Bug，不會變更。
- 暫定：在此階段，除非遇上Major等級以上的Bug，不會變更；在下個階段可能會變更。
- 未定：在此階段可能會發生變更，目前文件上的敘述不見得持續適用。
- 待定：尚未設定。在此階段可能轉換為其他狀態。

以上名詞之定義與名稱之狀態為暫定
