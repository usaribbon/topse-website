function Student(_name, _organization, _comment, _imgpath){
  this.name = _name;
  this.organization = _organization;
  this.comment = _comment;
  this.imgpath = _imgpath;
}

var students = [
  new Student(
    "木村 功作",
    "富士通研究所",
    "とてもエキサイティングな1年間でした．演習に多くの時間が充てられているため，技術や理論の本質を深く理解することができたと実感しております．トップエスイーは実践の場としてとても有益だと思います．",
    "kimura.jpg"),
  new Student(
    "若松　和憲",
    "リコーITソリューションズ ",
    "ソフトウェアの設計演習を受講生のグループで実施できるのが良かったです。他の会社のエンジニアと一緒に設計を考える機会はなかなかないと思います。良い刺激を受けることができ、学ぶことも多かったです。",
    "wakamatsu.jpg"),
  new Student(
    "山崎　智史",
    "日本電気株式会社",
    "私は第10期生としてトップエスイーに参加し，主に形式手法の講義を受講しました．グループ演習形式の講義が多く，他の受講生の助けを借りながら独習以上に講義内容の理解を深めることができたのが印象的でした．",
    "yamazaki.jpg"),
  new Student(
    "古城　仁士",
    "東芝",
    "モデル検査や分散処理、要求工学、テスティング等、広範な領域から選び時間をかけ学べる非常に貴重な機会です。ぜひ積極的に利用し、業務や将来へ活かして下さい。",
    "kojo.png"
  ),
  new Student(
    "石井雄介",
    "富士通",
    "トップエスイーの講師陣や他の受講生との対話と講義を通じて学んだ考え方によって、自分の業務における課題および解決手段を考える際のアプローチの幅が広がったように感じています。",
    "ishii.jpg"
  )
];


var number = Math.floor(Math.random()*5);
for(var i = 0; i < students.length; i++){
  if(number == i){
      document.getElementById("studentName").textContent = students[i].name;
      document.getElementById("studentOrganization").textContent = students[i].organization;
      document.getElementById("studentComment").textContent = students[i].comment;
      document.getElementById("studentImg").src = "../images/students/" + students[i].imgpath;
  }
}

