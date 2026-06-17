type PersonalPronoun = {
  russian: string;
  nominative: string;
  weakGenitive: string;
  strongAccusative: string;
  weakAccusative: string;
};

type PossessivePronoun = {
  owner: string;
  form: string;
  example: string;
  translation: string;
};

const personalPronouns: PersonalPronoun[] = [
  {
    russian: 'я',
    nominative: 'εγώ',
    weakGenitive: 'μου',
    strongAccusative: 'εμένα',
    weakAccusative: 'με',
  },
  {
    russian: 'ты',
    nominative: 'εσύ',
    weakGenitive: 'σου',
    strongAccusative: 'εσένα',
    weakAccusative: 'σε',
  },
  {
    russian: 'он',
    nominative: 'αυτός',
    weakGenitive: 'του',
    strongAccusative: 'αυτόν',
    weakAccusative: 'τον',
  },
  {
    russian: 'она',
    nominative: 'αυτή',
    weakGenitive: 'της',
    strongAccusative: 'αυτή(ν)',
    weakAccusative: 'τη(ν)',
  },
  {
    russian: 'оно',
    nominative: 'αυτό',
    weakGenitive: 'του',
    strongAccusative: 'αυτό',
    weakAccusative: 'το',
  },
  {
    russian: 'мы',
    nominative: 'εμείς',
    weakGenitive: 'μας',
    strongAccusative: 'εμάς',
    weakAccusative: 'μας',
  },
  {
    russian: 'вы / Вы',
    nominative: 'εσείς',
    weakGenitive: 'σας',
    strongAccusative: 'εσάς',
    weakAccusative: 'σας',
  },
  {
    russian: 'они (м.)',
    nominative: 'αυτοί',
    weakGenitive: 'τους',
    strongAccusative: 'αυτούς',
    weakAccusative: 'τους',
  },
  {
    russian: 'они (ж.)',
    nominative: 'αυτές',
    weakGenitive: 'τους',
    strongAccusative: 'αυτές',
    weakAccusative: 'τις',
  },
  {
    russian: 'они (ср.)',
    nominative: 'αυτά',
    weakGenitive: 'τους',
    strongAccusative: 'αυτά',
    weakAccusative: 'τα',
  },
];

const possessivePronouns: PossessivePronoun[] = [
  {
    owner: 'я',
    form: 'μου',
    example: 'το βιβλίο μου',
    translation: 'моя книга',
  },
  {
    owner: 'ты',
    form: 'σου',
    example: 'η τσάντα σου',
    translation: 'твоя сумка',
  },
  {
    owner: 'он / оно',
    form: 'του',
    example: 'ο φίλος του',
    translation: 'его друг',
  },
  {
    owner: 'она',
    form: 'της',
    example: 'το σπίτι της',
    translation: 'её дом',
  },
  {
    owner: 'мы',
    form: 'μας',
    example: 'η δουλειά μας',
    translation: 'наша работа',
  },
  {
    owner: 'вы / Вы',
    form: 'σας',
    example: 'τα παιδιά σας',
    translation: 'ваши дети',
  },
  {
    owner: 'они',
    form: 'τους',
    example: 'ο δάσκαλός τους',
    translation: 'их учитель',
  },
];

type PronounsPageProps = {
  homeHref: string;
};

