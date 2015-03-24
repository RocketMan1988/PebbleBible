//Define the Books of the bible verses and chapters(JSON Data Type):

var bible = {};
bible.Books = [
{
	names: ['Genesis', 'Ge', 'Gen', '01_Gen'],
	verses: [31, 25, 24, 26, 32, 22, 24, 22, 29, 32, 32, 20, 18, 24, 21, 16, 27, 33, 38, 18, 34, 24, 20, 67, 34, 35, 46, 22, 35, 43, 55, 32, 20, 31, 29, 43, 36, 30, 23, 23, 57, 38, 34, 34, 28, 34, 31, 22, 33, 26]
},
{
	names: ['Exodus', 'Ex', 'Exo', '02_Exod'],
	verses: [22, 25, 22, 31, 23, 30, 25, 32, 35, 29, 10, 51, 22, 31, 27, 36, 16, 27, 25, 26, 36, 31, 33, 18, 40, 37, 21, 43, 46, 38, 18, 35, 23, 35, 35, 38, 29, 31, 43, 38]
},
{
	names: ['Leviticus', 'Le', 'Lev', '03_Lev'],
	verses: [17, 16, 17, 35, 19, 30, 38, 36, 24, 20, 47, 8, 59, 57, 33, 34, 16, 30, 37, 27, 24, 33, 44, 23, 55, 46, 34]
},
{
	names: ['Numbers', 'Nu', 'Num', '04_Num'],
	verses: [54, 34, 51, 49, 31, 27, 89, 26, 23, 36, 35, 16, 33, 45, 41, 50, 13, 32, 22, 29, 35, 41, 30, 25, 18, 65, 23, 31, 40, 16, 54, 42, 56, 29, 34, 13]
},
{
	names: ['Deuteronomy', 'Dt', 'Deut', 'Deu', 'De', '05_Deut'],
	verses: [46, 37, 29, 49, 33, 25, 26, 20, 29, 22, 32, 32, 18, 29, 23, 22, 20, 22, 21, 20, 23, 30, 25, 22, 19, 19, 26, 68, 29, 20, 30, 52, 29, 12]
},
{
	names: ['Joshua', 'Js', 'Jos', 'Jos', 'Josh', '06_Josh'],
	verses: [18, 24, 17, 24, 15, 27, 26, 35, 27, 43, 23, 24, 33, 15, 63, 10, 18, 28, 51, 9, 45, 34, 16, 33]
},
{
	names: ['Judges', 'Jg', 'Jud', 'Jdg', 'Ju', 'Jdgs', '07_Judg'],
	verses: [36, 23, 31, 24, 31, 40, 25, 35, 57, 18, 40, 15, 25, 20, 20, 31, 13, 31, 30, 48, 25]
},
{
	names: ['Ruth', 'Ru', 'Rut', '08_Ruth'],
	verses: [22, 23, 18, 22]
},
{
	names: ['1 Samuel', '1S', '1 Sam', '1Sam', '1 Sa', '1Sa', 'I Samuel', 'I Sam', 'I Sa', 'IS', '09_1Sam'],
	verses: [28, 36, 21, 22, 12, 21, 17, 22, 27, 27, 15, 25, 23, 52, 35, 23, 58, 30, 24, 42, 15, 23, 29, 22, 44, 25, 12, 25, 11, 31, 13]
},
{
	names: ['2 Samuel', '2S', '2 Sam', '2Sam', '2 Sa', '2Sa', 'II Samuel', 'II Sam', 'II Sa', 'IIS', '10_2Sam'],
	verses: [27, 32, 39, 12, 25, 23, 29, 18, 13, 19, 27, 31, 39, 33, 37, 23, 29, 33, 43, 26, 22, 51, 39, 25]
},
{
	names: ['1 Kings', '1K', '1 Kin', '1Kin', '1 Ki', 'IK', '1Ki', 'I Kings', 'I Kin', 'I Ki', '11_1Kgs'],
	verses: [53, 46, 28, 34, 18, 38, 51, 66, 28, 29, 43, 33, 34, 31, 34, 34, 24, 46, 21, 43, 29, 53]
},
{
	names: ['2 Kings', '2K', '2 Kin', '2Kin', '2 Ki', 'IIK', '2Ki', 'II Kings', 'II Kin', 'II Ki', '12_2Kgs'],
	verses: [18, 25, 27, 44, 27, 33, 20, 29, 37, 36, 21, 21, 25, 29, 38, 20, 41, 37, 37, 21, 26, 20, 37, 20, 30]
},
{
	names: ['1 Chronicles', '1Ch', '1 Chr', '1Chr', '1 Ch', 'ICh', 'I Chronicles', 'I Chr', 'I Ch', '13_1Chr'],
	verses: [54, 55, 24, 43, 26, 81, 40, 40, 44, 14, 47, 40, 14, 17, 29, 43, 27, 17, 19, 8, 30, 19, 32, 31, 31, 32, 34, 21, 30]
},
{
	names: ['2 Chronicles', '2Ch', '2 Chr', '2 Chr', '2Chr', '2 Ch', 'IICh', 'II Chronicles', 'II Chr', 'II Ch', '14_2Chr'],
	verses: [17, 18, 17, 22, 14, 42, 22, 18, 31, 19, 23, 16, 22, 15, 19, 14, 19, 34, 11, 37, 20, 12, 21, 27, 28, 23, 9, 27, 36, 27, 21, 33, 25, 33, 27, 23]
},
{
	names: ['Ezra', 'Ezr', '15_Ezra'],
	verses: [11, 70, 13, 24, 17, 22, 28, 36, 15, 44]
},
{
	names: ['Nehemiah', 'Ne', 'Neh', 'Neh', 'Ne', '16_Neh'],
	verses: [11, 20, 32, 23, 19, 19, 73, 18, 38, 39, 36, 47, 31]
},
{
	names: ['Esther', 'Es', 'Est', 'Esth', '17_Esth'],
	verses: [22, 23, 15, 17, 14, 14, 10, 17, 32, 3]
},
{
	names: ['Job', 'Jb', 'Job', '18_Job'],
	verses: [22, 13, 26, 21, 27, 30, 21, 22, 35, 22, 20, 25, 28, 22, 35, 22, 16, 21, 29, 29, 34, 30, 17, 25, 6, 14, 23, 28, 25, 31, 40, 22, 33, 37, 16, 33, 24, 41, 30, 24, 34, 17]
},
{
	names: ['Psalm', 'Ps', 'Psa', '19_Ps'],
	verses: [6, 12, 8, 8, 12, 10, 17, 9, 20, 18, 7, 8, 6, 7, 5, 11, 15, 50, 14, 9, 13, 31, 6, 10, 22, 12, 14, 9, 11, 12, 24, 11, 22, 22, 28, 12, 40, 22, 13, 17, 13, 11, 5, 26, 17, 11, 9, 14, 20, 23, 19, 9, 6, 7, 23, 13, 11, 11, 17, 12, 8, 12, 11, 10, 13, 20, 7, 35, 36, 5, 24, 20, 28, 23, 10, 12, 20, 72, 13, 19, 16, 8, 18, 12, 13, 17, 7, 18, 52, 17, 16, 15, 5, 23, 11, 13, 12, 9, 9, 5, 8, 28, 22, 35, 45, 48, 43, 13, 31, 7, 10, 10, 9, 8, 18, 19, 2, 29, 176, 7, 8, 9, 4, 8, 5, 6, 5, 6, 8, 8, 3, 18, 3, 3, 21, 26, 9, 8, 24, 13, 10, 7, 12, 15, 21, 10, 20, 14, 9, 6]
},
{
	names: ['Proverbs', 'Pr', 'Prov', 'Pro', '20_Prov'],
	verses: [33, 22, 35, 27, 23, 35, 27, 36, 18, 32, 31, 28, 25, 35, 33, 33, 28, 24, 29, 30, 31, 29, 35, 34, 28, 28, 27, 28, 27, 33, 31]
},
{
	names: ['Ecclesiastes', 'Ec', 'Ecc', '21_Ecc'],
	verses: [18, 26, 22, 16, 20, 12, 29, 17, 18, 20, 10, 14]
},
{
	names: ['Song of Songs', 'So', 'Sos', 'Song of Solomon', 'SOS', 'SongOfSongs', 'SongofSolomon', '22_Song'],
	verses: [17, 17, 11, 16, 16, 13, 13, 14]
},
{
	names: ['Isaiah', 'Is', 'Isa', '23_Isa'],
	verses: [31, 22, 26, 6, 30, 13, 25, 22, 21, 34, 16, 6, 22, 32, 9, 14, 14, 7, 25, 6, 17, 25, 18, 23, 12, 21, 13, 29, 24, 33, 9, 20, 24, 17, 10, 22, 38, 22, 8, 31, 29, 25, 28, 28, 25, 13, 15, 22, 26, 11, 23, 15, 12, 17, 13, 12, 21, 14, 21, 22, 11, 12, 19, 12, 25, 24]
},
{
	names: ['Jeremiah', 'Je', 'Jer', '24_Jer'],
	verses: [19, 37, 25, 31, 31, 30, 34, 22, 26, 25, 23, 17, 27, 22, 21, 21, 27, 23, 15, 18, 14, 30, 40, 10, 38, 24, 22, 17, 32, 24, 40, 44, 26, 22, 19, 32, 21, 28, 18, 16, 18, 22, 13, 30, 5, 28, 7, 47, 39, 46, 64, 34]
},
{
	names: ['Lamentations', 'La', 'Lam', 'Lament', '25_Lam'],
	verses: [22, 22, 66, 22, 22]
},
{
	names: ['Ezekiel', 'Ek', 'Ezek', 'Eze', '26_Ezek' ],
	verses: [28, 10, 27, 17, 17, 14, 27, 18, 11, 22, 25, 28, 23, 23, 8, 63, 24, 32, 14, 49, 32, 31, 49, 27, 17, 21, 36, 26, 21, 26, 18, 32, 33, 31, 15, 38, 28, 23, 29, 49, 26, 20, 27, 31, 25, 24, 23, 35]
},
{
	names: ['Daniel', 'Da', 'Dan', 'Dl', 'Dnl', '27_Dan'],
	verses: [21, 49, 30, 37, 31, 28, 28, 27, 27, 21, 45, 13]
},
{
	names: ['Hosea', 'Ho', 'Hos', '28_Hos'],
	verses: [11, 23, 5, 19, 15, 11, 16, 14, 17, 15, 12, 14, 16, 9]
},
{
	names: ['Joel', 'Jl', 'Joe', '29_Joel'],
	verses: [20, 32, 21]
},
{
	names: ['Amos', 'Am', 'Amo', '30_Amos'],
	verses: [15, 16, 15, 13, 27, 14, 17, 14, 15]
},
{
	names: ['Obadiah', 'Ob', 'Oba', 'Obd', 'Odbh', '31_Obad' ],
	verses: [21]
},
{
	names: ['Jonah', 'Jh', 'Jon', 'Jnh', '32_Jonah'],
	verses: [17, 10, 10, 11]
},
{
	names: ['Micah', 'Mi', 'Mic', '33_Mic'],
	verses: [16, 13, 12, 13, 15, 16, 20]
},
{
	names: ['Nahum', 'Na', 'Nah', '34_Nah'],
	verses: [15, 13, 19]
},
{
	names: ['Habakkuk', 'Hb', 'Hab', 'Hk', 'Habk', '35_Hab'],
	verses: [17, 20, 19]
},
{
	names: ['Zephaniah', 'Zp', 'Zep', 'Zeph', 'Ze', '36_Zeph'],
	verses: [18, 15, 20]
},
{
	names: ['Haggia', 'Ha', 'Hag', 'Hagg', '37_Hag'],
	verses: [15, 23]
},
{
	names: ['Zechariah', 'Zc', 'Zech', 'Zec', '38_Zech'],
	verses: [21, 13, 10, 14, 11, 15, 14, 23, 17, 12, 17, 14, 9, 21]
},
{
	names: ['Malachi', 'Ml', 'Mal', 'Mlc', '39_Mal'],
	verses: [14, 17, 18, 6]
},
{
	names: ['Matthew', 'Mt', 'Matt', 'Mat', '40_Matt'],
	verses: [25, 23, 17, 25, 48, 34, 29, 34, 38, 42, 30, 50, 58, 36, 39, 28, 27, 35, 30, 34, 46, 46, 39, 51, 46, 75, 66, 20]
},
{
	names: ['Mark', 'Mk', 'Mar', 'Mrk', '41_Mark'],
	verses: [45, 28, 35, 41, 43, 56, 37, 38, 50, 52, 33, 44, 37, 72, 47, 20]
},
{
	names: ['Luke', 'Lk', 'Luk', 'Lu', '42_Luke' ],
	verses: [80, 52, 38, 44, 39, 49, 50, 56, 62, 42, 54, 59, 35, 35, 32, 31, 37, 43, 48, 47, 38, 71, 56, 53]
},
{
	names: ['John', 'Jn', 'Joh', 'Jo', '43_John'],
	verses: [51, 25, 36, 54, 47, 71, 53, 59, 41, 42, 57, 50, 38, 31, 27, 33, 26, 40, 42, 31, 25]
},
{
	names: ['Acts', 'Ac', 'Act', '44_Acts'],
	verses: [26, 47, 26, 37, 42, 15, 60, 40, 43, 48, 30, 25, 52, 28, 41, 40, 34, 28, 41, 38, 40, 30, 35, 27, 27, 32, 44, 31]
},
{
	names: ['Romans', 'Ro', 'Rom', 'Rmn', 'Rmns', '45_Rom'],
	verses: [32, 29, 31, 25, 21, 23, 25, 39, 33, 21, 36, 21, 14, 23, 33, 27]
},
{
	names: ['1 Corinthians', '1Co', '1 Cor', '1Cor', 'ICo', '1 Co', '1Co', 'I Corinthians', 'I Cor', 'I Co', '46_1Cor'],
	verses: [31, 16, 23, 21, 13, 20, 40, 13, 27, 33, 34, 31, 13, 40, 58, 24]
},
{
	names: ['2 Corinthians', '2Co', '2 Cor', '2Cor', 'IICo', '2 Co', '2Co', 'II Corinthians', 'II Cor', 'II Co', '47_2Cor'],
	verses: [24, 17, 18, 18, 21, 18, 16, 24, 15, 18, 33, 21, 14]
},
{
	names: ['Galatians', 'Ga', 'Gal', 'Gltns', '48_Gal'],
	verses: [24, 21, 29, 31, 26, 18]
},
{
	names: ['Ephesians', 'Ep', 'Eph', 'Ephn', '49_Eph'],
	verses: [23, 22, 21, 32, 33, 24]
},
{
	names: ['Philippians', 'Pp', 'Phi', 'Phil', '50_Phil'],
	verses: [30, 30, 21, 23]
},
{
	names: ['Colossians', 'Co', 'Col', 'Colo', 'Cln', 'Clns', '51_Col'],
	verses: [29, 23, 25, 18]
},
{
	names: ['1 Thessalonians', '1Th', '1 Thess', '1Thess', 'ITh', '1 Thes', '1Thes', '1 The', '1The', '1 Th', '1Th', 'I Thessalonians', 'I Thess', 'I The', 'I Th', '52_1Thess'],
	verses: [10, 20, 13, 18, 28]
},
{
	names: ['2 Thessalonians', '2Th', '2 Thess', '2 Thess', '2Thess', 'IITh', '2 Thes', '2Thes', '2 The', '2The', '2 Th', '2Th', 'II Thessalonians', 'II Thess', 'II The', 'II Th', '53_1Thess'],
	verses: [12, 17, 18]
},
{
	names: ['1 Timothy', '1Ti', '1 Tim', '1Tim', '1 Ti', 'ITi', '1Ti', 'I Timothy', 'I Tim', 'I Ti', '54_1Tim'],
	verses: [20, 15, 16, 16, 25, 21]
},
{
	names: ['2 Timothy', '2Ti', '2 Tim', '2 Tim', '2Tim', '2 Ti', 'IITi', '2Ti', 'II Timothy', 'II Tim', 'II Ti', '55_2Tim'],
	verses: [18, 26, 17, 22]
},
{
	names: ['Titus', 'Ti', 'Tit', 'Tt', 'Ts', '56_Titus'],
	verses: [16, 15, 15]
},
{
	names: ['Philemon', 'Pm', 'Phile', 'Phile', 'Philm', 'Pm', '57_Phlm'],
	verses: [25]
},
{
	names: ['Hebrews', 'He', 'Heb', 'Hw', '58_Heb'],
	verses: [14, 18, 19, 16, 14, 20, 28, 13, 28, 39, 40, 29, 25]
},
{
	names: ['James', 'Jm', 'Jam', 'Jas', 'Ja', '59_Jas'],
	verses: [27, 26, 18, 17, 20]
},
{
	names: ['1 Peter', '1P', '1 Pet', '1Pet', 'IPe', '1P', 'I Peter', 'I Pet', 'I Pe', '60_1Pet'],
	verses: [25, 25, 22, 19, 14]
},
{
	names: ['2 Peter', '2P', '2 Pet', '2Pet', '2Pe', 'IIP', 'II Peter', 'II Pet', 'II Pe', '61_2Pet'],
	verses: [21, 22, 18]
},
{
	names: ['1 John', '1J', '1 Jn', '1Jn', '1 Jo', 'IJo', 'I John', 'I Jo', 'I Jn', '62_1John'],
	verses: [10, 29, 24, 21, 21]
},
{
	names: ['2 John', '2J', '2 Jn', '2Jn', '2 Jo', 'IIJo', 'II John', 'II Jo', 'II Jn', '63_2John'],
	verses: [13]
},
{
	names: ['3 John', '3J', '3 Jn', '3 Jn', '3Jn', '3 Jo', 'IIIJo', 'III John', 'III Jo', 'III Jn', '64_3John'],
	verses: [14]
},
{
	names: ['Jude', '65_Jude'],
	verses: [25]
},
{
	names: ['Revelation', 'Re', 'Rev', 'Rvltn', '66_Rev'],
	verses: [20, 29, 22, 11, 14, 17, 17, 13, 21, 11, 19, 17, 18, 20, 8, 21, 18, 24, 21, 15, 27, 20]
}
];

