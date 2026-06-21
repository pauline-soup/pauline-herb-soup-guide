    import { useState } from "react";
import codonopsisPhoto from "./assets/codonopsis.jpg";
import wolfberryPhoto from "./assets/wolfberry.jpg";
import reddatesPhoto from "./assets/reddates.jpg";
import solomonssealPhoto from "./assets/solomonsseal.jpg";
import ginsengPhoto from "./assets/ginseng.jpg";
import angelicaPhoto from "./assets/angelica.jpg";
import chineseyamPhoto from "./assets/chineseyam.jpg";
import lotusseedsPhoto from "./assets/lotusseeds.jpg";

// Renders a real photo if provided, otherwise falls back to the illustrated icon
const HerbVisual = ({ photo, iconType, size = 48, rounded = "10px" }) => {
  if (photo) {
    return (
      <img
        src={photo}
        alt=""
        style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: rounded, display: "block" }}
      />
    );
  }
  return <HerbIcon type={iconType} size={size} />;
};

// Hand-drawn style SVG illustrations representing each herb's real appearance
const HerbIcon = ({ type, size = 48 }) => {
  const icons = {
    astragalus: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <rect x="10" y="40" width="80" height="14" rx="3" fill="#E8D5A8" stroke="#B8945A" strokeWidth="1.5" transform="rotate(-8 50 47)" />
        <rect x="15" y="55" width="70" height="13" rx="3" fill="#EDDBB0" stroke="#B8945A" strokeWidth="1.5" transform="rotate(5 50 61)" />
        <rect x="20" y="25" width="65" height="12" rx="3" fill="#E2CC9C" stroke="#B8945A" strokeWidth="1.5" transform="rotate(-3 50 31)" />
        <line x1="20" y1="44" x2="80" y2="48" stroke="#A87C45" strokeWidth="0.8" opacity="0.5" />
        <line x1="22" y1="59" x2="78" y2="61" stroke="#A87C45" strokeWidth="0.8" opacity="0.5" />
      </svg>
    ),
    codonopsis: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <path d="M50 15 Q60 35 55 55 Q52 75 50 90 Q48 75 45 55 Q40 35 50 15" fill="#D9B570" stroke="#A8783A" strokeWidth="1.5" />
        <path d="M50 15 Q60 35 55 55 Q52 75 50 90" fill="none" stroke="#A8783A" strokeWidth="0.8" opacity="0.6" />
        <ellipse cx="44" cy="40" rx="3" ry="6" fill="#C9A560" opacity="0.7" />
        <ellipse cx="56" cy="55" rx="3" ry="6" fill="#C9A560" opacity="0.7" />
        <ellipse cx="48" cy="70" rx="3" ry="6" fill="#C9A560" opacity="0.7" />
      </svg>
    ),
    wolfberry: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        {[[30,30],[55,25],[70,40],[25,55],[50,50],[75,60],[35,75],[60,72],[45,35],[65,55]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="9" ry="7" fill="#C8302A" stroke="#8B1F1A" strokeWidth="1" transform={`rotate(${(i*37)%360} ${x} ${y})`} />
        ))}
      </svg>
    ),
    reddates: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <ellipse cx="35" cy="40" rx="18" ry="14" fill="#7A1F1F" stroke="#5C1414" strokeWidth="1.5" transform="rotate(-15 35 40)" />
        <ellipse cx="65" cy="60" rx="18" ry="14" fill="#8B2A1F" stroke="#5C1414" strokeWidth="1.5" transform="rotate(10 65 60)" />
        <ellipse cx="48" cy="75" rx="16" ry="12" fill="#7A1F1F" stroke="#5C1414" strokeWidth="1.5" transform="rotate(-5 48 75)" />
        <path d="M30 30 Q35 25 40 30" stroke="#5C1414" strokeWidth="1" fill="none" />
        <path d="M60 50 Q65 45 70 50" stroke="#5C1414" strokeWidth="1" fill="none" />
      </svg>
    ),
    solomonsseal: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <ellipse cx="40" cy="35" rx="22" ry="9" fill="#E8E0C8" stroke="#B8AC80" strokeWidth="1.5" />
        <ellipse cx="55" cy="55" rx="22" ry="9" fill="#EDE6CE" stroke="#B8AC80" strokeWidth="1.5" transform="rotate(15 55 55)" />
        <ellipse cx="42" cy="75" rx="20" ry="8" fill="#E2D9BC" stroke="#B8AC80" strokeWidth="1.5" transform="rotate(-10 42 75)" />
        <circle cx="40" cy="35" r="2" fill="#8B7E50" />
        <circle cx="55" cy="55" r="2" fill="#8B7E50" />
      </svg>
    ),
    lotusseed: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        {[[35,35],[60,30],[75,50],[30,55],[50,65],[68,70],[40,80]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="10" ry="13" fill="#F0E6D6" stroke="#C9B896" strokeWidth="1.3" transform={`rotate(${(i*23)%40-20} ${x} ${y})`} />
        ))}
      </svg>
    ),
    chineseyam: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <ellipse cx="35" cy="40" rx="16" ry="12" fill="#E8DCC4" stroke="#B8A578" strokeWidth="1.5" />
        <ellipse cx="62" cy="35" rx="15" ry="11" fill="#EDE2CC" stroke="#B8A578" strokeWidth="1.5" transform="rotate(10 62 35)" />
        <ellipse cx="45" cy="62" rx="17" ry="12" fill="#E2D6BC" stroke="#B8A578" strokeWidth="1.5" transform="rotate(-8 45 62)" />
        <ellipse cx="70" cy="65" rx="14" ry="10" fill="#E8DCC4" stroke="#B8A578" strokeWidth="1.5" transform="rotate(15 70 65)" />
        <circle cx="35" cy="40" r="1.5" fill="#A89260" opacity="0.6" />
        <circle cx="45" cy="62" r="1.5" fill="#A89260" opacity="0.6" />
      </svg>
    ),
    poria: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <path d="M25 35 L50 25 L75 38 L70 65 L48 78 L28 62 Z" fill="#D8CBB8" stroke="#A89580" strokeWidth="1.5" />
        <path d="M50 25 L48 78 M25 35 L70 65 M75 38 L28 62" stroke="#A89580" strokeWidth="0.6" opacity="0.4" />
      </svg>
    ),
    angelica: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <circle cx="50" cy="50" r="32" fill="#E8D4B0" stroke="#B89055" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="32" fill="none" stroke="#C9A570" strokeWidth="1" />
        <circle cx="50" cy="50" r="6" fill="#D4B888" opacity="0.6" />
        {[...Array(8)].map((_,i)=>{
          const angle = (i*45)*Math.PI/180;
          const x1 = 50+10*Math.cos(angle), y1=50+10*Math.sin(angle);
          const x2 = 50+30*Math.cos(angle), y2=50+30*Math.sin(angle);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#B89055" strokeWidth="0.6" opacity="0.5" />;
        })}
      </svg>
    ),
    lovage: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <path d="M30 30 Q50 20 70 30 Q80 50 70 70 Q50 80 30 70 Q20 50 30 30" fill="#D4C088" stroke="#A8895A" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="5" fill="#B89860" opacity="0.5" />
        <path d="M35 38 Q50 45 65 38 M32 50 Q50 56 68 50 M35 62 Q50 56 65 62" fill="none" stroke="#A8895A" strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
    ginseng: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <path d="M50 12 Q56 30 53 45 Q58 55 50 60 Q42 55 47 45 Q44 30 50 12" fill="#E8D9B8" stroke="#B89860" strokeWidth="1.5" />
        <path d="M50 60 Q44 70 36 78" fill="none" stroke="#B89860" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 60 Q56 70 64 78" fill="none" stroke="#B89860" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 60 Q48 72 46 85" fill="none" stroke="#B89860" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 60 Q52 72 54 85" fill="none" stroke="#B89860" strokeWidth="3" strokeLinecap="round" />
        <path d="M50 18 Q53 30 51 42" fill="none" stroke="#A8895A" strokeWidth="0.8" opacity="0.6" />
      </svg>
    ),
    sishen: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <ellipse cx="50" cy="65" rx="38" ry="22" fill="#F0E4D0" stroke="#C9B896" strokeWidth="1.5" />
        <ellipse cx="35" cy="55" rx="9" ry="11" fill="#F0E6D6" stroke="#C9B896" strokeWidth="1" />
        <ellipse cx="55" cy="50" rx="8" ry="10" fill="#E8DCC4" stroke="#B8A578" strokeWidth="1" />
        <ellipse cx="68" cy="58" rx="8" ry="6" fill="#D8CBB8" stroke="#A89580" strokeWidth="1" />
        <path d="M12 65 Q50 50 88 65" fill="none" stroke="#C9B896" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    yuzhusoup: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <ellipse cx="50" cy="65" rx="38" ry="22" fill="#FAF3E6" stroke="#D9C9A8" strokeWidth="1.5" />
        <ellipse cx="38" cy="55" rx="20" ry="7" fill="#EDE6CE" stroke="#B8AC80" strokeWidth="1" />
        {[[55,58],[68,52],[60,68]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="7" ry="6" fill="#C8302A" stroke="#8B1F1A" strokeWidth="0.8" />
        ))}
      </svg>
    ),
    beautysoup: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <ellipse cx="50" cy="65" rx="38" ry="22" fill="#F5E8E0" stroke="#D9B0A0" strokeWidth="1.5" />
        <ellipse cx="35" cy="58" rx="14" ry="10" fill="#7A1F1F" stroke="#5C1414" strokeWidth="1" />
        {[[55,55],[68,60],[60,70]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="6" ry="5" fill="#C8302A" stroke="#8B1F1A" strokeWidth="0.8" />
        ))}
        <rect x="25" y="68" width="12" height="10" rx="2" fill="#E2CC9C" stroke="#B8945A" strokeWidth="1" transform="rotate(-10 31 73)" />
      </svg>
    ),
    gingerchicken: (
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <ellipse cx="50" cy="65" rx="38" ry="22" fill="#FBF0DC" stroke="#D9C9A8" strokeWidth="1.5" />
        <path d="M30 50 Q40 35 50 50 Q55 60 48 62 Q38 64 30 50" fill="#E8DCC4" stroke="#B8A578" strokeWidth="1.2" />
        {[[60,55],[72,60],[65,70]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="6" ry="5" fill="#C8302A" stroke="#8B1F1A" strokeWidth="0.8" />
        ))}
        <circle cx="45" cy="72" r="8" fill="#F0E0C0" stroke="#C9A570" strokeWidth="1" />
      </svg>
    ),
  };
  return icons[type] || icons.astragalus;
};