export function PronounsPage({ homeHref }: PronounsPageProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(21,94,117,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(243,201,105,0.32),transparent_32%),linear-gradient(145deg,#fffdf8_0%,#f6f2e9_58%,#eef8f8_100%)]"
      />

      <div className="mx-auto max-w-6xl">
        <a
          className="text-sea focus-visible:outline-sea inline-flex items-center gap-2 rounded-sm text-sm font-semibold transition hover:text-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-4"
          href={homeHref}
        >
          <span aria-hidden="true">←</span>
          На главную
        </a>

        <header className="mt-10 max-w-3xl">
          <p className="text-sea text-xs font-semibold tracking-[0.28em] uppercase sm:text-sm">
            Αντωνυμίες · Местоимения
          </p>
          <h1 className="text-ink mt-4 text-4xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
            Личные и притяжательные местоимения
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Сначала — формы «я, ты, он», затем их место в предложении и способы
            сказать «мой, твой, наш».
          </p>
        </header>

        <section className="mt-12" aria-labelledby="personal-pronouns">
          <SectionHeading
            description="Краткие формы безударны и стоят рядом с глаголом. Сильные формы винительного падежа выделяют человека или употребляются после предлога."
            id="personal-pronouns"
            title="1. Личные местоимения"
          />

          <DataTable
            caption="Склонение личных местоимений в новогреческом"
            columns={[
              '#',
              'Именительный — кто?',
              'Родительный — чей? кому? (краткая)',
              'Винительный — кого? что? (сильная)',
              'Винительный — кого? что? (краткая)',
            ]}
            rows={personalPronouns.map((pronoun) => [
              pronoun.russian,
              pronoun.nominative,
              pronoun.weakGenitive,
              pronoun.strongAccusative,
              pronoun.weakAccusative,
            ])}
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <RuleCard title="Подлежащее часто опускается">
              <Example
                greek="Μιλάω ελληνικά."
                russian="Я говорю по-гречески."
              />
              <p>
                Форма глагола уже указывает на лицо.{' '}
                <Greek>Εγώ μιλάω ελληνικά</Greek> подчёркивает: «именно я».
              </p>
            </RuleCard>
            <RuleCard title="У αυτός есть два значения">
              <Example
                greek="Αυτός είναι ο Νίκος."
                russian="Это Никос / Он — Никос."
              />
              <p>
                Формы <Greek>αυτός / αυτή / αυτό</Greek> могут означать и «он /
                она / оно», и «этот / эта / это».
              </p>
            </RuleCard>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Запись <Greek>αυτή(ν), τη(ν)</Greek> показывает подвижное конечное{' '}
            <Greek>ν</Greek>: его употребление зависит от следующего звука.
          </p>
        </section>

        <section className="mt-16" aria-labelledby="weak-pronouns">
          <SectionHeading
            description="Именно эти короткие формы чаще всего слышны в повседневной речи."
            id="weak-pronouns"
            title="2. Где стоят краткие формы"
          />

          <div className="grid gap-4 md:grid-cols-3">
            <RuleCard title="Перед обычным глаголом">
              <Example greek="Τον βλέπω." russian="Я его вижу." />
              <Example greek="Μου μιλάει." russian="Он говорит со мной." />
            </RuleCard>
            <RuleCard title="После повелительной формы">
              <Example greek="Κοίταξέ τον." russian="Посмотри на него." />
              <Example greek="Πες μου." russian="Скажи мне." />
            </RuleCard>
            <RuleCard title="После существительного">
              <Example greek="το βιβλίο μου" russian="моя книга" />
              <Example greek="η φίλη σου" russian="твоя подруга" />
            </RuleCard>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="ordinary-possession">
          <SectionHeading
            description="Самый обычный способ сказать «мой / твой / его»: существительное + краткая форма родительного падежа."
            id="ordinary-possession"
            title="3. Кому принадлежит"
          />

          <DataTable
            caption="Обычные притяжательные формы в новогреческом"
            columns={['Владелец', 'Форма', 'Пример', 'Перевод']}
            rows={possessivePronouns.map((pronoun) => [
              pronoun.owner,
              pronoun.form,
              pronoun.example,
              pronoun.translation,
            ])}
            translatedColumnIndexes={[0, 3]}
          />

          <aside className="border-sun mt-6 rounded-2xl border-l-4 bg-white/65 p-5 shadow-sm sm:p-6">
            <h3 className="text-ink font-semibold">
              Род предмета форму не меняет
            </h3>
            <p className="mt-2 leading-7 text-slate-600">
              <Greek>μου</Greek> остаётся тем же: <Greek>ο φίλος μου</Greek> —
              мой друг, <Greek>η φίλη μου</Greek> — моя подруга,{' '}
              <Greek>το σπίτι μου</Greek> — мой дом.
            </p>
          </aside>
        </section>
      </div>
    </main>
  );
}

type SectionHeadingProps = {
  id: string;
  title: string;
  description: string;
};

function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-5 max-w-3xl">
      <h2
        className="text-ink text-2xl font-semibold tracking-tight sm:text-3xl"
        id={id}
      >
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
        {description}
      </p>
    </div>
  );
}

type DataTableProps = {
  caption: string;
  columns: string[];
  rows: string[][];
  translatedColumnIndexes?: number[];
};

function DataTable({
  caption,
  columns,
  rows,
  translatedColumnIndexes = [0],
}: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(23,32,51,0.08)]">
      <table className="w-full min-w-3xl border-collapse text-left">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-ink text-white">
          <tr>
            {columns.map((column) => (
              <th
                className="px-4 py-4 text-xs font-semibold tracking-[0.12em] uppercase sm:px-6"
                key={column}
                scope="col"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200">
          {rows.map(([firstCell, ...cells]) => (
            <tr className="transition hover:bg-cyan-50/60" key={firstCell}>
              <th
                className="text-ink px-4 py-4 text-sm font-semibold sm:px-6"
                lang={translatedColumnIndexes.includes(0) ? 'ru' : 'el'}
                scope="row"
              >
                {firstCell}
              </th>
              {cells.map((cell, index) => (
                <td
                  className="px-4 py-4 text-base font-medium text-slate-700 sm:px-6 sm:text-lg"
                  lang={
                    translatedColumnIndexes.includes(index + 1) ? 'ru' : 'el'
                  }
                  key={`${firstCell}-${index}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type RuleCardProps = {
  title: string;
  children: React.ReactNode;
};

function RuleCard({ title, children }: RuleCardProps) {
  return (
    <article className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm">
      <h3 className="text-ink font-semibold">{title}</h3>
      <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
        {children}
      </div>
    </article>
  );
}

type ExampleProps = {
  greek: string;
  russian: string;
};

function Example({ greek, russian }: ExampleProps) {
  return (
    <p>
      <Greek>{greek}</Greek>
      <span className="block text-slate-500">{russian}</span>
    </p>
  );
}

type GreekProps = {
  children: React.ReactNode;
};

function Greek({ children }: GreekProps) {
  return (
    <span className="text-ink font-medium" lang="el">
      {children}
    </span>
  );
}
