// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// import * as axios from 'axios';
// import * as cheerio from 'cheerio';

// const axios = require('axios');
// const cheerio = require('cheerio');

// // axios로 HTML 문서 가져오기
// async function getHTML() {
//   try {
//     return await axios.get('https://www.youtube.com/watch?v=OzGbT1jBQ84');
//   } catch (error) {
//     console.error(error);
//   }
// }

// getHTML()
//   .then((html) => {
//     const $ = cheerio.load(html.data);
//     console.log($);

//     const videoTitle = $('#container');
//     return videoTitle;
//   })
//   .then((res) => console.log(res));

const chipCloudPanel = document.querySelector('.chip-cloud-panel');
const leftContainer = document.querySelector('.left-arrow-container');
const rightContainer = document.querySelector('.right-arrow-container');
const leftArrow = document.querySelector('.left-arrow-icon');
const rightArrow = document.querySelector('.right-arrow-icon');
const ironSelector = document.querySelector('.iron-selector');

// 필터버튼들을 감싸고 있는 ironSelector의 왼쪽 끝 좌표를 구해서
const ironClientRect = ironSelector.getBoundingClientRect();
// console.log(parseInt(ironClientRect.x)); // 590

// 해당 좌표와 동일 좌표(= 아직 다음 화살표 누르기 전)이면 이전 화살표 숨기기
if (parseInt(ironClientRect.x) === 590) {
  leftContainer.style.display = 'none';
}

leftArrow.addEventListener('click', () => {
  ironSelector.style.transform = 'translateX(' + 41 + 'px)';
  leftContainer.style.display = 'none';
});

rightArrow.addEventListener('click', () => {
  ironSelector.style.transform = 'translateX(' + -41 + 'px)';
  leftContainer.style.display = 'flex';
});
