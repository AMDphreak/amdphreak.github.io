/** Inspirations page content — quotes, profiles, and discussion sections. */

export type InspirationCard = {
  id: string;
  quote: string;
  attribution: string;
  attributionUrl?: string;
  image: string;
  imagePosition?: string;
};

export type InspirationQuote = {
  quote: string;
  attribution: string;
  attributionUrl?: string;
  /** Full-bleed background for hero-style quote blocks. */
  image?: string;
  imagePosition?: string;
};

export type InspirationProfile = {
  id: string;
  title: string;
  description: string;
  images: string[];
};

export type InspirationSection = {
  id: string;
  title: string;
  quotes: InspirationQuote[];
  /** Optional link when there is no portrait (e.g. Brian Will on X). */
  relatedUrl?: string;
  relatedLabel?: string;
};

/** Hero quote cards at the top of the page. */
export const inspirationCards: InspirationCard[] = [
  {
    id: "zappa",
    quote: "A mind is like a parachute. It doesn't work if it is not open.",
    attribution: "Frank Zappa",
    image: "/inspirations/frank-zappa.jpeg",
    imagePosition: "50% 30%",
  },
  {
    id: "fischer",
    quote:
      "I would rather be free in my mind, and be locked up in a prison cell, than to be a coward and not be able to say what I want.",
    attribution: "Bobby Fischer, American chess grandmaster",
    image: "/inspirations/bobby-fischer.jpg",
  },
  {
    id: "drucker",
    quote: "The best way to predict the future is to create it.",
    attribution: "Peter Drucker, management consultant, educator and author",
    image: "/inspirations/peter-drucker.jpg",
  },
  {
    id: "schopenhauer",
    quote:
      "Talent hits a target no one else can hit; Genius hits a target no one else can see.",
    attribution: "Arthur Schopenhauer",
    image: "/inspirations/arthur-schopenhauer.jpg",
    imagePosition: "46% 32%",
  },
  {
    id: "stallman",
    quote: "If the users don't control the program, the program controls the users.",
    attribution:
      "Richard M. Stallman, creator of GNU/Linux, founder of the Free Software Foundation",
    attributionUrl:
      "https://www.gnu.org/philosophy/free-software-even-after-you-win.html",
    image: "/inspirations/richard-stallman.jpg",
    imagePosition: "36% 31%",
  },
  {
    id: "meineke",
    quote:
      "I'm an investigator. A professional respects the traditions of the profession and does what he's taught to do. An investigator tears it all down, questions everything, asks, 'What should we be doing?' It's a completely different posture.",
    attribution: "Chicago Mag interview, Cal Meineke, violin luthier",
    image: "/inspirations/cal-meineke.jpg",
  },
];

/** Joe's TiddlyWiki blog; joearmstrong.org is still a domain lander (May 2026). */
export const joeArmstrongSiteUrl = "https://joearms.github.io/";

export const joeArmstrongIntro =
  "Dr. Joe Armstrong was a computer scientist and physicist, the inventor of Erlang, and a researcher at Ericsson Telecom. His TiddlyWiki blog is still online at joearms.github.io. The domain joearmstrong.org currently redirects to a generic lander—not a renovated memorial site yet. These favorite quotes were preserved from his site before that quotes page went offline.";

export const joeArmstrongSection = {
  title: "Dr. Joe Armstrong, inventor of Erlang",
  quotesHeading: "Favorite quotes",
  portraitImage: "/inspirations/joe-armstrong-header.jpeg",
  imagePosition: "50% 52%",
  siteUrl: joeArmstrongSiteUrl,
  quotes: [
    {
      quote:
        "Being really good at C++ is like being really good at using rocks to sharpen sticks.",
      attribution: "Thant Tessman",
    },
    {
      quote: "When your hammer is C++, everything begins to look like a thumb.",
      attribution: "Steve Hoflich on compl.lang.c++",
    },
  ] as InspirationQuote[],
};

