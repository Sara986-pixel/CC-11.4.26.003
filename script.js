/* =========================================================
   What Type of Lover Are You?  —  quiz logic
   ========================================================= */

/* ---------- Archetypes ----------
   Keys are used by the scoring tables in QUESTIONS below.
   NOTE: "mood" lines are original descriptions of each song's feeling,
   not quoted lyrics. */
const ARCHETYPES = {
  HR: {
    title: "The Hopeless Romantic",
    icon: "💌",
    tagline: "forever believes in forever",
    desc: "You fall in love with the whole story: the meet-cute, the grand gesture, the happily-ever-after. You believe in soulmates, handwritten vows and love that rewrites the ending. Your heart leads, and honestly? The world is softer for it.",
    song: "Love Story",
    artist: "Taylor Swift",
    mood: "A fairytale of defiance and devotion, where love wins out against every obstacle in the way.",
    strength: "You love with total sincerity and make people feel like the main character in a beautiful story.",
    weakness: "You can fall for the idea of someone before you've met the real them, and reality sometimes stings.",
    partner: "Someone steady and warm who can match your big gestures with quiet, daily proof that the fairytale is real."
  },
  LG: {
    title: "The Lover Girl",
    icon: "🌅",
    tagline: "golden hour is her love language",
    desc: "Love is your favourite aesthetic and your favourite feeling. You're sun-kissed, dreamy, a little dramatic, and you romanticize the small stuff: a playlist for the drive, a text that says 'thinking of you'. You glow brightest when someone adores you back.",
    song: "Young and Beautiful",
    artist: "Lana Del Rey",
    mood: "A cinematic, wistful wonder about whether love will last once the glow of youth fades.",
    strength: "You make everyday moments feel cinematic, and your warmth is magnetic.",
    weakness: "You can lose yourself in a person and shape your whole world around their mood.",
    partner: "A tender soul who loves your dreaminess, takes you on spontaneous drives and never lets the music stop."
  },
  YN: {
    title: "The Yearner",
    icon: "🌙",
    tagline: "longing, but make it art",
    desc: "You feel deeply and quietly. You know the ache of almost, the gaze across the room, the message typed and deleted. Your longing is poetic, but it can keep you waiting at the window instead of walking through the door.",
    song: "Reflections",
    artist: "The Neighbourhood",
    mood: "A hazy, late-night ache: looking at someone you can't quite reach and watching your own feelings in the mirror.",
    strength: "You love with enormous depth, and your devotion is unmistakably real once you open up.",
    weakness: "You romanticize the wanting so much that you sometimes forget to ask for what you want.",
    partner: "A brave, open-hearted person who sees you looking and gently takes the first step toward you."
  },
  SA: {
    title: "The Secret Admirer",
    icon: "🥀",
    tagline: "loves loudly, in silence",
    desc: "You notice everything: their coffee order, the way they laugh, the song they hum. You'd rather leave a tiny anonymous kindness than risk a confession. Your love is observant, gentle and patient, tucked safely behind your smile.",
    song: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    mood: "A tender, slightly unhinged devotion: wanting to be everything and anything for one person.",
    strength: "You pay attention. You love in details, and the people you care for feel truly seen.",
    weakness: "You hide your feelings so well that the right person may never know they were adored.",
    partner: "A curious, perceptive soul who reads between the lines and makes confession feel safe."
  },
  NL: {
    title: "The Nostalgic Lover",
    icon: "📻",
    tagline: "keeps every memory in a shoebox",
    desc: "You treasure old photographs, faded playlists and the exact weather of the night you met. For you, love is a place you can visit in memory. You hold on tenderly to what was, and sometimes find it hard to let it become what could be.",
    song: "The Night We Met",
    artist: "Lord Huron",
    mood: "A haunting plea to turn back time and return to the moment before everything changed.",
    strength: "You honour love deeply, and your memory for the small, precious moments is a gift.",
    weakness: "You can live in yesterday and compare every new chapter to an old one.",
    partner: "A grounded, present partner who makes new memories so vivid you stop needing the old ones."
  },
  OS: {
    title: "The Old-School Romantic",
    icon: "🕯️",
    tagline: "candlelight, letters and loyalty",
    desc: "You believe in courting, handwritten notes, opening doors and meaning every word you say. You'd rather be a slow dance than a swipe. Your love is classic, loyal and wonderfully sincere in a world that moves too fast.",
    song: "I Love You So",
    artist: "The Walters",
    mood: "A soft, vintage-sounding devotion that feels like a slow dance in a quiet room.",
    strength: "You're dependable and intentional, and your commitment is as solid as it is sweet.",
    weakness: "You can be old-fashioned to a fault, expecting others to know the unspoken rules of romance.",
    partner: "Someone sincere and a touch nostalgic who loves rituals, love letters and long-term promises."
  },
  OT: {
    title: "The Overthinker",
    icon: "🌀",
    tagline: "has analysed this text 14 times",
    desc: "Your mind never stops mapping the what-ifs. You read tone, timing and punctuation like ancient scripture. It comes from caring so much, but love can feel exhausting when your heart and brain keep arguing in the group chat.",
    song: "The Scientist",
    artist: "Coldplay",
    mood: "A restless, regretful rewinding, trying to puzzle out love and wishing it came with a clear answer.",
    strength: "You're thoughtful and emotionally intelligent, and you genuinely care about getting love right.",
    weakness: "You spiral into worst-case scenarios and can talk yourself out of something good.",
    partner: "A calm, communicative person who says what they mean and reassures you without being asked."
  },
  HB: {
    title: "The Heartbreaker",
    icon: "🔥",
    tagline: "magnetic, mysterious, dangerously charming",
    desc: "You're the plot twist in someone's story: charismatic, a little elusive, never boring. You love the chase and guard your heart carefully. You don't mean to leave a trail of what-ifs, but you do. Beneath the charm, you're afraid of being the one left behind.",
    song: "Blank Space",
    artist: "Taylor Swift",
    mood: "A glittering, tongue-in-cheek study in charm, chaos and the stories people tell about you.",
    strength: "You're confident, captivating and fiercely independent, so you never lose yourself in love.",
    weakness: "You keep people at arm's length and may pull away just when something real begins.",
    partner: "Someone secure and unbothered by the games who gently proves that staying can be thrilling too."
  }
};

