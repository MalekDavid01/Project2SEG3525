// import messi from '../assets/messi.webp';
// import neymar from '../assets/neymar.jpg';

// const newsData = [
//   {
//     id: 1,
//     title: "Team A from The Thursday Men's League Wins The Title",
//     image: messi,
//     date: "2024/07/01",
//     content: `
//       In a memorable and closely contested match, Team A secured the title in the Thursday Men's League final by defeating Team B with a 3-2 victory. The game, held at the main stadium, highlighted the exceptional performance of both teams, culminating in a last-minute winning goal by star player John Smith.

//       The first half concluded with a 1-1 tie, demonstrating strong defensive and tactical skills from both sides. Team A's captain, Michael Johnson, initiated the scoring with an impressive strike from outside the penalty box. Team B quickly equalized, ensuring a tense and competitive second half.

//       As the second half progressed, both teams increased their efforts, understanding that a single goal could determine the outcome. The midfield became a battleground, with players competing vigorously for possession and control. With ten minutes remaining, Team B took the lead with a well-executed counterattack, energizing their supporters.

//       Undeterred, Team A launched a relentless offensive in the final minutes, applying significant pressure on Team B's defense. John Smith's skill and composure were evident as he scored the equalizer, and subsequently, the decisive goal, securing both the victory and the championship for Team A.

//       The victory parade for Team A is scheduled for this weekend, inviting all supporters to participate in the celebrations. The team's management has expressed profound gratitude to the fans for their unwavering support throughout the season. Stay tuned for more updates and exclusive interviews with the champions.
//     `
//   },
//   {
//     id: 2,
//     title: "Historic Defeat Relegates Team B",
//     image: neymar,
//     date: "2024/07/01",
//     content: `
//       Team B faces relegation following a historic defeat characterized by intense competition and dramatic turns. Unable to secure the necessary points to remain in the league, Team B struggled against a formidable opponent in a match played before a packed stadium.

//       The match began with high hopes for Team B, who needed a victory to secure their league status. Dominating possession in the first half and creating several scoring opportunities, Team B failed to convert these chances into goals. Team C capitalized on a defensive lapse to score just before halftime.

//       In the second half, Team B's persistence paid off when midfielder Alex Rodriguez scored a remarkable goal from a free-kick, leveling the score at 1-1. However, Team C responded promptly with a well-coordinated counterattack to regain the lead.

//       As the game neared its conclusion, Team B exerted intense pressure but was unable to penetrate Team C's defense. In the final moments, Team C solidified their victory with a third goal, resulting in a 3-1 win and confirming Team B's relegation.

//       The relegation signifies a challenging season ahead for Team B in the lower division. The team's management and players have expressed their disappointment but remain committed to a stronger comeback. Fans demonstrated their support by cheering for the team despite the loss, pledging loyalty through this difficult period.

//       Team B's coach, Maria Gonzalez, stated, "This is a tough setback for us, but we will learn and grow from this experience. Our journey continues, and we are determined to return stronger." 

//       Preparations for the next season are already underway, focusing on rebuilding the squad and setting new objectives. The continued support of the fans will be essential as Team B endeavors to reclaim its place in the top division.
//     `
//   }
// ];

// export default newsData;



import messi from '../assets/messi.webp';
import neymar from '../assets/neymar.jpg';