const herbs = [
  {
    id: 1,
    chineseName: "黄芪",
    name: "Astragalus Root",
    pinyinName: "Huáng Qí",
    category: "Qi-Tonifying",
    benefits: ["Boosts immune system", "Increases energy & stamina", "Supports lung & spleen", "Anti-ageing properties", "Improves metabolism"],
    risks: ["May interact with immunosuppressants", "Avoid during acute infection/fever", "Not for pregnant women in high doses"],
    flavour: "Slightly sweet",
    nature: "Warm",
    iconType: "astragalus",
    color: "#C8A96E"
  },
  {
    id: 2,
    chineseName: "党参",
    name: "Codonopsis Root",
    pinyinName: "Dǎng Shēn",
    category: "Qi-Tonifying",
    benefits: ["Strengthens spleen & stomach", "Improves appetite & digestion", "Boosts energy", "Supports lung function", "Mild adaptogen"],
    risks: ["May cause bloating in excess", "Avoid if experiencing heat/fever", "Not recommended for those with excess qi patterns"],
    flavour: "Sweet",
    nature: "Neutral",
    iconType: "codonopsis",
    photo: codonopsisPhoto,
    color: "#B8860B"
  },
  {
    id: 3,
    chineseName: "枸杞",
    name: "Wolfberry (Goji)",
    pinyinName: "Gǒu Qǐ",
    category: "Blood & Yin-Nourishing",
    benefits: ["Nourishes liver & kidneys", "Improves eyesight", "Rich in antioxidants", "Supports blood production", "Anti-fatigue"],
    risks: ["May interact with blood thinners (warfarin)", "Use cautiously in diarrhoea", "Excessive use may cause eye inflammation"],
    flavour: "Sweet",
    nature: "Neutral",
    iconType: "wolfberry",
    photo: wolfberryPhoto,
    color: "#CC3300"
  },
  {
    id: 4,
    chineseName: "红枣",
    name: "Red Dates (Jujube)",
    pinyinName: "Hóng Zǎo",
    category: "Blood-Nourishing",
    benefits: ["Nourishes blood & calms mind", "Supports spleen & stomach", "Improves sleep quality", "Rich in vitamins C & B", "Boosts immunity"],
    risks: ["High sugar content – diabetics beware", "Avoid overeating (causes bloating)", "May cause dampness if taken in excess"],
    flavour: "Sweet",
    nature: "Warm",
    iconType: "reddates",
    photo: reddatesPhoto,
    color: "#8B1A1A"
  },
  {
    id: 5,
    chineseName: "玉竹",
    name: "Solomon's Seal",
    pinyinName: "Yù Zhú",
    category: "Yin-Nourishing",
    benefits: ["Moistens lungs & stomach", "Relieves dry cough & thirst", "Anti-inflammatory", "Supports cardiovascular health", "Nourishes skin"],
    risks: ["Avoid if phlegm-damp constitutions", "May lower blood sugar – monitor if diabetic", "Avoid with loose stools / diarrhoea"],
    flavour: "Sweet, slightly bitter",
    nature: "Slightly cool",
    iconType: "solomonsseal",
    photo: solomonssealPhoto,
    color: "#6B8E6B"
  },
  {
    id: 6,
    chineseName: "莲子",
    name: "Lotus Seeds",
    pinyinName: "Lián Zǐ",
    category: "Heart & Kidney-Tonifying",
    benefits: ["Calms the mind & reduces anxiety", "Strengthens heart & kidneys", "Stops diarrhoea", "Improves sleep", "Anti-ageing"],
    risks: ["Avoid in severe constipation", "Overconsumption causes bloating", "Remove bitter green sprout to avoid cooling effects"],
    flavour: "Sweet, astringent",
    nature: "Neutral",
    iconType: "lotusseed",
        photo: lotusseedsPhoto,
    color: "#D4A0A0"
  },
  {
    id: 7,
    chineseName: "淮山",
    name: "Chinese Yam",
    pinyinName: "Huái Shān",
    category: "Qi & Yin-Tonifying",
    benefits: ["Tonifies spleen, lung & kidney", "Regulates blood sugar", "Improves digestion", "Nourishes skin & mucous membranes", "Supports reproductive health"],
    risks: ["Avoid if experiencing constipation", "May cause bloating if eaten in large amounts raw", "Consult doctor if on diabetes medication"],
    flavour: "Sweet",
    nature: "Neutral",
    iconType: "chineseyam",
        photo: chineseyamPhoto,
    color: "#C4A882"
  },
  {
    id: 8,
    chineseName: "茯苓",
    name: "Poria (Fu Ling)",
    pinyinName: "Fú Líng",
    category: "Dampness-Resolving",
    benefits: ["Removes dampness & phlegm", "Calms the mind", "Supports spleen & stomach", "Diuretic properties", "Anti-tumour & immune-modulating"],
    risks: ["Excessive use may deplete fluids (yin deficiency)", "Avoid in frequent urination", "Use carefully during pregnancy"],
    flavour: "Sweet, bland",
    nature: "Neutral",
    iconType: "poria",
    color: "#A89080"
  },
  {
    id: 9,
    chineseName: "当归",
    name: "Angelica Root (Dong Quai)",
    pinyinName: "Dāng Guī",
    category: "Blood-Nourishing",
    benefits: ["Nourishes & moves blood", "Regulates menstruation", "Relieves pain", "Improves circulation", "Supports liver health"],
    risks: ["Avoid during pregnancy (may stimulate uterus)", "Thins blood – avoid with anticoagulants", "Not suitable during heavy menstruation"],
    flavour: "Sweet, pungent, bitter",
    nature: "Warm",
    iconType: "angelicaphoto",
    color: "#C2955C"
  },
  {
    id: 10,
    chineseName: "川芎",
    name: "Sichuan Lovage Root",
    pinyinName: "Chuān Xiōng",
    category: "Blood-Moving",
    benefits: ["Activates blood circulation", "Relieves headaches & migraines", "Dispels wind & cold", "Reduces pain", "Supports cardiovascular health"],
    risks: ["Avoid in pregnancy", "Not for those with excessive menstrual flow", "May cause dizziness in high doses"],
    flavour: "Pungent",
    nature: "Warm",
    iconType: "lovage",
    color: "#8B6914"
  },
  {
    id: 11,
    chineseName: "花旗参",
    name: "Canada Ginseng (American Ginseng)",
    pinyinName: "Huā Qí Shēn",
    category: "Qi & Yin-Tonifying",
    benefits: ["Boosts energy without overheating the body", "Nourishes yin & clears deficiency heat", "Relieves dry mouth & throat", "Calms restlessness & supports sleep", "Aids recovery after illness or stress"],
    risks: ["Avoid during fever, cold or active infection", "May lower blood sugar – monitor if diabetic or on medication", "Avoid combining with caffeine or stimulants", "Consult a doctor if on blood thinners"],
    flavour: "Bitter, then sweet",
    nature: "Cooling",
    iconType: "ginsengphoto",
    color: "#C9A876"
  },
];