/* ---------- Questions ----------
   Each option adds points to up to two archetypes. */
const QUESTIONS = [
  {
    q: "It's your dream first date. What does it look like?",
    a: [
      { t: "Candlelit dinner, a handwritten note and a proper goodnight.", s: { OS: 2, HR: 1 } },
      { t: "A golden-hour drive, windows down, a playlist made just for them.", s: { LG: 2, NL: 1 } },
      { t: "Wandering a bookstore, 'accidentally' brushing hands over the same book.", s: { SA: 2, YN: 1 } },
      { t: "Something spontaneous that leaves them wanting a second date.", s: { HB: 2, LG: 1 } }
    ]
  },
  {
    q: "They haven't replied in three hours. What are you doing?",
    a: [
      { t: "Re-reading our last conversation for hidden meaning.", s: { OT: 2, YN: 1 } },
      { t: "Imagining the reunion scene, because it's probably nothing.", s: { HR: 2, LG: 1 } },
      { t: "Phone face-down. I'm unbothered. (I am a little bothered.)", s: { HB: 2, SA: 1 } },
      { t: "Wishing we could just call, like people used to.", s: { OS: 2, NL: 1 } }
    ]
  },
  {
    q: "Love, to you, feels most like...",
    a: [
      { t: "A film that never ends, with a score that swells.", s: { HR: 2, LG: 1 } },
      { t: "An old song that takes you straight back to a feeling.", s: { NL: 2, YN: 1 } },
      { t: "A secret you carry carefully and never quite say out loud.", s: { SA: 2, OT: 1 } },
      { t: "A slow dance and a promise to keep.", s: { OS: 2, HR: 1 } }
    ]
  },
  {
    q: "Which love language comes most naturally to you?",
    a: [
      { t: "Words: long messages, letters and things I couldn't say aloud.", s: { YN: 2, SA: 1 } },
      { t: "Quality time: golden afternoons and no one else in the room.", s: { LG: 2, HR: 1 } },
      { t: "Acts of devotion: remembering every small detail.", s: { OS: 2, NL: 1 } },
      { t: "Being wanted, chased and gloriously desired.", s: { HB: 2, LG: 1 } }
    ]
  },
  {
    q: "You've caught feelings. What happens next?",
    a: [
      { t: "I write songs and notes I'll never send.", s: { SA: 2, YN: 1 } },
      { t: "I daydream our whole future by the weekend.", s: { HR: 2, YN: 1 } },
      { t: "I analyse every sign, signal and semicolon.", s: { OT: 2, SA: 1 } },
      { t: "I flirt confidently and let them wonder.", s: { HB: 2, LG: 1 } }
    ]
  },
  {
    q: "After a heartbreak, you tend to...",
    a: [
      { t: "Scroll through old photos at 2am.", s: { NL: 2, YN: 1 } },
      { t: "Replay everything, searching for what I could have done differently.", s: { OT: 2, NL: 1 } },
      { t: "Move on quickly and pretend nothing hurt.", s: { HB: 2, OT: 1 } },
      { t: "Write a kind, honest letter and wish them well.", s: { OS: 2, HR: 1 } }
    ]
  },
  {
    q: "Pick your perfect romantic setting.",
    a: [
      { t: "A rainy café window with a record crackling in the background.", s: { NL: 2, OS: 1 } },
      { t: "A sunset beach, messy hair and uncontrollable laughter.", s: { LG: 2, HR: 1 } },
      { t: "Across a crowded room, eyes meeting for one second too long.", s: { SA: 2, YN: 1 } },
      { t: "A midnight rooftop with the city humming below.", s: { HB: 2, YN: 1 } }
    ]
  },
  {
    q: "What scares you most about love?",
    a: [
      { t: "Being slowly forgotten.", s: { NL: 1, YN: 2 } },
      { t: "Not being enough for them.", s: { OT: 2, SA: 1 } },
      { t: "Getting too attached and losing control.", s: { HB: 2, OT: 1 } },
      { t: "The magic quietly fading away.", s: { HR: 2, OS: 1 } }
    ]
  },
  {
    q: "How would your friends describe you in love?",
    a: [
      { t: "Soft, dreamy and a total sucker for a happy ending.", s: { HR: 2, LG: 1 } },
      { t: "Quiet, observant and full of unspoken feelings.", s: { SA: 2, OT: 1 } },
      { t: "Magnetic, unpredictable and hard to read.", s: { HB: 2, LG: 1 } },
      { t: "Loyal, classic and refreshingly sincere.", s: { OS: 2, NL: 1 } }
    ]
  },
  {
    q: "Choose your perfect love story ending.",
    a: [
      { t: "A grand declaration in front of everyone.", s: { HR: 2, OS: 1 } },
      { t: "Realising they were right there all along.", s: { YN: 2, SA: 1 } },
      { t: "Finding each other again, years later, somewhere familiar.", s: { NL: 2, YN: 1 } },
      { t: "Ordinary mornings and coffee together for a lifetime.", s: { OS: 2, LG: 1 } }
    ]
  }
];

