import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface God {
  slug: string;
  name: string;
  domain: string;
  description: string;
  symbol?: string;
  symbols?: string[];
  locations?: string[];
  artifacts?: string[];
  content?: string;
}

const godsDirectory = path.join(process.cwd(), 'content/gods');

export async function getGods(locale: string): Promise<God[]> {
  try {
    const localeDir = path.join(godsDirectory, locale);

    if (!fs.existsSync(localeDir)) {
      return getDefaultGods(locale);
    }

    const fileNames = fs.readdirSync(localeDir);
    const gods = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(localeDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          name: data.name || slug,
          domain: data.domain || '',
          description: data.description || '',
          symbol: data.symbol,
          symbols: data.symbols || [],
          locations: data.locations || [],
          artifacts: data.artifacts || [],
          content,
        };
      });

    return gods.length > 0 ? gods : getDefaultGods(locale);
  } catch {
    return getDefaultGods(locale);
  }
}

export async function getGod(locale: string, slug: string): Promise<God | null> {
  try {
    const fullPath = path.join(godsDirectory, locale, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      name: data.name || slug,
      domain: data.domain || '',
      description: data.description || '',
      symbol: data.symbol,
      symbols: data.symbols || [],
      locations: data.locations || [],
      artifacts: data.artifacts || [],
      content,
    };
  } catch {
    return null;
  }
}

function getDefaultGods(locale: string): God[] {
  const gods: Record<string, God[]> = {
    en: [
      {
        slug: 'perkunas',
        name: 'Perkūnas',
        domain: 'Thunder, Lightning, Rain',
        description: 'The supreme god of thunder and sky, protector of justice and order. Perkūnas wields a mighty hammer and rides across the heavens in a chariot pulled by goats.',
        symbol: '⚡',
        symbols: ['Oak tree', 'Hammer', 'Goat', 'Fire'],
        locations: ['Vilnius, Lithuania', 'Trakai, Lithuania'],
        artifacts: ['Thunder stones', 'Oak groves'],
      },
      {
        slug: 'saule',
        name: 'Saulė',
        domain: 'Sun, Light, Life',
        description: 'The radiant sun goddess who brings warmth and life to the world. She rides across the sky in a golden chariot, blessing the earth with her light.',
        symbol: '☀️',
        symbols: ['Sun', 'Golden chariot', 'Amber'],
        locations: ['Palanga, Lithuania', 'Kernavė, Lithuania'],
        artifacts: ['Sun wheels', 'Amber jewelry'],
      },
      {
        slug: 'menuo',
        name: 'Mėnuo',
        domain: 'Moon, Night, Time',
        description: 'The moon god who measures time and watches over the night. He is known for his romantic yet turbulent relationship with the sun goddess Saulė.',
        symbol: '🌙',
        symbols: ['Crescent moon', 'Stars', 'Silver'],
        locations: ['Anykščiai, Lithuania'],
        artifacts: ['Moon calendars', 'Silver ornaments'],
      },
    ],
    lt: [
      {
        slug: 'perkunas',
        name: 'Perkūnas',
        domain: 'Griaustinis, žaibas, lietus',
        description: 'Aukščiausias griaustinio ir dangaus dievas, teisingumo ir tvarkos globėjas. Perkūnas moja galingu kūju ir važinėja dangumi vežime, kurį traukia ožiai.',
        symbol: '⚡',
        symbols: ['Ąžuolas', 'Kūjis', 'Ožys', 'Ugnis'],
        locations: ['Vilnius, Lietuva', 'Trakai, Lietuva'],
        artifacts: ['Perkūno akmenys', 'Ąžuolynai'],
      },
      {
        slug: 'saule',
        name: 'Saulė',
        domain: 'Saulė, šviesa, gyvybė',
        description: 'Spinduliuojanti saulės deivė, kuri atneša šilumą ir gyvybę pasauliui. Ji važiuoja dangumi auksiniais ratais, laimindama žemę savo šviesa.',
        symbol: '☀️',
        symbols: ['Saulė', 'Auksinis vežimas', 'Gintaras'],
        locations: ['Palanga, Lietuva', 'Kernavė, Lietuva'],
        artifacts: ['Saulės ratai', 'Gintaro papuošalai'],
      },
      {
        slug: 'menuo',
        name: 'Mėnuo',
        domain: 'Mėnulis, naktis, laikas',
        description: 'Mėnulio dievas, kuris matuoja laiką ir stebi naktį. Jis žinomas dėl romantinio, bet audringos santykio su saulės deive Saule.',
        symbol: '🌙',
        symbols: ['Mėnulio pjautuvas', 'Žvaigždės', 'Sidabras'],
        locations: ['Anykščiai, Lietuva'],
        artifacts: ['Mėnulio kalendoriai', 'Sidabro papuošalai'],
      },
    ],
    lv: [
      {
        slug: 'perkunas',
        name: 'Pērkons',
        domain: 'Pērkons, zibens, lietus',
        description: 'Augstākais pērkona un debesu dievs, taisnības un kārtības aizsargātājs. Pērkons lieto varenu āmuru un brauc pa debesīm ratiem, ko velk kažoki.',
        symbol: '⚡',
        symbols: ['Ozols', 'Āmurs', 'Kaza', 'Uguns'],
        locations: ['Viļņa, Lietuva', 'Trakai, Lietuva'],
        artifacts: ['Pērkona akmeņi', 'Ozolu birzis'],
      },
      {
        slug: 'saule',
        name: 'Saule',
        domain: 'Saule, gaisma, dzīvība',
        description: 'Starojoša saules dieviete, kas atnes siltumu un dzīvību pasaulei. Viņa brauc pa debesīm zelta ratos, svētot zemi ar savu gaismu.',
        symbol: '☀️',
        symbols: ['Saule', 'Zelta rati', 'Dzintars'],
        locations: ['Palanga, Lietuva', 'Kernavė, Lietuva'],
        artifacts: ['Saules ritenīši', 'Dzintara rotaslietas'],
      },
      {
        slug: 'menuo',
        name: 'Mēness',
        domain: 'Mēness, nakts, laiks',
        description: 'Mēness dievs, kas mēra laiku un uzrauga nakti. Viņš ir pazīstams ar romantiskām, bet vētrajām attiecībām ar saules dievi Sauli.',
        symbol: '🌙',
        symbols: ['Mēness sirpis', 'Zvaigznes', 'Sudrabs'],
        locations: ['Anykščiai, Lietuva'],
        artifacts: ['Mēness kalendāri', 'Sudraba rotaslietas'],
      },
    ],
  };

  return gods[locale] || gods.en;
}
