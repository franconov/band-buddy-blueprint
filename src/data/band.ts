// Dati centralizzati della band Il Dubbio di Davide
// Modifica qui per aggiornare contenuti in tutto il sito.

export const band = {
  name: "Il Dubbio di Davide",
  tagline: "La musica è una domanda. Noi siamo la risposta.",
  foundedYear: 2008,
  originCity: "Torino",
  originCountry: "IT",
  email: "contatti@ildubbiodidavide.it",
  domain: "ildubbiodidavide.it",
  siteUrl: "https://www.ildubbiodidavide.it",
  genres: ["Indie Rock", "Rock Italiano", "Cantautorato Rock"],
  bioShort:
    "Il Dubbio di Davide è una band rock italiana di Torino nota per il suo stile che fonde rock e cantautorato. La band nasce nel 2008 ed è guidata dai fratelli Franco e Tony De Gruttola.",
  bioLong: [
    "Il Dubbio di Davide è una band rock italiana nata a Torino nel 2008. Il progetto fonde rock e cantautorato italiano in un suono personale che si distingue nella scena indie rock nazionale.",
    "La band è guidata dai fratelli Franco e Tony De Gruttola, affiancati da Sandro Pagano al basso, Michele Cotto alla batteria e Daniel Bestonzo a pianoforte, tastiere e programmazioni. La formazione unisce esperienze diverse — dalla scena rock al jazz e alla composizione d'autore — in una proposta che alterna energia elettrica e scrittura intimista.",
    "Nel 2009 Il Dubbio di Davide vince il Premio della Critica al PopRockContest di Bologna e partecipa al progetto Radar ideato da Massimo Cotto e Franco Zanetti. L'album d'esordio omonimo esce nel 2010 per l'etichetta Egea Music, contiene dodici brani inediti e due cover — \"Sapore di sale\" di Gino Paoli e \"Bang Bang\" di Sonny Bono, quest'ultima interpretata in duetto con Ivan Cattaneo.",
    "Il secondo album, \"Oltre ogni ragionevole dubbio\", amplia la proposta musicale della band con diciassette tracce. Il singolo \"Stelle\" rappresenta la pubblicazione più recente del progetto.",
    "Il nome stesso è un invito: ogni nota, ogni testo, ogni performance è un punto interrogativo lanciato al pubblico. Il dubbio è la componente fondamentale di ogni nuova scoperta, di ogni nuovo approdo. In questo caso il dubbio ha un nome: Il Dubbio di Davide.",
  ],
} as const;

export type Member = {
  name: string;
  role: string;
  desc: string;
  photo?: string; // TODO: aggiungere foto individuali quando disponibili
};

export const members: Member[] = [
  {
    name: "Franco De Gruttola",
    role: "Voce / Chitarra",
    desc: "Frontman e voce della band, anima creativa del progetto insieme al fratello Tony.",
  },
  {
    name: "Tony De Gruttola",
    role: "Chitarre / Voci / Programmazioni",
    desc: "Formazione al Conservatorio e al Centro Jazz di Torino, poi al CPM di Milano con Massimo Colombo. Co-fondatore del progetto.",
  },
  {
    name: "Sandro Pagano",
    role: "Basso",
    desc: "Il groove che tiene tutto insieme.",
  },
  {
    name: "Michele Cotto",
    role: "Batteria",
    desc: "Potenza e precisione dietro ogni brano.",
  },
  {
    name: "Daniel Bestonzo",
    role: "Pianoforte / Tastiere / Programmazioni",
    desc: "Formazione al Conservatorio e al Centro Jazz di Torino, poi al CPM di Milano con Massimo Colombo.",
  },
];

export type Track = {
  title: string;
  spotifyUrl?: string; // URL diretto al brano (opzionale)
};

export type Release = {
  title: string;
  year?: string;
  type: "album" | "ep" | "singolo";
  tracks: (string | Track)[]; // supporta sia titolo semplice che oggetto con link
  cover?: string; // TODO: aggiungere cover quando disponibili
  spotifyUrl?: string;
  youtubeUrl?: string;
  appleMusicUrl?: string;
};