const newsData = [
  {
    id: 1,
    title: { en: "Team A from The Thursday Men's League Wins The Title", ar: "فريق A من دوري الخميس للرجال يفوز باللقب" },
    image: messi,
    date: { en: "2024/07/01", ar: "٢٠٢٤/٠٧/٠١" },
    author: { en: "John Doe, Reporter for Ottawa Soccer Champions League", ar: "جون دو، مراسل لدوري أبطال أوتاوا لكرة القدم" },
    content: {
      en: `
        In a memorable and closely contested match, Team A secured the title in the Thursday Men's League final by defeating Team B with a 3-2 victory. The game, held at the main stadium, highlighted the exceptional performance of both teams, culminating in a last-minute winning goal by star player John Smith.

        The first half concluded with a 1-1 tie, demonstrating strong defensive and tactical skills from both sides. Team A's captain, Michael Johnson, initiated the scoring with an impressive strike from outside the penalty box. Team B quickly equalized, ensuring a tense and competitive second half.

        As the second half progressed, both teams increased their efforts, understanding that a single goal could determine the outcome. The midfield became a battleground, with players competing vigorously for possession and control. With ten minutes remaining, Team B took the lead with a well-executed counterattack, energizing their supporters.

        Undeterred, Team A launched a relentless offensive in the final minutes, applying significant pressure on Team B's defense. John Smith's skill and composure were evident as he scored the equalizer, and subsequently, the decisive goal, securing both the victory and the championship for Team A.

        The victory parade for Team A is scheduled for this weekend, inviting all supporters to participate in the celebrations. The team's management has expressed profound gratitude to the fans for their unwavering support throughout the season. Stay tuned for more updates and exclusive interviews with the champions.
      `,
      ar: `
        في مباراة لا تُنسى ومتنافسة عن كثب، فاز فريق أ باللقب في نهائي دوري الرجال يوم الخميس بفوزه على فريق ب بنتيجة ٣-٢. أقيمت المباراة في الاستاد الرئيسي وأبرزت الأداء الاستثنائي للفريقين، وبلغت ذروتها بهدف الفوز في اللحظات الأخيرة من قبل اللاعب النجم جون سميث.

        انتهى الشوط الأول بالتعادل ١-١، مما أظهر مهارات دفاعية وتكتيكية قوية من كلا الفريقين. بدأ قائد فريق أ، مايكل جونسون، التسجيل بضربة رائعة من خارج منطقة الجزاء. وسرعان ما عادل فريق ب النتيجة، مما ضمن شوطًا ثانيًا مليئًا بالتوتر والمنافسة.

        مع تقدم الشوط الثاني، زاد الفريقان من جهودهما، مدركين أن هدفًا واحدًا قد يحدد النتيجة. أصبحت خط الوسط ساحة معركة، حيث تنافس اللاعبون بشراسة على الاستحواذ والسيطرة. مع بقاء عشر دقائق، تقدم فريق ب بهجمة مرتدة منظمة جيدًا، مما أشعل حماس جماهيرهم.

        دون انقطاع، شن فريق أ هجومًا لا يرحم في الدقائق الأخيرة، مما وضع ضغطًا كبيرًا على دفاع فريق ب. كانت مهارات جون سميث وتوازنه واضحة عندما سجل هدف التعادل، ومن ثم الهدف الحاسم، مما ضمن الفوز والبطولة لفريق أ.

        من المقرر إقامة موكب النصر لفريق أ هذا الأسبوع، ودعوة جميع المؤيدين للمشاركة في الاحتفالات. أعربت إدارة الفريق عن امتنانها العميق للمشجعين لدعمهم الثابت طوال الموسم. ترقبوا المزيد من التحديثات والمقابلات الحصرية مع الأبطال.
      `
    }
  },
  {
    id: 2,
    title: { en: "Historic Defeat Relegates Team B", ar: "هزيمة تاريخية تهبط بفريق B" },
    image: neymar,
    date: { en: "2024/07/01", ar: "٢٠٢٤/٠٧/٠١" },
    author: { en: "Jane Smith, Reporter for Ottawa Soccer Champions League", ar: "جين سميث، مراسلة لدوري أبطال أوتاوا لكرة القدم" },
    content: {
      en: `
        Team B faces relegation following a historic defeat characterized by intense competition and dramatic turns. Unable to secure the necessary points to remain in the league, Team B struggled against a formidable opponent in a match played before a packed stadium.

        The match began with high hopes for Team B, who needed a victory to secure their league status. Dominating possession in the first half and creating several scoring opportunities, Team B failed to convert these chances into goals. Team C capitalized on a defensive lapse to score just before halftime.

        In the second half, Team B's persistence paid off when midfielder Alex Rodriguez scored a remarkable goal from a free-kick, leveling the score at 1-1. However, Team C responded promptly with a well-coordinated counterattack to regain the lead.

        As the game neared its conclusion, Team B exerted intense pressure but was unable to penetrate Team C's defense. In the final moments, Team C solidified their victory with a third goal, resulting in a 3-1 win and confirming Team B's relegation.

        The relegation signifies a challenging season ahead for Team B in the lower division. The team's management and players have expressed their disappointment but remain committed to a stronger comeback. Fans demonstrated their support by cheering for the team despite the loss, pledging loyalty through this difficult period.

        Team B's coach, Maria Gonzalez, stated, "This is a tough setback for us, but we will learn and grow from this experience. Our journey continues, and we are determined to return stronger." 

        Preparations for the next season are already underway, focusing on rebuilding the squad and setting new objectives. The continued support of the fans will be essential as Team B endeavors to reclaim its place in the top division.
      `,
      ar: `
        يواجه فريق ب الهبوط بعد هزيمة تاريخية تميزت بمنافسة شديدة وتحولات دراماتيكية. غير قادر على تأمين النقاط اللازمة للبقاء في الدوري، كافح فريق ب ضد خصم قوي في مباراة لعبت أمام ملعب مليء بالجماهير.

        بدأت المباراة بآمال كبيرة لفريق ب، الذي كان بحاجة إلى الفوز لضمان مكانه في الدوري. السيطرة على الاستحواذ في الشوط الأول وخلق العديد من الفرص التهديفية، فشل فريق ب في تحويل هذه الفرص إلى أهداف. استغل فريق ج هفوة دفاعية ليسجل قبل نهاية الشوط الأول.

        في الشوط الثاني، أثمرت مثابرة فريق ب عندما سجل لاعب الوسط أليكس رودريغيز هدفًا رائعًا من ركلة حرة، معادلًا النتيجة ١-١. ومع ذلك، رد فريق ج بسرعة بهجمة مرتدة منظمة لاستعادة التقدم.

        مع اقتراب نهاية المباراة، بذل فريق ب ضغوطًا شديدة لكنه لم يتمكن من اختراق دفاع فريق ج. في اللحظات الأخيرة، عزز فريق ج انتصاره بهدف ثالث، مما أدى إلى فوزه بنتيجة ٣-١ وتأكيدا لهبوط فريق ب.

        يشير الهبوط إلى موسم مليء بالتحديات ينتظر فريق ب في الدرجة الأدنى. أعربت إدارة الفريق واللاعبون عن خيبة أملهم لكنهم ظلوا ملتزمين بعودة أقوى. أظهر المشجعون دعمهم من خلال الهتاف للفريق رغم الخسارة، متعهدين بالولاء خلال هذه الفترة الصعبة.

        قالت مدربة فريق ب، ماريا غونزاليس، "هذه نكسة صعبة بالنسبة لنا، لكننا سنتعلم وننمو من هذه التجربة. رحلتنا مستمرة، ونحن مصممون على العودة أقوى." 

        بدأت الاستعدادات للموسم المقبل بالفعل، مع التركيز على إعادة بناء الفريق وتحديد أهداف جديدة. سيكون الدعم المستمر من المشجعين أمرًا أساسيًا بينما يسعى فريق ب لاستعادة مكانه في الدرجة العليا.
      `
    }
  }
];

export default newsData;