/* ---------- State ---------- */
const state = { index: 0, answers: [] }; // answers[i] = chosen option index
const TIE_ORDER = ["HR", "LG", "YN", "SA", "NL", "OS", "OT", "HB"];

/* ---------- DOM ---------- */
const $ = (id) => document.getElementById(id);
const screens = {
  intro: $("screen-intro"),
  quiz: $("screen-quiz"),
  loading: $("screen-loading"),
  result: $("screen-result")
};
const el = {
  area: $("question-area"),
  qText: $("question-text"),
  answers: $("answers"),
  count: $("q-count"),
  percent: $("q-percent"),
  bar: $("progress"),
  fill: $("progress-fill"),
  back: $("back-btn"),
  toast: $("toast")
};

/* ---------- Screen switching ---------- */
function showScreen(name) {
  const current = Object.values(screens).find((s) => s.classList.contains("active"));
  const next = screens[name];
  if (current === next) return;
  const swap = () => {
    if (current) current.classList.remove("active", "enter", "leave");
    next.classList.add("active", "enter");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (current) {
    current.classList.add("leave");
    setTimeout(swap, 380);
  } else swap();
}

/* ---------- Quiz rendering ---------- */
function renderQuestion(direction = "forward") {
  const q = QUESTIONS[state.index];
  const total = QUESTIONS.length;
  const letters = ["A", "B", "C", "D"];

  el.qText.textContent = q.q;
  el.answers.innerHTML = "";
  el.answers.classList.remove("locked");

  q.a.forEach((opt, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "answer";
    b.dataset.letter = letters[i];
    b.textContent = opt.t;
    if (state.answers[state.index] === i) b.classList.add("selected");
    b.addEventListener("click", () => choose(i, b));
    el.answers.appendChild(b);
  });

  el.count.textContent = `Question ${state.index + 1} of ${total}`;
  updateProgress(state.index / total);
  el.back.disabled = state.index === 0;

  el.area.classList.remove("in", "out", "in-back");
  void el.area.offsetWidth; // restart animation
  el.area.classList.add(direction === "back" ? "in-back" : "in");
}

function updateProgress(ratio) {
  const pct = Math.round(ratio * 100);
  el.fill.style.width = Math.max(pct, 4) + "%";
  el.percent.textContent = pct + "%";
  el.bar.setAttribute("aria-valuenow", pct);
}

let locked = false;
function choose(i, button) {
  if (locked) return;
  locked = true;
  state.answers[state.index] = i;
  button.classList.add("selected");
  el.answers.classList.add("locked");
  burstHearts(button);
  updateProgress((state.index + 1) / QUESTIONS.length);

  setTimeout(() => {
    el.area.classList.remove("in", "in-back");
    el.area.classList.add("out");
    setTimeout(() => {
      if (state.index < QUESTIONS.length - 1) {
        state.index++;
        renderQuestion("forward");
      } else {
        finish();
      }
      locked = false;
    }, 300);
  }, 520);
}

el.back.addEventListener("click", () => {
  if (state.index === 0 || locked) return;
  state.index--;
  renderQuestion("back");
});

/* ---------- Scoring ---------- */
function score() {
  const totals = Object.fromEntries(TIE_ORDER.map((k) => [k, 0]));
  state.answers.forEach((choice, qi) => {
    const s = QUESTIONS[qi].a[choice].s;
    for (const k in s) totals[k] += s[k];
  });
  // sort by score desc; ties broken by a fingerprint of answers so results vary
  const fingerprint = state.answers.reduce((a, c, i) => a + (c + 1) * (i + 3), 0);
  const ranked = TIE_ORDER
    .map((k, i) => ({ k, v: totals[k], tie: (i * 7 + fingerprint) % 8 }))
    .sort((a, b) => b.v - a.v || a.tie - b.tie);
  return { totals, ranked };
}

/* ---------- Finish & result ---------- */
let lastResult = null;

function finish() {
  showScreen("loading");
  setTimeout(() => {
    const { ranked } = score();
    lastResult = { main: ranked[0].k, second: ranked[1].k };
    renderResult(lastResult);
    showScreen("result");
    celebrate();
  }, 1900);
}

function renderResult({ main, second }) {
  const r = ARCHETYPES[main];
  $("r-icon").textContent = r.icon;
  $("r-title").textContent = r.title;
  $("r-tagline").textContent = r.tagline;
  $("r-desc").textContent = r.desc;
  $("r-song").textContent = "“" + r.song + "”";
  $("r-artist").textContent = r.artist;
  $("r-mood").textContent = r.mood;
  $("r-strength").textContent = r.strength;
  $("r-weakness").textContent = r.weakness;
  $("r-partner").textContent = r.partner;
  $("r-listen").href =
    "https://www.youtube.com/results?search_query=" + encodeURIComponent(r.song + " " + r.artist);
  $("r-also").textContent = "with a little of " + ARCHETYPES[second].title.toLowerCase() + " in you, too.";
}

/* ---------- Share ---------- */
$("share-btn").addEventListener("click", async () => {
  if (!lastResult) return;
  const r = ARCHETYPES[lastResult.main];
  const text = `I'm ${r.title} ${r.icon}, and my love song is “${r.song}” by ${r.artist}. What type of lover are you?`;
  const url = location.href.split("#")[0];
  try {
    if (navigator.share) {
      await navigator.share({ title: "What Type of Lover Are You?", text, url });
      return;
    }
  } catch (e) {
    if (e && e.name === "AbortError") return;
  }
  try {
    await navigator.clipboard.writeText(`${text} ${url}`);
    toast("Copied to clipboard, go send it to someone ♥");
  } catch {
    // last-resort fallback
    const ta = document.createElement("textarea");
    ta.value = `${text} ${url}`;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); toast("Copied to clipboard ♥"); }
    catch { toast("Couldn't copy, sorry!"); }
    ta.remove();
  }
});

