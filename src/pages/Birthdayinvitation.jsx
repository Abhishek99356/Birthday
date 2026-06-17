
import { useState, useEffect } from "react";
import img1 from "../assets/Photo1.png";
import img2 from "../assets/Photo2.png";
// import img3 from "../assets/photo3.png";
// jitni photos hain utni import karo
import guestImg1 from "../assets/Photo1.png";

const MY_PHOTOS = [img1, img2];
// ─── Helpers ─────────────────────────────────────────────────────────────────
function rand(a, b) {
  return Math.random() * (b - a) + a;
}

const GUESTS = [
  { id:1, name:"Taufeek ansari",   photo: guestImg1 },  // photo baad mein add karo
  { id:2, name:"Pooja",   photo: null },
  { id:3, name:"Ankita",    photo: null },
  { id:4, name:"Firoz",   photo: null },
  { id:5, name:"Anmol",  photo: null },
  { id:6, name:"Surendra yadav",   photo: null },
  { id:7, name:"Sidharth Srivastava",   photo: null },
  { id:8, name:"Prem",   photo: null },
  { id:9, name:"Aditya yadav",   photo: null },
  { id:10, name:"Lokesh singh",   photo: null },
  { id:11, name:"Sidharth Singh",   photo: null },
  { id:12, name:"Vinay patel",   photo: null },
  { id:13, name:"Nagendra",   photo: null },
  { id:14, name:"Manish singh",   photo: null },
  
];