//Defines the information used for daily devotion(JSON Data Type):
//Note that there are 4 entries per day... So Day 10 would include - 4*10=40 - So Entries 40-43
var daily = {};
daily.Days = [
{"plan":"0","reference":"Genesis 1","refcnt":"0"},
{"plan":"0","reference":"Matthew 1","refcnt":"1"},
{"plan":"0","reference":"Ezra 1","refcnt":"2"},
{"plan":"0","reference":"Acts 1","refcnt":"3"},
{"plan":"1","reference":"Genesis 2","refcnt":"0"},
{"plan":"1","reference":"Matthew 2","refcnt":"1"},
{"plan":"1","reference":"Ezra 2","refcnt":"2"},
{"plan":"1","reference":"Acts 2","refcnt":"3"},
{"plan":"2","reference":"Genesis 3","refcnt":"0"},
{"plan":"2","reference":"Matthew 3","refcnt":"1"},
{"plan":"2","reference":"Ezra 3","refcnt":"2"},
{"plan":"2","reference":"Acts 3","refcnt":"3"},
{"plan":"3","reference":"Genesis 4","refcnt":"0"},
{"plan":"3","reference":"Matthew 4","refcnt":"1"},
{"plan":"3","reference":"Ezra 4","refcnt":"2"},
{"plan":"3","reference":"Acts 4","refcnt":"3"},
{"plan":"4","reference":"Genesis 5","refcnt":"0"},
{"plan":"4","reference":"Matthew 5","refcnt":"1"},
{"plan":"4","reference":"Ezra 5","refcnt":"2"},
{"plan":"4","reference":"Acts 5","refcnt":"3"},
{"plan":"5","reference":"Genesis 6","refcnt":"0"},
{"plan":"5","reference":"Matthew 6","refcnt":"1"},
{"plan":"5","reference":"Ezra 6","refcnt":"2"},
{"plan":"5","reference":"Acts 6","refcnt":"3"},
{"plan":"6","reference":"Genesis 7","refcnt":"0"},
{"plan":"6","reference":"Matthew 7","refcnt":"1"},
{"plan":"6","reference":"Ezra 7","refcnt":"2"},
{"plan":"6","reference":"Acts 7","refcnt":"3"},
{"plan":"7","reference":"Genesis 8","refcnt":"0"},
{"plan":"7","reference":"Matthew 8","refcnt":"1"},
{"plan":"7","reference":"Ezra 8","refcnt":"2"},
{"plan":"7","reference":"Acts 8","refcnt":"3"},
{"plan":"8","reference":"Genesis 9-10","refcnt":"0"},
{"plan":"8","reference":"Matthew 9","refcnt":"1"},
{"plan":"8","reference":"Ezra 9","refcnt":"2"},
{"plan":"8","reference":"Acts 9","refcnt":"3"},
{"plan":"9","reference":"Genesis 11","refcnt":"0"},
{"plan":"9","reference":"Matthew 10","refcnt":"1"},
{"plan":"9","reference":"Ezra 10","refcnt":"2"},
{"plan":"9","reference":"Acts 10","refcnt":"3"},
{"plan":"10","reference":"Genesis 12","refcnt":"0"},
{"plan":"10","reference":"Matthew 11","refcnt":"1"},
{"plan":"10","reference":"Nehemiah 1","refcnt":"2"},
{"plan":"10","reference":"Acts 11","refcnt":"3"},
{"plan":"11","reference":"Genesis 13","refcnt":"0"},
{"plan":"11","reference":"Matthew 12","refcnt":"1"},
{"plan":"11","reference":"Nehemiah 2","refcnt":"2"},
{"plan":"11","reference":"Acts 12","refcnt":"3"},
{"plan":"12","reference":"Genesis 14","refcnt":"0"},
{"plan":"12","reference":"Matthew 13","refcnt":"1"},
{"plan":"12","reference":"Nehemiah 3","refcnt":"2"},
{"plan":"12","reference":"Acts 13","refcnt":"3"},
{"plan":"13","reference":"Genesis 15","refcnt":"0"},
{"plan":"13","reference":"Matthew 14","refcnt":"1"},
{"plan":"13","reference":"Nehemiah 4","refcnt":"2"},
{"plan":"13","reference":"Acts 14","refcnt":"3"},
{"plan":"14","reference":"Genesis 16","refcnt":"0"},
{"plan":"14","reference":"Matthew 15","refcnt":"1"},
{"plan":"14","reference":"Nehemiah 5","refcnt":"2"},
{"plan":"14","reference":"Acts 15","refcnt":"3"},
{"plan":"15","reference":"Genesis 17","refcnt":"0"},
{"plan":"15","reference":"Matthew 16","refcnt":"1"},
{"plan":"15","reference":"Nehemiah 6","refcnt":"2"},
{"plan":"15","reference":"Acts 16","refcnt":"3"},
{"plan":"16","reference":"Genesis 18","refcnt":"0"},
{"plan":"16","reference":"Matthew 17","refcnt":"1"},
{"plan":"16","reference":"Nehemiah 7","refcnt":"2"},
{"plan":"16","reference":"Acts 17","refcnt":"3"},
{"plan":"17","reference":"Genesis 19","refcnt":"0"},
{"plan":"17","reference":"Matthew 18","refcnt":"1"},
{"plan":"17","reference":"Nehemiah 8","refcnt":"2"},
{"plan":"17","reference":"Acts 18","refcnt":"3"},
{"plan":"18","reference":"Genesis 20","refcnt":"0"},
{"plan":"18","reference":"Matthew 19","refcnt":"1"},
{"plan":"18","reference":"Nehemiah 9","refcnt":"2"},
{"plan":"18","reference":"Acts 19","refcnt":"3"},
{"plan":"19","reference":"Genesis 21","refcnt":"0"},
{"plan":"19","reference":"Matthew 20","refcnt":"1"},
{"plan":"19","reference":"Nehemiah 10","refcnt":"2"},
{"plan":"19","reference":"Acts 20","refcnt":"3"},
{"plan":"20","reference":"Genesis 22","refcnt":"0"},
{"plan":"20","reference":"Matthew 21","refcnt":"1"},
{"plan":"20","reference":"Nehemiah 11","refcnt":"2"},
{"plan":"20","reference":"Acts 21","refcnt":"3"},
{"plan":"21","reference":"Genesis 23","refcnt":"0"},
{"plan":"21","reference":"Matthew 22","refcnt":"1"},
{"plan":"21","reference":"Nehemiah 12","refcnt":"2"},
{"plan":"21","reference":"Acts 22","refcnt":"3"},
{"plan":"22","reference":"Genesis 24","refcnt":"0"},
{"plan":"22","reference":"Matthew 23","refcnt":"1"},
{"plan":"22","reference":"Nehemiah 13","refcnt":"2"},
{"plan":"22","reference":"Acts 23","refcnt":"3"},
{"plan":"23","reference":"Genesis 25","refcnt":"0"},
{"plan":"23","reference":"Matthew 24","refcnt":"1"},
{"plan":"23","reference":"Esther 1","refcnt":"2"},
{"plan":"23","reference":"Acts 24","refcnt":"3"},
{"plan":"24","reference":"Genesis 26","refcnt":"0"},
{"plan":"24","reference":"Matthew 25","refcnt":"1"},
{"plan":"24","reference":"Esther 2","refcnt":"2"},
{"plan":"24","reference":"Acts 25","refcnt":"3"},
{"plan":"25","reference":"Genesis 27","refcnt":"0"},
{"plan":"25","reference":"Matthew 26","refcnt":"1"},
{"plan":"25","reference":"Esther 3","refcnt":"2"},
{"plan":"25","reference":"Acts 26","refcnt":"3"},
{"plan":"26","reference":"Genesis 28","refcnt":"0"},
{"plan":"26","reference":"Matthew 27","refcnt":"1"},
{"plan":"26","reference":"Esther 4","refcnt":"2"},
{"plan":"26","reference":"Acts 27","refcnt":"3"},
{"plan":"27","reference":"Genesis 29","refcnt":"0"},
{"plan":"27","reference":"Matthew 28","refcnt":"1"},
{"plan":"27","reference":"Esther 5","refcnt":"2"},
{"plan":"27","reference":"Acts 28","refcnt":"3"},
{"plan":"28","reference":"Genesis30","refcnt":"0"},
{"plan":"28","reference":"Mark1","refcnt":"1"},
{"plan":"28","reference":"Esther6","refcnt":"2"},
{"plan":"28","reference":"Romans1","refcnt":"3"},
{"plan":"29","reference":"Genesis31","refcnt":"0"},
{"plan":"29","reference":"Mark2","refcnt":"1"},
{"plan":"29","reference":"Esther7","refcnt":"2"},
{"plan":"29","reference":"Romans2","refcnt":"3"},
{"plan":"30","reference":"Genesis32","refcnt":"0"},
{"plan":"30","reference":"Mark3","refcnt":"1"},
{"plan":"30","reference":"Esther8","refcnt":"2"},
{"plan":"30","reference":"Romans3","refcnt":"3"},
{"plan":"31","reference":"Genesis33","refcnt":"0"},
{"plan":"31","reference":"Mark4","refcnt":"1"},
{"plan":"31","reference":"Esther9-10","refcnt":"2"},
{"plan":"31","reference":"Romans4","refcnt":"3"},
{"plan":"32","reference":"Genesis34","refcnt":"0"},
{"plan":"32","reference":"Mark5","refcnt":"1"},
{"plan":"32","reference":"Job1","refcnt":"2"},
{"plan":"32","reference":"Romans5","refcnt":"3"},
{"plan":"33","reference":"Genesis35-36","refcnt":"0"},
{"plan":"33","reference":"Mark6","refcnt":"1"},
{"plan":"33","reference":"Job2","refcnt":"2"},
{"plan":"33","reference":"Romans6","refcnt":"3"},
{"plan":"34","reference":"Genesis37","refcnt":"0"},
{"plan":"34","reference":"Mark7","refcnt":"1"},
{"plan":"34","reference":"Job3","refcnt":"2"},
{"plan":"34","reference":"Romans7","refcnt":"3"},
{"plan":"35","reference":"Genesis38","refcnt":"0"},
{"plan":"35","reference":"Mark8","refcnt":"1"},
{"plan":"35","reference":"Job4","refcnt":"2"},
{"plan":"35","reference":"Romans8","refcnt":"3"},
{"plan":"36","reference":"Genesis39","refcnt":"0"},
{"plan":"36","reference":"Mark9","refcnt":"1"},
{"plan":"36","reference":"Job5","refcnt":"2"},
{"plan":"36","reference":"Romans9","refcnt":"3"},
{"plan":"37","reference":"Genesis40","refcnt":"0"},
{"plan":"37","reference":"Mark10","refcnt":"1"},
{"plan":"37","reference":"Job6","refcnt":"2"},
{"plan":"37","reference":"Romans10","refcnt":"3"},
{"plan":"38","reference":"Genesis41","refcnt":"0"},
{"plan":"38","reference":"Mark11","refcnt":"1"},
{"plan":"38","reference":"Job7","refcnt":"2"},
{"plan":"38","reference":"Romans11","refcnt":"3"},
{"plan":"39","reference":"Genesis42","refcnt":"0"},
{"plan":"39","reference":"Mark12","refcnt":"1"},
{"plan":"39","reference":"Job8","refcnt":"2"},
{"plan":"39","reference":"Romans12","refcnt":"3"},
{"plan":"40","reference":"Genesis43","refcnt":"0"},
{"plan":"40","reference":"Mark13","refcnt":"1"},
{"plan":"40","reference":"Job9","refcnt":"2"},
{"plan":"40","reference":"Romans13","refcnt":"3"},
{"plan":"41","reference":"Genesis44","refcnt":"0"},
{"plan":"41","reference":"Mark14","refcnt":"1"},
{"plan":"41","reference":"Job10","refcnt":"2"},
{"plan":"41","reference":"Romans14","refcnt":"3"},
{"plan":"42","reference":"Genesis45","refcnt":"0"},
{"plan":"42","reference":"Mark15","refcnt":"1"},
{"plan":"42","reference":"Job11","refcnt":"2"},
{"plan":"42","reference":"Romans15","refcnt":"3"},
{"plan":"43","reference":"Genesis46","refcnt":"0"},
{"plan":"43","reference":"Mark16","refcnt":"1"},
{"plan":"43","reference":"Job12","refcnt":"2"},
{"plan":"43","reference":"Romans16","refcnt":"3"},
{"plan":"44","reference":"Genesis47","refcnt":"0"},
{"plan":"44","reference":"Luke1:1-38","refcnt":"1"},
{"plan":"44","reference":"Job13","refcnt":"2"},
{"plan":"44","reference":"1Corinthians1","refcnt":"3"},
{"plan":"45","reference":"Genesis48","refcnt":"0"},
{"plan":"45","reference":"Luke1:39-80","refcnt":"1"},
{"plan":"45","reference":"Job14","refcnt":"2"},
{"plan":"45","reference":"1Corinthians2","refcnt":"3"},
{"plan":"46","reference":"Genesis49","refcnt":"0"},
{"plan":"46","reference":"Luke2","refcnt":"1"},
{"plan":"46","reference":"Job15","refcnt":"2"},
{"plan":"46","reference":"1Corinthians3","refcnt":"3"},
{"plan":"47","reference":"Genesis50","refcnt":"0"},
{"plan":"47","reference":"Luke3","refcnt":"1"},
{"plan":"47","reference":"Job16-17","refcnt":"2"},
{"plan":"47","reference":"1Corinthians4","refcnt":"3"},
{"plan":"48","reference":"Exodus1","refcnt":"0"},
{"plan":"48","reference":"Luke4","refcnt":"1"},
{"plan":"48","reference":"Job18","refcnt":"2"},
{"plan":"48","reference":"1Corinthians5","refcnt":"3"},
{"plan":"49","reference":"Exodus2","refcnt":"0"},
{"plan":"49","reference":"Luke5","refcnt":"1"},
{"plan":"49","reference":"Job19","refcnt":"2"},
{"plan":"49","reference":"1Corinthians6","refcnt":"3"},
{"plan":"50","reference":"Exodus3","refcnt":"0"},
{"plan":"50","reference":"Luke6","refcnt":"1"},
{"plan":"50","reference":"Job20","refcnt":"2"},
{"plan":"50","reference":"1Corinthians7","refcnt":"3"},
{"plan":"51","reference":"Exodus4","refcnt":"0"},
{"plan":"51","reference":"Luke7","refcnt":"1"},
{"plan":"51","reference":"Job21","refcnt":"2"},
{"plan":"51","reference":"1Corinthians8","refcnt":"3"},
{"plan":"52","reference":"Exodus5","refcnt":"0"},
{"plan":"52","reference":"Luke8","refcnt":"1"},
{"plan":"52","reference":"Job22","refcnt":"2"},
{"plan":"52","reference":"1Corinthians9","refcnt":"3"},
{"plan":"53","reference":"Exodus6","refcnt":"0"},
{"plan":"53","reference":"Luke9","refcnt":"1"},
{"plan":"53","reference":"Job23","refcnt":"2"},
{"plan":"53","reference":"1Corinthians10","refcnt":"3"},
{"plan":"54","reference":"Exodus7","refcnt":"0"},
{"plan":"54","reference":"Luke10","refcnt":"1"},
{"plan":"54","reference":"Job24","refcnt":"2"},
{"plan":"54","reference":"1Corinthians11","refcnt":"3"},
{"plan":"55","reference":"Exodus8","refcnt":"0"},
{"plan":"55","reference":"Luke11","refcnt":"1"},
{"plan":"55","reference":"Job25-26","refcnt":"2"},
{"plan":"55","reference":"1Corinthians12","refcnt":"3"},
{"plan":"56","reference":"Exodus9","refcnt":"0"},
{"plan":"56","reference":"Luke12","refcnt":"1"},
{"plan":"56","reference":"Job27","refcnt":"2"},
{"plan":"56","reference":"1Corinthians13","refcnt":"3"},
{"plan":"57","reference":"Exodus10","refcnt":"0"},
{"plan":"57","reference":"Luke13","refcnt":"1"},
{"plan":"57","reference":"Job28","refcnt":"2"},
{"plan":"57","reference":"1Corinthians14","refcnt":"3"},
{"plan":"58","reference":"Exodus11:1-12:20","refcnt":"0"},
{"plan":"58","reference":"Luke14","refcnt":"1"},
{"plan":"58","reference":"Job29","refcnt":"2"},
{"plan":"58","reference":"1Corinthians15","refcnt":"3"},
{"plan":"59","reference":"Exodus12:21-51","refcnt":"0"},
{"plan":"59","reference":"Luke15","refcnt":"1"},
{"plan":"59","reference":"Job30","refcnt":"2"},
{"plan":"59","reference":"1Corinthians16","refcnt":"3"},
{"plan":"60","reference":"Exodus13","refcnt":"0"},
{"plan":"60","reference":"Luke16","refcnt":"1"},
{"plan":"60","reference":"Job31","refcnt":"2"},
{"plan":"60","reference":"2Corinthians1","refcnt":"3"},
{"plan":"61","reference":"Exodus14","refcnt":"0"},
{"plan":"61","reference":"Luke17","refcnt":"1"},
{"plan":"61","reference":"Job32","refcnt":"2"},
{"plan":"61","reference":"2Corinthians2","refcnt":"3"},
{"plan":"62","reference":"Exodus15","refcnt":"0"},
{"plan":"62","reference":"Luke18","refcnt":"1"},
{"plan":"62","reference":"Job33","refcnt":"2"},
{"plan":"62","reference":"2Corinthians3","refcnt":"3"},
{"plan":"63","reference":"Exodus16","refcnt":"0"},
{"plan":"63","reference":"Luke19","refcnt":"1"},
{"plan":"63","reference":"Job34","refcnt":"2"},
{"plan":"63","reference":"2Corinthians4","refcnt":"3"},
{"plan":"64","reference":"Exodus17","refcnt":"0"},
{"plan":"64","reference":"Luke20","refcnt":"1"},
{"plan":"64","reference":"Job35","refcnt":"2"},
{"plan":"64","reference":"2Corinthians5","refcnt":"3"},
{"plan":"65","reference":"Exodus18","refcnt":"0"},
{"plan":"65","reference":"Luke21","refcnt":"1"},
{"plan":"65","reference":"Job36","refcnt":"2"},
{"plan":"65","reference":"2Corinthians6","refcnt":"3"},
{"plan":"66","reference":"Exodus19","refcnt":"0"},
{"plan":"66","reference":"Luke22","refcnt":"1"},
{"plan":"66","reference":"Job37","refcnt":"2"},
{"plan":"66","reference":"2Corinthians7","refcnt":"3"},
{"plan":"67","reference":"Exodus20","refcnt":"0"},
{"plan":"67","reference":"Luke23","refcnt":"1"},
{"plan":"67","reference":"Job38","refcnt":"2"},
{"plan":"67","reference":"2Corinthians8","refcnt":"3"},
{"plan":"68","reference":"Exodus21","refcnt":"0"},
{"plan":"68","reference":"Luke24","refcnt":"1"},
{"plan":"68","reference":"Job39","refcnt":"2"},
{"plan":"68","reference":"2Corinthians9","refcnt":"3"},
{"plan":"69","reference":"Exodus22","refcnt":"0"},
{"plan":"69","reference":"John1","refcnt":"1"},
{"plan":"69","reference":"Job40","refcnt":"2"},
{"plan":"69","reference":"2Corinthians10","refcnt":"3"},
{"plan":"70","reference":"Exodus23","refcnt":"0"},
{"plan":"70","reference":"John2","refcnt":"1"},
{"plan":"70","reference":"Job41","refcnt":"2"},
{"plan":"70","reference":"2Corinthians11","refcnt":"3"},
{"plan":"71","reference":"Exodus24","refcnt":"0"},
{"plan":"71","reference":"John3","refcnt":"1"},
{"plan":"71","reference":"Job42","refcnt":"2"},
{"plan":"71","reference":"2Corinthians12","refcnt":"3"},
{"plan":"72","reference":"Exodus25","refcnt":"0"},
{"plan":"72","reference":"John4","refcnt":"1"},
{"plan":"72","reference":"Proverbs1","refcnt":"2"},
{"plan":"72","reference":"2Corinthians13","refcnt":"3"},
{"plan":"73","reference":"Exodus26","refcnt":"0"},
{"plan":"73","reference":"John5","refcnt":"1"},
{"plan":"73","reference":"Proverbs2","refcnt":"2"},
{"plan":"73","reference":"Galatians1","refcnt":"3"},
{"plan":"74","reference":"Exodus27","refcnt":"0"},
{"plan":"74","reference":"John6","refcnt":"1"},
{"plan":"74","reference":"Proverbs3","refcnt":"2"},
{"plan":"74","reference":"Galatians2","refcnt":"3"},
{"plan":"75","reference":"Exodus28","refcnt":"0"},
{"plan":"75","reference":"John7","refcnt":"1"},
{"plan":"75","reference":"Proverbs4","refcnt":"2"},
{"plan":"75","reference":"Galatians3","refcnt":"3"},
{"plan":"76","reference":"Exodus29","refcnt":"0"},
{"plan":"76","reference":"John8","refcnt":"1"},
{"plan":"76","reference":"Proverbs5","refcnt":"2"},
{"plan":"76","reference":"Galatians4","refcnt":"3"},
{"plan":"77","reference":"Exodus30","refcnt":"0"},
{"plan":"77","reference":"John9","refcnt":"1"},
{"plan":"77","reference":"Proverbs6","refcnt":"2"},
{"plan":"77","reference":"Galatians5","refcnt":"3"},
{"plan":"78","reference":"Exodus31","refcnt":"0"},
{"plan":"78","reference":"John10","refcnt":"1"},
{"plan":"78","reference":"Proverbs7","refcnt":"2"},
{"plan":"78","reference":"Galatians6","refcnt":"3"},
{"plan":"79","reference":"Exodus32","refcnt":"0"},
{"plan":"79","reference":"John11","refcnt":"1"},
{"plan":"79","reference":"Proverbs8","refcnt":"2"},
{"plan":"79","reference":"Ephesians1","refcnt":"3"},
{"plan":"80","reference":"Exodus33","refcnt":"0"},
{"plan":"80","reference":"John12","refcnt":"1"},
{"plan":"80","reference":"Proverbs9","refcnt":"2"},
{"plan":"80","reference":"Ephesians2","refcnt":"3"},
{"plan":"81","reference":"Exodus34","refcnt":"0"},
{"plan":"81","reference":"John13","refcnt":"1"},
{"plan":"81","reference":"Proverbs10","refcnt":"2"},
{"plan":"81","reference":"Ephesians3","refcnt":"3"},
{"plan":"82","reference":"Exodus35","refcnt":"0"},
{"plan":"82","reference":"John14","refcnt":"1"},
{"plan":"82","reference":"Proverbs11","refcnt":"2"},
{"plan":"82","reference":"Ephesians4","refcnt":"3"},
{"plan":"83","reference":"Exodus36","refcnt":"0"},
{"plan":"83","reference":"John15","refcnt":"1"},
{"plan":"83","reference":"Proverbs12","refcnt":"2"},
{"plan":"83","reference":"Ephesians5","refcnt":"3"},
{"plan":"84","reference":"Exodus37","refcnt":"0"},
{"plan":"84","reference":"John16","refcnt":"1"},
{"plan":"84","reference":"Proverbs13","refcnt":"2"},
{"plan":"84","reference":"Ephesians6","refcnt":"3"},
{"plan":"85","reference":"Exodus38","refcnt":"0"},
{"plan":"85","reference":"John17","refcnt":"1"},
{"plan":"85","reference":"Proverbs14","refcnt":"2"},
{"plan":"85","reference":"Philippians1","refcnt":"3"},
{"plan":"86","reference":"Exodus39","refcnt":"0"},
{"plan":"86","reference":"John18","refcnt":"1"},
{"plan":"86","reference":"Proverbs15","refcnt":"2"},
{"plan":"86","reference":"Philippians2","refcnt":"3"},
{"plan":"87","reference":"Exodus40","refcnt":"0"},
{"plan":"87","reference":"John19","refcnt":"1"},
{"plan":"87","reference":"Proverbs16","refcnt":"2"},
{"plan":"87","reference":"Philippians3","refcnt":"3"},
{"plan":"88","reference":"Leviticus1","refcnt":"0"},
{"plan":"88","reference":"John20","refcnt":"1"},
{"plan":"88","reference":"Proverbs17","refcnt":"2"},
{"plan":"88","reference":"Philippians4","refcnt":"3"},
{"plan":"89","reference":"Leviticus2-3","refcnt":"0"},
{"plan":"89","reference":"John21","refcnt":"1"},
{"plan":"89","reference":"Proverbs18","refcnt":"2"},
{"plan":"89","reference":"Colossians1","refcnt":"3"},
{"plan":"90","reference":"Leviticus4","refcnt":"0"},
{"plan":"90","reference":"Psalms1-2","refcnt":"1"},
{"plan":"90","reference":"Proverbs19","refcnt":"2"},
{"plan":"90","reference":"Colossians2","refcnt":"3"},
{"plan":"91","reference":"Leviticus5","refcnt":"0"},
{"plan":"91","reference":"Psalms3-4","refcnt":"1"},
{"plan":"91","reference":"Proverbs20","refcnt":"2"},
{"plan":"91","reference":"Colossians3","refcnt":"3"},
{"plan":"92","reference":"Leviticus6","refcnt":"0"},
{"plan":"92","reference":"Psalms5-6","refcnt":"1"},
{"plan":"92","reference":"Proverbs21","refcnt":"2"},
{"plan":"92","reference":"Colossians4","refcnt":"3"},
{"plan":"93","reference":"Leviticus7","refcnt":"0"},
{"plan":"93","reference":"Psalms7-8","refcnt":"1"},
{"plan":"93","reference":"Proverbs22","refcnt":"2"},
{"plan":"93","reference":"1Thessalonians1","refcnt":"3"},
{"plan":"94","reference":"Leviticus8","refcnt":"0"},
{"plan":"94","reference":"Psalms9","refcnt":"1"},
{"plan":"94","reference":"Proverbs23","refcnt":"2"},
{"plan":"94","reference":"1Thessalonians2","refcnt":"3"},
{"plan":"95","reference":"Leviticus9","refcnt":"0"},
{"plan":"95","reference":"Psalms10","refcnt":"1"},
{"plan":"95","reference":"Proverbs24","refcnt":"2"},
{"plan":"95","reference":"1Thessalonians3","refcnt":"3"},
{"plan":"96","reference":"Leviticus10","refcnt":"0"},
{"plan":"96","reference":"Psalms11-12","refcnt":"1"},
{"plan":"96","reference":"Proverbs25","refcnt":"2"},
{"plan":"96","reference":"1Thessalonians4","refcnt":"3"},
{"plan":"97","reference":"Leviticus11-12","refcnt":"0"},
{"plan":"97","reference":"Psalms13-14","refcnt":"1"},
{"plan":"97","reference":"Proverbs26","refcnt":"2"},
{"plan":"97","reference":"1Thessalonians5","refcnt":"3"},
{"plan":"98","reference":"Leviticus13","refcnt":"0"},
{"plan":"98","reference":"Psalms15-16","refcnt":"1"},
{"plan":"98","reference":"Proverbs27","refcnt":"2"},
{"plan":"98","reference":"2Thessalonians1","refcnt":"3"},
{"plan":"99","reference":"Leviticus14","refcnt":"0"},
{"plan":"99","reference":"Psalms17","refcnt":"1"},
{"plan":"99","reference":"Proverbs28","refcnt":"2"},
{"plan":"99","reference":"2Thessalonians2","refcnt":"3"},
{"plan":"100","reference":"Leviticus15","refcnt":"0"},
{"plan":"100","reference":"Psalms18","refcnt":"1"},
{"plan":"100","reference":"Proverbs29","refcnt":"2"},
{"plan":"100","reference":"2Thessalonians3","refcnt":"3"},
{"plan":"101","reference":"Leviticus16","refcnt":"0"},
{"plan":"101","reference":"Psalms19","refcnt":"1"},
{"plan":"101","reference":"Proverbs30","refcnt":"2"},
{"plan":"101","reference":"1Timothy1","refcnt":"3"},
{"plan":"102","reference":"Leviticus17","refcnt":"0"},
{"plan":"102","reference":"Psalms20-21","refcnt":"1"},
{"plan":"102","reference":"Proverbs31","refcnt":"2"},
{"plan":"102","reference":"1Timothy2","refcnt":"3"},
{"plan":"103","reference":"Leviticus18","refcnt":"0"},
{"plan":"103","reference":"Psalms22","refcnt":"1"},
{"plan":"103","reference":"Ecclesiastes1","refcnt":"2"},
{"plan":"103","reference":"1Timothy3","refcnt":"3"},
{"plan":"104","reference":"Leviticus19","refcnt":"0"},
{"plan":"104","reference":"Psalms23-24","refcnt":"1"},
{"plan":"104","reference":"Ecclesiastes2","refcnt":"2"},
{"plan":"104","reference":"1Timothy4","refcnt":"3"},
{"plan":"105","reference":"Leviticus20","refcnt":"0"},
{"plan":"105","reference":"Psalms25","refcnt":"1"},
{"plan":"105","reference":"Ecclesiastes3","refcnt":"2"},
{"plan":"105","reference":"1Timothy5","refcnt":"3"},
{"plan":"106","reference":"Leviticus21","refcnt":"0"},
{"plan":"106","reference":"Psalms26-27","refcnt":"1"},
{"plan":"106","reference":"Ecclesiastes4","refcnt":"2"},
{"plan":"106","reference":"1Timothy6","refcnt":"3"},
{"plan":"107","reference":"Leviticus22","refcnt":"0"},
{"plan":"107","reference":"Psalms28-29","refcnt":"1"},
{"plan":"107","reference":"Ecclesiastes5","refcnt":"2"},
{"plan":"107","reference":"2Timothy1","refcnt":"3"},
{"plan":"108","reference":"Leviticus23","refcnt":"0"},
{"plan":"108","reference":"Psalms30","refcnt":"1"},
{"plan":"108","reference":"Ecclesiastes6","refcnt":"2"},
{"plan":"108","reference":"2Timothy2","refcnt":"3"},
{"plan":"109","reference":"Leviticus24","refcnt":"0"},
{"plan":"109","reference":"Psalms31","refcnt":"1"},
{"plan":"109","reference":"Ecclesiastes7","refcnt":"2"},
{"plan":"109","reference":"2Timothy3","refcnt":"3"},
{"plan":"110","reference":"Leviticus25","refcnt":"0"},
{"plan":"110","reference":"Psalms32","refcnt":"1"},
{"plan":"110","reference":"Ecclesiastes8","refcnt":"2"},
{"plan":"110","reference":"2Timothy4","refcnt":"3"},
{"plan":"111","reference":"Leviticus26","refcnt":"0"},
{"plan":"111","reference":"Psalms33","refcnt":"1"},
{"plan":"111","reference":"Ecclesiastes9","refcnt":"2"},
{"plan":"111","reference":"Titus1","refcnt":"3"},
{"plan":"112","reference":"Leviticus27","refcnt":"0"},
{"plan":"112","reference":"Psalms34","refcnt":"1"},
{"plan":"112","reference":"Ecclesiastes10","refcnt":"2"},
{"plan":"112","reference":"Titus2","refcnt":"3"},
{"plan":"113","reference":"Numbers1","refcnt":"0"},
{"plan":"113","reference":"Psalms35","refcnt":"1"},
{"plan":"113","reference":"Ecclesiastes11","refcnt":"2"},
{"plan":"113","reference":"Titus3","refcnt":"3"},
{"plan":"114","reference":"Numbers2","refcnt":"0"},
{"plan":"114","reference":"Psalms36","refcnt":"1"},
{"plan":"114","reference":"Ecclesiastes12","refcnt":"2"},
{"plan":"114","reference":"Philemon1","refcnt":"3"},
{"plan":"115","reference":"Numbers3","refcnt":"0"},
{"plan":"115","reference":"Psalms37","refcnt":"1"},
{"plan":"115","reference":"SongofSongs1","refcnt":"2"},
{"plan":"115","reference":"Hebrews1","refcnt":"3"},
{"plan":"116","reference":"Numbers4","refcnt":"0"},
{"plan":"116","reference":"Psalms38","refcnt":"1"},
{"plan":"116","reference":"SongofSongs2","refcnt":"2"},
{"plan":"116","reference":"Hebrews2","refcnt":"3"},
{"plan":"117","reference":"Numbers5","refcnt":"0"},
{"plan":"117","reference":"Psalms39","refcnt":"1"},
{"plan":"117","reference":"SongofSongs3","refcnt":"2"},
{"plan":"117","reference":"Hebrews3","refcnt":"3"},
{"plan":"118","reference":"Numbers6","refcnt":"0"},
{"plan":"118","reference":"Psalms40-41","refcnt":"1"},
{"plan":"118","reference":"SongofSongs4","refcnt":"2"},
{"plan":"118","reference":"Hebrews4","refcnt":"3"},
{"plan":"119","reference":"Numbers7","refcnt":"0"},
{"plan":"119","reference":"Psalms42-43","refcnt":"1"},
{"plan":"119","reference":"SongofSongs5","refcnt":"2"},
{"plan":"119","reference":"Hebrews5","refcnt":"3"},
{"plan":"120","reference":"Numbers8","refcnt":"0"},
{"plan":"120","reference":"Psalms44","refcnt":"1"},
{"plan":"120","reference":"SongofSongs6","refcnt":"2"},
{"plan":"120","reference":"Hebrews6","refcnt":"3"},
{"plan":"121","reference":"Numbers9","refcnt":"0"},
{"plan":"121","reference":"Psalms45","refcnt":"1"},
{"plan":"121","reference":"SongofSongs7","refcnt":"2"},
{"plan":"121","reference":"Hebrews7","refcnt":"3"},
{"plan":"122","reference":"Numbers10","refcnt":"0"},
{"plan":"122","reference":"Psalms46-47","refcnt":"1"},
{"plan":"122","reference":"SongofSongs8","refcnt":"2"},
{"plan":"122","reference":"Hebrews8","refcnt":"3"},
{"plan":"123","reference":"Numbers11","refcnt":"0"},
{"plan":"123","reference":"Psalms48","refcnt":"1"},
{"plan":"123","reference":"Isaiah1","refcnt":"2"},
{"plan":"123","reference":"Hebrews9","refcnt":"3"},
{"plan":"124","reference":"Numbers12-13","refcnt":"0"},
{"plan":"124","reference":"Psalms49","refcnt":"1"},
{"plan":"124","reference":"Isaiah2","refcnt":"2"},
{"plan":"124","reference":"Hebrews10","refcnt":"3"},
{"plan":"125","reference":"Numbers14","refcnt":"0"},
{"plan":"125","reference":"Psalms50","refcnt":"1"},
{"plan":"125","reference":"Isaiah3-4","refcnt":"2"},
{"plan":"125","reference":"Hebrews11","refcnt":"3"},
{"plan":"126","reference":"Numbers15","refcnt":"0"},
{"plan":"126","reference":"Psalms51","refcnt":"1"},
{"plan":"126","reference":"Isaiah5","refcnt":"2"},
{"plan":"126","reference":"Hebrews12","refcnt":"3"},
{"plan":"127","reference":"Numbers16","refcnt":"0"},
{"plan":"127","reference":"Psalms52-54","refcnt":"1"},
{"plan":"127","reference":"Isaiah6","refcnt":"2"},
{"plan":"127","reference":"Hebrews13","refcnt":"3"},
{"plan":"128","reference":"Numbers17-18","refcnt":"0"},
{"plan":"128","reference":"Psalms55","refcnt":"1"},
{"plan":"128","reference":"Isaiah7","refcnt":"2"},
{"plan":"128","reference":"James1","refcnt":"3"},
{"plan":"129","reference":"Numbers19","refcnt":"0"},
{"plan":"129","reference":"Psalms56-57","refcnt":"1"},
{"plan":"129","reference":"Isaiah8:1-9:7","refcnt":"2"},
{"plan":"129","reference":"James2","refcnt":"3"},
{"plan":"130","reference":"Numbers20","refcnt":"0"},
{"plan":"130","reference":"Psalms58-59","refcnt":"1"},
{"plan":"130","reference":"Isaiah9:8-10:4","refcnt":"2"},
{"plan":"130","reference":"James3","refcnt":"3"},
{"plan":"131","reference":"Numbers21","refcnt":"0"},
{"plan":"131","reference":"Psalms60-61","refcnt":"1"},
{"plan":"131","reference":"Isaiah10:5-34","refcnt":"2"},
{"plan":"131","reference":"James4","refcnt":"3"},
{"plan":"132","reference":"Numbers22","refcnt":"0"},
{"plan":"132","reference":"Psalms62-63","refcnt":"1"},
{"plan":"132","reference":"Isaiah11-12","refcnt":"2"},
{"plan":"132","reference":"James5","refcnt":"3"},
{"plan":"133","reference":"Numbers23","refcnt":"0"},
{"plan":"133","reference":"Psalms64-65","refcnt":"1"},
{"plan":"133","reference":"Isaiah13","refcnt":"2"},
{"plan":"133","reference":"1Peter1","refcnt":"3"},
{"plan":"134","reference":"Numbers24","refcnt":"0"},
{"plan":"134","reference":"Psalms66-67","refcnt":"1"},
{"plan":"134","reference":"Isaiah14","refcnt":"2"},
{"plan":"134","reference":"1Peter2","refcnt":"3"},
{"plan":"135","reference":"Numbers25","refcnt":"0"},
{"plan":"135","reference":"Psalms68","refcnt":"1"},
{"plan":"135","reference":"Isaiah15","refcnt":"2"},
{"plan":"135","reference":"1Peter3","refcnt":"3"},
{"plan":"136","reference":"Numbers26","refcnt":"0"},
{"plan":"136","reference":"Psalms69","refcnt":"1"},
{"plan":"136","reference":"Isaiah16","refcnt":"2"},
{"plan":"136","reference":"1Peter4","refcnt":"3"},
{"plan":"137","reference":"Numbers27","refcnt":"0"},
{"plan":"137","reference":"Psalms70-71","refcnt":"1"},
{"plan":"137","reference":"Isaiah17-18","refcnt":"2"},
{"plan":"137","reference":"1Peter5","refcnt":"3"},
{"plan":"138","reference":"Numbers28","refcnt":"0"},
{"plan":"138","reference":"Psalms72","refcnt":"1"},
{"plan":"138","reference":"Isaiah19-20","refcnt":"2"},
{"plan":"138","reference":"2Peter1","refcnt":"3"},
{"plan":"139","reference":"Numbers29","refcnt":"0"},
{"plan":"139","reference":"Psalms73","refcnt":"1"},
{"plan":"139","reference":"Isaiah21","refcnt":"2"},
{"plan":"139","reference":"2Peter2","refcnt":"3"},
{"plan":"140","reference":"Numbers30","refcnt":"0"},
{"plan":"140","reference":"Psalms74","refcnt":"1"},
{"plan":"140","reference":"Isaiah22","refcnt":"2"},
{"plan":"140","reference":"2Peter3","refcnt":"3"},
{"plan":"141","reference":"Numbers31","refcnt":"0"},
{"plan":"141","reference":"Psalms75-76","refcnt":"1"},
{"plan":"141","reference":"Isaiah23","refcnt":"2"},
{"plan":"141","reference":"1John1","refcnt":"3"},
{"plan":"142","reference":"Numbers32","refcnt":"0"},
{"plan":"142","reference":"Psalms77","refcnt":"1"},
{"plan":"142","reference":"Isaiah24","refcnt":"2"},
{"plan":"142","reference":"1John2","refcnt":"3"},
{"plan":"143","reference":"Numbers33","refcnt":"0"},
{"plan":"143","reference":"Psalms78:1-39","refcnt":"1"},
{"plan":"143","reference":"Isaiah25","refcnt":"2"},
{"plan":"143","reference":"1John3","refcnt":"3"},
{"plan":"144","reference":"Numbers34","refcnt":"0"},
{"plan":"144","reference":"Psalms78:40-72","refcnt":"1"},
{"plan":"144","reference":"Isaiah26","refcnt":"2"},
{"plan":"144","reference":"1John4","refcnt":"3"},
{"plan":"145","reference":"Numbers35","refcnt":"0"},
{"plan":"145","reference":"Psalms79","refcnt":"1"},
{"plan":"145","reference":"Isaiah27","refcnt":"2"},
{"plan":"145","reference":"1John5","refcnt":"3"},
{"plan":"146","reference":"Numbers36","refcnt":"0"},
{"plan":"146","reference":"Psalms80","refcnt":"1"},
{"plan":"146","reference":"Isaiah28","refcnt":"2"},
{"plan":"146","reference":"2John1","refcnt":"3"},
{"plan":"147","reference":"Deuteronomy1","refcnt":"0"},
{"plan":"147","reference":"Psalms81-82","refcnt":"1"},
{"plan":"147","reference":"Isaiah29","refcnt":"2"},
{"plan":"147","reference":"3John1","refcnt":"3"},
{"plan":"148","reference":"Deuteronomy2","refcnt":"0"},
{"plan":"148","reference":"Psalms83-84","refcnt":"1"},
{"plan":"148","reference":"Isaiah30","refcnt":"2"},
{"plan":"148","reference":"Jude1","refcnt":"3"},
{"plan":"149","reference":"Deuteronomy3","refcnt":"0"},
{"plan":"149","reference":"Psalms85","refcnt":"1"},
{"plan":"149","reference":"Isaiah31","refcnt":"2"},
{"plan":"149","reference":"Revelation1","refcnt":"3"},
{"plan":"150","reference":"Deuteronomy4","refcnt":"0"},
{"plan":"150","reference":"Psalms86-87","refcnt":"1"},
{"plan":"150","reference":"Isaiah32","refcnt":"2"},
{"plan":"150","reference":"Revelation2","refcnt":"3"},
{"plan":"151","reference":"Deuteronomy5","refcnt":"0"},
{"plan":"151","reference":"Psalms88","refcnt":"1"},
{"plan":"151","reference":"Isaiah33","refcnt":"2"},
{"plan":"151","reference":"Revelation3","refcnt":"3"},
{"plan":"152","reference":"Deuteronomy6","refcnt":"0"},
{"plan":"152","reference":"Psalms89","refcnt":"1"},
{"plan":"152","reference":"Isaiah34","refcnt":"2"},
{"plan":"152","reference":"Revelation4","refcnt":"3"},
{"plan":"153","reference":"Deuteronomy7","refcnt":"0"},
{"plan":"153","reference":"Psalms90","refcnt":"1"},
{"plan":"153","reference":"Isaiah35","refcnt":"2"},
{"plan":"153","reference":"Revelation5","refcnt":"3"},
{"plan":"154","reference":"Deuteronomy8","refcnt":"0"},
{"plan":"154","reference":"Psalms91","refcnt":"1"},
{"plan":"154","reference":"Isaiah36","refcnt":"2"},
{"plan":"154","reference":"Revelation6","refcnt":"3"},
{"plan":"155","reference":"Deuteronomy9","refcnt":"0"},
{"plan":"155","reference":"Psalms92-93","refcnt":"1"},
{"plan":"155","reference":"Isaiah37","refcnt":"2"},
{"plan":"155","reference":"Revelation7","refcnt":"3"},
{"plan":"156","reference":"Deuteronomy10","refcnt":"0"},
{"plan":"156","reference":"Psalms94","refcnt":"1"},
{"plan":"156","reference":"Isaiah38","refcnt":"2"},
{"plan":"156","reference":"Revelation8","refcnt":"3"},
{"plan":"157","reference":"Deuteronomy11","refcnt":"0"},
{"plan":"157","reference":"Psalms95-96","refcnt":"1"},
{"plan":"157","reference":"Isaiah39","refcnt":"2"},
{"plan":"157","reference":"Revelation9","refcnt":"3"},
{"plan":"158","reference":"Deuteronomy12","refcnt":"0"},
{"plan":"158","reference":"Psalms97-98","refcnt":"1"},
{"plan":"158","reference":"Isaiah40","refcnt":"2"},
{"plan":"158","reference":"Revelation10","refcnt":"3"},
{"plan":"159","reference":"Deuteronomy13-14","refcnt":"0"},
{"plan":"159","reference":"Psalms99-101","refcnt":"1"},
{"plan":"159","reference":"Isaiah41","refcnt":"2"},
{"plan":"159","reference":"Revelation11","refcnt":"3"},
{"plan":"160","reference":"Deuteronomy15","refcnt":"0"},
{"plan":"160","reference":"Psalms102","refcnt":"1"},
{"plan":"160","reference":"Isaiah42","refcnt":"2"},
{"plan":"160","reference":"Revelation12","refcnt":"3"},
{"plan":"161","reference":"Deuteronomy16","refcnt":"0"},
{"plan":"161","reference":"Psalms103","refcnt":"1"},
{"plan":"161","reference":"Isaiah43","refcnt":"2"},
{"plan":"161","reference":"Revelation13","refcnt":"3"},
{"plan":"162","reference":"Deuteronomy17","refcnt":"0"},
{"plan":"162","reference":"Psalms104","refcnt":"1"},
{"plan":"162","reference":"Isaiah44","refcnt":"2"},
{"plan":"162","reference":"Revelation14","refcnt":"3"},
{"plan":"163","reference":"Deuteronomy18","refcnt":"0"},
{"plan":"163","reference":"Psalms105","refcnt":"1"},
{"plan":"163","reference":"Isaiah45","refcnt":"2"},
{"plan":"163","reference":"Revelation15","refcnt":"3"},
{"plan":"164","reference":"Deuteronomy19","refcnt":"0"},
{"plan":"164","reference":"Psalms106","refcnt":"1"},
{"plan":"164","reference":"Isaiah46","refcnt":"2"},
{"plan":"164","reference":"Revelation16","refcnt":"3"},
{"plan":"165","reference":"Deuteronomy20","refcnt":"0"},
{"plan":"165","reference":"Psalms107","refcnt":"1"},
{"plan":"165","reference":"Isaiah47","refcnt":"2"},
{"plan":"165","reference":"Revelation17","refcnt":"3"},
{"plan":"166","reference":"Deuteronomy21","refcnt":"0"},
{"plan":"166","reference":"Psalms108-109","refcnt":"1"},
{"plan":"166","reference":"Isaiah48","refcnt":"2"},
{"plan":"166","reference":"Revelation18","refcnt":"3"},
{"plan":"167","reference":"Deuteronomy22","refcnt":"0"},
{"plan":"167","reference":"Psalms110-111","refcnt":"1"},
{"plan":"167","reference":"Isaiah49","refcnt":"2"},
{"plan":"167","reference":"Revelation19","refcnt":"3"},
{"plan":"168","reference":"Deuteronomy23","refcnt":"0"},
{"plan":"168","reference":"Psalms112-113","refcnt":"1"},
{"plan":"168","reference":"Isaiah50","refcnt":"2"},
{"plan":"168","reference":"Revelation20","refcnt":"3"},
{"plan":"169","reference":"Deuteronomy24","refcnt":"0"},
{"plan":"169","reference":"Psalms114-115","refcnt":"1"},
{"plan":"169","reference":"Isaiah51","refcnt":"2"},
{"plan":"169","reference":"Revelation21","refcnt":"3"},
{"plan":"170","reference":"Deuteronomy25","refcnt":"0"},
{"plan":"170","reference":"Psalms116","refcnt":"1"},
{"plan":"170","reference":"Isaiah52","refcnt":"2"},
{"plan":"170","reference":"Revelation22","refcnt":"3"},
{"plan":"171","reference":"Deuteronomy26","refcnt":"0"},
{"plan":"171","reference":"Psalms117-118","refcnt":"1"},
{"plan":"171","reference":"Isaiah53","refcnt":"2"},
{"plan":"171","reference":"Matthew1","refcnt":"3"},
{"plan":"172","reference":"Deuteronomy27:1-28:19","refcnt":"0"},
{"plan":"172","reference":"Psalms119:1-24","refcnt":"1"},
{"plan":"172","reference":"Isaiah54","refcnt":"2"},
{"plan":"172","reference":"Matthew2","refcnt":"3"},
{"plan":"173","reference":"Deuteronomy28:20-68","refcnt":"0"},
{"plan":"173","reference":"Psalms119:25-48","refcnt":"1"},
{"plan":"173","reference":"Isaiah55","refcnt":"2"},
{"plan":"173","reference":"Matthew3","refcnt":"3"},
{"plan":"174","reference":"Deuteronomy29","refcnt":"0"},
{"plan":"174","reference":"Psalms119:49-72","refcnt":"1"},
{"plan":"174","reference":"Isaiah56","refcnt":"2"},
{"plan":"174","reference":"Matthew4","refcnt":"3"},
{"plan":"175","reference":"Deuteronomy30","refcnt":"0"},
{"plan":"175","reference":"Psalms119:73-96","refcnt":"1"},
{"plan":"175","reference":"Isaiah57","refcnt":"2"},
{"plan":"175","reference":"Matthew5","refcnt":"3"},
{"plan":"176","reference":"Deuteronomy31","refcnt":"0"},
{"plan":"176","reference":"Psalms119:97-120","refcnt":"1"},
{"plan":"176","reference":"Isaiah58","refcnt":"2"},
{"plan":"176","reference":"Matthew6","refcnt":"3"},
{"plan":"177","reference":"Deuteronomy32","refcnt":"0"},
{"plan":"177","reference":"Psalms119:121-144","refcnt":"1"},
{"plan":"177","reference":"Isaiah59","refcnt":"2"},
{"plan":"177","reference":"Matthew7","refcnt":"3"},
{"plan":"178","reference":"Deuteronomy33-34","refcnt":"0"},
{"plan":"178","reference":"Psalms119:145-176","refcnt":"1"},
{"plan":"178","reference":"Isaiah60","refcnt":"2"},
{"plan":"178","reference":"Matthew8","refcnt":"3"},
{"plan":"179","reference":"Joshua1","refcnt":"0"},
{"plan":"179","reference":"Psalms120-122","refcnt":"1"},
{"plan":"179","reference":"Isaiah61","refcnt":"2"},
{"plan":"179","reference":"Matthew9","refcnt":"3"},
{"plan":"180","reference":"Joshua2","refcnt":"0"},
{"plan":"180","reference":"Psalms123-125","refcnt":"1"},
{"plan":"180","reference":"Isaiah62","refcnt":"2"},
{"plan":"180","reference":"Matthew10","refcnt":"3"},
{"plan":"181","reference":"Joshua3","refcnt":"0"},
{"plan":"181","reference":"Psalms126-128","refcnt":"1"},
{"plan":"181","reference":"Isaiah63","refcnt":"2"},
{"plan":"181","reference":"Matthew11","refcnt":"3"},
{"plan":"182","reference":"Joshua4","refcnt":"0"},
{"plan":"182","reference":"Psalms129-131","refcnt":"1"},
{"plan":"182","reference":"Isaiah64","refcnt":"2"},
{"plan":"182","reference":"Matthew12","refcnt":"3"},
{"plan":"183","reference":"Joshua5","refcnt":"0"},
{"plan":"183","reference":"Psalms132-134","refcnt":"1"},
{"plan":"183","reference":"Isaiah65","refcnt":"2"},
{"plan":"183","reference":"Matthew13","refcnt":"3"},
{"plan":"184","reference":"Joshua6","refcnt":"0"},
{"plan":"184","reference":"Psalms135-136","refcnt":"1"},
{"plan":"184","reference":"Isaiah66","refcnt":"2"},
{"plan":"184","reference":"Matthew14","refcnt":"3"},
{"plan":"185","reference":"Joshua7","refcnt":"0"},
{"plan":"185","reference":"Psalms137-138","refcnt":"1"},
{"plan":"185","reference":"Jeremiah1","refcnt":"2"},
{"plan":"185","reference":"Matthew15","refcnt":"3"},
{"plan":"186","reference":"Joshua8","refcnt":"0"},
{"plan":"186","reference":"Psalms139","refcnt":"1"},
{"plan":"186","reference":"Jeremiah2","refcnt":"2"},
{"plan":"186","reference":"Matthew16","refcnt":"3"},
{"plan":"187","reference":"Joshua9","refcnt":"0"},
{"plan":"187","reference":"Psalms140-141","refcnt":"1"},
{"plan":"187","reference":"Jeremiah3","refcnt":"2"},
{"plan":"187","reference":"Matthew17","refcnt":"3"},
{"plan":"188","reference":"Joshua10","refcnt":"0"},
{"plan":"188","reference":"Psalms142-143","refcnt":"1"},
{"plan":"188","reference":"Jeremiah4","refcnt":"2"},
{"plan":"188","reference":"Matthew18","refcnt":"3"},
{"plan":"189","reference":"Joshua11","refcnt":"0"},
{"plan":"189","reference":"Psalms144","refcnt":"1"},
{"plan":"189","reference":"Jeremiah5","refcnt":"2"},
{"plan":"189","reference":"Matthew19","refcnt":"3"},
{"plan":"190","reference":"Joshua12-13","refcnt":"0"},
{"plan":"190","reference":"Psalms145","refcnt":"1"},
{"plan":"190","reference":"Jeremiah6","refcnt":"2"},
{"plan":"190","reference":"Matthew20","refcnt":"3"},
{"plan":"191","reference":"Joshua14-15","refcnt":"0"},
{"plan":"191","reference":"Psalms146-147","refcnt":"1"},
{"plan":"191","reference":"Jeremiah7","refcnt":"2"},
{"plan":"191","reference":"Matthew21","refcnt":"3"},
{"plan":"192","reference":"Joshua16-17","refcnt":"0"},
{"plan":"192","reference":"Psalms148","refcnt":"1"},
{"plan":"192","reference":"Jeremiah8","refcnt":"2"},
{"plan":"192","reference":"Matthew22","refcnt":"3"},
{"plan":"193","reference":"Joshua18-19","refcnt":"0"},
{"plan":"193","reference":"Psalms149-150","refcnt":"1"},
{"plan":"193","reference":"Jeremiah9","refcnt":"2"},
{"plan":"193","reference":"Matthew23","refcnt":"3"},
{"plan":"194","reference":"Joshua20-21","refcnt":"0"},
{"plan":"194","reference":"Acts1","refcnt":"1"},
{"plan":"194","reference":"Jeremiah10","refcnt":"2"},
{"plan":"194","reference":"Matthew24","refcnt":"3"},
{"plan":"195","reference":"Joshua22","refcnt":"0"},
{"plan":"195","reference":"Acts2","refcnt":"1"},
{"plan":"195","reference":"Jeremiah11","refcnt":"2"},
{"plan":"195","reference":"Matthew25","refcnt":"3"},
{"plan":"196","reference":"Joshua23","refcnt":"0"},
{"plan":"196","reference":"Acts3","refcnt":"1"},
{"plan":"196","reference":"Jeremiah12","refcnt":"2"},
{"plan":"196","reference":"Matthew26","refcnt":"3"},
{"plan":"197","reference":"Joshua24","refcnt":"0"},
{"plan":"197","reference":"Acts4","refcnt":"1"},
{"plan":"197","reference":"Jeremiah13","refcnt":"2"},
{"plan":"197","reference":"Matthew27","refcnt":"3"},
{"plan":"198","reference":"Judges1","refcnt":"0"},
{"plan":"198","reference":"Acts5","refcnt":"1"},
{"plan":"198","reference":"Jeremiah14","refcnt":"2"},
{"plan":"198","reference":"Matthew28","refcnt":"3"},
{"plan":"199","reference":"Judges2","refcnt":"0"},
{"plan":"199","reference":"Acts6","refcnt":"1"},
{"plan":"199","reference":"Jeremiah15","refcnt":"2"},
{"plan":"199","reference":"Mark1","refcnt":"3"},
{"plan":"200","reference":"Judges3","refcnt":"0"},
{"plan":"200","reference":"Acts7","refcnt":"1"},
{"plan":"200","reference":"Jeremiah16","refcnt":"2"},
{"plan":"200","reference":"Mark2","refcnt":"3"},
{"plan":"201","reference":"Judges4","refcnt":"0"},
{"plan":"201","reference":"Acts8","refcnt":"1"},
{"plan":"201","reference":"Jeremiah17","refcnt":"2"},
{"plan":"201","reference":"Mark3","refcnt":"3"},
{"plan":"202","reference":"Judges5","refcnt":"0"},
{"plan":"202","reference":"Acts9","refcnt":"1"},
{"plan":"202","reference":"Jeremiah18","refcnt":"2"},
{"plan":"202","reference":"Mark4","refcnt":"3"},
{"plan":"203","reference":"Judges6","refcnt":"0"},
{"plan":"203","reference":"Acts10","refcnt":"1"},
{"plan":"203","reference":"Jeremiah19","refcnt":"2"},
{"plan":"203","reference":"Mark5","refcnt":"3"},
{"plan":"204","reference":"Judges7","refcnt":"0"},
{"plan":"204","reference":"Acts11","refcnt":"1"},
{"plan":"204","reference":"Jeremiah20","refcnt":"2"},
{"plan":"204","reference":"Mark6","refcnt":"3"},
{"plan":"205","reference":"Judges8","refcnt":"0"},
{"plan":"205","reference":"Acts12","refcnt":"1"},
{"plan":"205","reference":"Jeremiah21","refcnt":"2"},
{"plan":"205","reference":"Mark7","refcnt":"3"},
{"plan":"206","reference":"Judges9","refcnt":"0"},
{"plan":"206","reference":"Acts13","refcnt":"1"},
{"plan":"206","reference":"Jeremiah22","refcnt":"2"},
{"plan":"206","reference":"Mark8","refcnt":"3"},
{"plan":"207","reference":"Judges10:1-11:11","refcnt":"0"},
{"plan":"207","reference":"Acts14","refcnt":"1"},
{"plan":"207","reference":"Jeremiah23","refcnt":"2"},
{"plan":"207","reference":"Mark9","refcnt":"3"},
{"plan":"208","reference":"Judges11:12-40","refcnt":"0"},
{"plan":"208","reference":"Acts15","refcnt":"1"},
{"plan":"208","reference":"Jeremiah24","refcnt":"2"},
{"plan":"208","reference":"Mark10","refcnt":"3"},
{"plan":"209","reference":"Judges12","refcnt":"0"},
{"plan":"209","reference":"Acts16","refcnt":"1"},
{"plan":"209","reference":"Jeremiah25","refcnt":"2"},
{"plan":"209","reference":"Mark11","refcnt":"3"},
{"plan":"210","reference":"Judges13","refcnt":"0"},
{"plan":"210","reference":"Acts17","refcnt":"1"},
{"plan":"210","reference":"Jeremiah26","refcnt":"2"},
{"plan":"210","reference":"Mark12","refcnt":"3"},
{"plan":"211","reference":"Judges14","refcnt":"0"},
{"plan":"211","reference":"Acts18","refcnt":"1"},
{"plan":"211","reference":"Jeremiah27","refcnt":"2"},
{"plan":"211","reference":"Mark13","refcnt":"3"},
{"plan":"212","reference":"Judges15","refcnt":"0"},
{"plan":"212","reference":"Acts19","refcnt":"1"},
{"plan":"212","reference":"Jeremiah28","refcnt":"2"},
{"plan":"212","reference":"Mark14","refcnt":"3"},
{"plan":"213","reference":"Judges16","refcnt":"0"},
{"plan":"213","reference":"Acts20","refcnt":"1"},
{"plan":"213","reference":"Jeremiah29","refcnt":"2"},
{"plan":"213","reference":"Mark15","refcnt":"3"},
{"plan":"214","reference":"Judges17","refcnt":"0"},
{"plan":"214","reference":"Acts21","refcnt":"1"},
{"plan":"214","reference":"Jeremiah30-31","refcnt":"2"},
{"plan":"214","reference":"Mark16","refcnt":"3"},
{"plan":"215","reference":"Judges18","refcnt":"0"},
{"plan":"215","reference":"Acts22","refcnt":"1"},
{"plan":"215","reference":"Jeremiah32","refcnt":"2"},
{"plan":"215","reference":"Psalms1-2","refcnt":"3"},
{"plan":"216","reference":"Judges19","refcnt":"0"},
{"plan":"216","reference":"Acts23","refcnt":"1"},
{"plan":"216","reference":"Jeremiah33","refcnt":"2"},
{"plan":"216","reference":"Psalms3-4","refcnt":"3"},
{"plan":"217","reference":"Judges20","refcnt":"0"},
{"plan":"217","reference":"Acts24","refcnt":"1"},
{"plan":"217","reference":"Jeremiah34","refcnt":"2"},
{"plan":"217","reference":"Psalms5-6","refcnt":"3"},
{"plan":"218","reference":"Judges21","refcnt":"0"},
{"plan":"218","reference":"Acts25","refcnt":"1"},
{"plan":"218","reference":"Jeremiah35","refcnt":"2"},
{"plan":"218","reference":"Psalms7-8","refcnt":"3"},
{"plan":"219","reference":"Ruth1","refcnt":"0"},
{"plan":"219","reference":"Acts26","refcnt":"1"},
{"plan":"219","reference":"Jeremiah36,45","refcnt":"2"},
{"plan":"219","reference":"Psalms9","refcnt":"3"},
{"plan":"220","reference":"Ruth2","refcnt":"0"},
{"plan":"220","reference":"Acts27","refcnt":"1"},
{"plan":"220","reference":"Jeremiah37","refcnt":"2"},
{"plan":"220","reference":"Psalms10","refcnt":"3"},
{"plan":"221","reference":"Ruth3-4","refcnt":"0"},
{"plan":"221","reference":"Acts28","refcnt":"1"},
{"plan":"221","reference":"Jeremiah38","refcnt":"2"},
{"plan":"221","reference":"Psalms11-12","refcnt":"3"},
{"plan":"222","reference":"1Samuel1","refcnt":"0"},
{"plan":"222","reference":"Romans1","refcnt":"1"},
{"plan":"222","reference":"Jeremiah39","refcnt":"2"},
{"plan":"222","reference":"Psalms13-14","refcnt":"3"},
{"plan":"223","reference":"1Samuel2","refcnt":"0"},
{"plan":"223","reference":"Romans2","refcnt":"1"},
{"plan":"223","reference":"Jeremiah40","refcnt":"2"},
{"plan":"223","reference":"Psalms15-16","refcnt":"3"},
{"plan":"224","reference":"1Samuel3","refcnt":"0"},
{"plan":"224","reference":"Romans3","refcnt":"1"},
{"plan":"224","reference":"Jeremiah41","refcnt":"2"},
{"plan":"224","reference":"Psalms17","refcnt":"3"},
{"plan":"225","reference":"1Samuel4","refcnt":"0"},
{"plan":"225","reference":"Romans4","refcnt":"1"},
{"plan":"225","reference":"Jeremiah42","refcnt":"2"},
{"plan":"225","reference":"Psalms18","refcnt":"3"},
{"plan":"226","reference":"1Samuel5-6","refcnt":"0"},
{"plan":"226","reference":"Romans5","refcnt":"1"},
{"plan":"226","reference":"Jeremiah43","refcnt":"2"},
{"plan":"226","reference":"Psalms19","refcnt":"3"},
{"plan":"227","reference":"1Samuel7-8","refcnt":"0"},
{"plan":"227","reference":"Romans6","refcnt":"1"},
{"plan":"227","reference":"Jeremiah44","refcnt":"2"},
{"plan":"227","reference":"Psalms20-21","refcnt":"3"},
{"plan":"228","reference":"1Samuel9","refcnt":"0"},
{"plan":"228","reference":"Romans7","refcnt":"1"},
{"plan":"228","reference":"Jeremiah46","refcnt":"2"},
{"plan":"228","reference":"Psalms22","refcnt":"3"},
{"plan":"229","reference":"1Samuel10","refcnt":"0"},
{"plan":"229","reference":"Romans8","refcnt":"1"},
{"plan":"229","reference":"Jeremiah47","refcnt":"2"},
{"plan":"229","reference":"Psalms23-24","refcnt":"3"},
{"plan":"230","reference":"1Samuel11","refcnt":"0"},
{"plan":"230","reference":"Romans9","refcnt":"1"},
{"plan":"230","reference":"Jeremiah48","refcnt":"2"},
{"plan":"230","reference":"Psalms25","refcnt":"3"},
{"plan":"231","reference":"1Samuel12","refcnt":"0"},
{"plan":"231","reference":"Romans10","refcnt":"1"},
{"plan":"231","reference":"Jeremiah49","refcnt":"2"},
{"plan":"231","reference":"Psalms26-27","refcnt":"3"},
{"plan":"232","reference":"1Samuel13","refcnt":"0"},
{"plan":"232","reference":"Romans11","refcnt":"1"},
{"plan":"232","reference":"Jeremiah50","refcnt":"2"},
{"plan":"232","reference":"Psalms28-29","refcnt":"3"},
{"plan":"233","reference":"1Samuel14","refcnt":"0"},
{"plan":"233","reference":"Romans12","refcnt":"1"},
{"plan":"233","reference":"Jeremiah51","refcnt":"2"},
{"plan":"233","reference":"Psalms30","refcnt":"3"},
{"plan":"234","reference":"1Samuel15","refcnt":"0"},
{"plan":"234","reference":"Romans13","refcnt":"1"},
{"plan":"234","reference":"Jeremiah52","refcnt":"2"},
{"plan":"234","reference":"Psalms31","refcnt":"3"},
{"plan":"235","reference":"1Samuel16","refcnt":"0"},
{"plan":"235","reference":"Romans14","refcnt":"1"},
{"plan":"235","reference":"Lamentations1","refcnt":"2"},
{"plan":"235","reference":"Psalms32","refcnt":"3"},
{"plan":"236","reference":"1Samuel17","refcnt":"0"},
{"plan":"236","reference":"Romans15","refcnt":"1"},
{"plan":"236","reference":"Lamentations2","refcnt":"2"},
{"plan":"236","reference":"Psalms33","refcnt":"3"},
{"plan":"237","reference":"1Samuel18","refcnt":"0"},
{"plan":"237","reference":"Romans16","refcnt":"1"},
{"plan":"237","reference":"Lamentations3","refcnt":"2"},
{"plan":"237","reference":"Psalms34","refcnt":"3"},
{"plan":"238","reference":"1Samuel19","refcnt":"0"},
{"plan":"238","reference":"1Corinthians1","refcnt":"1"},
{"plan":"238","reference":"Lamentations4","refcnt":"2"},
{"plan":"238","reference":"Psalms35","refcnt":"3"},
{"plan":"239","reference":"1Samuel20","refcnt":"0"},
{"plan":"239","reference":"1Corinthians2","refcnt":"1"},
{"plan":"239","reference":"Lamentations5","refcnt":"2"},
{"plan":"239","reference":"Psalms36","refcnt":"3"},
{"plan":"240","reference":"1Samuel21-22","refcnt":"0"},
{"plan":"240","reference":"1Corinthians3","refcnt":"1"},
{"plan":"240","reference":"Ezekiel1","refcnt":"2"},
{"plan":"240","reference":"Psalms37","refcnt":"3"},
{"plan":"241","reference":"1Samuel23","refcnt":"0"},
{"plan":"241","reference":"1Corinthians4","refcnt":"1"},
{"plan":"241","reference":"Ezekiel2","refcnt":"2"},
{"plan":"241","reference":"Psalms38","refcnt":"3"},
{"plan":"242","reference":"1Samuel24","refcnt":"0"},
{"plan":"242","reference":"1Corinthians5","refcnt":"1"},
{"plan":"242","reference":"Ezekiel3","refcnt":"2"},
{"plan":"242","reference":"Psalms39","refcnt":"3"},
{"plan":"243","reference":"1Samuel25","refcnt":"0"},
{"plan":"243","reference":"1Corinthians6","refcnt":"1"},
{"plan":"243","reference":"Ezekiel4","refcnt":"2"},
{"plan":"243","reference":"Psalms40-41","refcnt":"3"},
{"plan":"244","reference":"1Samuel26","refcnt":"0"},
{"plan":"244","reference":"1Corinthians7","refcnt":"1"},
{"plan":"244","reference":"Ezekiel5","refcnt":"2"},
{"plan":"244","reference":"Psalms42-43","refcnt":"3"},
{"plan":"245","reference":"1Samuel27","refcnt":"0"},
{"plan":"245","reference":"1Corinthians8","refcnt":"1"},
{"plan":"245","reference":"Ezekiel6","refcnt":"2"},
{"plan":"245","reference":"Psalms44","refcnt":"3"},
{"plan":"246","reference":"1Samuel28","refcnt":"0"},
{"plan":"246","reference":"1Corinthians9","refcnt":"1"},
{"plan":"246","reference":"Ezekiel7","refcnt":"2"},
{"plan":"246","reference":"Psalms45","refcnt":"3"},
{"plan":"247","reference":"1Samuel29-30","refcnt":"0"},
{"plan":"247","reference":"1Corinthians10","refcnt":"1"},
{"plan":"247","reference":"Ezekiel8","refcnt":"2"},
{"plan":"247","reference":"Psalms46-47","refcnt":"3"},
{"plan":"248","reference":"1Samuel31","refcnt":"0"},
{"plan":"248","reference":"1Corinthians11","refcnt":"1"},
{"plan":"248","reference":"Ezekiel9","refcnt":"2"},
{"plan":"248","reference":"Psalms48","refcnt":"3"},
{"plan":"249","reference":"2Samuel1","refcnt":"0"},
{"plan":"249","reference":"1Corinthians12","refcnt":"1"},
{"plan":"249","reference":"Ezekiel10","refcnt":"2"},
{"plan":"249","reference":"Psalms49","refcnt":"3"},
{"plan":"250","reference":"2Samuel2","refcnt":"0"},
{"plan":"250","reference":"1Corinthians13","refcnt":"1"},
{"plan":"250","reference":"Ezekiel11","refcnt":"2"},
{"plan":"250","reference":"Psalms50","refcnt":"3"},
{"plan":"251","reference":"2Samuel3","refcnt":"0"},
{"plan":"251","reference":"1Corinthians14","refcnt":"1"},
{"plan":"251","reference":"Ezekiel12","refcnt":"2"},
{"plan":"251","reference":"Psalms51","refcnt":"3"},
{"plan":"252","reference":"2Samuel4-5","refcnt":"0"},
{"plan":"252","reference":"1Corinthians15","refcnt":"1"},
{"plan":"252","reference":"Ezekiel13","refcnt":"2"},
{"plan":"252","reference":"Psalms52-54","refcnt":"3"},
{"plan":"253","reference":"2Samuel6","refcnt":"0"},
{"plan":"253","reference":"1Corinthians16","refcnt":"1"},
{"plan":"253","reference":"Ezekiel14","refcnt":"2"},
{"plan":"253","reference":"Psalms55","refcnt":"3"},
{"plan":"254","reference":"2Samuel7","refcnt":"0"},
{"plan":"254","reference":"2Corinthians1","refcnt":"1"},
{"plan":"254","reference":"Ezekiel15","refcnt":"2"},
{"plan":"254","reference":"Psalms56-57","refcnt":"3"},
{"plan":"255","reference":"2Samuel8-9","refcnt":"0"},
{"plan":"255","reference":"2Corinthians2","refcnt":"1"},
{"plan":"255","reference":"Ezekiel16","refcnt":"2"},
{"plan":"255","reference":"Psalms58-59","refcnt":"3"},
{"plan":"256","reference":"2Samuel10","refcnt":"0"},
{"plan":"256","reference":"2Corinthians3","refcnt":"1"},
{"plan":"256","reference":"Ezekiel17","refcnt":"2"},
{"plan":"256","reference":"Psalms60-61","refcnt":"3"},
{"plan":"257","reference":"2Samuel11","refcnt":"0"},
{"plan":"257","reference":"2Corinthians4","refcnt":"1"},
{"plan":"257","reference":"Ezekiel18","refcnt":"2"},
{"plan":"257","reference":"Psalms62-63","refcnt":"3"},
{"plan":"258","reference":"2Samuel12","refcnt":"0"},
{"plan":"258","reference":"2Corinthians5","refcnt":"1"},
{"plan":"258","reference":"Ezekiel19","refcnt":"2"},
{"plan":"258","reference":"Psalms64-65","refcnt":"3"},
{"plan":"259","reference":"2Samuel13","refcnt":"0"},
{"plan":"259","reference":"2Corinthians6","refcnt":"1"},
{"plan":"259","reference":"Ezekiel20","refcnt":"2"},
{"plan":"259","reference":"Psalms66-67","refcnt":"3"},
{"plan":"260","reference":"2Samuel14","refcnt":"0"},
{"plan":"260","reference":"2Corinthians7","refcnt":"1"},
{"plan":"260","reference":"Ezekiel21","refcnt":"2"},
{"plan":"260","reference":"Psalms68","refcnt":"3"},
{"plan":"261","reference":"2Samuel15","refcnt":"0"},
{"plan":"261","reference":"2Corinthians8","refcnt":"1"},
{"plan":"261","reference":"Ezekiel22","refcnt":"2"},
{"plan":"261","reference":"Psalms69","refcnt":"3"},
{"plan":"262","reference":"2Samuel16","refcnt":"0"},
{"plan":"262","reference":"2Corinthians9","refcnt":"1"},
{"plan":"262","reference":"Ezekiel23","refcnt":"2"},
{"plan":"262","reference":"Psalms70-71","refcnt":"3"},
{"plan":"263","reference":"2Samuel17","refcnt":"0"},
{"plan":"263","reference":"2Corinthians10","refcnt":"1"},
{"plan":"263","reference":"Ezekiel24","refcnt":"2"},
{"plan":"263","reference":"Psalms72","refcnt":"3"},
{"plan":"264","reference":"2Samuel18","refcnt":"0"},
{"plan":"264","reference":"2Corinthians11","refcnt":"1"},
{"plan":"264","reference":"Ezekiel25","refcnt":"2"},
{"plan":"264","reference":"Psalms73","refcnt":"3"},
{"plan":"265","reference":"2Samuel19","refcnt":"0"},
{"plan":"265","reference":"2Corinthians12","refcnt":"1"},
{"plan":"265","reference":"Ezekiel26","refcnt":"2"},
{"plan":"265","reference":"Psalms74","refcnt":"3"},
{"plan":"266","reference":"2Samuel20","refcnt":"0"},
{"plan":"266","reference":"2Corinthians13","refcnt":"1"},
{"plan":"266","reference":"Ezekiel27","refcnt":"2"},
{"plan":"266","reference":"Psalms75-76","refcnt":"3"},
{"plan":"267","reference":"2Samuel21","refcnt":"0"},
{"plan":"267","reference":"Galatians1","refcnt":"1"},
{"plan":"267","reference":"Ezekiel28","refcnt":"2"},
{"plan":"267","reference":"Psalms77","refcnt":"3"},
{"plan":"268","reference":"2Samuel22","refcnt":"0"},
{"plan":"268","reference":"Galatians2","refcnt":"1"},
{"plan":"268","reference":"Ezekiel29","refcnt":"2"},
{"plan":"268","reference":"Psalms78:1-39","refcnt":"3"},
{"plan":"269","reference":"2Samuel23","refcnt":"0"},
{"plan":"269","reference":"Galatians3","refcnt":"1"},
{"plan":"269","reference":"Ezekiel30","refcnt":"2"},
{"plan":"269","reference":"Psalms78:40-72","refcnt":"3"},
{"plan":"270","reference":"2Samuel24","refcnt":"0"},
{"plan":"270","reference":"Galatians4","refcnt":"1"},
{"plan":"270","reference":"Ezekiel31","refcnt":"2"},
{"plan":"270","reference":"Psalms79","refcnt":"3"},
{"plan":"271","reference":"1Kings1","refcnt":"0"},
{"plan":"271","reference":"Galatians5","refcnt":"1"},
{"plan":"271","reference":"Ezekiel32","refcnt":"2"},
{"plan":"271","reference":"Psalms80","refcnt":"3"},
{"plan":"272","reference":"1Kings2","refcnt":"0"},
{"plan":"272","reference":"Galatians6","refcnt":"1"},
{"plan":"272","reference":"Ezekiel33","refcnt":"2"},
{"plan":"272","reference":"Psalms81-82","refcnt":"3"},
{"plan":"273","reference":"1Kings3","refcnt":"0"},
{"plan":"273","reference":"Ephesians1","refcnt":"1"},
{"plan":"273","reference":"Ezekiel34","refcnt":"2"},
{"plan":"273","reference":"Psalms83-84","refcnt":"3"},
{"plan":"274","reference":"1Kings4-5","refcnt":"0"},
{"plan":"274","reference":"Ephesians2","refcnt":"1"},
{"plan":"274","reference":"Ezekiel35","refcnt":"2"},
{"plan":"274","reference":"Psalms85","refcnt":"3"},
{"plan":"275","reference":"1Kings6","refcnt":"0"},
{"plan":"275","reference":"Ephesians3","refcnt":"1"},
{"plan":"275","reference":"Ezekiel36","refcnt":"2"},
{"plan":"275","reference":"Psalms86","refcnt":"3"},
{"plan":"276","reference":"1Kings7","refcnt":"0"},
{"plan":"276","reference":"Ephesians4","refcnt":"1"},
{"plan":"276","reference":"Ezekiel37","refcnt":"2"},
{"plan":"276","reference":"Psalms87-88","refcnt":"3"},
{"plan":"277","reference":"1Kings8","refcnt":"0"},
{"plan":"277","reference":"Ephesians5","refcnt":"1"},
{"plan":"277","reference":"Ezekiel38","refcnt":"2"},
{"plan":"277","reference":"Psalms89","refcnt":"3"},
{"plan":"278","reference":"1Kings9","refcnt":"0"},
{"plan":"278","reference":"Ephesians6","refcnt":"1"},
{"plan":"278","reference":"Ezekiel39","refcnt":"2"},
{"plan":"278","reference":"Psalms90","refcnt":"3"},
{"plan":"279","reference":"1Kings10","refcnt":"0"},
{"plan":"279","reference":"Philippians1","refcnt":"1"},
{"plan":"279","reference":"Ezekiel40","refcnt":"2"},
{"plan":"279","reference":"Psalms91","refcnt":"3"},
{"plan":"280","reference":"1Kings11","refcnt":"0"},
{"plan":"280","reference":"Philippians2","refcnt":"1"},
{"plan":"280","reference":"Ezekiel41","refcnt":"2"},
{"plan":"280","reference":"Psalms92-93","refcnt":"3"},
{"plan":"281","reference":"1Kings12","refcnt":"0"},
{"plan":"281","reference":"Philippians3","refcnt":"1"},
{"plan":"281","reference":"Ezekiel42","refcnt":"2"},
{"plan":"281","reference":"Psalms94","refcnt":"3"},
{"plan":"282","reference":"1Kings13","refcnt":"0"},
{"plan":"282","reference":"Philippians4","refcnt":"1"},
{"plan":"282","reference":"Ezekiel43","refcnt":"2"},
{"plan":"282","reference":"Psalms95-96","refcnt":"3"},
{"plan":"283","reference":"1Kings14","refcnt":"0"},
{"plan":"283","reference":"Colossians1","refcnt":"1"},
{"plan":"283","reference":"Ezekiel44","refcnt":"2"},
{"plan":"283","reference":"Psalms97-98","refcnt":"3"},
{"plan":"284","reference":"1Kings15","refcnt":"0"},
{"plan":"284","reference":"Colossians2","refcnt":"1"},
{"plan":"284","reference":"Ezekiel45","refcnt":"2"},
{"plan":"284","reference":"Psalms99-101","refcnt":"3"},
{"plan":"285","reference":"1Kings16","refcnt":"0"},
{"plan":"285","reference":"Colossians3","refcnt":"1"},
{"plan":"285","reference":"Ezekiel46","refcnt":"2"},
{"plan":"285","reference":"Psalms102","refcnt":"3"},
{"plan":"286","reference":"1Kings17","refcnt":"0"},
{"plan":"286","reference":"Colossians4","refcnt":"1"},
{"plan":"286","reference":"Ezekiel47","refcnt":"2"},
{"plan":"286","reference":"Psalms103","refcnt":"3"},
{"plan":"287","reference":"1Kings18","refcnt":"0"},
{"plan":"287","reference":"1Thessalonians1","refcnt":"1"},
{"plan":"287","reference":"Ezekiel48","refcnt":"2"},
{"plan":"287","reference":"Psalms104","refcnt":"3"},
{"plan":"288","reference":"1Kings19","refcnt":"0"},
{"plan":"288","reference":"1Thessalonians2","refcnt":"1"},
{"plan":"288","reference":"Daniel1","refcnt":"2"},
{"plan":"288","reference":"Psalms105","refcnt":"3"},
{"plan":"289","reference":"1Kings20","refcnt":"0"},
{"plan":"289","reference":"1Thessalonians3","refcnt":"1"},
{"plan":"289","reference":"Daniel2","refcnt":"2"},
{"plan":"289","reference":"Psalms106","refcnt":"3"},
{"plan":"290","reference":"1Kings21","refcnt":"0"},
{"plan":"290","reference":"1Thessalonians4","refcnt":"1"},
{"plan":"290","reference":"Daniel3","refcnt":"2"},
{"plan":"290","reference":"Psalms107","refcnt":"3"},
{"plan":"291","reference":"1Kings22","refcnt":"0"},
{"plan":"291","reference":"1Thessalonians5","refcnt":"1"},
{"plan":"291","reference":"Daniel4","refcnt":"2"},
{"plan":"291","reference":"Psalms108-109","refcnt":"3"},
{"plan":"292","reference":"2Kings1","refcnt":"0"},
{"plan":"292","reference":"2Thessalonians1","refcnt":"1"},
{"plan":"292","reference":"Daniel5","refcnt":"2"},
{"plan":"292","reference":"Psalms110-111","refcnt":"3"},
{"plan":"293","reference":"2Kings2","refcnt":"0"},
{"plan":"293","reference":"2Thessalonians2","refcnt":"1"},
{"plan":"293","reference":"Daniel6","refcnt":"2"},
{"plan":"293","reference":"Psalms112-113","refcnt":"3"},
{"plan":"294","reference":"2Kings3","refcnt":"0"},
{"plan":"294","reference":"2Thessalonians3","refcnt":"1"},
{"plan":"294","reference":"Daniel7","refcnt":"2"},
{"plan":"294","reference":"Psalms114-115","refcnt":"3"},
{"plan":"295","reference":"2Kings4","refcnt":"0"},
{"plan":"295","reference":"1Timothy1","refcnt":"1"},
{"plan":"295","reference":"Daniel8","refcnt":"2"},
{"plan":"295","reference":"Psalms116","refcnt":"3"},
{"plan":"296","reference":"2Kings5","refcnt":"0"},
{"plan":"296","reference":"1Timothy2","refcnt":"1"},
{"plan":"296","reference":"Daniel9","refcnt":"2"},
{"plan":"296","reference":"Psalms117-118","refcnt":"3"},
{"plan":"297","reference":"2Kings6","refcnt":"0"},
{"plan":"297","reference":"1Timothy3","refcnt":"1"},
{"plan":"297","reference":"Daniel10","refcnt":"2"},
{"plan":"297","reference":"Psalms119:1-24","refcnt":"3"},
{"plan":"298","reference":"2Kings7","refcnt":"0"},
{"plan":"298","reference":"1Timothy4","refcnt":"1"},
{"plan":"298","reference":"Daniel11","refcnt":"2"},
{"plan":"298","reference":"Psalms119:25-48","refcnt":"3"},
{"plan":"299","reference":"2Kings8","refcnt":"0"},
{"plan":"299","reference":"1Timothy5","refcnt":"1"},
{"plan":"299","reference":"Daniel12","refcnt":"2"},
{"plan":"299","reference":"Psalms119:49-72","refcnt":"3"},
{"plan":"300","reference":"2Kings9","refcnt":"0"},
{"plan":"300","reference":"1Timothy6","refcnt":"1"},
{"plan":"300","reference":"Hosea1","refcnt":"2"},
{"plan":"300","reference":"Psalms119:73-96","refcnt":"3"},
{"plan":"301","reference":"2Kings10-11","refcnt":"0"},
{"plan":"301","reference":"2Timothy1","refcnt":"1"},
{"plan":"301","reference":"Hosea2","refcnt":"2"},
{"plan":"301","reference":"Psalms119:97-120","refcnt":"3"},
{"plan":"302","reference":"2Kings12","refcnt":"0"},
{"plan":"302","reference":"2Timothy2","refcnt":"1"},
{"plan":"302","reference":"Hosea3-4","refcnt":"2"},
{"plan":"302","reference":"Psalms119:121-144","refcnt":"3"},
{"plan":"303","reference":"2Kings13","refcnt":"0"},
{"plan":"303","reference":"2Timothy3","refcnt":"1"},
{"plan":"303","reference":"Hosea5-6","refcnt":"2"},
{"plan":"303","reference":"Psalms119:145-176","refcnt":"3"},
{"plan":"304","reference":"2Kings14","refcnt":"0"},
{"plan":"304","reference":"2Timothy4","refcnt":"1"},
{"plan":"304","reference":"Hosea7","refcnt":"2"},
{"plan":"304","reference":"Psalms120-122","refcnt":"3"},
{"plan":"305","reference":"2Kings15","refcnt":"0"},
{"plan":"305","reference":"Titus1","refcnt":"1"},
{"plan":"305","reference":"Hosea8","refcnt":"2"},
{"plan":"305","reference":"Psalms123-125","refcnt":"3"},
{"plan":"306","reference":"2Kings16","refcnt":"0"},
{"plan":"306","reference":"Titus2","refcnt":"1"},
{"plan":"306","reference":"Hosea9","refcnt":"2"},
{"plan":"306","reference":"Psalms126-128","refcnt":"3"},
{"plan":"307","reference":"2Kings17","refcnt":"0"},
{"plan":"307","reference":"Titus3","refcnt":"1"},
{"plan":"307","reference":"Hosea10","refcnt":"2"},
{"plan":"307","reference":"Psalms129-131","refcnt":"3"},
{"plan":"308","reference":"2Kings18","refcnt":"0"},
{"plan":"308","reference":"Philemon1","refcnt":"1"},
{"plan":"308","reference":"Hosea11","refcnt":"2"},
{"plan":"308","reference":"Psalms132-134","refcnt":"3"},
{"plan":"309","reference":"2Kings19","refcnt":"0"},
{"plan":"309","reference":"Hebrews1","refcnt":"1"},
{"plan":"309","reference":"Hosea12","refcnt":"2"},
{"plan":"309","reference":"Psalms135-136","refcnt":"3"},
{"plan":"310","reference":"2Kings20","refcnt":"0"},
{"plan":"310","reference":"Hebrews2","refcnt":"1"},
{"plan":"310","reference":"Hosea13","refcnt":"2"},
{"plan":"310","reference":"Psalms137-138","refcnt":"3"},
{"plan":"311","reference":"2Kings21","refcnt":"0"},
{"plan":"311","reference":"Hebrews3","refcnt":"1"},
{"plan":"311","reference":"Hosea14","refcnt":"2"},
{"plan":"311","reference":"Psalms139","refcnt":"3"},
{"plan":"312","reference":"2Kings22","refcnt":"0"},
{"plan":"312","reference":"Hebrews4","refcnt":"1"},
{"plan":"312","reference":"Joel1","refcnt":"2"},
{"plan":"312","reference":"Psalms140-141","refcnt":"3"},
{"plan":"313","reference":"2Kings23","refcnt":"0"},
{"plan":"313","reference":"Hebrews5","refcnt":"1"},
{"plan":"313","reference":"Joel2","refcnt":"2"},
{"plan":"313","reference":"Psalms142","refcnt":"3"},
{"plan":"314","reference":"2Kings24","refcnt":"0"},
{"plan":"314","reference":"Hebrews6","refcnt":"1"},
{"plan":"314","reference":"Joel3","refcnt":"2"},
{"plan":"314","reference":"Psalms143","refcnt":"3"},
{"plan":"315","reference":"2Kings25","refcnt":"0"},
{"plan":"315","reference":"Hebrews7","refcnt":"1"},
{"plan":"315","reference":"Amos1","refcnt":"2"},
{"plan":"315","reference":"Psalms144","refcnt":"3"},
{"plan":"316","reference":"1Chronicles1-2","refcnt":"0"},
{"plan":"316","reference":"Hebrews8","refcnt":"1"},
{"plan":"316","reference":"Amos2","refcnt":"2"},
{"plan":"316","reference":"Psalms145","refcnt":"3"},
{"plan":"317","reference":"1Chronicles3-4","refcnt":"0"},
{"plan":"317","reference":"Hebrews9","refcnt":"1"},
{"plan":"317","reference":"Amos3","refcnt":"2"},
{"plan":"317","reference":"Psalms146-147","refcnt":"3"},
{"plan":"318","reference":"1Chronicles5-6","refcnt":"0"},
{"plan":"318","reference":"Hebrews10","refcnt":"1"},
{"plan":"318","reference":"Amos4","refcnt":"2"},
{"plan":"318","reference":"Psalms148-150","refcnt":"3"},
{"plan":"319","reference":"1Chronicles7-8","refcnt":"0"},
{"plan":"319","reference":"Hebrews11","refcnt":"1"},
{"plan":"319","reference":"Amos5","refcnt":"2"},
{"plan":"319","reference":"Luke1:1-38","refcnt":"3"},
{"plan":"320","reference":"1Chronicles9-10","refcnt":"0"},
{"plan":"320","reference":"Hebrews12","refcnt":"1"},
{"plan":"320","reference":"Amos6","refcnt":"2"},
{"plan":"320","reference":"Luke1:39-80","refcnt":"3"},
{"plan":"321","reference":"1Chronicles11-12","refcnt":"0"},
{"plan":"321","reference":"Hebrews13","refcnt":"1"},
{"plan":"321","reference":"Amos7","refcnt":"2"},
{"plan":"321","reference":"Luke2","refcnt":"3"},
{"plan":"322","reference":"1Chronicles13-14","refcnt":"0"},
{"plan":"322","reference":"James1","refcnt":"1"},
{"plan":"322","reference":"Amos8","refcnt":"2"},
{"plan":"322","reference":"Luke3","refcnt":"3"},
{"plan":"323","reference":"1Chronicles15","refcnt":"0"},
{"plan":"323","reference":"James2","refcnt":"1"},
{"plan":"323","reference":"Amos9","refcnt":"2"},
{"plan":"323","reference":"Luke4","refcnt":"3"},
{"plan":"324","reference":"1Chronicles16","refcnt":"0"},
{"plan":"324","reference":"James3","refcnt":"1"},
{"plan":"324","reference":"Obadiah1","refcnt":"2"},
{"plan":"324","reference":"Luke5","refcnt":"3"},
{"plan":"325","reference":"1Chronicles17","refcnt":"0"},
{"plan":"325","reference":"James4","refcnt":"1"},
{"plan":"325","reference":"Jonah1","refcnt":"2"},
{"plan":"325","reference":"Luke6","refcnt":"3"},
{"plan":"326","reference":"1Chronicles18","refcnt":"0"},
{"plan":"326","reference":"James5","refcnt":"1"},
{"plan":"326","reference":"Jonah2","refcnt":"2"},
{"plan":"326","reference":"Luke7","refcnt":"3"},
{"plan":"327","reference":"1Chronicles19-20","refcnt":"0"},
{"plan":"327","reference":"1Peter1","refcnt":"1"},
{"plan":"327","reference":"Jonah3","refcnt":"2"},
{"plan":"327","reference":"Luke8","refcnt":"3"},
{"plan":"328","reference":"1Chronicles21","refcnt":"0"},
{"plan":"328","reference":"1Peter2","refcnt":"1"},
{"plan":"328","reference":"Jonah4","refcnt":"2"},
{"plan":"328","reference":"Luke9","refcnt":"3"},
{"plan":"329","reference":"1Chronicles22","refcnt":"0"},
{"plan":"329","reference":"1Peter3","refcnt":"1"},
{"plan":"329","reference":"Micah1","refcnt":"2"},
{"plan":"329","reference":"Luke10","refcnt":"3"},
{"plan":"330","reference":"1Chronicles23","refcnt":"0"},
{"plan":"330","reference":"1Peter4","refcnt":"1"},
{"plan":"330","reference":"Micah2","refcnt":"2"},
{"plan":"330","reference":"Luke11","refcnt":"3"},
{"plan":"331","reference":"1Chronicles24-25","refcnt":"0"},
{"plan":"331","reference":"1Peter5","refcnt":"1"},
{"plan":"331","reference":"Micah3","refcnt":"2"},
{"plan":"331","reference":"Luke12","refcnt":"3"},
{"plan":"332","reference":"1Chronicles26-27","refcnt":"0"},
{"plan":"332","reference":"2Peter1","refcnt":"1"},
{"plan":"332","reference":"Micah4","refcnt":"2"},
{"plan":"332","reference":"Luke13","refcnt":"3"},
{"plan":"333","reference":"1Chronicles28","refcnt":"0"},
{"plan":"333","reference":"2Peter2","refcnt":"1"},
{"plan":"333","reference":"Micah5","refcnt":"2"},
{"plan":"333","reference":"Luke14","refcnt":"3"},
{"plan":"334","reference":"1Chronicles29","refcnt":"0"},
{"plan":"334","reference":"2Peter3","refcnt":"1"},
{"plan":"334","reference":"Micah6","refcnt":"2"},
{"plan":"334","reference":"Luke15","refcnt":"3"},
{"plan":"335","reference":"2Chronicles1","refcnt":"0"},
{"plan":"335","reference":"1John1","refcnt":"1"},
{"plan":"335","reference":"Micah7","refcnt":"2"},
{"plan":"335","reference":"Luke16","refcnt":"3"},
{"plan":"336","reference":"2Chronicles2","refcnt":"0"},
{"plan":"336","reference":"1John2","refcnt":"1"},
{"plan":"336","reference":"Nahum1","refcnt":"2"},
{"plan":"336","reference":"Luke17","refcnt":"3"},
{"plan":"337","reference":"2Chronicles3-4","refcnt":"0"},
{"plan":"337","reference":"1John3","refcnt":"1"},
{"plan":"337","reference":"Nahum2","refcnt":"2"},
{"plan":"337","reference":"Luke18","refcnt":"3"},
{"plan":"338","reference":"2Chronicles5:1-6:11","refcnt":"0"},
{"plan":"338","reference":"1John4","refcnt":"1"},
{"plan":"338","reference":"Nahum3","refcnt":"2"},
{"plan":"338","reference":"Luke19","refcnt":"3"},
{"plan":"339","reference":"2Chronicles6:12-42","refcnt":"0"},
{"plan":"339","reference":"1John5","refcnt":"1"},
{"plan":"339","reference":"Habakkuk1","refcnt":"2"},
{"plan":"339","reference":"Luke20","refcnt":"3"},
{"plan":"340","reference":"2Chronicles7","refcnt":"0"},
{"plan":"340","reference":"2John1","refcnt":"1"},
{"plan":"340","reference":"Habakkuk2","refcnt":"2"},
{"plan":"340","reference":"Luke21","refcnt":"3"},
{"plan":"341","reference":"2Chronicles8","refcnt":"0"},
{"plan":"341","reference":"3John1","refcnt":"1"},
{"plan":"341","reference":"Habakkuk3","refcnt":"2"},
{"plan":"341","reference":"Luke22","refcnt":"3"},
{"plan":"342","reference":"2Chronicles9","refcnt":"0"},
{"plan":"342","reference":"Jude1","refcnt":"1"},
{"plan":"342","reference":"Zephaniah1","refcnt":"2"},
{"plan":"342","reference":"Luke23","refcnt":"3"},
{"plan":"343","reference":"2Chronicles10","refcnt":"0"},
{"plan":"343","reference":"Revelation1","refcnt":"1"},
{"plan":"343","reference":"Zephaniah2","refcnt":"2"},
{"plan":"343","reference":"Luke24","refcnt":"3"},
{"plan":"344","reference":"2Chronicles11-12","refcnt":"0"},
{"plan":"344","reference":"Revelation2","refcnt":"1"},
{"plan":"344","reference":"Zephaniah3","refcnt":"2"},
{"plan":"344","reference":"John1","refcnt":"3"},
{"plan":"345","reference":"2Chronicles13","refcnt":"0"},
{"plan":"345","reference":"Revelation3","refcnt":"1"},
{"plan":"345","reference":"Haggai1","refcnt":"2"},
{"plan":"345","reference":"John2","refcnt":"3"},
{"plan":"346","reference":"2Chronicles14-15","refcnt":"0"},
{"plan":"346","reference":"Revelation4","refcnt":"1"},
{"plan":"346","reference":"Haggai2","refcnt":"2"},
{"plan":"346","reference":"John3","refcnt":"3"},
{"plan":"347","reference":"2Chronicles16","refcnt":"0"},
{"plan":"347","reference":"Revelation5","refcnt":"1"},
{"plan":"347","reference":"Zechariah1","refcnt":"2"},
{"plan":"347","reference":"John4","refcnt":"3"},
{"plan":"348","reference":"2Chronicles17","refcnt":"0"},
{"plan":"348","reference":"Revelation6","refcnt":"1"},
{"plan":"348","reference":"Zechariah2","refcnt":"2"},
{"plan":"348","reference":"John5","refcnt":"3"},
{"plan":"349","reference":"2Chronicles18","refcnt":"0"},
{"plan":"349","reference":"Revelation7","refcnt":"1"},
{"plan":"349","reference":"Zechariah3","refcnt":"2"},
{"plan":"349","reference":"John6","refcnt":"3"},
{"plan":"350","reference":"2Chronicles19-20","refcnt":"0"},
{"plan":"350","reference":"Revelation8","refcnt":"1"},
{"plan":"350","reference":"Zechariah4","refcnt":"2"},
{"plan":"350","reference":"John7","refcnt":"3"},
{"plan":"351","reference":"2Chronicles21","refcnt":"0"},
{"plan":"351","reference":"Revelation9","refcnt":"1"},
{"plan":"351","reference":"Zechariah5","refcnt":"2"},
{"plan":"351","reference":"John8","refcnt":"3"},
{"plan":"352","reference":"2Chronicles22-23","refcnt":"0"},
{"plan":"352","reference":"Revelation10","refcnt":"1"},
{"plan":"352","reference":"Zechariah6","refcnt":"2"},
{"plan":"352","reference":"John9","refcnt":"3"},
{"plan":"353","reference":"2Chronicles24","refcnt":"0"},
{"plan":"353","reference":"Revelation11","refcnt":"1"},
{"plan":"353","reference":"Zechariah7","refcnt":"2"},
{"plan":"353","reference":"John10","refcnt":"3"},
{"plan":"354","reference":"2Chronicles25","refcnt":"0"},
{"plan":"354","reference":"Revelation12","refcnt":"1"},
{"plan":"354","reference":"Zechariah8","refcnt":"2"},
{"plan":"354","reference":"John11","refcnt":"3"},
{"plan":"355","reference":"2Chronicles26","refcnt":"0"},
{"plan":"355","reference":"Revelation13","refcnt":"1"},
{"plan":"355","reference":"Zechariah9","refcnt":"2"},
{"plan":"355","reference":"John12","refcnt":"3"},
{"plan":"356","reference":"2Chronicles27-28","refcnt":"0"},
{"plan":"356","reference":"Revelation14","refcnt":"1"},
{"plan":"356","reference":"Zechariah10","refcnt":"2"},
{"plan":"356","reference":"John13","refcnt":"3"},
{"plan":"357","reference":"2Chronicles29","refcnt":"0"},
{"plan":"357","reference":"Revelation15","refcnt":"1"},
{"plan":"357","reference":"Zechariah11","refcnt":"2"},
{"plan":"357","reference":"John14","refcnt":"3"},
{"plan":"358","reference":"2Chronicles30","refcnt":"0"},
{"plan":"358","reference":"Revelation16","refcnt":"1"},
{"plan":"358","reference":"Zechariah12:1-13:1","refcnt":"2"},
{"plan":"358","reference":"John15","refcnt":"3"},
{"plan":"359","reference":"2Chronicles31","refcnt":"0"},
{"plan":"359","reference":"Revelation17","refcnt":"1"},
{"plan":"359","reference":"Zechariah13:2-9","refcnt":"2"},
{"plan":"359","reference":"John16","refcnt":"3"},
{"plan":"360","reference":"2Chronicles32","refcnt":"0"},
{"plan":"360","reference":"Revelation18","refcnt":"1"},
{"plan":"360","reference":"Zechariah14","refcnt":"2"},
{"plan":"360","reference":"John17","refcnt":"3"},
{"plan":"361","reference":"2Chronicles33","refcnt":"0"},
{"plan":"361","reference":"Revelation19","refcnt":"1"},
{"plan":"361","reference":"Malachi1","refcnt":"2"},
{"plan":"361","reference":"John18","refcnt":"3"},
{"plan":"362","reference":"2Chronicles34","refcnt":"0"},
{"plan":"362","reference":"Revelation20","refcnt":"1"},
{"plan":"362","reference":"Malachi2","refcnt":"2"},
{"plan":"362","reference":"John19","refcnt":"3"},
{"plan":"363","reference":"2Chronicles35","refcnt":"0"},
{"plan":"363","reference":"Revelation21","refcnt":"1"},
{"plan":"363","reference":"Malachi3","refcnt":"2"},
{"plan":"363","reference":"John20","refcnt":"3"},
{"plan":"364","reference":"2Chronicles36","refcnt":"0"},
{"plan":"364","reference":"Revelation22","refcnt":"1"},
{"plan":"364","reference":"Malachi4","refcnt":"2"},
{"plan":"364","reference":"John21","refcnt":"3"}
];

