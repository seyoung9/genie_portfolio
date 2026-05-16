const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// arc-fi 안의 기존 arc-fo(오버레이) 제거
html = html.replace(/<div class="arc-fo">[\s\S]*?<\/div><\/div>/g, (match) => {
  // arc-caption은 유지, arc-fo만 제거
  if (match.includes('arc-caption')) return match;
  return '</div>';
});

fs.writeFileSync('index.html', html);
console.log('done');
