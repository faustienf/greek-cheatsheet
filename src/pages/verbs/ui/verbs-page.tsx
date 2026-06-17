type VerbRow = {
  russian: string;
  present: string;
  past: string;
  future: string;
};

type WordGroup = {
  title: string;
  words: WordRow[];
};

type WordRow = {
  greek: string;
  russian: string;
};

const basicVerbs: VerbRow[] = [
  {
    russian: 'иметь',
    present: 'έχω',
    past: 'είχα',
    future: 'θα έχω',
  },
  {
    russian: 'хотеть',
    present: 'θέλω',
    past: 'ήθελα',
    future: 'θα θέλω',
  },
  {
    russian: 'знать',
    present: 'ξέρω',
    past: 'ήξερα',
    future: 'θα ξέρω',
  },
  {
    russian: 'делать',
    present: 'κάνω',
    past: 'έκανα',
    future: 'θα κάνω',
  },
  {
    russian: 'делать / создавать',
    present: 'φτιάχνω',
    past: 'έφτιαξα',
    future: 'θα φτιάξω',
  },
  {
    russian: 'брать / получать',
    present: 'παίρνω',
    past: 'πήρα',
    future: 'θα πάρω',
  },
  {
    russian: 'мочь',
    present: 'μπορώ',
    past: 'μπορούσα',
    future: 'θα μπορώ',
  },
  {
    russian: 'работать',
    present: 'δουλεύω',
    past: 'δούλεψα',
    future: 'θα δουλέψω',
  },
  {
    russian: 'покупать',
    present: 'αγοράζω',
    past: 'αγόρασα',
    future: 'θα αγοράσω',
  },
  {
    russian: 'использовать',
    present: 'χρησιμοποιώ',
    past: 'χρησιμοποίησα',
    future: 'θα χρησιμοποιήσω',
  },
  {
    russian: 'идти / ехать',
    present: 'πηγαίνω / πάω',
    past: 'πήγα',
    future: 'θα πάω',
  },
  {
    russian: 'приходить',
    present: 'έρχομαι',
    past: 'ήρθα',
    future: 'θα έρθω',
  },
  {
    russian: 'уходить',
    present: 'φεύγω',
    past: 'έφυγα',
    future: 'θα φύγω',
  },
  {
    russian: 'останавливаться',
    present: 'σταματάω',
    past: 'σταμάτησα',
    future: 'θα σταματήσω',
  },
  {
    russian: 'выходить',
    present: 'βγαίνω',
    past: 'βγήκα',
    future: 'θα βγω',
  },
  {
    russian: 'проходить / проводить время',
    present: 'περνάω',
    past: 'πέρασα',
    future: 'θα περάσω',
  },
  {
    russian: 'понимать',
    present: 'καταλαβαίνω',
    past: 'κατάλαβα',
    future: 'θα καταλάβω',
  },
  {
    russian: 'говорить',
    present: 'μιλάω',
    past: 'μίλησα',
    future: 'θα μιλήσω',
  },
  {
    russian: 'сказать',
    present: 'λέω',
    past: 'είπα',
    future: 'θα πω',
  },
  {
    russian: 'спрашивать',
    present: 'ρωτάω',
    past: 'ρώτησα',
    future: 'θα ρωτήσω',
  },
  {
    russian: 'есть',
    present: 'τρώω',
    past: 'έφαγα',
    future: 'θα φάω',
  },
  {
    russian: 'пить',
    present: 'πίνω',
    past: 'ήπια',
    future: 'θα πιω',
  },
  {
    russian: 'видеть',
    present: 'βλέπω',
    past: 'είδα',
    future: 'θα δω',
  },
  {
    russian: 'смотреть',
    present: 'κοιτάζω',
    past: 'κοίταξα',
    future: 'θα κοιτάξω',
  },
  {
    russian: 'показывать',
    present: 'δείχνω',
    past: 'έδειξα',
    future: 'θα δείξω',
  },
  {
    russian: 'нравиться',
    present: 'μου αρέσει',
    past: 'μου άρεσε',
    future: 'θα μου αρέσει',
  },
  {
    russian: 'помнить',
    present: 'θυμάμαι',
    past: 'θυμήθηκα',
    future: 'θα θυμηθώ',
  },
  {
    russian: 'забывать',
    present: 'ξεχνάω',
    past: 'ξέχασα',
    future: 'θα ξεχάσω',
  },
  {
    russian: 'читать',
    present: 'διαβάζω',
    past: 'διάβασα',
    future: 'θα διαβάσω',
  },
  {
    russian: 'писать',
    present: 'γράφω',
    past: 'έγραψα',
    future: 'θα γράψω',
  },
  {
    russian: 'оставлять / разрешать',
    present: 'αφήνω',
    past: 'άφησα',
    future: 'θα αφήσω',
  },
  {
    russian: 'оставаться / жить',
    present: 'μένω',
    past: 'έμεινα',
    future: 'θα μείνω',
  },
];