//Define Variables used in the code below
var bookNumber;
var chapterNumber;
var verseNumber;
var chapterName;
var day;
var daily_day = 0;

function fetchVerseOfTheDay() {
  //Define Variables used in fetchVerseOfTheDay
  var response;
  var url_base = "http://labs.bible.org/api/?passage=votd&formatting=plain&type=json";
  //console.log("URL_REQUESTED: " + url_base);
  
  var req = new XMLHttpRequest();
  
  // build the GET request
  req.open('GET', url_base, true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      // 200 - HTTP OK
      if(req.status == 200) {
        //console.log(req.responseText);
        response = req.responseText;
        //console.log(response);
        //console.log("About to Parse");
        response = JSON.parse(response);
        //console.log("Done with Parse");
        var passage;
        if (response[0].text) {
         var i = 0;
      for(i; i < response.length ;i++){
        //console.log(i);
        if (! passage){
          passage = response[i].bookname + " " + response[i].chapter + ":" + response[i].verse + "  " + response[i].text + "\n\n";
        }
        else{
          passage = passage + response[i].bookname + " " + response[i].chapter + ":" + response[i].verse + "  " + response[i].text + "\n\n";
        }
      }
          // data found, look passage text
          //console.log("About to replace");
          passage = passage.replace('&8211', '-');
          //added
          passage = passage.replace('&#8211;', '-');
          //console.log("Passage is: " + passage);
          //Send Back Passage which is 1
          Pebble.sendAppMessage({
            "5": passage.toString()});
        }
        else {
			//console.log("No passage found...");
		}
      } else {
        //console.log("Request returned error code " + req.status.toString());
      }
    }
    //Added Semi-Col
  };
  req.send(null);
}