function toast(msg) {
  el.toast.textContent = msg;
  el.toast.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.toast.classList.remove("show"), 2800);
}

/* ---------- Start / restart ---------- */
$("start-btn").addEventListener("click", () => {
  state.index = 0;
  state.answers = [];
  renderQuestion();
  showScreen("quiz");
});

$("restart-btn").addEventListener("click", () => {
  state.index = 0;
  state.answers = [];
  lastResult = null;
  showScreen("intro");
});

/* keyboard: 1-4 / A-D to answer */
document.addEventListener("keydown", (e) => {
  if (!screens.quiz.classList.contains("active") || locked) return;
  const map = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
  const i = map[e.key.toLowerCase()];
  const btns = el.answers.querySelectorAll(".answer");
  if (i !== undefined && btns[i]) btns[i].click();
});

/* ---------- Floating hearts ---------- */
const heartsLayer = $("hearts");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const HEART_CHARS = ["♥", "❤", "♡", "❥"];

function spawnHeart({ x, size, duration, opacity, sway } = {}) {
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)];
  h.style.left = (x ?? Math.random() * 100) + "vw";
  h.style.fontSize = (size ?? 12 + Math.random() * 26) + "px";
  h.style.animationDuration = (duration ?? 9 + Math.random() * 9) + "s";
  h.style.setProperty("--o", opacity ?? 0.18 + Math.random() * 0.25);
  h.style.setProperty("--sway", (sway ?? (Math.random() * 60 - 30)) + "px");
  h.style.color = Math.random() > 0.5 ? "var(--pink-deep)" : "var(--burgundy)";
  heartsLayer.appendChild(h);
  h.addEventListener("animationend", () => h.remove());
}