const wordGroups: WordGroup[] = [
  {
    title: 'Вежливость и реакция',
    words: [
      { greek: 'ναι', russian: 'да' },
      { greek: 'όχι', russian: 'нет' },
      { greek: 'παρακαλώ', russian: 'пожалуйста' },
      { greek: 'ευχαριστώ', russian: 'спасибо' },
      { greek: 'συγγνώμη', russian: 'извините' },
      { greek: 'εντάξει', russian: 'хорошо, ладно' },
    ],
  },
  {
    title: 'Каждый день',
    words: [
      { greek: 'σήμερα', russian: 'сегодня' },
      { greek: 'αύριο', russian: 'завтра' },
      { greek: 'χθες', russian: 'вчера' },
      { greek: 'τώρα', russian: 'сейчас' },
      { greek: 'μετά', russian: 'потом' },
      { greek: 'εδώ', russian: 'здесь' },
    ],
  },
  {
    title: 'Полезные существительные',
    words: [
      { greek: 'το σπίτι', russian: 'дом' },
      { greek: 'η δουλειά', russian: 'работа' },
      { greek: 'το νερό', russian: 'вода' },
      { greek: 'ο καφές', russian: 'кофе' },
      { greek: 'το φαγητό', russian: 'еда' },
      { greek: 'ο δρόμος', russian: 'дорога, улица' },
    ],
  },
];

type VerbsPageProps = {
  homeHref: string;
};

export function VerbsPage({ homeHref }: VerbsPageProps) {
  return (
    <main className="relative isolate min-h-screen overflow-hidden px-4 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(243,201,105,0.34),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(21,94,117,0.17),transparent_34%),linear-gradient(145deg,#fffdf8_0%,#f6f2e9_56%,#eef8f8_100%)]"
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
            Ρήματα · Глаголы
          </p>
          <h1 className="text-ink mt-4 text-4xl leading-tight font-semibold tracking-[-0.04em] text-balance sm:text-6xl">
            Базовые греческие глаголы
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Формы даны от первого лица: «я делаю», «я сделал», «я сделаю». Это
            самый быстрый формат для ежедневной речи и запоминания.
          </p>
        </header>

        <section className="mt-12" aria-labelledby="verb-table">
          <div className="mb-5 max-w-3xl">
            <h2
              className="text-ink text-2xl font-semibold tracking-tight sm:text-3xl"
              id="verb-table"
            >
              Основные действия
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              Будущее время чаще всего строится с <Greek>θα</Greek>. У части
              глаголов корень меняется, поэтому формы лучше учить сразу парами.
            </p>
          </div>

          <DataTable
            caption="Базовые греческие глаголы в настоящем, прошедшем и будущем времени"
            columns={[
              'По-русски',
              'Сейчас — я...',
              'Прошлое — я...',
              'Будущее — я...',
            ]}
            rows={basicVerbs.map((verb) => [
              verb.russian,
              verb.present,
              verb.past,
              verb.future,
            ])}
            translatedColumnIndexes={[0]}
          />

          <aside className="border-sun mt-6 rounded-2xl border-l-4 bg-white/65 p-5 shadow-sm sm:p-6">
            <h3 className="text-ink font-semibold">Про «нравиться»</h3>
            <p className="mt-2 leading-7 text-slate-600">
              <Greek>μου αρέσει</Greek> буквально устроено как «мне нравится»,
              поэтому местоимение <Greek>μου</Greek> здесь часть самой полезной
              разговорной формы.
            </p>
          </aside>
        </section>

        <section className="mt-16" aria-labelledby="daily-words">
          <div className="mb-5 max-w-3xl">
            <h2
              className="text-ink text-2xl font-semibold tracking-tight sm:text-3xl"
              id="daily-words"
            >
              Базовые повседневные слова
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
              Небольшой стартовый набор, который часто нужен вместе с глаголами.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {wordGroups.map((group) => (
              <article
                className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-sm sm:p-6"
                key={group.title}
              >
                <h3 className="text-ink font-semibold">{group.title}</h3>
                <dl className="mt-4 space-y-3">
                  {group.words.map((word) => (
                    <div
                      className="flex items-baseline justify-between gap-4 border-b border-slate-200/80 pb-3 last:border-b-0 last:pb-0"
                      key={word.greek}
                    >
                      <dt
                        className="text-lg font-semibold text-slate-700"
                        lang="el"
                      >
                        {word.greek}
                      </dt>
                      <dd className="text-right text-sm text-slate-500">
                        {word.russian}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
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
      <table className="w-full min-w-4xl border-collapse text-left">
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