function fetchRandomVerse() {
  var response;
  var url_base = "http://labs.bible.org/api/?passage=random&formatting=plain&type=json";
  //console.log("URL_REQUESTED: " + url_base);
  
  var req = new XMLHttpRequest();
  
  // build the GET request
  req.open('GET', url_base, true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      // 200 - HTTP OK
      if(req.status == 200) {
        //console.log(req.responseText);
        response = req.responseText;
        response = response.replace('[','');
        response = response.replace(']','');
        //console.log(response);
        response = JSON.parse(response);
        var passage;
        if (response.text) {
          // data found, look passage text
          passage = response.bookname + " " + response.chapter + ":" + response.verse + "  " + response.text;
          passage = passage.replace('&8211', '');
          //console.log("Passage is: " + passage);
          //Send Back Passage which is 1
          Pebble.sendAppMessage({
            "5": passage.toString()});
        }
        else {
			//console.log("No passage found...");
		}
      } else {
        //console.log("Request returned error code " + req.status.toString());
      }
    }
    //Added Semi-col
  };
  req.send(null);
}

//For BibleSearch.org Use https://tWNUInrlp9N6Rh2LOf1FFe2ztOwtYlDeYlvb9DvA:x@bibles.org/v2/passages.js?q[]=john+3:1-5&version=eng-KJVA format to request for data
//For labs.bible.org Use labs.bible.org/api/?passage=John+3:16&type=json
function fetchBibleVerse(book_number,chapter,verse) {
  //console.log("Fetch Bible Verse");
  var response;
  var url_base = "http://labs.bible.org/api/?passage=";
  var bookName;
  response = bible;
  //console.log("About to get Book Name");
  //console.log(book_number);
  //console.log(chapter);
  //console.log(verse);
  //console.log(response.Books[book_number].names[0]);
  bookName = response.Books[book_number].names[0];
  url_base = url_base.replace('=', '=' + bookName + '+' + chapter + ':' + verse + '&type=json');
  //console.log("URL_REQUESTED: " + url_base);
  var req = new XMLHttpRequest();
  // build the GET request
  req.open('GET', url_base, true);
  req.onload = function(e) {
    if (req.readyState == 4) {
      // 200 - HTTP OK
      if(req.status == 200) 
      {
        //console.log(req.responseText);
        response = req.responseText;
        response = response.replace('[','');
        response = response.replace(']','');
        //console.log(response);
        response = JSON.parse(response);
        var passage;
        
        if (response.text) {
          // data found, look passage text
          passage = response.bookname + " " + response.chapter + ":" + response.verse + "  " + response.text;
          //console.log("Passage is: " + passage);
          //Send Back Passage which is 1

          passage = passage.replace('&8211', '-');
          //added
          passage = passage.replace('&#8211;', '-');
          Pebble.sendAppMessage({
            "5": passage.toString()});
        }
        else 
        {
          //console.log("No passage found...");
        }
        
        } 
      else {
        //console.log("Request returned error code " + req.status.toString());
      }
    }
    //Added Semi-Col
  };
  req.send(null);
}

