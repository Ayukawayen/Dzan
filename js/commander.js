'use strict';

const S = {
	ClazWeight: 5461,
	Clazs: [
		[0,1,2], [0,2,1], [1,2,0], [1,0,2], [2,0,1], [2,1,0], null
	],
	ClazIcons: [
		'🦄', '🐲', '愛', '義', '🌙', '☀️', '🌈',
	],
	
	SoliClazs:[
		'騎兵','槍兵','弓兵',
	],
	
	SoliWeight: 259,
	Solis: [
		[2000,500,500], [1980,520,500], [1960,540,500], [1960,520,520], [1940,560,500], [1940,540,520], [1920,580,500], [1920,560,520], [1920,540,540], [1900,600,500], [1900,580,520], [1900,560,540], [1880,620,500], [1880,600,520], [1880,580,540], [1880,560,560], [1860,640,500], [1860,620,520], [1860,600,540], [1860,580,560], [1840,660,500], [1840,640,520], [1840,620,540], [1840,600,560], [1840,580,580], [1820,680,500], [1820,660,520], [1820,640,540], [1820,620,560], [1820,600,580], [1800,700,500], [1800,680,520], [1800,660,540], [1800,640,560], [1800,620,580], [1800,600,600], [1780,720,500], [1780,700,520], [1780,680,540], [1780,660,560], [1780,640,580], [1780,620,600], [1760,740,500], [1760,720,520], [1760,700,540], [1760,680,560], [1760,660,580], [1760,640,600], [1760,620,620], [1740,760,500], [1740,740,520], [1740,720,540], [1740,700,560], [1740,680,580], [1740,660,600], [1740,640,620], [1720,780,500], [1720,760,520], [1720,740,540], [1720,720,560], [1720,700,580], [1720,680,600], [1720,660,620], [1720,640,640], [1700,800,500], [1700,780,520], [1700,760,540], [1700,740,560], [1700,720,580], [1700,700,600], [1700,680,620], [1700,660,640], [1680,820,500], [1680,800,520], [1680,780,540], [1680,760,560], [1680,740,580], [1680,720,600], [1680,700,620], [1680,680,640], [1680,660,660], [1660,840,500], [1660,820,520], [1660,800,540], [1660,780,560], [1660,760,580], [1660,740,600], [1660,720,620], [1660,700,640], [1660,680,660], [1640,860,500], [1640,840,520], [1640,820,540], [1640,800,560], [1640,780,580], [1640,760,600], [1640,740,620], [1640,720,640], [1640,700,660], [1640,680,680], [1620,880,500], [1620,860,520], [1620,840,540], [1620,820,560], [1620,800,580], [1620,780,600], [1620,760,620], [1620,740,640], [1620,720,660], [1620,700,680], [1600,900,500], [1600,880,520], [1600,860,540], [1600,840,560], [1600,820,580], [1600,800,600], [1600,780,620], [1600,760,640], [1600,740,660], [1600,720,680], [1600,700,700], [1580,920,500], [1580,900,520], [1580,880,540], [1580,860,560], [1580,840,580], [1580,820,600], [1580,800,620], [1580,780,640], [1580,760,660], [1580,740,680], [1580,720,700], [1560,940,500], [1560,920,520], [1560,900,540], [1560,880,560], [1560,860,580], [1560,840,600], [1560,820,620], [1560,800,640], [1560,780,660], [1560,760,680], [1560,740,700], [1560,720,720], [1540,960,500], [1540,940,520], [1540,920,540], [1540,900,560], [1540,880,580], [1540,860,600], [1540,840,620], [1540,820,640], [1540,800,660], [1540,780,680], [1540,760,700], [1540,740,720], [1520,980,500], [1520,960,520], [1520,940,540], [1520,920,560], [1520,900,580], [1520,880,600], [1520,860,620], [1520,840,640], [1520,820,660], [1520,800,680], [1520,780,700], [1520,760,720], [1520,740,740], [1500,1000,500], [1500,980,520], [1500,960,540], [1500,940,560], [1500,920,580], [1500,900,600], [1500,880,620], [1500,860,640], [1500,840,660], [1500,820,680], [1500,800,700], [1500,780,720], [1500,760,740], [1480,1020,500], [1480,1000,520], [1480,980,540], [1480,960,560], [1480,940,580], [1480,920,600], [1480,900,620], [1480,880,640], [1480,860,660], [1480,840,680], [1480,820,700], [1480,800,720], [1480,780,740], [1480,760,760], [1460,1040,500], [1460,1020,520], [1460,1000,540], [1460,980,560], [1460,960,580], [1460,940,600], [1460,920,620], [1460,900,640], [1460,880,660], [1460,860,680], [1460,840,700], [1460,820,720], [1460,800,740], [1460,780,760], [1440,1060,500], [1440,1040,520], [1440,1020,540], [1440,1000,560], [1440,980,580], [1440,960,600], [1440,940,620], [1440,920,640], [1440,900,660], [1440,880,680], [1440,860,700], [1440,840,720], [1440,820,740], [1440,800,760], [1440,780,780], [1420,1080,500], [1420,1060,520], [1420,1040,540], [1420,1020,560], [1420,1000,580], [1420,980,600], [1420,960,620], [1420,940,640], [1420,920,660], [1420,900,680], [1420,880,700], [1420,860,720], [1420,840,740], [1420,820,760], [1420,800,780], [1400,1100,500], [1400,1080,520], [1400,1060,540], [1400,1040,560], [1400,1020,580], [1400,1000,600], [1400,980,620], [1400,960,640], [1400,940,660], [1400,920,680], [1400,900,700], [1400,880,720], [1400,860,740], [1400,840,760], [1400,820,780], [1400,800,800], [1380,1120,500], [1380,1100,520], [1380,1080,540], [1380,1060,560], [1380,1040,580], [1380,1020,600], [1380,1000,620], [1380,980,640], [1380,960,660], [1380,940,680], [1380,920,700], [1380,900,720], [1380,880,740], [1380,860,760], [1380,840,780], [1380,820,800], [1360,1140,500], [1360,1120,520], [1360,1100,540], [1360,1080,560], [1360,1060,580], [1360,1040,600], [1360,1020,620], [1360,1000,640], [1360,980,660], [1360,960,680], [1360,940,700], [1360,920,720], [1360,900,740], [1360,880,760], [1360,860,780], [1360,840,800], [1360,820,820], [1340,1160,500], [1340,1140,520], [1340,1120,540], [1340,1100,560], [1340,1080,580], [1340,1060,600], [1340,1040,620], [1340,1020,640], [1340,1000,660], [1340,980,680], [1340,960,700], [1340,940,720], [1340,920,740], [1340,900,760], [1340,880,780], [1340,860,800], [1340,840,820], [1320,1180,500], [1320,1160,520], [1320,1140,540], [1320,1120,560], [1320,1100,580], [1320,1080,600], [1320,1060,620], [1320,1040,640], [1320,1020,660], [1320,1000,680], [1320,980,700], [1320,960,720], [1320,940,740], [1320,920,760], [1320,900,780], [1320,880,800], [1320,860,820], [1320,840,840], [1300,1200,500], [1300,1180,520], [1300,1160,540], [1300,1140,560], [1300,1120,580], [1300,1100,600], [1300,1080,620], [1300,1060,640], [1300,1040,660], [1300,1020,680], [1300,1000,700], [1300,980,720], [1300,960,740], [1300,940,760], [1300,920,780], [1300,900,800], [1300,880,820], [1300,860,840], [1280,1220,500], [1280,1200,520], [1280,1180,540], [1280,1160,560], [1280,1140,580], [1280,1120,600], [1280,1100,620], [1280,1080,640], [1280,1060,660], [1280,1040,680], [1280,1020,700], [1280,1000,720], [1280,980,740], [1280,960,760], [1280,940,780], [1280,920,800], [1280,900,820], [1280,880,840], [1280,860,860], [1260,1240,500], [1260,1220,520], [1260,1200,540], [1260,1180,560], [1260,1160,580], [1260,1140,600], [1260,1120,620], [1260,1100,640], [1260,1080,660], [1260,1060,680], [1260,1040,700], [1260,1020,720], [1260,1000,740], [1260,980,760], [1260,960,780], [1260,940,800], [1260,920,820], [1260,900,840], [1260,880,860], [1240,1240,520], [1240,1220,540], [1240,1200,560], [1240,1180,580], [1240,1160,600], [1240,1140,620], [1240,1120,640], [1240,1100,660], [1240,1080,680], [1240,1060,700], [1240,1040,720], [1240,1020,740], [1240,1000,760], [1240,980,780], [1240,960,800], [1240,940,820], [1240,920,840], [1240,900,860], [1240,880,880], [1220,1220,560], [1220,1200,580], [1220,1180,600], [1220,1160,620], [1220,1140,640], [1220,1120,660], [1220,1100,680], [1220,1080,700], [1220,1060,720], [1220,1040,740], [1220,1020,760], [1220,1000,780], [1220,980,800], [1220,960,820], [1220,940,840], [1220,920,860], [1220,900,880], [1200,1200,600], [1200,1180,620], [1200,1160,640], [1200,1140,660], [1200,1120,680], [1200,1100,700], [1200,1080,720], [1200,1060,740], [1200,1040,760], [1200,1020,780], [1200,1000,800], [1200,980,820], [1200,960,840], [1200,940,860], [1200,920,880], [1200,900,900], [1180,1180,640], [1180,1160,660], [1180,1140,680], [1180,1120,700], [1180,1100,720], [1180,1080,740], [1180,1060,760], [1180,1040,780], [1180,1020,800], [1180,1000,820], [1180,980,840], [1180,960,860], [1180,940,880], [1180,920,900], [1160,1160,680], [1160,1140,700], [1160,1120,720], [1160,1100,740], [1160,1080,760], [1160,1060,780], [1160,1040,800], [1160,1020,820], [1160,1000,840], [1160,980,860], [1160,960,880], [1160,940,900], [1160,920,920], [1140,1140,720], [1140,1120,740], [1140,1100,760], [1140,1080,780], [1140,1060,800], [1140,1040,820], [1140,1020,840], [1140,1000,860], [1140,980,880], [1140,960,900], [1140,940,920], [1120,1120,760], [1120,1100,780], [1120,1080,800], [1120,1060,820], [1120,1040,840], [1120,1020,860], [1120,1000,880], [1120,980,900], [1120,960,920], [1120,940,940], [1100,1100,800], [1100,1080,820], [1100,1060,840], [1100,1040,860], [1100,1020,880], [1100,1000,900], [1100,980,920], [1100,960,940], [1080,1080,840], [1080,1060,860], [1080,1040,880], [1080,1020,900], [1080,1000,920], [1080,980,940], [1080,960,960], [1060,1060,880], [1060,1040,900], [1060,1020,920], [1060,1000,940], [1060,980,960], [1040,1040,920], [1040,1020,940], [1040,1000,960], [1040,980,980], [1020,1020,960], [1020,1000,980], [1000,1000,1000], 
	],
	
	DomainWeight: 1638,
	Domains: [
		'o', 'om', 'm',
	],
	
	SkillFirstConds: {
		'3':(soli)=>(soli[2]>= 850),
		'2':(soli)=>(soli[1]>=1100),
		'1':(soli)=>(soli[0]>=1600),
		'0':(soli)=>(true),
	},
	SkillFirstWeights: {
		'3':28176,
		'2':18426,
		'1':10964,
		'0':0,
	},
	SkillFirsts: {
		'3':[{
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+38.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+38.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+38.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+19.0%、🔥+19.0';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+19.0%、🔥+19.0';
				}
				return `當${commander.unitName[lang]}的所有兵種均在850人以上：${commander.unitName[lang]}的所有士兵得到${effect}`;
			},
			verify:(commander, army, pos)=>{
				for(let c=0;c<3;++c) {
					if(commander.solider[ commander.claz[0] ] < 850) return false;
				}
				return true;
			},
			effect:(commander, army, pos)=>{
				let value = 3800 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<3;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+88.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+88.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+88.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+44.0%、🔥+44.0';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+44.0%、🔥+44.0';
				}
				return `當${commander.unitName[lang]}的所有兵種均在850人以上：${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}得到${effect}`;
			},
			
			verify:(commander, army, position)=>{
				for(let c=0;c<3;++c) {
					if(commander.solider[ commander.claz[0] ] < 850) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 8800 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<1;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},

		},],
		'2':[{
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+36.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+36.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+36.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+18.0%、🔥+18.0';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+18.0%、🔥+18.0';
				}
				return `當${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}1100人以上且${S.SoliClazs[commander.claz[1]]}1100人以上：${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}與${S.SoliClazs[commander.claz[1]]}得到${effect}`;
			},
			verify:(commander, army, position)=>{
				for(let c=0;c<2;++c) {
					if(commander.solider[ commander.claz[0] ] < 1100) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 3600 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<2;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},

		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+57.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+57.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+57.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+28.5%、🔥+28.5';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+28.5%、🔥+28.5';
				}
				return `當${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}1100人以上且${S.SoliClazs[commander.claz[1]]}1100人以上：${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}得到${effect}`;
			},
			verify:(commander, army, position)=>{
				for(let c=0;c<2;++c) {
					if(commander.solider[ commander.claz[0] ] < 1100) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 5700 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<1;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},

		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+7.2%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+7.2%';
				} else if(commander.domain == 'm') {
					effect = '🔥+7.2%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.6%、🔥+3.6%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.6%、🔥+3.6%';
				}
				return `當${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}1100人以上且${S.SoliClazs[commander.claz[1]]}1100人以上：軍團${S.SoliClazs[commander.claz[0]]}與${S.SoliClazs[commander.claz[1]]}加成${effect}`;
			},
			verify:(commander, army, position)=>{
				for(let c=0;c<2;++c) {
					if(commander.solider[ commander.claz[0] ] < 1100) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 720 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<2;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},

		},],
		'1':[{
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+33.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+33.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+33.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+16.5%、🔥+16.5';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+16.5%、🔥+16.5';
				}
				return `當${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}1600人以上：${commander.unitName[lang]}的所有士兵得到${effect}`;
			},
			verify:(commander, army, position)=>{
				for(let c=0;c<1;++c) {
					if(commander.solider[ commander.claz[0] ] < 1600) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 3300 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<1;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+10.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+10.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+10.0%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+5.0%、🔥+5.0%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+5.0%、🔥+5.0%';
				}
				return `當${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}1600人以上：軍團${S.SoliClazs[commander.claz[1]]}加成${effect}`;
			},
			verify:(commander, army, position)=>{
				for(let c=0;c<1;++c) {
					if(commander.solider[ commander.claz[0] ] < 1600) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 1000 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
					result['army'][commander.claz[1]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[1] ][ commander.domain[i] ] = value;
					}
				
				return result;
			},

		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+7.6%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+7.6%';
				} else if(commander.domain == 'm') {
					effect = '🔥+7.6%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.8%、🔥+3.8%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.8%、🔥+3.8%';
				}
				return `當${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}1600人以上：軍團${S.SoliClazs[commander.claz[0]]}加成${effect}`;
			},
			verify:(commander, army, position)=>{
				for(let c=0;c<1;++c) {
					if(commander.solider[ commander.claz[0] ] < 1600) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 760 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<1;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},

		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+6.6%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+6.6%';
				} else if(commander.domain == 'm') {
					effect = '🔥+6.6%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.3%、🔥+3.3%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.3%、🔥+3.3%';
				}
				return `當${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}1600人以上：軍團所有兵種加成${effect}`;
			},
			verify:(commander, army, position)=>{
				for(let c=0;c<1;++c) {
					if(commander.solider[ commander.claz[0] ] < 1600) return false;
				}
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 660 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<3;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},

		},],
	},
	SkillSecondWeight: 5958,
	SkillSecond:[{
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+33.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+33.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+33.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+16.5%、🔥+16.5';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+16.5%、🔥+16.5';
				}
				return `當${commander.unitName[lang]}佈陣於左軍：${commander.unitName[lang]}的所有士兵得到${effect}`;
			},
			verify:(commander, army, pos)=>{
				return pos == 0;
			},
			effect:(commander, army, pos)=>{
				let value = 3300 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<3;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+33.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+33.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+33.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+16.5%、🔥+16.5';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+16.5%、🔥+16.5';
				}
				return `當${commander.unitName[lang]}佈陣於右軍：${commander.unitName[lang]}的所有士兵得到${effect}`;
			},
			verify:(commander, army, pos)=>{
				return pos == 4;
			},
			effect:(commander, army, pos)=>{
				let value = 3300 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<3;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+33.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+33.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+33.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+16.5%、🔥+16.5';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+16.5%、🔥+16.5';
				}
				return `當${commander.unitName[lang]}佈陣於前軍：${commander.unitName[lang]}的所有士兵得到${effect}`;
			},
			verify:(commander, army, pos)=>{
				return pos == 1;
			},
			effect:(commander, army, pos)=>{
				let value = 3300 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<3;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+33.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+33.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+33.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+16.5%、🔥+16.5';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+16.5%、🔥+16.5';
				}
				return `當${commander.unitName[lang]}佈陣於後軍：${commander.unitName[lang]}的所有士兵得到${effect}`;
			},
			verify:(commander, army, pos)=>{
				return pos == 3;
			},
			effect:(commander, army, pos)=>{
				let value = 3300 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<3;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+7.6%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+7.6%';
				} else if(commander.domain == 'm') {
					effect = '🔥+7.6%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.8%、🔥+3.8%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.8%、🔥+3.8%';
				}
				return `當${commander.unitName[lang]}佈陣於中軍：軍團${S.SoliClazs[commander.claz[0]]}加成${effect}`;
			},
			verify:(commander, army, pos)=>{
				return pos == 2;
			},
			effect:(commander, army, pos)=>{
				let value = 760 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<1;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+7.2%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+7.2%';
				} else if(commander.domain == 'm') {
					effect = '🔥+7.2%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.6%、🔥+3.6%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.6%、🔥+3.6%';
				}
				return `當${commander.unitName[lang]}佈陣於中軍：軍團${S.SoliClazs[commander.claz[0]]}與${S.SoliClazs[commander.claz[1]]}加成${effect}`;
			},
			verify:(commander, army, pos)=>{
				return pos == 2;
			},
			effect:(commander, army, pos)=>{
				let value = 720 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<2;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+6.6%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+6.6%';
				} else if(commander.domain == 'm') {
					effect = '🔥+6.6%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.3%、🔥+3.3%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.3%、🔥+3.3%';
				}
				return `當${commander.unitName[lang]}佈陣於中軍：軍團所有兵種加成${effect}`;
			},
			verify:(commander, army, pos)=>{
				return pos == 2;
			},
			effect:(commander, army, pos)=>{
				let value = 660 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<3;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+7.6%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+7.6%';
				} else if(commander.domain == 'm') {
					effect = '🔥+7.6%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.8%、🔥+3.8%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.8%、🔥+3.8%';
				}
				return `當軍團${S.SoliClazs[commander.claz[0]]}8000人以上：軍團${S.SoliClazs[commander.claz[0]]}加成${effect}`;
			},
			verify:(commander, army, pos)=>{
				for(let c=0;c<1;++c) {
					if(army.solider[ commander.claz[0] ] < 8000) return false;
				}
				return true;
			},
			effect:(commander, army, pos)=>{
				let value = 760 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<1;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+7.2%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+7.2%';
				} else if(commander.domain == 'm') {
					effect = '🔥+7.2%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.6%、🔥+3.6%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.6%、🔥+3.6%';
				}
				return `當軍團${S.SoliClazs[commander.claz[0]]}5500人以上且${S.SoliClazs[commander.claz[1]]}5500人以上：軍團${S.SoliClazs[commander.claz[0]]}與${S.SoliClazs[commander.claz[1]]}加成${effect}`;
			},
			verify:(commander, army, pos)=>{
				for(let c=0;c<2;++c) {
					if(army.solider[ commander.claz[0] ] < 5500) return false;
				}
				return true;
			},
			effect:(commander, army, pos)=>{
				let value = 720 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<2;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+6.6%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+6.6%';
				} else if(commander.domain == 'm') {
					effect = '🔥+6.6%';
				} else if(commander.domain == 'om') {
					effect = '⚔️+3.3%、🔥+3.3%';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+3.3%、🔥+3.3%';
				}
				return `當軍團所有兵種4250人以上：軍團所有兵種加成${effect}`;
			},
			verify:(commander, army, pos)=>{
				for(let c=0;c<3;++c) {
					if(army.solider[ commander.claz[0] ] < 4250) return false;
				}
				return true;
			},
			effect:(commander, army, pos)=>{
				let value = 660 / commander.domain.length;
				
				let result = {
					army:{},
				};
				
				for(let c=0;c<3;++c) {
					result['army'][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result['army'][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
		}, {
			desc:(commander, lang)=>{
				let effect = '';
				if(commander.domain == 'o') {
					effect = '⚔️+33.0%';
				} else if(commander.domain == 'd') {
					effect = '🛡️+33.0%';
				} else if(commander.domain == 'm') {
					effect = '🔥+33.0';
				} else if(commander.domain == 'om') {
					effect = '⚔️+16.5%、🔥+16.5';
				} else if(commander.domain == 'dm') {
					effect = '🛡️+16.5%、🔥+16.5';
				}
				return `${commander.unitName[lang]}的${S.SoliClazs[commander.claz[0]]}得到${effect}`;
			},
			verify:(commander, army, position)=>{
				return true;
			},
			effect:(commander, army, position)=>{
				let value = 3300 / commander.domain.length;
				
				let result = {};
				result[pos] = {};
				
				for(let c=0;c<1;++c) {
					result[pos][commander.claz[c]] = {};
					for(let i=0;i<commander.domain.length;++i) {
						result[pos][ commander.claz[c] ][ commander.domain[i] ] = value;
					}
				}
				
				return result;
			},
			
	},],
};
function Commander(id, name, isGroup) {
	this.id = id;
	this.isGroup = isGroup;
	
	let buf = name.split(' (');
	
	this.name = buf[0];
	this.pinyin = buf[1] ? buf[1].split(')')[0] : '';
	
	this.unitName = {
		zhtw: this.name.replace(' ','') + '營',
		en: this.pinyin + ' Brigade',
	};
	
	this.avatar = blockies.create({ seed:id, size:7, scale:16}).toDataURL();
	this.rank = '0';
	
	buf = parseInt(id.substr(2,4), 16) >> 1;
	
	let c = Math.floor(buf/S.ClazWeight);
	this.claz = S.Clazs[c];
	this.clazIcon = S.ClazIcons[c];

	buf = parseInt(id.substr(5,5), 16) & 0x1ffff;

	let soli;
	this.solider = [];
	if(!this.claz) {
		soli = [1000,1000,1000];
		this.solider = [1000,1000,1000];
	} else {
		soli = S.Solis[Math.floor(buf/S.SoliWeight)];
		for(let i=0;i<3;++i) {
			this.solider[ this.claz[i] ] = soli[i];
		}
	}
	
	buf = 0;
	for(let i=0;i<5;++i) {
		buf += parseInt(id.substr(10+i,1), 16);
	}
	
	this.attr = { off:(25+buf)*100, def:(100-buf)*100, };
	
	buf = parseInt(id.substr(15,3), 16);

	this.domain = S.Domains[Math.floor(buf/S.DomainWeight)];

	if(this.attr.off < 6250) {
		this.domain = this.domain.replace('o','d');
	}
	
	let s;
	for(s=3;s>0;--s) {
		if( S.SkillFirstConds[s](soli) ) break;
	}

	buf = parseInt(id.substr(18,4), 16);

	let sk;
	if(s>0) {
		let s1 = Math.floor(buf/S.SkillFirstWeights[s]);
		if(s1 < S.SkillFirsts[s].length) {
			sk = S.SkillFirsts[s][s1];
		}
	}
	
	if(!sk) {
		buf = parseInt(id.substr(22,4), 16);
		sk = S.SkillSecond[ Math.floor(buf/S.SkillSecondWeight) ];
	}
	
	this.skills = [
		sk,
		null,
		null,
	];
	
	buf = parseInt(id.substr(56,2), 16);

	this.avatarScale = [ 0.796+buf/1250, 1-buf/1250 ];
}
