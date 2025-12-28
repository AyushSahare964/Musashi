import katanaDragon from '@/assets/katana-dragon.jpg';
import katanaShadow from '@/assets/katana-shadow.jpg';
import katanaCherry from '@/assets/katana-cherry.jpg';
import katanaMusashi from '@/assets/katana-mushashi.jpg';
import katanaHero from '@/assets/katana-hero.jpg';
import vagabondSamurai from '@/assets/vagabond-manga-samurai-wind-swept-66u7bschc4wvdw0x.jpg';
import animeSword from '@/assets/pngtree-anime-asta-sword-png-image_13281795.png';
import designSword from '@/assets/design-samurai-sword-frame-depicting-finely-crafted-samurai-sword-tatoo-cnc-laser-tshirt-2d_655090-852608.avif';
import oipKatana from '@/assets/OIP.webp';
import mysticBlade1 from '@/assets/a9de8c93573cab2d2ac0aee99cf4ae17.jpg';
import mysticBlade2 from '@/assets/d74e6a6edf00e4e9e9290b1da11c33e6.jpg';

export interface Product {
  id: string;
  name: string;
  nameJp: string;
  description: string;
  price: number;
  image: string;
  category: 'katana' | 'wakizashi' | 'tanto' | 'accessories';
  featured?: boolean;
  legend?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Musashi Dragon',
    nameJp: '武蔵龍',
    description: 'Forged in the spirit of Miyamoto Musashi, this blade carries the wisdom of 60 duels. T10 high carbon steel with authentic hamon line.',
    price: 2499,
    image: katanaDragon,
    category: 'katana',
    featured: true,
    legend: 'The blade that knows no defeat',
  },
  {
    id: '2',
    name: 'Shadow Striker',
    nameJp: '影撃',
    description: 'A masterpiece of stealth and precision. Folded 1095 steel with midnight black saya and crimson silk wrapping.',
    price: 1899,
    image: katanaShadow,
    category: 'katana',
    featured: true,
    legend: 'Silent as the night wind',
  },
  {
    id: '3',
    name: 'Cherry Blossom',
    nameJp: '桜花',
    description: 'Beauty meets deadly precision. Damascus steel with cherry blossom engravings and white ray skin handle.',
    price: 2199,
    image: katanaCherry,
    category: 'katana',
    featured: true,
    legend: 'Petals fall, enemies follow',
  },
  {
    id: '4',
    name: 'Musashi Signature',
    nameJp: '武蔵銘刀',
    description:
      'A faithful tribute to Musashi’s own blade. Deep curve, battle-ready edge, and a minimalist black saya.',
    price: 2699,
    image: katanaMusashi,
    category: 'katana',
    featured: true,
    legend: 'One stroke, one victory',
  },
  {
    id: '5',
    name: 'Hero of Edo',
    nameJp: '江戸の英雄',
    description:
      'A striking hero katana with bold hamon and polished fittings, ideal as the centerpiece of any collection.',
    price: 2599,
    image: katanaHero,
    category: 'katana',
    legend: 'Stand alone against a thousand',
  },
  {
    id: '6',
    name: 'Vagabond Wanderer',
    nameJp: '流浪の侍',
    description:
      'Inspired by the lone ronin of legend. Weathered fittings and a blade that feels alive in your hands.',
    price: 2399,
    image: vagabondSamurai,
    category: 'katana',
    legend: 'Walk the path alone',
  },
  {
    id: '7',
    name: 'Demon Slayer Replica',
    nameJp: '魔剣写し',
    description:
      'Anime-inspired greatsword for display and cosplay. Not sharpened, but full of presence.',
    price: 599,
    image: animeSword,
    category: 'accessories',
    legend: 'A hero’s weight to bear',
  },
  {
    id: '8',
    name: 'Engraved Samurai Plate',
    nameJp: '武士彫刻板',
    description:
      'Laser-engraved samurai sword art plaque. Perfect for dojo walls or a collector’s den.',
    price: 199,
    image: designSword,
    category: 'accessories',
  },
  {
    id: '9',
    name: 'Classic Training Katana',
    nameJp: '稽古刀',
    description:
      'Durable practice blade designed for balance and control, ideal for daily dojo training.',
    price: 799,
    image: oipKatana,
    category: 'wakizashi',
  },
  {
    id: '11',
    name: 'Blood Moon Edge',
    nameJp: '血月刃',
    description:
      'High-contrast blade photo capturing a blood-moon glow, sold as a premium wall print for collectors.',
    price: 149,
    image: mysticBlade1,
    category: 'accessories',
  },
  {
    id: '12',
    name: 'Stormcaller Steel',
    nameJp: '嵐呼び鋼',
    description:
      'Dynamic sword artwork print with storm-lit steel, perfect for framing above your weapons rack.',
    price: 149,
    image: mysticBlade2,
    category: 'accessories',
  },
];

export const featuredProducts = products.filter(p => p.featured);
export const categories = ['katana', 'wakizashi', 'tanto', 'accessories'] as const;