const recipes = [
  {
    id: 1,
    name: "四神汤 (Four Spirits Soup)",
    englishName: "Four Spirits Nourishing Soup",
    herbs: ["Chinese Yam (淮山)", "Lotus Seeds (莲子)", "Poria (茯苓)", "Euryale Seeds (芡实)"],
    protein: "Pork ribs or spare ribs",
    instructions: [
      "Soak all herbs for 30 minutes, rinse well.",
      "Blanch pork ribs in boiling water for 5 minutes, drain.",
      "Add all ingredients to a pot with 1.5L water.",
      "Bring to boil, then simmer for 1.5–2 hours.",
      "Season with salt to taste.",
    ],
    benefits: ["Strengthens spleen & stomach", "Reduces dampness", "Improves digestion", "Calms the mind", "Suitable for all ages"],
    servings: "4–6 pax",
    cookTime: "2 hours",
    iconType: "sishen",
    tag: "Everyday Tonic",
    tagColor: "#4A7C59"
  },
  {
    id: 2,
    name: "玉竹沙参汤 (Jade Bamboo & Adenophora Soup)",
    englishName: "Moistening Lung Soup",
    herbs: ["Solomon's Seal (玉竹)", "Adenophora Root (沙参)", "Wolfberry (枸杞)", "Red Dates (红枣)"],
    protein: "Pork or duck",
    instructions: [
      "Rinse all herbs thoroughly.",
      "Blanch meat briefly, then rinse.",
      "Combine all in a pot with 1.5L water.",
      "Bring to boil, simmer on low heat for 1.5 hours.",
      "Add wolfberries in last 15 minutes.",
      "Season and serve warm.",
    ],
    benefits: ["Moistens lungs & relieves dry cough", "Nourishes yin & reduces heat", "Soothes throat", "Suitable for dry weather or post-illness", "Brightens skin"],
    servings: "4 pax",
    cookTime: "1.5 hours",
    iconType: "yuzhusoup",
    tag: "Lung Health",
    tagColor: "#5B7FA6"
  },
  {
    id: 3,
    name: "补血养颜汤 (Blood-Nourishing Beauty Soup)",
    englishName: "Beauty & Blood Tonic Soup",
    herbs: ["Angelica Root (当归)", "Red Dates (红枣)", "Wolfberry (枸杞)", "Astragalus Root (黄芪)", "Longan (龙眼肉)"],
    protein: "Chicken or pork",
    instructions: [
      "Rinse all herbs. Soak angelica root for 20 mins.",
      "Blanch meat in boiling water for 5 minutes.",
      "Add all to pot with 1.5L water, bring to boil.",
      "Reduce to low heat and simmer 1.5–2 hours.",
      "Season with salt and serve.",
    ],
    benefits: ["Nourishes blood & improves complexion", "Regulates menstruation", "Boosts energy & reduces fatigue", "Supports liver health", "Ideal post-menstruation for women"],
    servings: "4 pax",
    cookTime: "2 hours",
    iconType: "beautysoup",
    tag: "Women's Wellness",
    tagColor: "#9B5D73"
  },
  {
    id: 4,
    name: "花旗参鸡汤 (American Ginseng Chicken Soup)",
    englishName: "Energy & Immunity Chicken Soup",
    herbs: ["American Ginseng (花旗参)", "Wolfberry (枸杞)", "Red Dates (红枣)", "Codonopsis Root (党参)"],
    protein: "Whole chicken or kampung chicken",
    instructions: [
      "Clean chicken and blanch in boiling water.",
      "Slice American Ginseng thinly.",
      "Add chicken and all herbs to pot with 2L water.",
      "Bring to boil, then slow simmer for 2 hours.",
      "Add wolfberries in final 20 minutes.",
      "Season lightly with salt.",
    ],
    benefits: ["Boosts immunity & energy", "Reduces stress & fatigue", "Supports qi & yin simultaneously", "Improves mental clarity", "Good for recovery from illness"],
    servings: "4–6 pax",
    cookTime: "2+ hours",
    iconType: "gingerchicken",
    tag: "Immunity Boost",
    tagColor: "#7A6E4A"
  },
];