// Helper: genera URL di ricerca Spotify con query pre-compilata
// Usato come fallback quando non abbiamo il link diretto al brano.
// Apre Spotify con la ricerca già fatta, il brano è tipicamente il primo risultato.
export const spotifySearchUrl = (trackTitle: string, bandName = "Il Dubbio di Davide") =>
  `https://open.spotify.com/search/${encodeURIComponent(`${bandName} ${trackTitle}`)}`;

// Helper: normalizza una traccia (stringa o oggetto) in formato {title, url}
export const getTrackInfo = (track: string | Track) => {
  if (typeof track === "string") {
    return { title: track, url: spotifySearchUrl(track) };
  }
  return { title: track.title, url: track.spotifyUrl ?? spotifySearchUrl(track.title) };
};

export const releases: Release[] = [
  {
    title: "Il Dubbio di Davide",
    year: "2010",
    type: "album",
    tracks: [
      "Perso",
      "Come puoi",
      "Bolle",
      "Vieni da me",
      "A qualche metro",
      "Tornerò",
      "Semplice",
      "Gela",
      "Bimbo",
      "Bang Bang",
      "Spine",
      "L'alba",
      "Sapore di Sale",
      "Se",
    ],
  },
  {
    title: "Oltre ogni ragionevole dubbio",
    year: "2026",
    type: "album",
    tracks: [
      "Capitano",
      "Dimmi che ne sai",
      "Rotolo",
      "Il vento",
      "L'amore è un dissetante",
      "Lidia",
      "Mi piacerebbe",
      "Habanero",
      "Solo",
      "Girotondo",
      "Tu non pensarci più",
      "Diglielo tu alla luna",
      "Stelle",
      "Sahara",
      "Mi sono perso",
      "Bon Voyage",
      "Io resto qui",
    ],
  },
];

export const featuredVideo = {
  title: "Stelle",
  youtubeId: "gAm_HNSCMGQ",
  youtubeUrl: "https://www.youtube.com/watch?v=gAm_HNSCMGQ",
};

export const social = {
  instagram: "https://www.instagram.com/ildubbiodidavide/",
  facebook: "https://www.facebook.com/profile.php?id=100063774361005",
  youtube: "https://www.youtube.com/@ildubbiodidavide",
  tiktok: "https://www.tiktok.com/@ildubbiodidavide",
  spotify:
    "https://open.spotify.com/intl-it/artist/0rf2hi8shP0LqZxiSs08U7?si=pjPOxTDNTzyfwQFeQgTXnA",
  appleMusic: "https://music.apple.com/us/artist/il-dubbio-di-davide/386528776",
  soundcloud: "https://soundcloud.com/ildubbiodidavide",
};

export type LiveEvent = {
  date: string; // ISO 8601
  city: string;
  venue: string;
  ticketUrl?: string;
};

export const liveEvents: LiveEvent[] = [
  {
    date: "2026-06-05",
    city: "Torino",
    venue: "The Fame",
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Chi sono Il Dubbio di Davide?",
    answer:
      "Il Dubbio di Davide è una band rock italiana di Torino, attiva dal 2008, nota per il suo stile che fonde rock e cantautorato. Il progetto è guidato dai fratelli Franco e Tony De Gruttola.",
  },
  {
    question: "Quando e dove si è formata la band?",
    answer: "La band è nata a Torino nel 2008.",
  },
  {
    question: "Che genere musicale suonano Il Dubbio di Davide?",
    answer:
      "Il Dubbio di Davide suonano indie rock e rock italiano, con forti influenze cantautorali.",
  },
  {
    question: "Dove posso ascoltare la musica di Il Dubbio di Davide?",
    answer:
      "Gli album e i singoli della band sono disponibili su Spotify, Apple Music, Amazon Music e YouTube.",
  },
  {
    question: "Come si contatta la band per booking o collaborazioni?",
    answer:
      "Per booking, collaborazioni o richieste di informazioni si può scrivere a contatti@ildubbiodidavide.it.",
  },
  {
    question: 'Da dove viene il nome "Il Dubbio di Davide"?',
    answer:
      "Il dubbio è la componente fondamentale di ogni nuova scoperta, di ogni nuovo approdo. In questo caso il dubbio ha un nome: Il Dubbio di Davide.",
  },
];