function useCountdown(target) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    function tick() {
      const diff = new Date(target) - new Date();
      if (diff <= 0) {
        setTime({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      setTime({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return time;
}

// ─── Static data ──────────────────────────────────────────────────────────────
const STARS = Array.from({ length: 110 }, (_, i) => ({
  id: i,
  top: rand(0, 100),
  left: rand(0, 100),
  size: rand(1, 3.5),
  dur: rand(1.5, 4).toFixed(1),
  delay: rand(0, 6).toFixed(1),
}));

const CONF_COLORS = [
  "#ffd700",
  "#ff69b4",
  "#c084fc",
  "#38bdf8",
  "#f97316",
  "#4ade80",
  "#f472b6",
  "#a78bfa",
];
const CONFETTI = Array.from({ length: 45 }, (_, i) => ({
  id: i,
  left: rand(0, 100),
  color: CONF_COLORS[i % CONF_COLORS.length],
  size: rand(6, 12),
  dur: rand(4, 9).toFixed(1),
  delay: rand(0, 9).toFixed(1),
  circle: i % 3 === 0,
}));

// ── Balloon DROP data (upar se neeche girenge) ────────────────────────────────
const BALLOON_DROP_COLORS = [
  "#f87171",
  "#fb923c",
  "#facc15",
  "#4ade80",
  "#60a5fa",
  "#c084fc",
  "#f472b6",
  "#34d399",
  "#ffd700",
  "#ff69b4",
  "#38bdf8",
  "#f97316",
];
const BALLOON_DROPS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: rand(2, 96),
  color: BALLOON_DROP_COLORS[i % BALLOON_DROP_COLORS.length],
  w: rand(42, 68),
  dur: rand(6, 13).toFixed(1),
  delay: rand(0, 14).toFixed(1),
  imgIndex: i % 2,
}));

// ── Float balloons (bottom se upar uthenge) ───────────────────────────────────
const BALLOON_COLORS = [
  "#f87171",
  "#fb923c",
  "#facc15",
  "#4ade80",
  "#60a5fa",
  "#c084fc",
  "#f472b6",
  "#34d399",
];
const BALLOONS = Array.from({ length: 10 }, (_, i) => ({
  id: i,
  left: rand(3, 94),
  color: BALLOON_COLORS[i % BALLOON_COLORS.length],
  w: rand(38, 52),
  dur: rand(7, 15).toFixed(1),
  delay: rand(0, 9).toFixed(1),
}));

const FLOAT_EMOJIS = ["🎈", "🎁", "🥂", "🌟", "🎉", "✨", "🍰"];

const DETAILS = [
  {
    icon: "📅",
    label: "Date",
    value: "20 June 2026",
    sub: "Saturday",
    accent: "#fbbf24",
  },
  {
    icon: "⏰",
    label: "Time",
    value: "8:00 PM",
    sub: "Onwards",
    accent: "#38bdf8",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Noida",
    sub: "Uttar Pradesh",
    accent: "#4ade80",
  },
  {
    icon: "🎊",
    label: "Theme",
    value: "Night Gala",
    sub: "Dress to Impress",
    accent: "#f472b6",
  },
];

// ─── Global CSS ───────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600;700&family=Playfair+Display:wght@700&family=Inter:wght@300;400;500;600&display=swap');

  @keyframes starPulse {
    0%,100% { opacity:.15; transform:scale(1); }
    50%      { opacity:1;   transform:scale(1.7); }
  }
  .bi-star { position:absolute; border-radius:50%; background:#fff; animation:starPulse var(--d) ease-in-out infinite; animation-delay:var(--dl); }

  @keyframes confFall {
    0%   { transform:translateY(-20px) rotate(0deg) translateX(0); opacity:1; }
    100% { transform:translateY(106vh) rotate(720deg) translateX(40px); opacity:.1; }
  }
  .bi-conf { position:fixed; top:-20px; animation:confFall var(--f) linear infinite; animation-delay:var(--fd); pointer-events:none; z-index:1; }

  /* ── Balloon DROP: upar se neeche ── */
  @keyframes balloonDrop {
    0%   { transform:translateY(-120px) rotate(-8deg) scale(0.7); opacity:0; }
    8%   { opacity:1; }
    45%  { transform:translateY(45vh) rotate(6deg) scale(1.05); }
    92%  { opacity:.85; }
    100% { transform:translateY(108vh) rotate(-4deg) scale(0.9); opacity:0; }
  }
  .bi-balloon-drop {
    position:fixed;
    top:-120px;
    pointer-events:none;
    z-index:3;
    animation:balloonDrop var(--bd) ease-in-out infinite;
    animation-delay:var(--bdd);
    filter:drop-shadow(0 6px 18px rgba(0,0,0,0.45));
  }

  /* ── Float balloons: bottom se upar ── */
  @keyframes balloonRise {
    0%,100% { transform:translateY(0) rotate(-5deg); }
    50%      { transform:translateY(-28px) rotate(5deg); }
  }
  .bi-balloon { position:fixed; bottom:-70px; pointer-events:none; z-index:1; animation:balloonRise var(--br) ease-in-out infinite; animation-delay:var(--brd); }

  @keyframes cardIn {
    from { opacity:0; transform:translateY(70px) scale(.88); }
    to   { opacity:1; transform:translateY(0) scale(1); }
  }
  .bi-card-in { animation:cardIn 1.1s cubic-bezier(.16,1,.3,1) both; }

  @keyframes shimmer {
    0%   { background-position:-400% center; }
    100% { background-position:400% center; }
  }
  .bi-shimmer {
    font-family:'Dancing Script',cursive;
    background:linear-gradient(90deg,#ffd700,#ff69b4,#c084fc,#38bdf8,#ffd700);
    background-size:400% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:shimmer 4s linear infinite;
  }

  @keyframes cakeBounce {
    0%,100% { transform:translateY(0) scale(1) rotate(-3deg); }
    35%      { transform:translateY(-20px) scale(1.06) rotate(3deg); }
    65%      { transform:translateY(-6px) scale(1.02) rotate(-1deg); }
  }
  .bi-cake { animation:cakeBounce 2s ease-in-out infinite; display:inline-block; }

  @keyframes ringPulse {
    0%   { transform:scale(1); opacity:.65; }
    100% { transform:scale(1.9); opacity:0; }
  }
  .bi-ring { position:absolute; border-radius:50%; border:2px solid; animation:ringPulse 2s ease-out infinite; }

  @keyframes btnGlow {
    0%,100% { box-shadow:0 0 30px rgba(168,85,247,.55),0 0 60px rgba(168,85,247,.2); }
    50%      { box-shadow:0 0 55px rgba(168,85,247,.95),0 0 110px rgba(168,85,247,.4); }
  }
  .bi-btn-glow { animation:btnGlow 2.5s ease-in-out infinite; }

  @keyframes floatIcon {
    0%,100% { transform:translateY(0) rotate(-8deg); }
    50%      { transform:translateY(-15px) rotate(8deg); }
  }
  .bi-float { animation:floatIcon var(--fi) ease-in-out infinite; animation-delay:var(--fid); }

  @keyframes fwExplode {
    0%   { transform:scale(0); opacity:1; }
    100% { transform:scale(7); opacity:0; }
  }
  .bi-fw { position:fixed; border-radius:50%; animation:fwExplode 1.2s ease-out forwards; z-index:999; pointer-events:none; }

  @keyframes modalIn {
    from { opacity:0; transform:scale(.82) translateY(30px); }
    to   { opacity:1; transform:scale(1) translateY(0); }
  }
  .bi-modal-in { animation:modalIn .45s cubic-bezier(.34,1.56,.64,1) both; }

  .bi-detail-card { transition:transform .25s cubic-bezier(.34,1.56,.64,1), box-shadow .25s; }
  .bi-detail-card:hover { transform:translateY(-7px) scale(1.04); }

  @keyframes waveDash {
    from { stroke-dashoffset:0; }
    to   { stroke-dashoffset:-40; }
  }
  .bi-wave-path { stroke-dasharray:10 5; animation:waveDash 2s linear infinite; }
`;

// ─── Stars ────────────────────────────────────────────────────────────────────
function Stars() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {STARS.map((s) => (
        <div
          key={s.id}
          className="bi-star"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            "--d": `${s.dur}s`,
            "--dl": `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ─── Confetti only ────────────────────────────────────────────────────────────
function Confetti() {
  return (
    <>
      {CONFETTI.map((p) => (
        <div
          key={p.id}
          className="bi-conf"
          style={{
            left: `${p.left}%`,
            background: p.color,
            width: p.size,
            height: p.size,
            borderRadius: p.circle ? "50%" : 3,
            "--f": `${p.dur}s`,
            "--fd": `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

// ─── Balloon Drop (upar se neeche) ───────────────────────────────────────────
function BalloonDrops({ images }) {
  return (
    <>
      {BALLOON_DROPS.map((b) => {
        const uid = `clip-${b.id}`;
        const hasImg = images && images.length > 0;
        const imgSrc = hasImg ? images[b.imgIndex % images.length] : null;

        return (
          <div
            key={b.id}
            className="bi-balloon-drop"
            style={{
              left: `${b.left}%`,
              "--bd": `${b.dur}s`,
              "--bdd": `${b.delay}s`,
            }}
          >
            <svg width={b.w} height={b.w * 1.3} viewBox="0 0 60 78" fill="none">
              <defs>
                <clipPath id={uid}>
                  {/* Image circle — balloon body ke andar */}
                  <ellipse cx="30" cy="28" rx="22" ry="20" />
                </clipPath>
              </defs>

              {/* Balloon body */}
              <ellipse
                cx="30"
                cy="28"
                rx="26"
                ry="24"
                fill={b.color}
                opacity="0.88"
              />

              {/* Photo andar balloon */}
              {imgSrc && (
                <image
                  href={imgSrc}
                  x="4"
                  y="4"
                  width="52"
                  height="52"
                  clipPath={`url(#${uid})`}
                  preserveAspectRatio="xMidYMid slice"
                  opacity="1"
                />
              )}

              {/* Shine overlay */}
              <ellipse
                cx="21"
                cy="17"
                rx="8"
                ry="6"
                fill="white"
                opacity="0.22"
              />
              <ellipse
                cx="38"
                cy="22"
                rx="3"
                ry="2.5"
                fill="white"
                opacity="0.12"
              />

              {/* Border ring */}
              <ellipse
                cx="30"
                cy="28"
                rx="26"
                ry="24"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1.5"
              />

              {/* Knot */}
              <circle cx="30" cy="53" r="2.5" fill={b.color} opacity="0.9" />
              {/* String */}
              <path
                d="M30 55 Q34 63 29 70 Q25 76 30 78"
                stroke={b.color}
                strokeWidth="1.5"
                fill="none"
                opacity="0.7"
              />
            </svg>
          </div>
        );
      })}
    </>
  );
}

// ─── Float Balloons (bottom se upar uthte) ───────────────────────────────────
function Balloons() {
  return (
    <>
      {BALLOONS.map((b) => (
        <div
          key={b.id}
          className="bi-balloon"
          style={{
            left: `${b.left}%`,
            "--br": `${b.dur}s`,
            "--brd": `${b.delay}s`,
          }}
        >
          <svg width={b.w} height={b.w * 1.28} viewBox="0 0 60 77" fill="none">
            <ellipse
              cx="30"
              cy="28"
              rx="28"
              ry="26"
              fill={b.color}
              opacity="0.82"
            />
            <ellipse
              cx="22"
              cy="18"
              rx="8"
              ry="6"
              fill="white"
              opacity="0.22"
            />
            <path
              d="M30 54 Q33 63 30 77"
              stroke={b.color}
              strokeWidth="2"
              fill="none"
            />
            <polygon points="28,54 32,54 30,61" fill={b.color} opacity="0.65" />
          </svg>
        </div>
      ))}
    </>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <div
      className="relative px-4 sm:px-6 pt-10 sm:pt-12 pb-8 sm:pb-10 text-center"
      style={{
        background:
          "linear-gradient(160deg,rgba(168,85,247,.22) 0%,rgba(236,72,153,.13) 50%,rgba(56,189,248,.09) 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="relative inline-flex items-center justify-center mb-4">
        <div
          className="bi-ring absolute"
          style={{
            width: 110,
            height: 110,
            borderColor: "rgba(192,132,252,.55)",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
          }}
        />
        <div
          className="bi-ring absolute"
          style={{
            width: 110,
            height: 110,
            borderColor: "rgba(236,72,153,.4)",
            animationDelay: ".75s",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: "auto",
          }}
        />
        <span className="bi-cake relative z-10 text-6xl sm:text-7xl leading-none">
          🎂
        </span>
      </div>
      <p
        className="text-[10px] sm:text-xs tracking-[3px] sm:tracking-[4px] uppercase mb-3 px-2"
        style={{ color: "rgba(255,200,100,.8)" }}
      >
        Aap sabko dil se bulaya ja raha hai — Birthday mein zaroor aaiye 🙏
      </p>
      <h1
        className="bi-shimmer leading-tight mb-1"
        style={{ fontSize: "clamp(36px,10vw,72px)" }}
      >
        Happy Birthday!
      </h1>
      <p
        className="text-lg sm:text-xl mb-6 px-2"
        style={{
          fontFamily: "'Dancing Script',cursive",
          color: "rgba(255,255,255,.65)",
        }}
      >
        Aaiye aur saath milke celebrate karte hai 🎊
      </p>
      <div className="flex justify-center gap-3 sm:gap-4 text-xl sm:text-2xl flex-wrap px-2">
        {FLOAT_EMOJIS.map((emoji, i) => (
          <span
            key={i}
            className="bi-float"
            style={{ "--fi": `${2 + i * 0.35}s`, "--fid": `${i * 0.28}s` }}
          >
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Detail Card ──────────────────────────────────────────────────────────────
function DetailCard({ icon, label, value, sub, accent }) {
  return (
    <div
      className="bi-detail-card rounded-2xl p-3 sm:p-4 text-center"
      style={{
        background: "rgba(255,255,255,0.055)",
        border: `1px solid ${accent}45`,
        boxShadow: `0 0 0 1px ${accent}12 inset`,
      }}
    >
      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{icon}</div>
      <div
        className="text-[9px] sm:text-[10px] tracking-[2px] uppercase mb-1 font-medium"
        style={{ color: accent }}
      >
        {label}
      </div>
      <div className="text-white font-semibold text-[13px] sm:text-[15px] mb-0.5">
        {value}
      </div>
      <div className="text-white/40 text-[11px] sm:text-xs">{sub}</div>
    </div>
  );
}

// ─── Countdown Box ────────────────────────────────────────────────────────────
function CdBox({ val, label }) {
  return (
    <div className="text-center">
      <div
        className="rounded-2xl px-3 sm:px-4 py-2 min-w-[56px] sm:min-w-[68px]"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.18)",
          backdropFilter: "blur(8px)",
        }}
      >
        <span
          className="block text-3xl sm:text-4xl leading-tight font-bold"
          style={{
            fontFamily: "'Playfair Display',serif",
            color: "#fde68a",
            textShadow: "0 0 22px rgba(253,230,138,.75)",
          }}
        >
          {String(val ?? 0).padStart(2, "0")}
        </span>
      </div>
      <span className="block mt-1.5 text-[9px] sm:text-[10px] tracking-[2px] uppercase text-white/40">
        {label}
      </span>
    </div>
  );
}

// ─── Fireworks ────────────────────────────────────────────────────────────────
function launchFireworks() {
  const colors = [
    "#ffd700",
    "#ff69b4",
    "#c084fc",
    "#38bdf8",
    "#f97316",
    "#4ade80",
  ];
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "bi-fw";
      const size = rand(8, 22);
      Object.assign(el.style, {
        width: `${size}px`,
        height: `${size}px`,
        top: `${rand(10, 70)}%`,
        left: `${rand(10, 80)}%`,
        background: colors[Math.floor(rand(0, colors.length))],
      });
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 1400);
    }, i * 110);
  }
}

// ─── RSVP Modal ───────────────────────────────────────────────────────────────
function RsvpModal({ onClose }) {
  const [step, setStep]       = useState("input");
  const [name, setName]       = useState("");
  const [matched, setMatched] = useState(null);  // matched guest
  const [error, setError]     = useState("");

  // Live match — jaise jaise type karo
 const handleChange = (val) => {
  setName(val);
  setError("");
  
  const input = val.trim().toLowerCase();
  
  const found = GUESTS.find(g => {
    const gName = g.name.toLowerCase();
    const gFirst = gName.split(" ")[0]; // sirf pehla naam

    return (
      gName === input ||           // "rahul yadav" === "rahul yadav"
      gFirst === input ||          // "rahul" === "rahul"
      input.startsWith(gFirst) ||  // "rahul y..." match
      gName.startsWith(input)      // "rahul" se "rahul yadav" match
    );
  });

  setMatched(found || null);
};

  const handleConfirm = () => {
    if (name.trim().length < 2) {
      setError("Kripya apna name shi se likhe example - Abhishek 🙏");
      return;
    }
    setStep("confirm");
    launchFireworks();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background:"rgba(0,0,0,0.82)", backdropFilter:"blur(10px)" }}>
      <div className="bi-modal-in w-full max-w-sm text-center rounded-3xl p-8" style={{
        background:"linear-gradient(135deg,#1e0842 0%,#2d0a5e 100%)",
        border:"1px solid rgba(192,132,252,0.4)",
        boxShadow:"0 0 90px rgba(192,132,252,.3)",
      }}>

        {/* ── STEP 1: Name Type ── */}
        {step === "input" && (<>
          <div className="text-5xl mb-3">🎈</div>
          <h3 className="text-3xl mb-2" style={{ fontFamily:"'Dancing Script',cursive", color:"#fde68a" }}>
            Apna Naam Likhein
          </h3>
          <p className="text-white/40 text-sm mb-5">
            Naam type karo — aapki photo khud aa jayegi ✨
          </p>

          {/* Live photo preview — match hone par */}
          <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center transition-all"
            style={{
              background:"linear-gradient(135deg,#a855f7,#ec4899)",
              border: matched ? "3px solid #4ade80" : "2px dashed rgba(255,255,255,0.2)",
            }}>
            {matched?.photo
              ? <img src={matched.photo} alt={matched.name} className="w-full h-full object-cover"/>
              : <span className="text-white text-3xl font-bold">
                  {name.trim() ? name.trim()[0].toUpperCase() : "?"}
                </span>
            }
          </div>

          {/* Match indicator */}
          {matched
            ? <p className="text-green-400 text-xs mb-3">Swagat hai {matched.name} ji!</p>
            : name.trim().length >= 2
              ? <p className="text-white/30 text-xs mb-3">🔍 Dhundh rahe hain...</p>
              : <p className="text-white/20 text-xs mb-3">👆 Naam type karo</p>
          }

          {/* Input */}
          <input
            type="text"
            value={name}
            onChange={e => handleChange(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleConfirm()}
            placeholder="Aapka naam yahan likhein..."
            maxLength={30}
            className="w-full px-4 py-3 rounded-2xl text-white text-base text-center outline-none mb-2"
            style={{
              background:"rgba(255,255,255,0.08)",
              border: matched
                ? "1.5px solid #4ade80"
                : "1.5px solid rgba(192,132,252,0.45)",
              caretColor:"#f472b6",
            }}
            autoFocus
          />

          {error && <p className="text-pink-400 text-xs mb-2">{error}</p>}

          <div className="flex flex-col gap-2 mt-3">
            <button onClick={handleConfirm}
              className="w-full py-3 rounded-2xl text-white font-semibold text-base transition-transform hover:scale-105 active:scale-95"
              style={{ background:"linear-gradient(135deg,#a855f7,#ec4899)" }}>
              ✅ Confirm Karein
            </button>
            <button onClick={onClose} className="text-white/30 text-xs underline mt-1">
              Baad mein dekhunga...
            </button>
          </div>
        </>)}

        {/* ── STEP 2: Confirmation ── */}
        {step === "confirm" && (<>
          <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center"
            style={{ background:"linear-gradient(135deg,#a855f7,#ec4899)", border:"3px solid rgba(255,255,255,0.25)" }}>
            {matched?.photo
              ? <img src={matched.photo} alt={name} className="w-full h-full object-cover"/>
              : <span className="text-white text-4xl font-bold">{name.trim()[0].toUpperCase()}</span>
            }
          </div>

          <div className="text-4xl mb-2">🥳</div>
          <h3 className="text-3xl mb-3" style={{ fontFamily:"'Dancing Script',cursive", color:"#fde68a" }}>
            {name.trim()} Ji!
          </h3>

          <div className="rounded-2xl p-4 mb-5" style={{
            background:"rgba(255,255,255,0.06)",
            border:"1px solid rgba(192,132,252,0.2)",
          }}>
            <p className="text-white/70 text-sm leading-relaxed">
              Hame bahut <span style={{ color:"#fde68a" }}>khushi</span> hui ki
            </p>
            <p className="text-xl font-semibold my-2" style={{ color:"#f472b6", fontFamily:"'Dancing Script',cursive" }}>
              ✨ {name.trim()} ✨
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              aap hamare birthday mein aa rahe hain! 🎂<br/>
              Aapka dil se <span style={{ color:"#4ade80" }}>intezaar</span> rahega! 🎈
            </p>
          </div>

          <button onClick={onClose}
            className="w-full py-3 rounded-2xl text-white font-semibold transition-transform hover:scale-105 active:scale-95"
            style={{ background:"linear-gradient(135deg,#a855f7,#ec4899)" }}>
            🎉 Shukriya 
          </button>
        </>)}

      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function BirthdayInvitation() {
  const [rsvp, setRsvp] = useState(false);
  const cd = useCountdown("2026-06-20T19:00:00");

  useEffect(() => {
    const id = "bi-global-styles";
    if (!document.getElementById(id)) {
      const el = document.createElement("style");
      el.id = id;
      el.textContent = GLOBAL_CSS;
      document.head.appendChild(el);
    }
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background:
          "linear-gradient(145deg,#080015 0%,#1a0533 35%,#0d1a40 70%,#080015 100%)",
        fontFamily: "'Inter',sans-serif",
      }}
    >
      {/* ── Background layers ── */}
      <Stars />
      <Confetti />
      <BalloonDrops images={MY_PHOTOS} />
      <Balloons /> {/* ← Neeche se upar uthenge 🎈 */}
      {/* Ambient orbs */}
      <div
        className="fixed rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          top: "-150px",
          left: "-150px",
          background:
            "radial-gradient(circle,rgba(168,85,247,.18) 0%,transparent 70%)",
        }}
      />
      <div
        className="fixed rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          bottom: "-100px",
          right: "-100px",
          background:
            "radial-gradient(circle,rgba(236,72,153,.14) 0%,transparent 70%)",
        }}
      />
      {/* ── Main content ── */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-3 sm:px-4 py-8 sm:py-10">
        <div className="bi-card-in w-full max-w-xl">
          {/* Top badge */}
          <div className="text-center mb-4 sm:mb-5">
            <span
              className="inline-block px-4 sm:px-5 py-1.5 rounded-full text-[10px] sm:text-xs tracking-[2px] sm:tracking-[3px] uppercase font-medium"
              style={{
                background: "rgba(253,230,138,.1)",
                border: "1px solid rgba(253,230,138,.3)",
                color: "#fde68a",
              }}
            >
              ✨ Special Invitation — Abhishek ki taraf se ✨
            </span>
          </div>

          {/* Card */}
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(32px)",
              border: "1px solid rgba(255,255,255,0.11)",
              boxShadow:
                "0 0 100px rgba(192,132,252,.15),0 40px 80px rgba(0,0,0,.55)",
            }}
          >
            <HeroSection />

            <div className="p-4 sm:p-6 md:p-8">
              {/* Detail grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6">
                {DETAILS.map((d) => (
                  <DetailCard key={d.label} {...d} />
                ))}
              </div>

              {/* Wave divider */}
              <div className="mb-5 sm:mb-6">
                <svg
                  viewBox="0 0 400 20"
                  className="w-full"
                  style={{ height: 20, overflow: "visible" }}
                >
                  <path
                    className="bi-wave-path"
                    d="M0 10 Q50 0 100 10 Q150 20 200 10 Q250 0 300 10 Q350 20 400 10"
                    fill="none"
                    stroke="rgba(192,132,252,0.35)"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Countdown */}
              <div
                className="rounded-2xl p-4 sm:p-5 mb-5 sm:mb-6"
                style={{
                  background: "rgba(253,230,138,.05)",
                  border: "1px solid rgba(253,230,138,.2)",
                }}
              >
                <p
                  className="text-center text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] uppercase mb-3 sm:mb-4"
                  style={{ color: "rgba(255,200,100,.7)" }}
                >
                  ⏳ Birthday mein sirf itna baaki hai
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                  <CdBox val={cd.d} label="Din" />
                  <CdBox val={cd.h} label="Ghante" />
                  <CdBox val={cd.m} label="Minute" />
                  <CdBox val={cd.s} label="Second" />
                </div>
              </div>

              {/* RSVP Button */}
              <button
                className="bi-btn-glow w-full py-3 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base tracking-wide transition-transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95"
                style={{
                  background:
                    "linear-gradient(135deg,#a855f7 0%,#ec4899 50%,#f97316 100%)",
                  border: "none",
                }}
                onClick={() => setRsvp(true)}
              >
                🎈 Haan! Main Zaroor Aaunga / Aaungi
              </button>

              {/* Footer */}
              <p className="text-center mt-4 sm:mt-5 text-[10px] sm:text-xs leading-relaxed text-white/30 break-words">
                ✉️ abhishekyadav40854@gmail.com &nbsp;|&nbsp; 📞 9580250997
                <br />
                <span className="text-white/20 text-[10px] sm:text-[11px]">
                  Aapka intezaar rahega — ek yaadgaar raat hogi 🌙
                </span>
              </p>
            </div>
          </div>

          <p className="text-center mt-4 text-[10px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] text-white/20 uppercase">
            With Love ♥ Abhishek Yadav
          </p>
        </div>
      </div>
      {rsvp && <RsvpModal onClose={() => setRsvp(false)} />}
    </div>
  );
}
