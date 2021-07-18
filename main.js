const result = document.getElementById('result');
const clock = document.getElementById('clock');
const fortune = document.getElementById('fortune');
const word = document.getElementById('word');
const resultImg = document.getElementById('result_img');
const overlay = document.getElementById('overlay');
const history = document.getElementById('history');
const probability = document.getElementById('probability');
const historyList = document.getElementById('historyList');
const timeZone = document.getElementById('timeZone');
const DAIKITI = '大吉';
const KITI = '吉';
const KYOU = '凶';
const DAIKYOU = '大凶';
const historyArr = [];
const MORNING_DATA = [
  {name:DAIKITI, text:'最高の１日の始まりだー！', img:'images/大吉男.png'},
  {name:KITI, text:'いい１日になるでしょう！', img:'images/吉.png'},
  {name:KYOU, text:'人間関係には気を付けて。。', img:'images/凶.png'},
  {name:DAIKYOU, text:'き、きっといいことあるって、、', img:'images/大凶.png'}
];
const NOON_DATA = [
  {name:DAIKITI, text:'幸せいっぱいの１日を過ごせるでしょう！', img:'images/大吉男.png'},
  {name:KITI, text:'笑顔で過ごせば楽しくなるでしょう！', img:'images/吉男.png'},
  {name:KYOU, text:'調子に乗り過ぎるのは禁物！', img:'images/凶男.png'},
  {name:DAIKYOU, text:'今日は大人しくしといた方がいいかも、、', img:'images/大凶男.png'}
];
const NIGHT_DATA = [
  {name:DAIKITI, text:'まだまだ今日はいいことがありそうだ！', img:'images/omikuji-daikichi-great-blessing.png'},
  {name:KITI, text:'好きな子から連絡が来るかも！？', img:'images/omikuji-kichi.png'},
  {name:KYOU, text:'今日はもう早めに寝よう。。', img:'images/omikuji-kyo-curse.png'},
  {name:DAIKYOU, text:'今すぐ寝て下さい！', img:'images/omikuji-daikyo-great-curse.png'}
];
const MIDNIGHT_DATA = [
  {name:DAIKITI, text:'好きな人と近いうちに結ばれる予感♡', img:'images/恋大吉.png'},
  {name:KITI, text:'好きな人と急接近できるかも！', img:'images/恋吉.png'},
  {name:KYOU, text:'恋は盲目気を付けて。。', img:'images/恋凶.png'},
  {name:DAIKYOU, text:'しつこいと嫌われるぞ、、', img:'images/恋大凶.png'}
];

//時間帯変更ボタンが押された時
function pushChangeBtn() {
  overlay.classList.add('fadein');
  clock.classList.add('fadein');
}

//おみくじを引くボタンが押された時
function pushBtn() {
  lottery();
  overlay.classList.add('fadein');
  result.classList.add('fadein');
  
  const len = historyArr.length;
  let stockList = [];
  //履歴に表示するための処理
  for(let i = 0; i < len; i++) {
    stockList.push('<li>' + historyArr[i] + '</li>');
  }
  if(len > 10){
    stockList = stockList.slice(0, 10);
  }
  historyList.innerHTML = stockList.join('');
}

//履歴ボタンが押された時
function pushHistoryBtn(){
  overlay.classList.add('fadein');
  history.classList.add('fadein');
}

//確率一覧ボタンが押された時
function pushProbabilityBtn(){
  probability.classList.add('fadein');
  overlay.classList.add('fadein');
  const timeZoneTxt = timeZone.textContent;
  const probTable = document.getElementById('probTable');
  if(timeZoneTxt == "現在の時間帯は朝です！") {
    probTable.children[0].textContent ='朝(6時~11時)';
    probTable.children[1].textContent ='35%';
    probTable.children[2].textContent ='20%';
    probTable.children[3].textContent ='15%';
    probTable.children[4].textContent ='30%';
  }else if (timeZoneTxt == "現在の時間帯は昼です！"){
    probTable.children[0].textContent ='昼(11時~15時)';
    probTable.children[1].textContent ='20%';
    probTable.children[2].textContent ='30%';
    probTable.children[3].textContent ='30%';
    probTable.children[4].textContent ='20%';
  }else if (timeZoneTxt == "現在の時間帯は夕方です！"){
    probTable.children[0].textContent ='夕方(15時~19時)';
    probTable.children[1].textContent ='30%';
    probTable.children[2].textContent ='15%';
    probTable.children[3].textContent ='35%';
    probTable.children[4].textContent ='20%';
  }else if (timeZoneTxt == "現在の時間帯は夜です！"){
    probTable.children[0].textContent ='夜(19時~5時)';
    probTable.children[1].textContent ='40%';
    probTable.children[2].textContent ='20%';
    probTable.children[3].textContent ='20%';
    probTable.children[4].textContent ='20%';
  }
}