export const inspirationProfiles: InspirationProfile[] = [
  {
    id: "freddie-mercury",
    title: "Freddie Mercury",
    description: "Lead singer of the hit Rock n' Roll band, Queen.",
    images: [
      "/inspirations/freddie-mercury.jpg",
      "/inspirations/freddie-mercury-queen.webp",
    ],
  },
  {
    id: "paul-graham",
    title: "Paul Graham",
    description:
      "Hackers and Painters is a book about programming by Paul Graham, cofounder of YCombinator, a tech startup accelerator. The book relates his experience using Lisp in the early days of the internet to create highly sophisticated yet maintainable web apps.",
    images: [
      "/inspirations/paul-graham.jpg",
      "/inspirations/hackers-and-painters.jpg",
    ],
  },
];

export const discussionSections: InspirationSection[] = [
  {
    id: "brian-will-oop",
    title: "Brian Will's criticisms of Object-oriented Programming Paradigm",
    relatedUrl: "https://x.com/brianwill",
    relatedLabel: "Brian Will on X",
    quotes: [
      {
        quote:
          "With procedural code—particularly pure functional code—even when the division of responsibilities amongst the functions is sub-optimal, new functions and data types can generally be added without making the existing code messier. Object-oriented design, in contrast, much more often punishes programmers for not thinking ahead.",
        attribution: "Brian Will on Medium",
        attributionUrl:
          "https://medium.com/@brianwill/object-oriented-programming-a-personal-disaster-1b044c2383ab",
      },
      {
        quote:
          "Because it's so easy to put responsibilities in the wrong place, object-oriented code doesn't tolerate incremental design very well. Yes, in theory, perfectly decomposed classes are easily supplemented with additional classes, but in practice, class decompositions are never perfect, and so every new class and method tends to add to the existing confusion and produces more work for later restructuring.",
        attribution: "Brian Will on Medium",
        attributionUrl:
          "https://medium.com/@brianwill/object-oriented-programming-a-personal-disaster-1b044c2383ab",
      },
    ],
  },
  {
    id: "famous-oop",
    title: "Famous developer criticisms of OOP",
    quotes: [
      {
        quote:
          "Objects bind functions and data structures together in indivisible units. I think this is a fundamental error since functions and data structures belong in totally different worlds.",
        attribution: "Why OO Sucks (2011), Dr. Joe Armstrong",
        attributionUrl: "https://harmful.cat-v.org/software/OO_programming/why_oo_sucks",
        image: "/inspirations/joe-armstrong-grey.jpg",
        imagePosition: "50% 20%",
      },
      {
        quote: "Object-oriented programming offers a sustainable way to write spaghetti code.",
        attribution: "The Hundred Year Language (2003), Paul Graham",
        attributionUrl: "http://www.paulgraham.com/hundred.html",
        image: "/inspirations/paul-graham.jpg",
        imagePosition: "50% 45%",
      },
      {
        quote:
          "The OO design concept initially proved valuable in the design of graphics systems, graphical user interfaces, and certain kinds of simulation. To the surprise and gradual disillusionment of many, it has proven difficult to demonstrate significant benefits of OO outside those areas.",
        attribution: "The Art of UNIX Programming (2005), Eric S. Raymond",
        image: "/inspirations/eric-raymond.jpg",
        imagePosition: "50% 15%",
      },
    ],
  },
  {
    id: "valve-ux",
    title: "Valve's take on the gaming industry's UX stagnation",
    quotes: [
      {
        quote:
          "We're frustrated by the lack of innovation in the computer hardware space though, so we're jumping in. Even basic input, the keyboard and mouse, haven't really changed in any meaningful way over the years. There's a real void in the marketplace, and opportunities to create compelling user experiences are being overlooked.",
        attribution:
          "from a job application for Valve Software, creators of Steam",
      },
    ],
  },
];
