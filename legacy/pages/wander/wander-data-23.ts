import ballentin from '../../imgs/wander/2023/ballentin.webp';
import bitalli from '../../imgs/wander/2023/bitalli.webp';
import ellena from '../../imgs/wander/2023/ellena.webp';
import kesya from '../../imgs/wander/2023/kesya.webp';
import stepanova from '../../imgs/wander/2023/stepanova.webp';
import ballentinMin from '../../imgs/wander-min/2023/ballentin-min.webp';
import bitalliMin from '../../imgs/wander-min/2023/bitalli-min.webp';
import ellenaMin from '../../imgs/wander-min/2023/ellena-min.webp';
import kesyaMin from '../../imgs/wander-min/2023/kesya-min.webp';
import stepanovaMin from '../../imgs/wander-min/2023/stepanova-min.webp';

interface StoriesProp {
  name: string;
  src: string;
  placeholderSrc: string;
  text: string;
  translation: string;
}

const stories: Array<StoriesProp> = [
  {
    name: 'bitalli',
    src: bitalli,
    placeholderSrc: bitalliMin,
    text: 'У нас Пой — Кёнджу Чхве',
    translation: '우리 본 경주 최씨에요 경주 최씨',
  },
  {
    name: 'kesya',
    src: kesya,
    placeholderSrc: kesyaMin,
    text: 'Для меня нет особой разницы',
    translation: '내 맘에는 차별이 없어요',
  },
  {
    name: 'stepanova',
    src: stepanova,
    placeholderSrc: stepanovaMin,
    text: 'Они хотели поехать в Россию на Сахалин Поэтому нас называют Корёины',
    translation: '러시아나 사할린에도 가고 싶은 그래서 우리는 고려인이라고 합니다',
  },
  {
    name: 'ballentin',
    src: ballentin,
    placeholderSrc: ballentinMin,
    text: 'Дружно, дружно',
    translation: '화목하게, 화목하게',
  },
  {
    name: 'ellena',
    src: ellena,
    placeholderSrc: ellenaMin,
    text: 'Но все говорит о том, что человек должен трудиться, бороться',
    translation: '그렇지만 어쨌든 사람은 힘을 내서 살아가야 한다는 것',
  },
];

export default stories;