//戻るボタンが押された時
function pushBackBtn(){
  result.classList.remove('fadein');
  overlay.classList.remove('fadein');
  history.classList.remove('fadein');
  probability.classList.remove('fadein');
  clock.classList.remove('fadein');
}

//おみくじ結果（朝）
function morningRes(){
  const num = Math.floor(Math.random() * 100);

  if(num <= 10){
    const ojt = MORNING_DATA[0];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(ojt.name);
  }else if(num <= 40) {
    const ojt = MORNING_DATA[1];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KITI);
  }else if(num <= 80) {
    const ojt = MORNING_DATA[2];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KYOU);
  }else {
    const ojt = MORNING_DATA[3];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(DAIKYOU);
  }
 }

//おみくじ結果（昼）
function noonRes(){
  const num = Math.floor(Math.random() * 100);

  if(num <= 34) {
    const ojt = NOON_DATA[0];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(DAIKITI);
  }else if(num <= 54) {
    const ojt = NOON_DATA[1];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KITI);
  }else if(num <= 69) {
    const ojt = NOON_DATA[2];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KYOU);
  }else {
    const ojt = NOON_DATA[3];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(DAIKYOU);
  }
 }

//おみくじ結果（夕方）
function nightRes(){
  const num = Math.floor(Math.random() * 100);

  if(num <= 29) {
    const ojt = NIGHT_DATA[0];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(DAIKITI);
  }else if(num <= 44) {
    const ojt = NIGHT_DATA[1];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KITI);
  }else if(num <= 79) {
    const ojt = NIGHT_DATA[2];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KYOU);
  }else {
    const ojt = NIGHT_DATA[3];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(DAIKYOU);
  }
 }

//おみくじ結果（夜）
function midnightRes(){
  const num = Math.floor(Math.random() * 100);

  if(num <= 39) {
    const ojt = MIDNIGHT_DATA[0];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(DAIKITI);
  }else if(num <= 59) {
    const ojt = MIDNIGHT_DATA[1];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KITI);
  }else if(num <= 79) {
    const ojt = MIDNIGHT_DATA[2];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(KYOU);
  }else {
    const ojt = MIDNIGHT_DATA[3];
    fortune.innerHTML = ojt.name;
    word.innerHTML = ojt.text;
    resultImg.src = ojt.img;
    historyArr.unshift(DAIKYOU);
  }
 }

//ページ読み込み時に現在の時間帯を表示する関数
window.onload = function(){
  const now = new Date();
  const h = now.getHours();
  
  if(6 <= h <= 11){
    timeZone.innerHTML = "現在の時間帯は朝です！";
    document.body.style.backgroundImage = "url(images/朝.jpg)";
  }else if(h <= 15){
    timeZone.innerHTML = "現在の時間帯は昼です！";
    document.body.style.backgroundImage = "url(images/昼.jpg)";
  }else if(h <= 19){
    timeZone.innerHTML = "現在の時間帯は夕方です！";
    document.body.style.backgroundImage = "url(images/夕方.jpg)";
  }else {
    timeZone.innerHTML = "現在の時間帯は夜です！";
    document.body.style.backgroundImage = "url(images/夜.jpg)";
  }
}

//時間帯を変更する関数
function changeTimeZone(value){
  if(value == 0) {
    timeZone.innerHTML = "現在の時間帯は朝です！";
    document.body.style.backgroundImage = "url(images/朝.jpg)";
  }else if (value == 1){
    timeZone.innerHTML = "現在の時間帯は昼です！";
    document.body.style.backgroundImage = "url(images/昼.jpg)";
  }else if (value == 2){
    timeZone.innerHTML = "現在の時間帯は夜です！";
    document.body.style.backgroundImage = "url(images/夜.jpg)";
  }else if (value == 3){
    timeZone.innerHTML = "現在の時間帯は夕方です！";
    document.body.style.backgroundImage = "url(images/夜中.jpg)";
  }
  overlay.classList.remove('fadein');
  clock.classList.remove('fadein');
}

//時間帯によってどのくじにするかを決める関数
function lottery(){
  const timeZoneTxt = timeZone.textContent; 
  if(timeZoneTxt == "現在の時間帯は朝です！") {
    morningRes();
  }else if(timeZoneTxt == "現在の時間帯は昼です！") {
    noonRes();
  }else if(timeZoneTxt == "現在の時間帯は夜です！") {
    nightRes();
  }else if(timeZoneTxt == "現在の時間帯は夕方です！") {
    midnightRes();
  }
}