function fetchVerses(chapterNumbers,bookNumbers) {
      //console.log("In fetchVerses");
      var response;
      response = bible;
      //console.log(bookNumbers);
      //console.log(chapterNumbers);
      //console.log(response.Books[bookNumbers].verses.length);  
      //console.log(response.Books[bookNumbers].verses[chapterNumbers]);
      return response.Books[bookNumbers].verses[chapterNumbers];		
}





function dailyPlan_day(day) {
		//Read the current day from memory

		//console.log("In dailyPlan_day");
		
			//Send current day's data

		var assignmentOne = day*4;
		var assignmentTwo = assignmentOne + 1;
		var assignmentThree = assignmentOne + 2;
		var assignmentFour = assignmentOne + 3;

		day = day;
		//console.log("About to Send message");
		Pebble.sendAppMessage({
            "6": daily.Days[assignmentOne].reference.toString(),
            "7": daily.Days[assignmentTwo].reference.toString(),
            "8": daily.Days[assignmentThree].reference.toString(),
            "9": daily.Days[assignmentFour].reference.toString(),
            "10": day.toString()
           });
        
        }






function dailyPlan() {
		//Read the current day from memory
    day = parseInt(localStorage.getItem("day"));
    
  
		if (day < 0){
      day = 0;
		}
		if (day > 365){
			day = 0;
		}
		
		
			//Send current day's data

		var assignmentOne = day*4;
		var assignmentTwo = assignmentOne + 1;
		var assignmentThree = assignmentOne + 2;
		var assignmentFour = assignmentOne + 3;
		//console.log("Current Day is: " + day);
		//console.log("Assignment One: " + daily.Days[assignmentOne].reference);
		//console.log("Assignment Two: " + daily.Days[assignmentTwo].reference);
		//console.log("Assignment Three: " + daily.Days[assignmentThree].reference);
		//console.log("Assignment Four: " + daily.Days[assignmentFour].reference);
		//day = day;
		
    //console.log("About to Send Message");
		Pebble.sendAppMessage({
            "6": daily.Days[assignmentOne].reference.toString(),
            "7": daily.Days[assignmentTwo].reference.toString(),
            "8": daily.Days[assignmentThree].reference.toString(),
            "9": daily.Days[assignmentFour].reference.toString(),
            "10": day.toString()
           });
    //console.log("Message Sent to Watch");
        
        }
        
        
        
        
      function dailyPlan_nextDay() {
      //Read the current day from memory
      day = parseInt(localStorage.getItem("day"));
      //console.log("day: " + day);
      day = day + 1;
      localStorage.setItem("day", day);
      dailyPlan();
      }
        
    function dailyPlan_perivousDay() {
		//Read the current day from memory
		day = parseInt(localStorage.getItem("day"));
    day = day - 1;
		localStorage.setItem("day", day);
		dailyPlan();
      
    }
        
