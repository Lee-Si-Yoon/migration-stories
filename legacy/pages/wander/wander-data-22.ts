import akanain from '../../imgs/wander/2022/akanain.png';
import chamikara from '../../imgs/wander/2022/chamikara.png';
import dipak from '../../imgs/wander/2022/dpiak.png';
import kemra from '../../imgs/wander/2022/kemra.png';
import sajana from '../../imgs/wander/2022/sajana.png';
import sunyena from '../../imgs/wander/2022/sunyena.png';
import ting from '../../imgs/wander/2022/ting.png';
import akanainMin from '../../imgs/wander-min/2022/akanain-min.png';
import chamikaraMin from '../../imgs/wander-min/2022/chamikara-min.png';
import dipakMin from '../../imgs/wander-min/2022/dipak-min.png';
import kemraMin from '../../imgs/wander-min/2022/kemra-min.png';
import sajanaMin from '../../imgs/wander-min/2022/sajana-min.png';
import sunyenaMin from '../../imgs/wander-min/2022/sunyena-min.png';
import tingMin from '../../imgs/wander-min/2022/ting-min.png';

interface StoriesProp {
  name: string;
  src: string;
  placeholderSrc: string;
  text: string;
  translation: string;
}

const stories: Array<StoriesProp> = [
  {
    name: 'sajana',
    src: sajana,
    placeholderSrc: sajanaMin,
    text: 'हामी छुट्टिएको 9 वर्ष भयो।\nमैले उनीहरूलाई कहिलेकाहीँ मात्र देख्न सक्छु।\nत्यसैले मलाई यो केही वर्षका लागि उनीहरूसँग रहनु धेरै राम्रो हुने छ जस्तो लाग्छ।',
    translation:
      '저는 지금까지 9년동안 헤어져 지내고 있고\n아주 가끔만 만날 수 있잖아요\n몇 년 동안이라도 같이 있었으면 좋겠다라고 생각해요',
  },
  {
    name: 'chamikara',
    src: chamikara,
    placeholderSrc: chamikaraMin,
    text: 'ඒ විදිහට මමත් උදව්වක් අවශ්‍ය විදේශ මිතුරන්ට නැතිනම් අලුත් විදේශිකයන්ට උදව් ලබා දෙනවා\nඋදව් ඔනි අයට උදව් කරන හිතින් ඒ වෙනුවෙන් මම මහන්සියෙන් සුදානම් වෙනවා',
    translation:
      '많은 도움을 다시 부족한 외국인 친구들한테\n돌려주고 싶은 마음으로 열심히 준비하고 있어요',
  },
  {
    name: 'kemra',
    src: kemra,
    placeholderSrc: kemraMin,
    text: 'ខ្ញុំរីករាយនឹងទិដ្ឋភាពនោះណាស់។',
    translation: '풍경 보는 거 좋아해요',
  },
  {
    name: 'sunyena',
    src: sunyena,
    placeholderSrc: sunyenaMin,
    text: 'Nếu tôi tìm cách, nếu tôi không bỏ cuộc mà tìm cách giải bài tập ấy,\nthì tôi sẽ học được nhiều điều. Vậy nên tôi vẫn đang không ngừng nỗ lực',
    translation:
      '방법을 찾아서 포기하지 않고 방법을 찾아서 숙제를 풀고\n나한테도 공부하는 게 되는 거라고 생각해가지고 그래서 계속 노력하고 노력하고 있어요',
  },
  {
    name: 'ting',
    src: ting,
    placeholderSrc: tingMin,
    text: 'Nhưng tôi cũng cảm thấy may vì đã từng mắc lỗi\nVì nếu không mắc lỗi thì tôi không thể giỏi lên được Vì không có kinh nghiệm mà',
    translation: '근데 실수가 있으면 다행이에요 왜냐면 실수가 없으면 진짜 못해요 경험이 없잖아요',
  },
  {
    name: 'akanain',
    src: akanain,
    placeholderSrc: akanainMin,
    text: 'သူတို့ပြောင်းလဲပေးနိုင်မယ်ဆို ရင်၊\nအဲဒါဆို ကျွန်တော်တို့ ပျော်ရွှင်ကြရမယ်လို့ ကျွန်တော် ထင်ပါတယ်။',
    translation: '그렇게 할 수 있으면 우리가 행복해요',
  },
  {
    name: 'dpiak',
    src: dipak,
    placeholderSrc: dipakMin,
    text: 'मानिसले गर्न नसक्ने कुनै पनि कुरा छैन। यदि उनीहरूले आफ्ना विचारहरू अनुसरण गरे भने,\nतिनीहरू जहाँ पनि जान सक्छन्।',
    translation: '사람은 할 수 없는 거는 아무거나 없어요 생각 따라서 가면 다 갈 수 있어요',
  },
];

export default stories;