const categoryColors = {
  "Qi-Tonifying": "#4A7C59",
  "Blood & Yin-Nourishing": "#CC3300",
  "Blood-Nourishing": "#8B1A1A",
  "Yin-Nourishing": "#4A6D7C",
  "Heart & Kidney-Tonifying": "#7B5EA7",
  "Qi & Yin-Tonifying": "#6B7C4A",
  "Dampness-Resolving": "#7C6B4A",
  "Blood-Moving": "#8B4A2A",
};

export default function App() {
  const [activeTab, setActiveTab] = useState("herbs");
  const [selectedHerb, setSelectedHerb] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", ...new Set(herbs.map(h => h.category))];
  const filteredHerbs = filterCategory === "All" ? herbs : herbs.filter(h => h.category === filterCategory);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#FAF7F2", minHeight: "100vh", color: "#2C1810" }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #2C1810 0%, #5C3317 50%, #8B6914 100%)",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🍵</div>
        <div style={{ color: "#C8A96E", fontSize: "0.85rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Pauline's Kitchen · Traditional Chinese Medicine</div>
        <h1 style={{ color: "#FAF7F2", fontSize: "2rem", fontWeight: "bold", margin: "0 0 0.5rem", lineHeight: 1.2 }}>
          Pauline's Chinese Herb Soup Guide
        </h1>
        <div style={{ color: "#C8A96E", fontSize: "1.2rem", marginBottom: "0.25rem" }}>中药汤品指南</div>
        <p style={{ color: "#D4C4A8", fontSize: "0.85rem", margin: 0, opacity: 0.85 }}>
          Ancient wisdom for modern wellness · Herbs, Benefits & Recipes
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: "2px solid #D4C4A8", background: "#FAF7F2", position: "sticky", top: 0, zIndex: 10 }}>
        {[
          { key: "herbs", label: "🌿 Herbs Reference", },
          { key: "recipes", label: "🫕 Soup Recipes", },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              flex: 1,
              padding: "1rem 0.5rem",
              border: "none",
              background: activeTab === tab.key ? "#2C1810" : "transparent",
              color: activeTab === tab.key ? "#C8A96E" : "#5C3317",
              fontWeight: activeTab === tab.key ? "bold" : "normal",
              fontSize: "0.9rem",
              cursor: "pointer",
              fontFamily: "Georgia, serif",
              borderBottom: activeTab === tab.key ? "3px solid #C8A96E" : "none",
              transition: "all 0.2s"
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Herbs Tab */}
      {activeTab === "herbs" && (
        <div style={{ padding: "1.25rem" }}>
          {/* Filter */}
          <div style={{ marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "0.95rem", color: "#8B6914", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.6rem" }}>Filter by category</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  style={{
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    border: `1.5px solid ${filterCategory === cat ? "#8B6914" : "#D4C4A8"}`,
                    background: filterCategory === cat ? "#8B6914" : "white",
                    color: filterCategory === cat ? "white" : "#5C3317",
                    fontSize: "0.95rem",
                    cursor: "pointer",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Herb Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.95rem" }}>
            {filteredHerbs.map(herb => (
              <div
                key={herb.id}
                onClick={() => setSelectedHerb(herb)}
                style={{
                  background: "white",
                  border: "1px solid #E8DFD0",
                  borderRadius: "12px",
                  padding: "1rem",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: "0 2px 8px rgba(44,24,16,0.06)"
                }}
              >
              <div style={{
                display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "0.4rem",
                background: "#FAF7F2",
                borderRadius: "10px",
                padding: herb.photo ? "0" : "0.4rem",
                height: "100px",
                maxHeight: "100px",
                minHeight: "100px",
                overflow: "hidden"
              }}>
                <HerbVisual photo={herb.photo} iconType={herb.iconType} size={48} />
              </div>
                <div style={{ fontSize: "0.9rem", color: "white", background: categoryColors[herb.category] || "#8B6914", borderRadius: "10px", padding: "0.15rem 0.5rem", display: "inline-block", marginBottom: "0.4rem" }}>
                  {herb.category}
                </div>
                <div style={{ fontSize: "1rem", fontWeight: "bold", color: "#2C1810", lineHeight: 1.2 }}>{herb.name}</div>
                <div style={{ fontSize: "0.9rem", color: "#8B6914" }}>{herb.chineseName} · {herb.pinyinName}</div>
                <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.9rem", background: "#FAF7F2", border: "1px solid #D4C4A8", borderRadius: "8px", padding: "0.1rem 0.4rem", color: "#5C3317" }}>🔥 {herb.nature}</span>
                  <span style={{ fontSize: "0.9rem", background: "#FAF7F2", border: "1px solid #D4C4A8", borderRadius: "8px", padding: "0.1rem 0.4rem", color: "#5C3317" }}>👅 {herb.flavour}</span>
                </div>
                <div style={{ marginTop: "0.6rem", fontSize: "0.72rem", color: "#7A6055" }}>
                  {herb.benefits.slice(0, 2).map((b, i) => (
                    <div key={i}>✓ {b}</div>
                  ))}
                  <div style={{ color: "#C8A96E", marginTop: "0.2rem" }}>+{herb.benefits.length - 2} more →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recipes Tab */}
      {activeTab === "recipes" && (
        <div style={{ padding: "1.25rem" }}>
          <div style={{ background: "linear-gradient(135deg, #FFF8EE, #FAF0DC)", border: "1px solid #E8DFD0", borderRadius: "12px", padding: "1rem", marginBottom: "1.25rem", fontSize: "1rem", color: "#5C3317", lineHeight: 1.6 }}>
            <strong>💡 General Benefits of Chinese Herb Soups:</strong><br />
            Regular consumption supports qi (vital energy) & blood circulation, strengthens immunity, nourishes internal organs, promotes healthy skin, improves sleep quality, and aligns body with seasonal changes — a cornerstone of preventive health in TCM.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {recipes.map(recipe => (
              <div
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
                style={{
                  background: "white",
                  border: "1px solid #E8DFD0",
                  borderRadius: "14px",
                  padding: "1.1rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 10px rgba(44,24,16,0.07)"
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.95rem" }}>
                  <div style={{ background: "#FAF7F2", borderRadius: "10px", padding: "0.3rem", display: "flex", alignItems: "center" }}><HerbIcon type={recipe.iconType} size={56} /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.9rem", color: "white", background: recipe.tagColor, borderRadius: "10px", padding: "0.15rem 0.6rem", display: "inline-block", marginBottom: "0.3rem" }}>
                      {recipe.tag}
                    </div>
                    <div style={{ fontWeight: "bold", fontSize: "1rem", color: "#2C1810", lineHeight: 1.2 }}>{recipe.englishName}</div>
                    <div style={{ fontSize: "0.85rem", color: "#8B6914", marginBottom: "0.5rem" }}>{recipe.name}</div>
                    <div style={{ display: "flex", gap: "0.95rem", fontSize: "0.95rem", color: "#7A6055" }}>
                      <span>⏱ {recipe.cookTime}</span>
                      <span>👥 {recipe.servings}</span>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "0.95rem", display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {recipe.herbs.map((h, i) => (
                    <span key={i} style={{ fontSize: "0.9rem", background: "#FAF7F2", border: "1px solid #D4C4A8", borderRadius: "8px", padding: "0.15rem 0.5rem", color: "#5C3317" }}>
                      🌿 {h}
                    </span>
                  ))}
                </div>
                <div style={{ marginTop: "0.6rem", fontSize: "0.72rem", color: "#4A7C59" }}>
                  {recipe.benefits.slice(0, 2).map((b, i) => <span key={i} style={{ marginRight: "0.95rem" }}>✓ {b}</span>)}
                  <span style={{ color: "#C8A96E" }}>Tap for full recipe →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Herb Detail Modal */}
      {selectedHerb && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 100, display: "flex", alignItems: "flex-end" }}
          onClick={() => setSelectedHerb(null)}
        >
          <div
            style={{ background: "#FAF7F2", borderRadius: "20px 20px 0 0", padding: "1.5rem", width: "100%", maxHeight: "80vh", overflowY: "auto" }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <div style={{
                display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "0.6rem",
                width: selectedHerb.photo ? "200px" : "auto",
                height: selectedHerb.photo ? "200px" : "auto",
                margin: selectedHerb.photo ? "0 auto 0.6rem" : "0 auto 0.6rem",
                borderRadius: "14px",
                overflow: "hidden"
              }}>
                <HerbVisual photo={selectedHerb.photo} iconType={selectedHerb.iconType} size={80} rounded="14px" />
              </div>
              <div style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#2C1810" }}>{selectedHerb.name}</div>
              <div style={{ color: "#8B6914", fontSize: "1rem" }}>{selectedHerb.chineseName} · {selectedHerb.pinyinName}</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
                <span style={{ fontSize: "0.95rem", background: "#E8DFD0", borderRadius: "10px", padding: "0.2rem 0.6rem", color: "#5C3317" }}>🔥 {selectedHerb.nature}</span>
                <span style={{ fontSize: "0.95rem", background: "#E8DFD0", borderRadius: "10px", padding: "0.2rem 0.6rem", color: "#5C3317" }}>👅 {selectedHerb.flavour}</span>
                <span style={{ fontSize: "0.95rem", background: categoryColors[selectedHerb.category] || "#8B6914", borderRadius: "10px", padding: "0.2rem 0.6rem", color: "white" }}>{selectedHerb.category}</span>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "12px", padding: "1rem", marginBottom: "0.95rem" }}>
              <div style={{ fontWeight: "bold", color: "#4A7C59", marginBottom: "0.5rem", fontSize: "0.9rem" }}>✅ Benefits</div>
              {selectedHerb.benefits.map((b, i) => (
                <div key={i} style={{ fontSize: "1rem", color: "#2C1810", padding: "0.25rem 0", borderBottom: i < selectedHerb.benefits.length - 1 ? "1px solid #F0EAE0" : "none" }}>
                  • {b}
                </div>
              ))}
            </div>

            <div style={{ background: "white", borderRadius: "12px", padding: "1rem", marginBottom: "1rem" }}>
              <div style={{ fontWeight: "bold", color: "#CC4400", marginBottom: "0.5rem", fontSize: "0.9rem" }}>⚠️ Risks & Cautions</div>
              {selectedHerb.risks.map((r, i) => (
                <div key={i} style={{ fontSize: "1rem", color: "#2C1810", padding: "0.25rem 0", borderBottom: i < selectedHerb.risks.length - 1 ? "1px solid #F0EAE0" : "none" }}>
                  • {r}
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedHerb(null)}
              style={{ width: "100%", padding: "0.9rem", background: "#2C1810", color: "#C8A96E", border: "none", borderRadius: "12px", fontSize: "1rem", cursor: "pointer", fontFamily: "Georgia, serif" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", zIndex: 100, display: "flex", alignItems: "flex-end" }}
          onClick={() => setSelectedRecipe(null)}
        >
          <div
            style={{ background: "#FAF7F2", borderRadius: "20px 20px 0 0", padding: "1.5rem", width: "100%", maxHeight: "85vh", overflowY: "auto" }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "0.4rem" }}><HerbIcon type={selectedRecipe.iconType} size={70} /></div>
              <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#2C1810" }}>{selectedRecipe.englishName}</div>
              <div style={{ color: "#8B6914", fontSize: "0.9rem" }}>{selectedRecipe.name}</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "0.4rem", fontSize: "0.8rem", color: "#7A6055" }}>
                <span>⏱ {selectedRecipe.cookTime}</span>
                <span>👥 {selectedRecipe.servings}</span>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "12px", padding: "1rem", marginBottom: "0.95rem" }}>
              <div style={{ fontWeight: "bold", color: "#2C1810", marginBottom: "0.6rem", fontSize: "0.9rem" }}>🌿 Ingredients</div>
              <div style={{ fontSize: "1rem", color: "#5C3317", marginBottom: "0.4rem" }}><strong>Protein:</strong> {selectedRecipe.protein}</div>
              <div style={{ fontSize: "1rem", color: "#5C3317" }}><strong>Herbs:</strong></div>
              {selectedRecipe.herbs.map((h, i) => (
                <div key={i} style={{ fontSize: "1rem", color: "#2C1810", padding: "0.2rem 0" }}>• {h}</div>
              ))}
            </div>

            <div style={{ background: "white", borderRadius: "12px", padding: "1rem", marginBottom: "0.95rem" }}>
              <div style={{ fontWeight: "bold", color: "#2C1810", marginBottom: "0.6rem", fontSize: "0.9rem" }}>📋 Instructions</div>
              {selectedRecipe.instructions.map((step, i) => (
                <div key={i} style={{ display: "flex", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <div style={{ minWidth: "22px", height: "22px", borderRadius: "50%", background: "#2C1810", color: "#C8A96E", fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold" }}>{i + 1}</div>
                  <div style={{ fontSize: "1rem", color: "#2C1810", lineHeight: 1.5 }}>{step}</div>
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg, #FFF8EE, #FAF0DC)", border: "1px solid #E8DFD0", borderRadius: "12px", padding: "1rem", marginBottom: "1rem" }}>
              <div style={{ fontWeight: "bold", color: "#4A7C59", marginBottom: "0.5rem", fontSize: "0.9rem" }}>✅ Health Benefits</div>
              {selectedRecipe.benefits.map((b, i) => (
                <div key={i} style={{ fontSize: "1rem", color: "#2C1810", padding: "0.2rem 0" }}>• {b}</div>
              ))}
            </div>

            <button
              onClick={() => setSelectedRecipe(null)}
              style={{ width: "100%", padding: "0.9rem", background: "#2C1810", color: "#C8A96E", border: "none", borderRadius: "12px", fontSize: "1rem", cursor: "pointer", fontFamily: "Georgia, serif" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ padding: "1.5rem", textAlign: "center", borderTop: "1px solid #E8DFD0", marginTop: "1rem", fontSize: "0.72rem", color: "#9A8070", lineHeight: 1.6 }}>
        💛 Made with love by Pauline, for family & friends.<br />
        ⚕️ <strong>Disclaimer:</strong> This guide is for general wellness reference only. Always consult a licensed TCM practitioner or physician before using herbs, especially if pregnant, on medication, or managing a health condition.
      </div>
    </div>
  );
}

    