function fetchChapterNumber(bookNumber) {
  //console.log("In fetchVerses");
  var response;
  response = bible;
  //console.log(bookNumber);
  //console.log(response.Books[bookNumber].verses.length);
  return response.Books[bookNumber].verses.length;		
}		

function fetchChapterName(i) {

 var response;
 response = bible;

 return response.Books[i].names[0];

}

function fetchChapters(bookkk) {
	//console.log("In fetchChapters");
    var response;
    //console.log("Before parse");
        response = bible;
        //console.log("After parse");
        //console.log(response);
          // data found, look passage text
          //console.log(response.Books.length);
          var i = 0;
          for(i; i < response.Books.length ;i++){
//console.log("In For loop");	
          //console.log(response.Books[i].names[0]);
          if (response.Books[i].names[0] == bookkk){
          //console.log("Found your book!");
        bookNumber = i;
        //console.log(response.Books[i].verses.length);
        return response.Books[i].names[0];
      }
      else {
			//console.log("No book found...");  
      }
          //Send Back Passage which is 1
          //Pebble.sendAppMessage({
          //  "1": "passage: " + passage.toString()});
        }
		
     //console.log("End of fetchChapters");
}

function load(){
			
    var window;
  
    //console.log("Load");
    if (window.localStorage.length < 1){
      //console.log("length was < 1");
			window.localStorage.setItem("day", 0);
		}

		day = window.localStorage.getItem("day");
    //console.log("Done Loading... Current Day is: " + day);
		//console.log(typeof variable_here);
		if (typeof day === 'undefined'){
			window.localStorage.setItem("day", 0);
			day = window.localStorage.getItem("day");	
      //console.log("Warning: Undefined day - Reset to 0");		
		}
		//console.log("CurrentDay Undefined check complete...");
}
    
  Pebble.addEventListener("ready",
  function(e) {
    //console.log("JavaScript app ready and running!");
	load();
  }
);  

