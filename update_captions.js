const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const captions = {
  'img_00': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
  'img_01': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_02': { ko: '2025 서울문화재단 청년예술지원사업 정종웅 기획공연 〈Plantoid〉 기획PD', en: '2025 Seoul Foundation for Arts and Culture Youth Arts Support, Jeong Jongwoong · Plantoid · Creative Producer' },
  'img_03': { ko: '2024 앰비규어스댄스컴퍼니 무용축제 〈페스티벌 99.9〉 기획PD', en: '2024 Ambiguous Dance Company Dance Festival · Festival 99.9 · Creative Producer' },
  'img_04': { ko: '2024 부산문화재단 부산국제무용제 AK21 안무가상 수상작, 박정무 〈헝거〉 기획PD', en: '2024 Busan Cultural Foundation BIDF AK21 Choreographer Award, Park Jungmu · Hunger · Creative Producer' },
  'img_05': { ko: '2024 서울거리예술축제 국내 공모 선정작, 언리쉬댄스컴퍼니 〈두 점 사이〉 기획PD', en: '2024 Seoul Street Arts Festival Selected Work, Unleash Dance Company · Between Two Points · Creative Producer' },
  'img_06': { ko: '2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 시민 예술 리서치 〈영종도 예술담화〉 기획PD', en: '2024 Incheon Cultural Foundation Citizen Arts Research, Dance Company Braveman · Yeongjong Art Dialogue · Creative Producer' },
  'img_07': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_08': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_09': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_10': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
  'img_11': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_12': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_13': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_14': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_15': { ko: '2025 UNLEASH DANCE COMPANY | MY OWN MOVE 〈동행〉 기획PD 및 출연', en: '2025 Unleash Dance Company | MY OWN MOVE · Accompaniment · Creative Producer & Performer' },
  'img_16': { ko: '2025 서울문화재단 청년예술지원사업 정종웅 기획공연 〈Plantoid〉 기획PD', en: '2025 Seoul Foundation for Arts and Culture Youth Arts Support, Jeong Jongwoong · Plantoid · Creative Producer' },
  'img_17': { ko: '2025 서울문화재단 청년예술지원사업 정종웅 기획공연 〈Plantoid〉 기획PD', en: '2025 Seoul Foundation for Arts and Culture Youth Arts Support, Jeong Jongwoong · Plantoid · Creative Producer' },
  'img_18': { ko: '2025 CRESIDANCE SEOUL DANCE WORKSHOP 멘토 초청 언리쉬댄스컴퍼니 기획PD 및 통역', en: '2025 CRESIDANCE Seoul Dance Workshop Mentor Invitation, Unleash Dance Company · Creative Producer & Interpreter' },
  'img_19': { ko: '2025 CRESIDANCE SEOUL DANCE WORKSHOP 멘토 초청 언리쉬댄스컴퍼니 기획PD 및 통역', en: '2025 CRESIDANCE Seoul Dance Workshop Mentor Invitation, Unleash Dance Company · Creative Producer & Interpreter' },
  'img_20': { ko: '2024 앰비규어스댄스컴퍼니 무용축제 〈페스티벌 99.9〉 기획PD', en: '2024 Ambiguous Dance Company Dance Festival · Festival 99.9 · Creative Producer' },
  'img_21': { ko: '2024 앰비규어스댄스컴퍼니 무용축제 〈페스티벌 99.9〉 기획PD', en: '2024 Ambiguous Dance Company Dance Festival · Festival 99.9 · Creative Producer' },
  'img_22': { ko: '2024 부산문화재단 부산국제무용제 AK21 안무가상 수상작, 박정무 〈헝거〉 기획PD', en: '2024 Busan Cultural Foundation BIDF AK21 Choreographer Award, Park Jungmu · Hunger · Creative Producer' },
  'img_23': { ko: '2024 부산문화재단 부산국제무용제 AK21 안무가상 수상작, 박정무 〈헝거〉 기획PD', en: '2024 Busan Cultural Foundation BIDF AK21 Choreographer Award, Park Jungmu · Hunger · Creative Producer' },
  'img_24': { ko: '2024 부산문화재단 비팜 넥스트 스테이지, 언리쉬댄스컴퍼니 〈기氣류〉 기획PD', en: '2024 Busan Cultural Foundation BIPAM Next Stage, Unleash Dance Company · Ki-Flow · Creative Producer' },
  'img_25': { ko: '2024 서울거리예술축제 국내 공모 선정작, 언리쉬댄스컴퍼니 〈두 점 사이〉 기획PD', en: '2024 Seoul Street Arts Festival Selected Work, Unleash Dance Company · Between Two Points · Creative Producer' },
  'img_26': { ko: '2024 송파문화재단 문화예술활성화 지원사업 선정작, 언리쉬댄스컴퍼니 〈기氣류〉 기획PD', en: '2024 Songpa Cultural Foundation Arts Support, Unleash Dance Company · Ki-Flow · Creative Producer' },
  'img_27': { ko: '2024 대전뉴댄스국제페스티벌, 언리쉬댄스컴퍼니 〈기氣류〉 기획PD', en: '2024 Daejeon New Dance International Festival, Unleash Dance Company · Ki-Flow · Creative Producer' },
  'img_28': { ko: '2024 대한무용협회 젊은안무자창작공연, 박정무 〈무고〉 기획PD', en: '2024 Korean Dance Association Young Choreographer Creative Performance, Park Jungmu · Mugo · Creative Producer' },
  'img_29': { ko: '2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 〈헤어질결심〉 기획PD', en: '2024 Incheon Cultural Foundation Support, Dance Company Braveman · Decision to Part · Creative Producer' },
  'img_30': { ko: '2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 〈훌리건〉 기획PD', en: '2024 Incheon Cultural Foundation Support, Dance Company Braveman · Hooligan · Creative Producer' },
  'img_31': { ko: '2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 시민 예술 리서치 〈영종도 예술담화〉 기획PD', en: '2024 Incheon Cultural Foundation Citizen Arts Research, Dance Company Braveman · Yeongjong Art Dialogue · Creative Producer' },
  'img_32': { ko: '2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 시민 예술 리서치 〈영종도 예술담화〉 기획PD', en: '2024 Incheon Cultural Foundation Citizen Arts Research, Dance Company Braveman · Yeongjong Art Dialogue · Creative Producer' },
  'img_33': { ko: '2024 인천문화재단 지원사업 댄스컴퍼니 브레이브맨 시민 예술 리서치 〈영종도 예술담화〉 기획PD', en: '2024 Incheon Cultural Foundation Citizen Arts Research, Dance Company Braveman · Yeongjong Art Dialogue · Creative Producer' },
  'img_34': { ko: '2024 북서울시립미술관, 이승택 작가 〈바람아 놀자〉 퍼포먼스 출연', en: '2024 SeMA Buk-Seoul, Artist Lee Seungtaek · Play with the Wind · Performer' },
  'img_35': { ko: '2024 제24회 서울국제즉흥춤축제, 클래스아이엠도도 〈해시테그〉 출연', en: '2024 24th Seoul International Improvisation Dance Festival, Class I Am Dodo · Hashtag · Performer' },
  'img_36': { ko: '2024 제24회 서울국제즉흥춤축제, 클래스아이엠도도 〈해시테그〉 출연', en: '2024 24th Seoul International Improvisation Dance Festival, Class I Am Dodo · Hashtag · Performer' },
  'img_37': { ko: '2024 Battle Universe, 언리쉬댄스컴퍼니 〈활성화(Rev Up)〉 기획PD', en: '2024 Battle Universe, Unleash Dance Company · Rev Up · Creative Producer' },
  'img_38': { ko: '2024 프로젝트 시대 기획공연 〈제로포인트〉 협력PD', en: '2024 Project Sidae · Zero Point · Assistant Creative Producer' },
  'img_39': { ko: '2023 제23회 서울국제즉흥춤축제, MY OWN MOVE 〈불안전한 희망〉 운영 및 출연', en: '2023 23rd Seoul International Improvisation Dance Festival, MY OWN MOVE · Unstable Hope · Organiser & Performer' },
  'img_40': { ko: '2023 제23회 서울국제즉흥춤축제, MY OWN MOVE 〈불안전한 희망〉 운영 및 출연', en: '2023 23rd Seoul International Improvisation Dance Festival, MY OWN MOVE · Unstable Hope · Organiser & Performer' },
  'img_41': { ko: '2023 세종문화회관x앰비규어스댄스컴퍼니 〈세종썸머페스티벌〉 출연', en: '2023 Sejong Center for the Performing Arts x Ambiguous Dance Company · Sejong Summer Festival · Performer' },
  'img_42': { ko: '2023 서울거리예술축제 국내 공모 선정작, 언리쉬댄스컴퍼니 〈두 점 사이〉 기획PD', en: '2023 Seoul Street Arts Festival Selected Work, Unleash Dance Company · Between Two Points · Creative Producer' },
  'img_43': { ko: '2023 서초구청 사회적경제박람회 초청공연, 프로젝트 인간 〈Rev Up. Act 2〉 기획PD', en: '2023 Seocho Social Economy Fair Invitation, Project Human · Rev Up. Act 2 · Creative Producer' },
  'img_44': { ko: '2023 한국문화예술위원회 청년예술가 생애첫지원사업 선정작, 프로젝트 인간 〈두 점 사이〉 기획PD', en: '2023 Arts Council Korea First Support for Young Artists, Project Human · Between Two Points · Creative Producer' },
  'img_45': { ko: '2023 〈특상 1위〉 문예총국제무용콩쿠르 일반부 비전공 규정 부문', en: '2023 Top Prize · KFAA International Dance Competition, Open Division Non-Major' },
  'img_46': { ko: '2023 〈특상 1위〉 문예총국제무용콩쿠르 일반부 비전공 규정 부문 〈봄〉', en: '2023 Top Prize · KFAA International Dance Competition · Spring · Performer' },
  'img_47': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
  'img_48': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
  'img_49': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
  'img_50': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
  'img_51': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
  'img_52': { ko: '지세영 기획PD', en: 'Genie · Creative Producer' },
};

// img 태그 기준으로 캡션 교체/삽입
let count = 0;
html = html.replace(/(<img src="assets\/img\/(img_\d+)\.jpeg"[^>]*>)(<div class="arc-caption">[\s\S]*?<\/div>)?/g, (match, imgTag, imgId, existingCap) => {
  const key = imgId.replace(/^img_(\d+)$/, (_, n) => 'img_' + n.padStart(2, '0'));
  const cap = captions[key];
  if (!cap) return match;
  count++;
  return `${imgTag}<div class="arc-caption"><span data-ko="${cap.ko}" data-en="${cap.en}">${cap.ko}</span></div>`;
});

fs.writeFileSync('index.html', html);
console.log('done,', count, 'captions updated');
