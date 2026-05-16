const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. 캡션 CSS 추가
const captionCSS = `
.arc-fi{position:relative;overflow:hidden;}
.arc-caption{
  position:absolute;
  bottom:0;left:0;right:0;
  padding:24px 12px 12px;
  background:linear-gradient(transparent,rgba(0,0,0,0.75));
  color:#fff;
  font-size:11px;
  line-height:1.4;
  opacity:0;
  transition:opacity 0.3s;
}
.arc-fi:hover .arc-caption{opacity:1;}
`;
html = html.replace('</style>', captionCSS + '</style>');

// 2. switchLang 함수 안에 캡션 전환 추가
html = html.replace(
  /(function setLang\(lang\)\s*\{)([\s\S]*?)(document\.querySelectorAll\('\[data-ko\]'\)\.forEach\(el\s*=>\s*\{[\s\S]*?\}\);)/,
  (match, open, middle, query) => {
    return open + middle + query + `
  document.querySelectorAll('.arc-caption span[data-ko]').forEach(el => {
    el.textContent = lang === 'ko' ? el.dataset.ko : el.dataset.en;
  });`;
  }
);

fs.writeFileSync('index.html', html);
console.log('done');