Pebble.addEventListener("appmessage",
  function(e) {
	//console.log("Received message from pebble..."); 
	//console.log("Received message: " + e.payload);
	//console.log("Received message: " + e.payload.searchtype);
    //console.log("Received message: " + e.payload.search_type);
	var searchtype;
  var window;
    
	searchtype = e.payload.searchtype;  
    if (searchtype == "verse_of_the_day") {
	//console.log("Getting Verse of the Day"); 
	fetchVerseOfTheDay();
	}
	
    searchtype = e.payload.searchtype;  
    if (searchtype == "random_verse") {
	//console.log("Getting Random Verse"); 
	fetchRandomVerse();
	}

	searchtype = e.payload.searchtype;  
    if (searchtype == "fetch_verse") {
	//console.log("Getting Requested Verse"); 
	var bookd = e.payload.book;
	var chapterd = e.payload.chapter;
	var versed = e.payload.verse;
	//console.log(bookd);
	//console.log(chapterd);
	//console.log(versed);
	fetchBibleVerse(bookd,chapterd,versed);
	}
	
  searchtype = e.payload.searchtype;  
  if (searchtype == "daily_plan") {
	dailyPlan();
	}

	searchtype = e.payload.searchtype;
	if (searchtype == "daily_plan_day") {
	//console.log("In daily_plan_day");	
	daily_day = e.payload.day;
	//console.log(daily_day);	
	dailyPlan_day(daily_day);
	//console.log("After daily_day");
	}
	
	searchtype = e.payload.searchtype;  
    if (searchtype == "numberOfChapters") {
	var bookNumbers = e.payload.chapter;
	//console.log("Number of Chapters: " + bookNumbers);
    chapterNumber = fetchChapterNumber(bookNumbers);
    chapterName = fetchChapterName(bookNumbers);
    console.log(chapterName);
    console.log("NumberOfChapters: " + chapterNumber);
    
    Pebble.sendAppMessage({
            "chapter": chapterNumber,
            "chapterName": chapterName});
   }
	
    searchtype = e.payload.searchtype;  
    if (searchtype == "numberOfVerses") {
    var chapterCheck = e.payload.verse;
    var bookCheck = e.payload.book;
    verseNumber = fetchVerses(chapterCheck, bookCheck);
    //console.log(verseNumber);

     Pebble.sendAppMessage({
            "verse": verseNumber});
	}
	
	searchtype = e.payload.searchtype;  
    if (searchtype == "perviousDay") {
	dailyPlan_perivousDay();
  //window.localStorage.setItem("day", day);
  //console.log("perviousDay");
	}
	
	searchtype = e.payload.searchtype;  
    if (searchtype == "nextDay") {
  //console.log("nextDay Start");
	dailyPlan_nextDay();
  //console.log("nextDay Middle");
  //window.localStorage.setItem("day", day);
  //console.log("nextDay End");
	}

    searchtype = e.payload.searchtype;  
    if (searchtype == "unload") {
	//console.log("Unload")
	window.localStorage.setItem("day", day);
	//console.log("Finished Unload and Saved Data")
	}
	 

  }
);