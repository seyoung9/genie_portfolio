const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. arc-item 안의 arc-overlay 제거 (메인 아카이브 그리드)
html = html.replace(/<div class="arc-overlay">[\s\S]*?<\/div>/g, '');

// 2. arc-fi 밖 이미지(히어로/컨택)에 붙은 arc-caption 제거
html = html.replace(/<img src="assets\/img\/img_00\.jpeg"[^>]*><div class="arc-caption">[\s\S]*?<\/div>/g, (match) => {
  return match.replace(/<div class="arc-caption">[\s\S]*?<\/div>/, '');
});
html = html.replace(/<img src="assets\/img\/img_01\.jpeg"[^>]*><div class="arc-caption">[\s\S]*?<\/div>/g, (match) => {
  return match.replace(/<div class="arc-caption">[\s\S]*?<\/div>/, '');
});

fs.writeFileSync('index.html', html);
console.log('done');