if (!reduceMotion) {
  for (let i = 0; i < 8; i++) setTimeout(() => spawnHeart(), i * 700);
  setInterval(() => {
    if (document.hidden) return;
    spawnHeart();
  }, 1600);
}

function burstHearts(origin) {
  if (reduceMotion) return;
  const r = origin.getBoundingClientRect();
  for (let i = 0; i < 7; i++) {
    const p = document.createElement("span");
    p.className = "heart";
    p.textContent = "♥";
    p.style.left = r.left + Math.random() * r.width + "px";
    p.style.top = r.top + r.height / 2 + "px";
    p.style.bottom = "auto";
    p.style.position = "fixed";
    p.style.fontSize = 10 + Math.random() * 14 + "px";
    p.style.animationDuration = 2.2 + Math.random() * 1.2 + "s";
    p.style.setProperty("--o", 0.8);
    p.style.setProperty("--sway", Math.random() * 80 - 40 + "px");
    heartsLayer.appendChild(p);
    p.addEventListener("animationend", () => p.remove());
  }
}

function celebrate() {
  if (reduceMotion) return;
  for (let i = 0; i < 18; i++) {
    setTimeout(() => spawnHeart({ size: 16 + Math.random() * 28, duration: 6 + Math.random() * 5, opacity: 0.5 }), i * 120);
  }
}
