import { DICT } from "./dictionary.js";
const MODULE_ID = "ffxiv-ttrpg-compendia-zh-tw";
const SF = ["description","base_effect","challenge","combo","condition","cost","direct_hit","limitations","range","target","trigger","traits","base_formula","job_name"];
const EFFECT_TERMS = {
  "Ifrit-Egi": "火神之靈",
  "Titan-Egi": "土神之靈",
  "Garuda-Egi": "風神之靈",
  "Ruby Carbuncle": "紅寶石獸",
  "Topaz Carbuncle": "黃寶石獸",
  "Emerald Carbuncle": "綠寶石獸",
  Other: "其他寵物",
  DOT: "持續傷害(DOT)",
  "Arrow Flurry": "亂箭齊發",
  "Hawk's Eye": "鷹眼",
  "Straight Shot": "直線射擊",
  "Wide Volley": "廣域群射",
  "Refulgent Arrow": "輝煌箭",
  "Umbral Ice": "靈極冰",
  "Consecutive Invocation": "連續祈喚",
  "Astral Fire": "星極火",
  "Formless Fist": "無相身",
  Nadi: "納迪",
  "Head Graze": "傷頭",
  "Sturdy Shield": "堅固之盾",
  Defense: "防禦",
  "Walking Dead": "行屍走肉",
  "Living Dead": "行屍走肉",
  "Gauss Round": "虹吸彈",
  Ricochet: "彈射",
  "Dark Mind": "棄明投暗",
  "Battery Charge": "電池充能",
  "Divine Might": "神聖魔法效果提高",
  "Blazing Shot": "烈焰彈",
  "Auto Crossbow": "自動弩",
  "Heat Blast": "熱衝擊",
  "Earthly Dominance": "天星支配",
  "Giant Dominance": "巨星支配",
  "Earthly Star": "地星",
  "Critical Up": "暴擊提升",
  Repertoire: "即興曲",
  Revivify: "再生",
  "White Mana": "白魔元",
  "Black Mana": "黑魔元",
  "Verstone Ready": "石火預備",
  "Verfire Ready": "火炎預備",
  Enmity: "仇恨",
  "Dualcast": "連續詠唱",
  "Benefic II": "救療 II",
  "Bestial Fury": "獸性猛攻",
  Kenki: "劍氣",
  "Knocked Out": "昏厥",
  Transcendent: "超越",
  Weakness: "衰弱",
  "Fugetsu": "風月",
  "Sen: Getsu": "閃：月",
  Fuka: "風花",
  "Sen: Ka": "閃：花",
  "Sen: Setsu": "閃：雪",
  "Fae Aether": "妖精以太",
  Drain: "吸收",
  "Surging Tempest": "戰場風暴",
  Blackblood: "暗血",
  "Third Eye": "心眼",
  Vigilance: "警戒",
  "Life of the Dragon": "紅蓮之血",
  Mudra: "結印",
  "Coeurl Form": "猛豹身",
  "Opo-Opo's Fury": "魔猿怒",
  "Raptor's Fury": "盜龍怒",
  "Dreadwyrm Trance": "龍神附體",
  "Gemstone Arcanum": "寶石奧秘",
  "Fey Illumination": "異想的幻光",
  "Enhanced Enpi": "燕飛效果提高",
  Bind: "拘束",
  "Blood of the Dragon": "蒼天龍血",
  "Quick Nock": "連珠箭",
  "Raw Intuition": "原初的直覺",
  "Battery Charges": "電池充能",
  Ninjutsu: "忍術",
  Cover: "保護",
  "Emergency Tactics": "應急戰術",
  Excogitation: "深謀遠慮之策",
  Drakesbane: "雲蒸龍變",
  "Goring Blade": "瀝血劍",
  Nastrond: "死者之岸",
  "Fell Cleave": "裂石飛環",
  Decimate: "地毀人亡",
  "Inner Strength": "內力",
  "Leg Graze": "傷腿",
  Bloodletter: "失血箭",
  "Rain of Death": "死亡箭雨",
  "Mage's Ballad": "賢者的敘事謠",
  "Tornado Kick": "鬥魂旋風腳",
  Chakra: "鬥氣",
  "Red Magic": "赤魔法",
  Requiescat: "安魂祈禱",
  "Rook Autoturret": "車式浮空炮",
  "Magic Defense": "魔法防禦",
  "Shade Shift": "殘影",
  "Demi-Bahamut": "巴哈姆特之靈",
  Synastry: "星位合圖",
  "Fuma Shuriken": "風魔手裏劍",
  "Dark Arts": "暗技",
  "The Wanderer's Minuet": "放浪神的小步舞曲",
  Detonator: "起爆",
  Ready: "預備",
  "Power Surge": "龍力",
  "Fire III": "爆炎",
  Sen: "閃",
  "Ninjutsu Cooldown": "忍術冷卻",
  "Quick Nock": "連珠箭",
  physical: "物理",
  form: "身形",
  Forms: "身形",
};
const translateEffectTerms = (text) => Object.entries(EFFECT_TERMS)
  .sort(([a], [b]) => b.length - a.length)
  .reduce((result, [source, translated]) => source === "DOT" ? result : result.split(source).join(translated), text)
  .replace(/啟用「連續詠唱」/g, "啟用「連續祈喚」")
  .replace(/「雙重詠唱」/g, "「連續詠唱」")
  .replace(/龍之力/g, "紅蓮之血")
  .replace(/魔猿之怒/g, "魔猿怒")
  .replace(/盜龍之怒/g, "盜龍怒")
  .replace(/流浪者的敘事謠/g, "放浪神的小步舞曲")
  .replace(/妖精光輝/g, "異想的幻光")
  .replace(/「掩護」/g, "「保護」")
  .replace(/「箭雨」/g, "「亂箭齊發」")
  .replace(/「猛豹之怒」/g, "「猛豹怒」")
  .replace(/「深謀遠慮」/g, "「深謀遠慮之策」")
  .replace(/「緊急戰術」/g, "「應急戰術」")
  .replace(/「暴怒斬預備」/g, "「瀝血劍預備」")
  .replace(/「龍血」/g, "「蒼天龍血」")
  .replace(/「足部狙擊」/g, "「傷腿」")
  .replace(/「賢人放浪」/g, "「賢者的敘事謠」")
  .replace(/「迴旋踢」/g, "「鬥魂旋風腳」")
  .replace(/「洶湧怒濤」/g, "「戰場風暴」")
  .replace(/「原初直覺」/g, "「原初的直覺」")
  .replace(/「強化燕飛」/g, "「燕飛效果提高」")
  .replace(/「暗影移轉」/g, "「殘影」")
  .replace(/「黑血」/g, "「暗血」")
  .replace(/「巴哈姆特幻體」/g, "「巴哈姆特之靈」")
  .replace(/「星體連結」/g, "「星位合圖」")
  .replace(/「暗黑波動」/g, "「暗技」")
  .replace(/「警覺」/g, "「警戒」")
  .replace(/警覺/g, "警戒")
  .replace(/黑血/g, "暗血")
  .replace(/引爆器/g, "起爆")
  .replace(/「連續詠唱」特性的效果/g, "「連續祈喚」特性的效果")
  .replace(/使用「連續詠唱」/g, "使用「連續祈喚」")
  .replace(/內在力量/g, "內力");
const localizeCount = (count) => {
  const localized = { one: "一", two: "兩", three: "三", four: "四", five: "五" }[count.toLowerCase()];
  return localized || count;
};
const t = (s) => {
  if (typeof s !== "string") return s;
  if (/<p(?:\s[^>]*)?>/i.test(s)) {
    const paragraphs = [...s.matchAll(/<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi)];
    const wholeTranslation = DICT[s] && DICT[s] !== s ? DICT[s] : translateEffect(s);
    const translatedParagraphs = [...wholeTranslation.matchAll(/<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi)];
    if (wholeTranslation !== s && translatedParagraphs.length === paragraphs.length) {
      let index = 0;
      return s.replace(/<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi, (paragraph, attributes = "", content) => {
        const [, translatedAttributes = "", translatedContent] = translatedParagraphs[index++];
        const translated = translateEffectTerms(translatedContent);
        return `<p${attributes || translatedAttributes}>${preserveMarkup(content, translated)}</p>`;
      });
    }
    return s.replace(/<p(\s[^>]*)?>([\s\S]*?)<\/p>/gi, (paragraph, attributes = "", content) => {
      const translated = translateEffectTerms(DICT[content] && DICT[content] !== content ? DICT[content] : translateEffect(content));
      return `<p${attributes}>${preserveMarkup(content, translated)}</p>`;
    });
  }
  const translated = translateEffectTerms(DICT[s] && DICT[s] !== s ? DICT[s] : translateEffect(s));
  return preserveMarkup(s, translated);
};

function preserveMarkup(source, translated) {
  if (translated === source || !/<(?:strong|em)>/i.test(source)) return translated;
  let out = translated;
  const emphasis = new Map();
  for (const [, tag, text] of source.matchAll(/<(strong|em)>(.*?)<\/\1>/gi)) {
    const sourcePunctuation = text.match(/[:.!?]$/)?.[0] || "";
    const key = sourcePunctuation ? text.slice(0, -1) : text;
    let term = EFFECT_TERMS[key] || DICT[key];
    if (key === "Chakra" && out.includes("獸形神")) term = "獸形神";
    if (!term && DICT[`Limit Break: ${key}`]) term = DICT[`Limit Break: ${key}`].replace(/^極限技：/, "");
    if (!term && key === "HP") term = "體力(HP)";
    if (!term && key === "MP") term = "魔力(MP)";
    if (!term) continue;
    if (!out.includes(term)) out = out.split(key).join(term);
    const emphasisKey = JSON.stringify([tag, term]);
    emphasis.set(emphasisKey, (emphasis.get(emphasisKey) || 0) + 1);
  }
  for (const [key, amount] of emphasis) {
    const [tag, term] = JSON.parse(key);
    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const pattern = new RegExp(`(?<!<${tag}>)${escaped}(?!<\\/${tag}>)`, "g");
    let emphasized = (out.match(new RegExp(`<${tag}>${escaped}</${tag}>`, "g")) || []).length;
    if (emphasized >= amount) continue;
    out = out.replace(pattern, (text) => {
      if (emphasized >= amount) return text;
      emphasized++;
      return `<${tag}>${text}</${tag}>`;
    });
    if (tag === "strong" && term === "體力(HP)" && emphasized < amount) {
      const missing = amount - emphasized;
      const fallback = /(?<!<strong>)體力(?!\(HP\)|<\/strong>)/g;
      out = out.replace(fallback, (text) => {
        if (emphasized >= amount) return text;
        emphasized++;
        return `<strong>${text}</strong>`;
      });
    }
  }
  return out;
}

function translateEffect(source) {
  const plain = source.replace(/<\/p>\s*<p>/gi, " ").replace(/<\/?p>|<\/?(?:strong|em)>/gi, "");
  let match = plain.match(/^Removes Knocked Out from the target, then restores (.+) HP, grants Transcendent, and afflicts them with Weakness\.\s*\*\s*This ability can also target a character outside the encounter map[.,]\s*[Ww]hen doing so, move the target to an empty square within (.+?) after resolving the ability's effects\.?$/);
  if (match) return `移除目標身上的「昏厥」，接著恢復 ${match[1]} 點體力(HP)、賦予「超越」，並使其陷入「衰弱」。*此技能也能以遭遇戰地圖外的角色為目標；若如此做，技能效果結算後，將目標移至 ${match[2] === "range" ? "射程" : match[2]} 內的空格。`;

  match = plain.match(/^Removes Knocked Out from the target, then restores (.+) HP, grants Transcendent, and afflicts them with Weakness\. If this ability is used on your turn, grants Dualcast as well\.\s*\*\s*This ability can also target a character outside the encounter map\.When doing so, move the target to an empty square within range after resolving the ability's effects\.?$/);
  if (match) return `移除目標身上的「昏厥」，接著恢復 ${match[1]} 點體力(HP)、賦予「超越」，並使其陷入「衰弱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。*此技能也能以遭遇戰地圖外的角色為目標；若如此做，技能效果結算後，將目標移至射程內的空格。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Raptor Form, and enables Bestial Fury: Opo-Opo\. If this ability is used while under the effect of Opo-Opo Form and results in a direct hit, it automatically scores a critical as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」並啟用「獸性猛攻：魔猿身」。若在「魔猿身」效果下使用此技能並造成直擊，則也會自動暴擊。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Raptor Form, and enables Bestial Fury: Opo-Opo\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」並啟用「獸性猛攻：魔猿身」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Raptor Form\. If this ability is used while under the effect of Opo-Opo Form, grants (.+) stack of Opo-Opo's Fury(?: as well)?\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「盜龍身」。若在「魔猿身」效果下使用此技能，也會獲得 ${match[2]} 層「魔猿之怒」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Opo-Opo Form, and enables Bestial Fury: Coeurl\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「魔猿身」並啟用「獸性猛攻：猛豹身」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Coeurl Form, and enables Bestial Fury: Raptor\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「猛豹身」並啟用「獸性猛攻：盜龍身」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants Coeurl Form and (.+) stack of Raptor's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。獲得「猛豹身」及 ${match[2]} 層「盜龍之怒」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants Opo-Opo Form and (.+) stacks of Coeurl's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。獲得「魔猿身」及 ${match[2]} 層「猛豹之怒」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Opo-Opo Form and enables Bestial Fury: Coeurl\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「魔猿身」並啟用「獸性猛攻：猛豹身」。`;

  match = plain.match(/^Deals (.+) damage to the target\. If the target is suffering from one or more DOTs you inflicted, deals additional damage equaling the value of the highest of these DOTs\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若目標正受到你施加的一項以上持續傷害(DOT)，額外造成等同於其中最高持續傷害數值的傷害。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) and enables (.+): (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「${match[2]}」並啟用「${match[3]}：${match[4]}」。`;

  match = plain.match(/^Deals (.+) damage to the target, then deals another (.+) damage to the target, then deals another (.+) damage to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著再造成 ${match[2]} 點傷害，最後再造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to the target, then move to an empty square adjacent to the target if one is available\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著移動至目標相鄰的空格（若有）。`;

  match = plain.match(/^You may perform up to (.+) additional primary actions this turn\. The primary actions granted by this effect can only be used for physical primary abilities\.?$/);
  if (match) return `本回合你最多可額外執行 ${match[1]} 次主要行動。此效果提供的主要行動僅能用於物理主要技能。`;

  match = plain.match(/^Deals (.+) damage to the target and grants one advantage die on your next ability check\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並使你的下一次技能檢定獲得一顆優勢骰。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Drakesbane Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「雲蒸龍變預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Raptor Form\. If this ability is used while under the effect of Opo-Opo Form and results in a direct hit, it automatically scores a critical as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「盜龍身」。若在「魔猿身」效果下使用此技能並造成直擊，則自動暴擊。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) (White|Black) Mana\. If the die rolled for this ability(?: check)? lands on an even number, the following proc effect triggers\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點${match[3] === "White" ? "白魔元" : "黑魔元"}。若此技能${plain.includes("ability check") ? "檢定" : ""}擲出的骰值為偶數，觸發下列發動效果。`;

  match = plain.match(/^(Verstone|Verfire) Ready: Grants \1 Ready\.?$/);
  if (match) return `「${match[1] === "Verstone" ? "石火" : "火炎"}預備」：獲得「${match[1] === "Verstone" ? "石火" : "火炎"}預備」。`;

  match = plain.match(/^Grants (.+) stack of Repertoire and the following song effect\. The Wanderer's Minuet: Grants all al(?:l)?ies Critical Up \((.+)\)\.?$/);
  if (match) return `獲得 ${match[1]} 層「即興曲」，並觸發下列歌曲效果。「流浪者的敘事謠」：使所有盟友獲得「暴擊提升」（${match[2]}）。`;

  match = plain.match(/^Grants a barrier equaling that of the character whose barrier (?:triggered|tirggered) Deployment Tactics to all targets\.?$/);
  if (match) return `使所有目標獲得相當於觸發「展開戰術」之角色護盾值的護盾。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Fang and Claw Bared \/ Wheel in Motion Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「龍爪龍尾預備／迴旋長槍預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Enhanced Enpi, then move up to (.+) squares?\. You cannot end this movement in a square that is adjacent to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「強化燕飛」，接著移動最多 ${match[2]} 格。移動結束時不得位於與目標相鄰的格子。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Dive Ready\. If this ability is used while under the effect of Life of the Dragon, you may deal Life of the Dragon's damage to all enemies adjacent to you and to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「俯衝預備」。若在「龍之力」效果下使用此技能，你可以對與你及目標相鄰的所有敵人造成「龍之力」的傷害。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next ability the target uses deals an additional (.+) damage\. If the target is a tank, melee DPS, or companion, the next ability they use deals an additional (.+) damage instead\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次使用的技能額外造成 ${match[2]} 點傷害。若目標為防護職業、近戰輸出或夥伴，其下次使用的技能改為額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next ability the target uses deals an additional (.+) damage\. If the target is a healer, ranged DPS, or companion, the next ability they use deals an additional (.+) damage instead\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次使用的技能額外造成 ${match[2]} 點傷害。若目標為治療職業、遠程輸出或夥伴，其下次使用的技能改為額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next time the target recovers HP, they recover an additional (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次恢復體力(HP)時，額外恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next time the target takes damage from an ability, they take (.+) less damage\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次受到技能傷害時，該傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Grants the target (.+) Major Arcana and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[2]} 點體力(HP)的護盾。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。`;

  match = plain.match(/^Grants the target Major Arcana, Revivify \((.+)\), and a barrier of (.+) HP\. Targets who have already been granted Revivify may increase its value by (.+), to a maximum of (.+)\.?$/);
  if (match) return `使目標獲得「大奧秘卡」、「再生」（${match[1]}）及相當於 ${match[2]} 點體力(HP)的護盾。已獲得「再生」的目標可將其數值提高 ${match[3]}，最高至 ${match[4]}。`;

  match = plain.match(/^Grants (.+) stack of Repertoire and the following song effect\. The Wanderer's Minuet: Grants all allies Critical Up \((.+)\)\.?$/);
  if (match) return `獲得 ${match[1]} 層「即興曲」，並觸發下列歌曲效果。「流浪者的敘事謠」：使所有盟友獲得「暴擊提升」（${match[2]}）。`;

  match = plain.match(/^Grants Dreadwyrm Trance until the end of this turn and (.+) Gemstone Arcanum\. Transforms your pet into Demi-Bahamut until the start of your pet's next turn\.?$/);
  if (match) return `獲得「龍神附體」，持續至本回合結束，並獲得 ${match[1]} 個「寶石奧秘」。將你的寵物變為「巴哈姆特幻體」，持續至寵物的下回合開始。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) White Mana\. If the die rolled for this ability lands on an even number, the following proc effect triggers\. Verstone Ready: Grants Verstone Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點白魔元。若此技能擲出的骰值為偶數，觸發下列發動效果。「石火預備」：獲得「石火預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) Black Mana\. If the die rolled for this ability check lands on an even number, the following proc effect triggers\. Verfire Ready: Grants Verfire Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元。若此技能檢定擲出的骰值為偶數，觸發下列發動效果。「火炎預備」：獲得「火炎預備」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants (.+) stacks of Requiescat\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。獲得 ${match[2]} 層「安魂祈禱」。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Ninki\. Increases the damage all targets take from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點忍氣。直到你的下回合開始，所有目標受到的技能傷害增加 ${match[3]} 點。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next ability the target uses deals an additional (.+) damage\. If the target is a (.+), the next ability they use deals an additional (.+) damage instead\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次使用的技能額外造成 ${match[2]} 點傷害。若目標為${match[3]}，其下次使用的技能改為額外造成 ${match[4]} 點傷害。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next time the target recovers HP, they recover an additional (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次恢復體力(HP)時，額外恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next time the target takes damage from an ability, they take (.+) less damage\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次受到技能傷害時，該傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。`;

  match = plain.match(/^Grants the target Major Arcana, Revivify \((.+)\), and a barrier of (.+) HP\. Targets who have already been granted Revivify may increase its value by (.+), to a maximum of (.+)\.?$/);
  if (match) return `使目標獲得「大奧秘卡」、「再生」（${match[1]}）及相當於 ${match[2]} 點體力(HP)的護盾。已獲得「再生」的目標可將其數值提高 ${match[3]}，最高至 ${match[4]}。`;

  match = plain.match(/^Grants (.+) stack of Repertoire and the following song effect\. The Wanderer's Minuet: Grants all allies Critical Up \((.+)\)\.?$/);
  if (match) return `獲得 ${match[1]} 層「即興曲」，並觸發下列歌曲效果。「流浪者的敘事謠」：使所有盟友獲得「暴擊提升」（${match[2]}）。`;

  match = plain.match(/^Grants Dreadwyrm Trance until the end of this turn and (.+) Gemstone Arcanum\. Transforms your pet into Demi-Bahamut until the start of your pet's next turn\.?$/);
  if (match) return `獲得「龍神附體」，持續至本回合結束，並獲得 ${match[1]} 個「寶石奧秘」。將你的寵物變為「巴哈姆特幻體」，持續至寵物的下回合開始。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants (.+) Black Mana\. If the die rolled for this ability check lands on an even number, the following proc effect triggers\. Verfire Ready: Grants Verfire Ready\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元。若此技能檢定擲出的骰值為偶數，觸發下列發動效果。「火炎預備」：獲得「火炎預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) White Mana\. If the die rolled for this ability lands on an even number, the following proc effect triggers\. Verstone Ready: Grants Verstone Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點白魔元。若此技能擲出的骰值為偶數，觸發下列發動效果。「石火預備」：獲得「石火預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) Black Mana\. If the die rolled for this ability check lands on an even number, the following proc effect triggers\. Verfire Ready: Grants Verfire Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元。若此技能檢定擲出的骰值為偶數，觸發下列發動效果。「火炎預備」：獲得「火炎預備」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) White Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Black Mana and (.+) White Mana\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) White Mana and (.+) Black Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元及 ${match[3]} 點黑魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target\. Grants Verfire Ready and (.+) Black Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害。獲得「火炎預備」及 ${match[4]} 點黑魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target\. Grants Verstone Ready and (.+) White Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害。獲得「石火預備」及 ${match[4]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) Coeurl Form and (.+) stack of Raptor's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「猛豹身」及 ${match[3]} 層「盜龍之怒」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants (.+) stacks of Requiescat\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。獲得 ${match[2]} 層「安魂祈禱」。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. Any enemies who enter or start their turn within this area suffer (.+) damage\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。敵人進入此區域或在此區域內開始回合時，受到 ${match[2]} 點傷害。此區域於階段結束時移除。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. While inside this area, allies take (.+) less damage from abilities\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。盟友在此區域內時，受到的技能傷害減少 ${match[2]} 點。此區域於階段結束時移除。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Ninki\. Increases the damage all targets take from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點忍氣。直到你的下回合開始，所有目標受到的技能傷害增加 ${match[3]} 點。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) and (.+) stack of Raptor's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。獲得「猛豹身」及 ${match[3]} 層「盜龍之怒」。`;

  match = plain.match(/^Deals (.+) damage to the target, then move up to (.+) squares away from the target\. Roll a d(.+) for the ability check; on a (.+), the GM determines your final destination\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著移動至離目標最多 ${match[2]} 格的位置。為技能檢定擲 d${match[3]}；若結果為 ${match[4]}，由 GM 決定你的最終位置。`;

  match = plain.match(/^Deals (.+) damage to the target\. If this ability is used while under the effect of Life of the Dragon, you may deal Life of the Dragon's damage to all enemies adjacent to you and to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若在「龍之力」效果下使用此技能，你可以對與你及目標相鄰的所有敵人造成「龍之力」的傷害。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants Dive Ready\. If this ability is used while under the effect of Life of the Dragon, you may deal Life of the Dragon's damage to all enemies adjacent to you and to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「俯衝預備」。若在「龍之力」效果下使用此技能，你可以對與你及目標相鄰的所有敵人造成「龍之力」的傷害。`;

  match = plain.match(/^Grants a barrier equaling that of the character whose barrier triggered Deployment Tactics to all targets\.?$/);
  if (match) return `使所有目標獲得相當於觸發「展開戰術」之角色護盾值的護盾。`;

  match = plain.match(/^Grants (.+) and the following song effect\. The Wanderer's Minuet: Grants all allies Critical Up \((.+)\)\.?$/);
  if (match) return `獲得「${match[1]}」，並觸發下列歌曲效果。「流浪者的敘事謠」：使所有盟友獲得「暴擊提升」（${match[2]}）。`;

  match = plain.match(/^Grants (.+) until the end of this turn and (.+) Gemstone Arcanum\. Transforms your pet into Demi-Bahamut until the start of your pet's next turn\.?$/);
  if (match) return `獲得「${match[1]}」，持續至本回合結束，並獲得 ${match[2]} 個「寶石奧秘」。將你的寵物變為「巴哈姆特幻體」，持續至寵物的下回合開始。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants (.+) Black Mana\. If the die rolled for this ability check lands on an even number, the following proc effect triggers\. Verfire Ready: Grants Verfire Ready\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元。若此技能檢定擲出的骰值為偶數，觸發下列發動效果。「火炎預備」：獲得「火炎預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) White Mana\. If the die rolled for this ability lands on an even number, the following proc effect triggers\. Verstone Ready: Grants Verstone Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點白魔元。若此技能擲出的骰值為偶數，觸發下列發動效果。「石火預備」：獲得「石火預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) Black Mana\. If the die rolled for this ability check lands on an even number, the following proc effect triggers\. Verfire Ready: Grants Verfire Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元。若此技能檢定擲出的骰值為偶數，觸發下列發動效果。「火炎預備」：獲得「火炎預備」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) White Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Black Mana and (.+) White Mana\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) White Mana and (.+) Black Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元及 ${match[3]} 點黑魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target\. Grants Verfire Ready and (.+) Black Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害。獲得「火炎預備」及 ${match[4]} 點黑魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target\. Grants Verstone Ready and (.+) White Mana and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害。獲得「石火預備」及 ${match[4]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets\. If this ability is used while under the effect of (.+), it changes to Astral Impulse and deals an additional (.+) damage\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。若使用此技能時正處於「${match[2]}」效果下，技能改為「星極脈衝」，並額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to the target\. If this ability is used while under the effect of Dreadwyrm Trance, it changes to Astral Impulse and deals an additional (.+) damage\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若使用此技能時正處於「龍神附體」效果下，技能改為「星極脈衝」，並額外造成 ${match[2]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Coeurl Form and (.+) stack of Raptor's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「猛豹身」及 ${match[2]} 層「盜龍之怒」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Raptor Form, and enables Bestial Fury: Opo-Opo\. If this ability is used while under the effect of Opo-Opo Form and results in a direct hit, it automatically scores a critical as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」並啟用「獸性猛攻：魔猿身」。若在「魔猿身」效果下使用此技能並造成直擊，則也會自動暴擊。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) and (.+) stack of Raptor's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。獲得「${match[2]}」及 ${match[3]} 層「盜龍之怒」。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. Any enemies who enter or start their turn within this area suffer (.+) damage\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。敵人進入此區域或在此區域內開始回合時，受到 ${match[2]} 點傷害。此區域於階段結束時移除。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. While inside this area, allies take (.+) less damage from abilities\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。盟友在此區域內時，受到的技能傷害減少 ${match[2]} 點。此區域於階段結束時移除。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Ninki\. Increases the damage all targets take from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點忍氣。直到你的下回合開始，所有目標受到的技能傷害增加 ${match[3]} 點。`;

  match = plain.match(/^Deals (.+) damage to the target\. If this ability is used while under the effect of Life of the Dragon, you may deal Life of the Dragon's damage to all enemies adjacent to you and to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若在「龍之力」效果下使用此技能，你可以對與你及目標相鄰的所有敵人造成「龍之力」的傷害。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants Dive Ready\. If this ability is used while under the effect of Life of the Dragon, you may deal Life of the Dragon's damage to all enemies adjacent to you and to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「俯衝預備」。若在「龍之力」效果下使用此技能，你可以對與你及目標相鄰的所有敵人造成「龍之力」的傷害。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) heat and (.+) Battery Charge\.?$/i);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點熱能及 ${match[3]} 點電池充能。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants Surging Tempest and (.+) Wrath\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。獲得「洶湧怒濤」及 ${match[2]} 層怒氣。`;

  match = plain.match(/^Restores (.+) HP and grants a barrier equaling the amount of HP restored to the target\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)，並賦予相當於恢復的體力(HP)量的護盾。`;

  match = plain.match(/^Deals (.+) damage to the target and inflicts a DOT \((.+)\)\. Grants Power Surge and Fang and Claw Bared \/ Wheel in Motion Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並施加持續傷害(DOT)（${match[2]}）。獲得「龍力」及「龍爪龍尾預備／迴旋長槍預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Opo-Opo Form and (.+) stacks of Coeurl's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「魔猿身」及 ${match[2]} 層「猛豹之怒」。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants Life of the Dragon and Nastrond Ready\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。獲得「龍之力」及「死者之岸預備」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Raptor Form, and enables Bestial Fury: Opo-Opo\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」並啟用「獸性猛攻：魔猿身」。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\. The next ability the target uses deals an additional (.+) damage\. If the target is a (.+), the next ability they use deals an additional (.+) damage instead\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。目標下次使用的技能額外造成 ${match[3]} 點傷害。若目標為${match[4]}，其下次使用的技能改為額外造成 ${match[5]} 點傷害。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\. The next time the target recovers HP, they recover an additional (.+) HP\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。目標下次恢復體力(HP)時，額外恢復 ${match[3]} 點體力(HP)。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\. The next time the target takes damage from an ability, they take (.+) less damage\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。目標下次受到技能傷害時，該傷害減少 ${match[3]} 點。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。`;

  match = plain.match(/^Deals (.+) damage to the target, then move to an empty square adjacent to the target if one is available\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著移動至目標相鄰的空格（若有）。`;

  match = plain.match(/^Removes Knocked Out from the target, then restores (.+) HP, grants Transcendent, and afflicts them with Weakness\.\s*\*This ability can also target a character outside the encounter map\. When doing so, move the target to an empty square within (.+?) after resolving the ability's effects\.?$/);
  if (match) return `移除目標身上的「昏厥」，接著恢復 ${match[1]} 點體力(HP)、賦予「超越」，並使其陷入「衰弱」。*此技能也能以遭遇戰地圖外的角色為目標；若如此做，技能效果結算後，將目標移至 ${match[2]} 內的空格。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Raptor Form(?:, and enables Bestial Fury: Opo-Opo)?\. If this ability is used while under the effect of Opo-Opo Form and results in a direct hit, it automatically scores a critical as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」${match[2] ? "，並啟用「獸性猛攻：魔猿身」" : ""}。若在「魔猿身」效果下使用此技能並造成直擊，則也會自動暴擊。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target, and an additional (.+) damage to the target\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害，並額外對目標造成 ${match[4]} 點傷害。`;

  if (/^Grants a barrier equaling that of the character whose barrier triggered Deployment Tactics to all targets\.?$/.test(plain)) {
    return `使所有目標獲得相當於觸發「展開戰術」之角色護盾值的護盾。`;
  }

  match = plain.match(/^Deals (.+) damage to the target, then deals another (.+) damage to the target, then deals another (.+) damage to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著再造成 ${match[2]} 點傷害，最後再造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Astral Fire, and enables Consecutive Invocation\. If the die rolled for this ability check lands on a (.+) or higher, the following proc effect triggers\. Firestarter: The next Fire III you use this phase costs (.+) MP\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「星極火」，並啟用「連續詠唱」。若此技能檢定的骰值為 ${match[2]} 以上，觸發下列發動效果。「火炎預備」：本階段你下次使用「爆炎」消耗 ${match[3]} 點魔力(MP)。`;

  match = plain.match(/^Grants Drain \((.+)\) until the end of this turn and one advantage die on your next ability check this turn\.?$/);
  if (match) return `獲得「吸收」（${match[1]}），持續至本回合結束；本回合你的下一次技能檢定也獲得一顆優勢骰。`;

  match = plain.match(/^Increases your Defense and Magic Defense by (.+) for the ability check that triggered Shade Shift\. Use this new value to determine if the ability scores a direct hit\.?$/);
  if (match) return `觸發「暗影移轉」之技能檢定中，你的防禦及魔法防禦提高 ${match[1]}。使用此新數值判定技能是否造成直擊。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants Surging Tempest and (.+) Wrath\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。獲得「洶湧怒濤」及 ${match[2]} 層怒氣。`;

  match = plain.match(/^Removes a single enfeeblement of the target's choosing\. If the target is not suffering from any enfeeblements, grants them The Warden's Paean instead\.?$/);
  if (match) return `移除目標自行選擇的一項弱化效果。若目標未受到任何弱化效果，則改為賦予其「守護神的讚歌」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants one advantage die on your next ability check\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並使你的下一次技能檢定獲得一顆優勢骰。`;

  match = plain.match(/^Reduces the damage you take from the effect that triggered Vengeance by (.+)\. If Vengeance was triggered by a physical ability, deals half of all damage prevented \(rounded up\) to the character who used it\.?$/);
  if (match) return `使你受到觸發「復仇」之效果的傷害減少 ${match[1]}。若「復仇」由物理技能觸發，則對施放該技能的角色造成等同於所防止傷害一半的傷害（無條件進位）。`;

  match = plain.match(/^Restores (.+) HP and grants a barrier equaling the amount of HP restores to the target\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)，並賦予相當於恢復體力量的護盾。`;

  match = plain.match(/^Grants (.+) stack of Repertoire and the following song effect\. Army's Paeon: All allies may each reroll a single d20 that landed on a (.+) or lower when making an ability check\.?$/);
  if (match) return `獲得 ${match[1]} 層「即興曲」，並觸發下列歌曲效果。「軍神的讚美歌」：進行技能檢定時，所有盟友各可重擲一顆結果為 ${match[2]} 以下的 d20。`;

  if (/^Restores HP equaling the target's Max HP to the target\.?$/.test(plain)) {
    return `使目標恢復等同於其體力(HP)上限的體力(HP)。`;
  }

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Restores (.+) HP and (.+) MP\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。恢復 ${match[2]} 點體力(HP)及 ${match[3]} 點魔力(MP)。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Opo-Opo Form and (.+) stacks of Coeurl's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「魔猿身」及 ${match[2]} 層「猛豹之怒」。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Ninki\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點「忍氣」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Fang and Claw Bared \/ Wheel in Motion Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「龍爪龍尾預備／迴旋長槍預備」。`;

  match = plain.match(/^Deals (.+) damage and inflicts a DOT \((.+)\) on the target\. Grants Power Surge and Fang and Claw Bared \/ Wheel in Motion Ready\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並對目標施加持續傷害(DOT)（${match[2]}）。獲得「龍力」及「龍爪龍尾預備／迴旋長槍預備」。`;

  match = plain.match(/^Grants Dreadwyrm Trance until the end of this turn and (.+) Gemstone Arcanum\.?$/);
  if (match) return `獲得「龍神附體」，持續至本回合結束，並獲得 ${match[1]} 個「寶石奧秘」。`;

  match = plain.match(/^Grants Earthly Dominance and creates a (.+) area centered on the target square\. This area is removed at the end of the phase\.?$/);
  if (match) return `獲得「天星支配」，並在目標格周圍創造 ${match[1]} 區域。此區域於階段結束時移除。`;

  match = plain.match(/^Grants the target Excogitation and grants your pet (.+) Fey Aether\.?$/);
  if (match) return `使目標獲得「深謀遠慮」，並使你的寵物獲得 ${match[1]} 點「妖精以太」。`;

  match = plain.match(/^Grants the target Excogitation\.?$/);
  if (match) return `使目標獲得「深謀遠慮」。`;

  match = plain.match(/^Grants the following trait until the start of this pet's next turn\. Fey Illumination: All allies within (.+) squares of this pet may change the value of (?:a single|(.+)) (?:die|dice) of their choosing to a (.+) when determining the amount of HP healed\.?$/);
  if (match) return `賦予下列特性，持續至此寵物的下回合開始。「異想的幻光」：判定體力(HP)恢復量時，此寵物 ${match[1]} 格內的所有盟友可自行選擇 ${match[2] ? localizeCount(match[2]) : "一"}顆骰子，將骰值改為 ${match[3]}。`;

  match = plain.match(/^Grants Goring Blade Ready and one advantage die on your next ability check this turn\.?$/);
  if (match) return `獲得「暴怒斬預備」，且本回合你的下一次技能檢定獲得一顆優勢骰。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants Life of the Dragon and Nastrond Ready\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。獲得「龍之力」及「死者之岸預備」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants Enhanced Enpi, then move up to (.+) squares\. You cannot end this movement in a square that is adjacent to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「強化燕飛」，接著移動最多 ${match[2]} 格。移動結束時不得位於與目標相鄰的格子。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Black Mana and (.+) White Mana\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元。`;

  match = plain.match(/^Reduces the damage the target takes from the effect that triggered Intervention by (.+)\. You must target another character with this ability\.?$/);
  if (match) return `使目標受到觸發「干預」之效果的傷害減少 ${match[1]}。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants Dive Ready\. If this ability is used while under the effect of Life of the Dragon, you may deal Life of the Dragon's damage to all enemies adjacent to you and to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「俯衝預備」。若在「龍之力」效果下使用此技能，你可以對與你及目標相鄰的所有敵人造成「龍之力」的傷害。`;

  match = plain.match(/^Deals (.+) damage divided evenly \(rounded up\) amongst all targets and inflicts a DOT \((.+)\) on all targets\.?$/);
  if (match) return `對所有目標平均分配 ${match[1]} 點傷害（無條件進位），並施加持續傷害(DOT)（${match[2]}）。`;

  match = plain.match(/^Halves the damage \(rounded up\) taken from the effect that triggered Last Bastion, then restores (.+) HP and removes a single enfeeblement from all allies\. Each ally may choose which enfeeblement to remove\.?$/);
  if (match) return `使觸發「銅牆鐵盾」的效果所造成的傷害減半（無條件進位），接著恢復所有盟友 ${match[1]} 點體力(HP)，並移除各盟友身上的一項弱化效果。每名盟友可自行選擇要移除的弱化效果。`;

  match = plain.match(/^Removes all enfeeblements from all targets, fully restores their HP, and grants them a barrier of (.+) HP\. Angel Feathers can remove Knocked Out, Weakness, and Brink of Death\.\s*\*This ability also targets characters outside the encounter map\. When doing so, move these targets to an empty square within (.+) squares of this character after resolving the ability's effects\.?$/);
  if (match) return `移除所有目標身上的全部弱化效果，完全恢復其體力(HP)，並賦予相當於 ${match[1]} 點體力(HP) 的護盾。「天使之羽」可移除昏厥、衰弱及瀕死。*此能力也會以遭遇戰地圖外的角色為目標；若如此做，能力效果結算後，將這些目標移至此角色 ${match[2]} 格內的空格。`;

  match = plain.match(/^Removes all enfeeblements from all targets, fully restores their HP, and grants them Major Arcana\. Astral Stasis can remove Knocked Out, Weakness, and Brink of Death\.\s*\*This ability also targets characters outside the encounter map\. When doing so, move these targets to an empty square within (.+) squares of this character after resolving the ability's effects\.?$/);
  if (match) return `移除所有目標身上的全部弱化效果，完全恢復其體力(HP)，並賦予「大奧秘卡」。「星天開門」可移除昏厥、衰弱及瀕死。*此能力也會以遭遇戰地圖外的角色為目標；若如此做，能力效果結算後，將這些目標移至此角色 ${match[1]} 格內的空格。`;

  if (/^Prevents all damage and enfeeblements that the effect that triggered Dark Force inflicts on the target\.?$/.test(plain)) {
    return `使目標免受觸發「暗黑之力」的效果所造成的所有傷害及弱化效果。`;
  }

  match = plain.match(/^Change the value the die landed on for the check that triggered Doom of the Living to a (.+)\. If the check was an ability check, use the new value to determine if the ability triggers a proc effect or scores a direct hit or critical\. If Doom of the Living was triggered by a single-target ability, its base effect deals an additional (.+) damage\.?$/);
  if (match) return `將觸發「生者必滅」之檢定的骰值改為 ${match[1]}。若該檢定為能力檢定，依新骰值判定能力是否觸發發動效果、直擊或爆擊。若「生者必滅」由單體能力觸發，該能力的基礎效果額外造成 ${match[2]} 點傷害。`;

  match = plain.match(/^Makes you the sole target of all damage inflicted by the effect that triggered Land Waker and halves the damage you take \(rounded up\)\.\s*If Land Waker was triggered by an effect caused by a character, you may deal damage equaling the amount of HP you lost to that character\.?$/);
  if (match) return `使你成為觸發「原初大地」之效果的唯一傷害目標，並使你受到的傷害減半（無條件進位）。若「原初大地」是由角色造成的效果觸發，你可以對該角色造成等同於你失去體力(HP)的傷害。`;

  match = plain.match(/^Removes all enfeeblements from (?:target|all targets).*Pulse of Life can remove Knocked Out, Weakness, and Brink of Death\.\s*\*This ability also targets characters outside the encounter map\. When doing so, move these targets to an empty square within (.+) squares of this character after resolving (?:the|this) ability's effects\.?$/);
  if (match) return `移除所有目標身上的全部弱化效果，並完全恢復其體力(HP)與魔力(MP)。「生命鼓動」可移除昏厥、衰弱及瀕死。*此能力也會以遭遇戰地圖外的角色為目標；若如此做，能力效果結算後，將這些目標移至此角色 ${match[1]} 格內的空格。`;

  match = plain.match(/^Deals (.+) damage to all targets\. This ability has additional effects determined by your pet\. Ifrit-Egi: Deals an additional (.+) damage\. Titan-Egi: Reduces the damage all allies take from abilities by (.+) until the end of this turn\. Garuda-Egi: All allies may move up to (.+) squares?\. Other: Deals an additional (.+) damage\.?$/);
  if (match) {
    const paragraphs = [
      `對所有目標造成 ${match[1]} 點傷害。本能力的追加效果依你的寵物而定。`,
      `火神之靈：額外造成 ${match[2]} 點傷害。`,
      `土神之靈：直到本回合結束，所有盟友受到的能力傷害減少 ${match[3]} 點。`,
      `風神之靈：所有盟友最多可移動 ${match[4]} 格。`,
      `其他寵物：額外造成 ${match[5]} 點傷害。`,
    ];
    return source.includes("<p>") ? paragraphs.map((text) => `<p>${text}</p>`).join("") : paragraphs.join("");
  }

  match = plain.match(/^Deals (.+) damage to all targets\. This ability has additional effects determined by your pet\. Ruby Carbuncle: Deals an additional (.+) damage\. Topaz Carbuncle: Reduces the damage all allies take from abilities by (.+) until the end of this turn\. Emerald Carbuncle: All allies may move up to (.+) square\. Other: Deals an additional (.+) damage\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。本能力的追加效果依你的寵物而定。紅寶石獸：額外造成 ${match[2]} 點傷害。黃寶石獸：直到本回合結束，所有盟友受到的能力傷害減少 ${match[3]} 點。綠寶石獸：所有盟友最多可移動 ${match[4]} 格。其他寵物：額外造成 ${match[5]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to all targets, then restores (.+) HP to all allies within (.+) squares of you and grants a barrier equaling the amount of HP restored that exceeds their Max HP\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，接著恢復你 ${match[3]} 格內所有盟友 ${match[2]} 點體力(HP)，並賦予相當於所恢復體力(HP)超出其體力(HP)上限部分的護盾。`;

  match = plain.match(/^Deals (.+) damage to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to all targets\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。`;

  match = plain.match(/^Restores (.+) HP to the target\.?$/);
  if (match) return `恢復目標 ${match[1]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並對目標施加仇恨。`;

  match = plain.match(/^Inflicts a DOT \((.+)\) on the target\.?$/);
  if (match) return `對目標施加持續傷害(DOT)（${match[1]}）。`;

  match = plain.match(/^Deals (.+) damage and inflicts Bind on the target until the start of your next turn\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並使目標陷入拘束，直到你的下回合開始。`;

  match = plain.match(/^Reduces the damage dealt by the target's abilities by (.+) until the end of this turn\.?$/);
  if (match) return `直到本回合結束，目標的能力造成的傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on all targets\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並施加仇恨。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Restores (.+) MP\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並施加仇恨。恢復 ${match[2]} 點魔力(MP)。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on all targets\. Restores (.+) MP, then restores (.+) HP for each enemy targeted\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並施加仇恨。恢復 ${match[2]} 點魔力(MP)，再依目標敵人數量，每名敵人恢復 ${match[3]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Restores (.+) HP and grants (.+) Wrath\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並施加仇恨。恢復 ${match[2]} 點體力(HP)，並獲得 ${match[3]} 層怒氣。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Restores (.+) HP\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並施加仇恨。恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage to the target and restores (.+) HP\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage to all enemy targets and restores (.+) HP to all allied targets\. Restores (.+) MP\.?$/);
  if (match) return `對所有敵方目標造成 ${match[1]} 點傷害，並為所有友方目標恢復 ${match[2]} 點體力(HP)。恢復 ${match[3]} 點魔力(MP)。`;

  match = plain.match(/^Deals ([^.]+) damage to the target and grants ([^.]+) ([^.]+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 層「${match[3]}」。`;

  match = plain.match(/^Deals ([^.]+) damage to the target, grants ([^.]+), and enables ([^.]+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「${match[2]}」，並啟用「${match[3]}」。`;

  match = plain.match(/^Deals ([^.]+) damage to the target, grants ([^.]+), and enables ([^.]+)\. If this ability is used while under the effect of ([^.]+), (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「${match[2]}」，並啟用「${match[3]}」。若使用此技能時正處於「${match[4]}」效果下，${match[5]}`;

  match = plain.match(/^Deals ([^.]+) damage to the target, grants ([^.]+), and enables ([^.]+)\. If this ability is used while under the effect of ([^.]+), grants ([^.]+) as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「${match[2]}」，並啟用「${match[3]}」。若使用此技能時正處於「${match[4]}」效果下，也會獲得「${match[5]}」。`;

  match = plain.match(/^Deals ([^.]+) damage to the target and grants ([^.]+)\. If this ability is used while under the effect of ([^.]+), grants ([^.]+) as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」。若使用此技能時正處於「${match[3]}」效果下，也會獲得「${match[4]}」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+), and enables (.+): (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「${match[2]}」，並啟用「${match[3]}：${match[4]}」。`;

  match = plain.match(/^Grants ([^.]+) until the end of this turn\.?$/);
  if (match) return `獲得「${match[1]}」，持續至本回合結束。`;

  match = plain.match(/^Grants ([^.]+) until the start of your next turn\.?$/);
  if (match) return `獲得「${match[1]}」，持續至你的下回合開始。`;

  match = plain.match(/^Grants ([^.]+) to all targets until the end of your next turn\.?$/);
  if (match) return `使所有目標獲得「${match[1]}」，持續至你的下回合結束。`;

  match = plain.match(/^Grants ([^.]+) to the target\.?$/);
  if (match) return `使目標獲得「${match[1]}」。`;

  match = plain.match(/^Grants ([^.]+) to all targets\.?$/);
  if (match) return `使所有目標獲得「${match[1]}」。`;

  match = plain.match(/^Grants ([^.]+) until the start of this pet's next turn\.?$/);
  if (match) return `獲得「${match[1]}」，持續至此寵物的下回合開始。`;

  match = plain.match(/^Grants ([^.]+) and ([^.]+)\.?$/);
  if (match) return `獲得「${match[1]}」及「${match[2]}」。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. While inside this area, allies take (.+) less damage from abilities\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。盟友在此區域內時，受到的技能傷害減少 ${match[2]} 點。此區域於階段結束時移除。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. Any enemies who enter or start their turn within this area suffer (.+) damage\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。敵人進入此區域或在此區域內開始回合時，受到 ${match[2]} 點傷害。此區域於階段結束時移除。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. While inside this area, allies granted Revivify increase its value by (.+), while allies who have not been granted Revivify instead recover (.+) HP at the end of the Adventurer Step\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。已獲得「再生」的盟友，其再生數值提高 ${match[2]}；未獲得「再生」的盟友則於冒險者階段結束時恢復 ${match[3]} 點體力(HP)。此區域於階段結束時移除。`;

  match = plain.match(/^Reduces the damage you take from (?:all )?abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `直到你的下回合開始，你受到的技能傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Reduces the damage all (.+) take from abilities by (.+) until the end of this turn\.?$/);
  if (match) return `直到本回合結束，所有${match[1]}受到的技能傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Reduces the damage all targets take from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `直到你的下回合開始，所有目標受到的技能傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Reduces the damage dealt by the abilities of all targets by (.+) until the end of this (?:round|tis round)\.?$/);
  if (match) return `直到本輪結束，所有目標的技能傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Restores (.+) HP and grants a barrier equaling the amount of HP restored to (?:the target|all targets)\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並賦予目標相當於恢復體力量的護盾。`;

  match = plain.match(/^Restores (.+) HP to the target and grants a barrier equaling the amount of HP restored\.?$/);
  if (match) return `恢復目標 ${match[1]} 點體力(HP)，並賦予相當於恢復體力量的護盾。`;

  match = plain.match(/^Restores (.+) HP and grants (.+) to all targets\.?$/);
  if (match) return `為所有目標恢復 ${match[1]} 點體力(HP)，並賦予「${match[2]}」。`;

  match = plain.match(/^Restores (.+) HP and grants (.+) to the target\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)，並賦予「${match[2]}」。`;

  match = plain.match(/^Removes ([^,.]+) from the target, then restores ([^,.]+) HP, grants ([^,.]+), and afflicts them with ([^,.]+)\.?$/);
  if (match) return `移除目標身上的「${match[1]}」，接著恢復 ${match[2]} 點體力(HP)、賦予「${match[3]}」，並使其陷入「${match[4]}」。`;

  match = plain.match(/^Removes a single enfeeblement from the target\. The target may choose which enfeeblement to remove\.?$/);
  if (match) return `移除目標身上的一項弱化效果，由目標自行選擇要移除的效果。`;

  match = plain.match(/^Removes (.+) from the target\.?$/);
  if (match) return `移除目標身上的「${match[1]}」。`;

  match = plain.match(/^Move to the closest empty square within range and adjacent to the target\. You must target another character with this ability\.?$/);
  if (match) return `移動至射程內最接近目標且與其相鄰的空格。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^Move to an empty square within range and adjacent to the target\. You must target another character with this ability\.?$/);
  if (match) return `移動至射程內與目標相鄰的空格。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^Move to an empty square within range and adjacent to the target\. After moving, deals (.+) damage to the target\.?$/);
  if (match) return `移動至射程內與目標相鄰的空格。移動後對目標造成 ${match[1]} 點傷害。`;

  match = plain.match(/^Move to the closest empty square within range and adjacent to the target\. After moving, if you are adjacent to the target, deals (.+) damage to the target\.?$/);
  if (match) return `移動至射程內最接近目標且與其相鄰的空格。移動後，若你與目標相鄰，則對其造成 ${match[1]} 點傷害。`;

  match = plain.match(/^Move to the closest empty square within range and adjacent to the target\. After moving, if you are adjacent to the target, deals (.+) damage and inflicts Enmity on the target\.?$/);
  if (match) return `移動至射程內最接近目標且與其相鄰的空格。移動後，若你與目標相鄰，則對其造成 ${match[1]} 點傷害並施加仇恨。`;

  match = plain.match(/^Move up to (.+) squares?\. Roll a d20 for the ability check\. On a 1, the GM determines your final destination\.?$/);
  if (match) return `最多移動 ${match[1]} 格。為此技能檢定擲 d20；若結果為 1，由 GM 決定你的最終位置。`;

  match = plain.match(/^Stuns the target until the end of (?:this )?turn\.?$/);
  if (match) return `使目標陷入暈眩，持續至本回合結束。`;

  match = plain.match(/^Inflicts a DOT \((.+)\) on all targets\.?$/);
  if (match) return `對所有目標施加持續傷害(DOT)（${match[1]}）。`;

  match = plain.match(/^Deals (.+) damage divided evenly \(rounded up\) amongst all targets and inflicts a DOT \((.+)\) on all targets\.?$/);
  if (match) return `對所有目標平均分配 ${match[1]} 點傷害（無條件進位），並施加持續傷害(DOT)（${match[2]}）。`;

  match = plain.match(/^Deals (.+) damage to the target, then move to an empty square adjacent to the target if one is available\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著移動至目標相鄰的空格（若有）。`;

  match = plain.match(/^Deals (.+) damage to the target and restores one use of (.+) or (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並恢復「${match[2]}」或「${match[3]}」的一次使用次數。`;

  match = plain.match(/^Deals (.+) damage to all targets\. If this ability is used while under the effect of (.+), deals an additional (.+) damage\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。若使用此技能時正處於「${match[2]}」效果下，額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to the target\. If this ability is used while under the effect of (.+), deals an additional (.+) damage\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若使用此技能時正處於「${match[2]}」效果下，額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage and inflicts a DOT \((.+)\) on the target\. Grants (.+) and (.+)\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並對目標施加持續傷害(DOT)（${match[2]}）。獲得「${match[3]}」及「${match[4]}」。`;

  match = plain.match(/^Deals ([^.]+) damage to the target and grants ([^.]+), then removes ([^.]+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」，接著移除「${match[3]}」。`;

  match = plain.match(/^Deals ([^.]+) damage to the target and grants ([^.]+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」。`;

  match = plain.match(/^Deals ([^.]+) damage to all targets and grants ([^.]+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」。`;

  match = plain.match(/^Restores (.+) HP to all targets\.?$/);
  if (match) return `為所有目標恢復 ${match[1]} 點體力(HP)。`;

  match = plain.match(/^Restores (.+) HP to all allies\.?$/);
  if (match) return `為所有盟友恢復 ${match[1]} 點體力(HP)。`;

  match = plain.match(/^Restores (.+) HP to the target\. If you targeted another character with this ability, you recover half of the HP healed \(rounded up\)\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)。若你以另一名角色為此技能的目標，你恢復相當於治療量一半的體力(HP)（無條件進位）。`;

  match = plain.match(/^Grants a barrier of (.+) HP to the target\.?$/);
  if (match) return `賦予目標相當於 ${match[1]} 點體力(HP)的護盾。`;

  match = plain.match(/^Grants (.+) stacks? of (.+)\.?$/);
  if (match) return `獲得 ${match[1]} 層「${match[2]}」。`;

  match = plain.match(/^Move to an empty square within range and adjacent to the target\. After moving, deals (.+) damage to the target\. Grants (.+) and (.+)\.?$/);
  if (match) return `移動至射程內與目標相鄰的空格。移動後對目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」及「${match[3]}」。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+), and enables (.+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得「${match[2]}」，並啟用「${match[3]}」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) and (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」及「${match[3]}」。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants (.+) and (.+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」及「${match[3]}」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) and (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」及「${match[3]}」。`;

  match = plain.match(/^Deals (.+) damage to all targets, then restores (.+) HP to all allies within (.+) squares of you\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，接著為你 ${match[3]} 格內的所有盟友恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage to all targets, then move to an empty square within range if one is available\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，接著移動至射程內的空格（若有）。`;

  match = plain.match(/^Deals (.+) damage to the target, then move up to (.+) squares away from the target\. Roll a d(.+) for the ability check; on a (.+), the GM determines your final destination\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著移動至離目標最多 ${match[2]} 格的位置。為此技能檢定擲 d${match[3]}；若結果為 ${match[4]}，由 GM 決定你的最終位置。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+), and (.+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得「${match[2]}」，並${match[3]}。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants (.+)\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並對目標施加仇恨。獲得「${match[2]}」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants one advantage die on your next ability check\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並使你的下一次技能檢定獲得一顆優勢骰。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants (.+) and (.+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」及「${match[3]}」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「${match[2]}」。`;

  match = plain.match(/^Inflicts (.+) on the target until the start of your next turn\.?$/);
  if (match) return `使目標陷入「${match[1]}」，持續至你的下回合開始。`;

  match = plain.match(/^Reduces the damage the target takes from the effect that triggered (.+) by (.+)\.?$/);
  if (match) return `使目標受到觸發「${match[1]}」之效果的傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Reduces the damage the target takes from the effect that triggered (.+) by (.+)\. You must target another character with this ability\.?$/);
  if (match) return `使目標受到觸發「${match[1]}」之效果的傷害減少 ${match[2]} 點。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^Reduces the damage you take from the effect that triggered (.+) by (.+)\.?$/);
  if (match) return `使你受到觸發「${match[1]}」之效果的傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Increases your (.+) by (.+) for the ability check that triggered (.+)\. Use this new value to determine if the ability scores a direct hit\.?$/);
  if (match) return `觸發「${match[3]}」之技能檢定時，你的${match[1]}提高 ${match[2]}。使用此新數值判定技能是否造成直擊。`;

  match = plain.match(/^Changes the ability check that triggered (.+) to a direct hit\.?$/);
  if (match) return `使觸發「${match[1]}」的技能檢定變為直擊。`;

  match = plain.match(/^Prevents all damage and enfeeblements that the effect that triggered (.+) inflicts on the target\.?$/);
  if (match) return `使目標免受觸發「${match[1]}」之效果造成的所有傷害及弱化效果。`;

  match = plain.match(/^Removes all enfeeblements from all targets, fully restores their HP, and grants them a barrier of (.+) HP\. (.+) can remove Knocked Out, Weakness, and Brink of Death\.\s*\*This ability also targets characters outside the encounter map\. When doing so, move these targets to an empty square within (.+) squares of this character after resolving the ability's effects\.?$/);
  if (match) return `移除所有目標身上的全部弱化效果，完全恢復其體力(HP)，並賦予相當於 ${match[1]} 點體力(HP)的護盾。「${match[2]}」可移除昏厥、衰弱及瀕死。*此技能也能以遭遇戰地圖外的角色為目標；若如此做，技能效果結算後，將這些目標移至此角色 ${match[3]} 格內的空格。`;

  match = plain.match(/^Deals (.+) damage to the target\. If the target is suffering from one or more DOTs you inflicted, deals additional damage equaling the value of the highest of these DOTs\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若目標正受到你施加的一項以上持續傷害(DOT)，額外造成等同於其中最高持續傷害數值的傷害。`;

  match = plain.match(/^Removes all (.+) from all targets, fully restores their HP, and grants them (.+)\.?$/);
  if (match) return `移除所有目標身上的全部${match[1]}，完全恢復其體力(HP)，並賦予「${match[2]}」。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「${match[1]}」，並賦予相當於 ${match[2]} 點體力(HP)的護盾。`;

  match = plain.match(/^Grants the target (.+), (.+), and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「${match[1]}」及「${match[2]}」，並賦予相當於 ${match[3]} 點體力(HP)的護盾。`;

  match = plain.match(/^The ability that triggered (.+) scores a direct hit but not a critical\.?$/);
  if (match) return `觸發「${match[1]}」的技能造成直擊，但不會暴擊。`;

  match = plain.match(/^Interrupts the invoked ability that triggered (.+), negating it completely\.?$/);
  if (match) return `中斷觸發「${match[1]}」的施放中技能，使其完全無效。`;

  match = plain.match(/^The next time you take damage that would reduce you to 0 HP, you are instead reduced to 1 HP and granted (.+)\. (.+)'s effect is removed at the end of your next turn\.?$/);
  if (match) return `下次受到傷害而將使你的體力(HP)降至 0 時，改為降至 1 點體力(HP)，並獲得「${match[1]}」。「${match[2]}」的效果於你的下回合結束時移除。`;

  match = plain.match(/^Lose the effects of the (.+) trait and ignore all (.+) conditions when using abilities until the end of this turn\. Immediately after resolving this ability's effects, you may use (.+) three times or (.+) once\. If you use (.+), it deals an additional (.+) damage\.?$/);
  if (match) return `直到本回合結束，失去「${match[1]}」特性的效果，且使用技能時忽略所有「${match[2]}」條件。此技能效果結算後，你可以立即使用「${match[3]}」三次，或使用「${match[4]}」一次。若使用「${match[5]}」，額外造成 ${match[6]} 點傷害。`;

  match = plain.match(/^Restores (.+) HP to the target\. Roll a d(.+) for the ability check;? on an? (.+) or higher, the following proc effect triggers\. Enhanced Benefic II: The next Benefic II you use this phase automatically scores a critical\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)。為技能檢定擲 d${match[2]}；若結果為 ${match[3]} 以上，觸發下列發動效果。「強化救療 II」：本階段你下次使用「救療 II」時必定暴擊。`;

  match = plain.match(/^Restores (.+) HP to the target\. Roll a d(.+) for the ability check;? on an? (.+) or higher, the following proc effect triggers\. Freecure: The next Cure II you use this phase costs (.+) MP\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)。為技能檢定擲 d${match[2]}；若結果為 ${match[3]} 以上，觸發下列發動效果。「免費救療」：本階段你下次使用「救療 II」消耗 ${match[4]} 點魔力(MP)。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Umbral Hearts?, and (?:enables )?Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 個「黑暗冰封之心」，並啟用「連續詠唱」。`;

  match = plain.match(/^Restores (.+) HP and grants Revivify \((.+)\) to all targets\. Targets who have already been (?:given|granted) Revivify recover an additional (.+) HP\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並使所有目標獲得「再生」（${match[2]}）。已獲得「再生」的目標額外恢復 ${match[3]} 點體力(HP)。`;

  match = plain.match(/^Restores (.+) HP and removes a single enfeeblement from the target\. The target may choose which enfeeblement to remove\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並移除目標身上的一項弱化效果，由目標自行選擇要移除的效果。`;

  match = plain.match(/^Reduces the damage this character takes from abilities by (.+) until the start of their next turn\.?$/);
  if (match) return `直到此角色的下回合開始，其受到的技能傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Reduces the damage all targets take from the effect that triggered Collective Unconscious by (.+) and grants them Revivify \((.+)\)\. Targets who have already been granted Revivify may increase its value by (.+), up to a max(?:imum)? of (.+)\.?$/);
  if (match) return `使所有目標受到觸發「命運之輪」之效果的傷害減少 ${match[1]}，並獲得「再生」（${match[2]}）。已獲得「再生」的目標可將其數值提高 ${match[3]}，最高至 ${match[4]}。`;

  if (/^Makes you the target of the effect that triggered Cover\. If you were already a target, you suffer its effects twice\.?$/.test(plain)) {
    return `使你成為觸發「掩護」之效果的目標。若你原本就是目標，則承受該效果兩次。`;
  }

  match = plain.match(/^Deals damage to the target based on the number of times you damaged them with a primary ability this turn\.\s*1: \[\[\/r (.+)\]\] damage\.\s*2: \[\[\/r (.+)\]\] damage\.\s*3: \[\[\/r (.+)\]\] damage\.?$/);
  if (match) return `依你本回合以主要技能對目標造成傷害的次數決定傷害：1 次：${match[1]} 點；2 次：${match[2]} 點；3 次：${match[3]} 點。`;

  match = plain.match(/^Dismisses your pet from the encounter map and grants (.+) stacks? of Aetherflow\. Your pet cannot be resummoned this phase, even if you are revived after being Knocked Out\.?$/);
  if (match) return `將你的寵物從遭遇戰地圖上移除，並獲得 ${match[1]} 層「以太流」。本階段無法重新召喚寵物，即使你在昏厥後被復活也一樣。`;

  match = plain.match(/^All targets' primary abilities deal an additional (.+) damage until the end of their turns or (?:end of|the end of) the phase, whichever comes first\.?$/);
  if (match) return `所有目標的主要技能額外造成 ${match[1]} 點傷害，持續至其回合結束或階段結束（以先發生者為準）。`;

  match = plain.match(/^Move up to (.+) squares?\. Roll a d(.+) for the ability check\. On a (.+), the GM determines your final destination\.?$/);
  if (match) return `最多移動 ${match[1]} 格。為技能檢定擲 d${match[2]}；若結果為 ${match[3]}，由 GM 決定你的最終位置。`;

  match = plain.match(/^The effect that triggered Emergency Tactics does not grant a barrier, instead restoring HP equaling the intended value of the barrier to all targets\.?$/);
  if (match) return `觸發「緊急戰術」的效果不再賦予護盾，而是改為恢復所有目標等同於原定護盾值的體力(HP)。`;

  match = plain.match(/^Restores (.+) HP to the target\. If the target's HP is less than or equal to half of their Max HP \(rounded up\), restores (.+) HP instead\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)。若目標目前體力(HP)不高於其體力(HP)上限的一半（無條件進位），則改為恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target, and an additional (.+) damage to the target\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害，並額外對目標造成 ${match[4]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to the target and enables Arrow Flurry\. If the die rolled for this ability check lands on a (.+) or higher, the following proc effect triggers\. Heavier Shot: Grants Hawk's Eye\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並啟用「箭雨」。若此技能檢定的骰值為 ${match[2]} 以上，觸發下列發動效果。「強力射擊」：獲得「鷹眼」。`;

  match = plain.match(/^The next time you take damage that would reduce you to (.+) HP, you are instead reduced to (.+) HP\. This effect is removed at the start of your next turn\.?$/);
  if (match) return `下次受到傷害而將使你的體力(HP)降至 ${match[1]} 時，改為降至 ${match[2]} 點體力(HP)。此效果於你的下回合開始時移除。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. So long as you are within this area, you may use Consecutive Invocation even if you have used your standard movement this turn\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。只要你位於此區域內，即使本回合已使用標準移動，仍可使用「連續詠唱」。此區域於階段結束時移除。`;

  match = plain.match(/^Immediately use one of your technique abilities\. Tornado Kick can only be used if you spend (.+) or more Nadi for this ability\.?$/);
  if (match) return `立即使用一項你的技法技能。只有在此技能消耗至少 ${match[1]} 個「必殺技量表」時，才能使用「迴旋踢」。`;

  match = plain.match(/^Grants the song effect \(currently written in their direct hit effects\) of a single song ability of your choosing that you have already used this phase\.?$/);
  if (match) return `獲得本階段已使用過的一項歌曲技能之歌曲效果（目前記載於該技能的直擊效果中）。`;

  match = plain.match(/^You may perform up to (.+) additional primary actions this turn\. The primary actions granted by this effect can only be used for physical primary abilities\.?$/);
  if (match) return `本回合你最多可額外執行 ${match[1]} 次主要行動。此效果提供的主要行動僅能用於物理主要技能。`;

  match = plain.match(/^Increases the damage the target takes from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `直到你的下回合開始，目標受到的技能傷害增加 ${match[1]} 點。`;

  match = plain.match(/^Immediately use one of your ninjutsu abilities\. Some ninjutsu abilities can only be used if you spend (.+) or more Mudra for this ability\. Grants Ninjutsu Cooldown after resolving the Ninjutsu ability's effects\.?$/i);
  if (match) return `立即使用一項你的忍術技能。部分忍術技能必須消耗至少 ${match[1]} 個結印才能使用。忍術技能效果結算後，獲得「忍術冷卻」。`;

  match = plain.match(/^Ignore all form conditions when using abilities until the end of this turn\. Gain (.+) Beast Chakra each time you are granted a form this turn\.?$/);
  if (match) return `直到本回合結束，使用技能時忽略所有身形條件。本回合每次獲得身形時，獲得 ${match[1]} 個「獸形神」。`;

  match = plain.match(/^Deals damage to the target based on the number of stacks of Repertoire you have, then removes all stacks of Repertoire\.\s*1: (.+) damage\s*-\s*2: (.+) damage\s*-\s*3: (.+) damage\.?$/);
  if (match) return `依你持有的「即興曲」層數對目標造成傷害，接著移除所有「即興曲」層數。1 層：${match[1]} 點傷害；2 層：${match[2]} 點傷害；3 層：${match[3]} 點傷害。`;

  match = plain.match(/^All targets' abilities deal an additional (.+) damage until they use an ability to deal damage, or the start of your next turn, whichever comes first\.?$/);
  if (match) return `所有目標的技能額外造成 ${match[1]} 點傷害，直到其使用技能造成傷害，或直到你的下回合開始（以先發生者為準）。`;

  match = plain.match(/^Move up to (.+) squares?\. You cannot end this movement in a square that is closer to the target than where you began\.?$/);
  if (match) return `最多移動 ${match[1]} 格。移動結束時，你所在的格子不得比移動前更靠近目標。`;

  match = plain.match(/^Move a consenting ally to an empty square adjacent to you\. You must target another character with this ability\.?$/);
  if (match) return `將一名同意的盟友移動至與你相鄰的空格。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^Deploys a Rook Autoturret machine in (.+) square occupied by this character and grants it Battery Charges equaling the number of Battery Charges you spent to use this ability\.?$/);
  if (match) return `在此角色占據的 ${match[1]} 格部署「車式浮空炮」，並賦予其等同於你為使用此技能所消耗之「電池充能」數量的「電池充能」。`;

  match = plain.match(/^Deals (.+) damage to the target\. If this ability is used while under the effect of Dreadwyrm Trance, it changes to Astral Impulse and deals an additional (.+) damage\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若使用此技能時正處於「龍神附體」效果下，技能改為「星極脈衝」，並額外造成 ${match[2]} 點傷害。`;

  match = plain.match(/^Move to the closest empty square within range and adjacent to the target\. If the target is an enemy, inflicts Enmity as well\.?$/);
  if (match) return `移動至射程內最接近目標且與其相鄰的空格。若目標為敵人，也會對其施加仇恨。`;

  match = plain.match(/^Deals (.+) damage, inflicts Enmity, and Stuns the target until the end of this turn\.?$/);
  if (match) return `造成 ${match[1]} 點傷害、對目標施加仇恨，並使其陷入暈眩，直到本回合結束。`;

  match = plain.match(/^Transforms your pet into (.+), (.+), or (.+) until the start of your pet's next turn\.?$/);
  if (match) return `將你的寵物變為「${match[1]}」、「${match[2]}」或「${match[3]}」，持續至寵物的下回合開始。`;

  match = plain.match(/^Whenever an ally is healed by a single target ability, (.+)'s target recovers HP equaling half of the amount of HP \(rounded up\) restored\. This effect is removed at the end of this turn\.?$/);
  if (match) return `每當盟友受到單體技能治療時，「${match[1]}」的目標恢復相當於該治療量一半的體力(HP)（無條件進位）。此效果於本回合結束時移除。`;

  match = plain.match(/^Removes a single enfeeblement of the target's choosing\. If the target is not suffering from any enfeeblements, grants them (.+) instead\.?$/);
  if (match) return `移除目標自行選擇的一項弱化效果。若目標未受到任何弱化效果，則改為賦予其「${match[1]}」。`;

  match = plain.match(/^Removes (.+) and grants (.+), or removes (.+) and grants (.+)\. (.+) can only be used once per turn\.?$/);
  if (match) return `移除「${match[1]}」並獲得「${match[2]}」，或移除「${match[3]}」並獲得「${match[4]}」。「${match[5]}」每回合只能使用一次。`;

  match = plain.match(/^Keep track of the number of times you damage the target with a primary ability this turn\. You may use Detonator at the end of this turn\.?$/);
  if (match) return `記錄你本回合以主要技能對目標造成傷害的次數。本回合結束時，你可以使用「引爆器」。`;

  match = plain.match(/^Reduces the damage you take from the ability that triggered Hallowed Ground to (.+)\.?$/);
  if (match) return `使你受到觸發「神聖領域」之技能的傷害降至 ${match[1]} 點。`;

  match = plain.match(/^Restores (.+) HP and grants your pet (.+) Fae Aether\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並使你的寵物獲得 ${match[2]} 點「妖精以太」。`;

  match = plain.match(/^Deals (.+) damage to the target, restores (.+) HP, and grants your pet (.+) Fae Aether\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，恢復 ${match[2]} 點體力(HP)，並使你的寵物獲得 ${match[3]} 點「妖精以太」。`;

  match = plain.match(/^Restores (.+) HP to all targets and grants your pet (.+) Fae Aether\.?$/);
  if (match) return `為所有目標恢復 ${match[1]} 點體力(HP)，並使你的寵物獲得 ${match[2]} 點「妖精以太」。`;

  match = plain.match(/^Grants the following trait until the start of this pet's next turn\. Fey Illumination: All allies within (.+) squares of this pet may change the value of (?:a single|(.+)) (?:die|dice) of their choosing to a (.+) when determining the amount of HP healed\.?$/);
  if (match) return `賦予下列特性，持續至此寵物的下回合開始。「異想的幻光」：判定體力(HP)恢復量時，此寵物 ${match[1]} 格內的所有盟友可自行選擇 ${match[2] ? localizeCount(match[2]) : "一"}顆骰子，將其骰值改為 ${match[3]}。`;

  match = plain.match(/^Creates a (.+) area adjacent to you\. Any enemies who enter or start their turn within this area suffer (.+) damage\. An enemy can only suffer damage from this effect once per turn\. This area is removed when you move or use another ability\.?$/);
  if (match) return `在你相鄰處創造 ${match[1]} 區域。敵人進入此區域或在此區域內開始回合時，受到 ${match[2]} 點傷害。每名敵人每回合最多受到此效果一次傷害。你移動或使用其他技能時，此區域即移除。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target\. Grants Astral Fire\. Your turn ends immediately after resolving this ability's effects\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害。獲得「星極火」。此技能效果結算後，你的回合立即結束。`;

  match = plain.match(/^Deals (.+) damage to the target and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並啟用「連續詠唱」。`;

  match = plain.match(/^Removes all Sen, then grants (.+) Kenki for each Sen removed\.?$/);
  if (match) return `移除所有「閃」，每移除一個「閃」便獲得 ${match[1]} 點「劍氣」。`;

  match = plain.match(/^You may use Fell Cleave and Decimate a total of up to three times this turn in any combination, and ignore any costs when doing so\. Do not make ability checks or resolve direct hit effects when using these abilities\. Grants Inner Strength until the start of your next turn\.?$/);
  if (match) return `本回合可任意組合使用「裂石飛環」與「地毀人亡」最多三次，且無須支付消耗。使用這些技能時不進行技能檢定，也不結算直擊效果。獲得「內在力量」，持續至你的下回合開始。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target\. If this ability is used while under the effect of Blood of the Dragon, you may deal Blood of the Dragon's damage to all enemies adjacent to you and to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。若使用此技能時正處於「龍血」效果下，你可以對與你及目標相鄰的所有敵人造成「龍血」的傷害。`;

  match = plain.match(/^Reduces the total of the ability check that triggered Leg Graze by (.+)\.?$/);
  if (match) return `使觸發「足部狙擊」之技能檢定的總值減少 ${match[1]}。`;

  match = plain.match(/^Recover an additional (.+) MP at the end of this round's Adventurer Step\.?$/);
  if (match) return `於本輪冒險者階段結束時額外恢復 ${match[1]} 點魔力(MP)。`;

  match = plain.match(/^Restores (.+) HP to the target and grants your pet (.+) Fae Aether\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)，並使你的寵物獲得 ${match[2]} 點「妖精以太」。`;

  match = plain.match(/^Restores one use of (.+) or (.+)\. Grants (.+) stack of Repertoire and the following song effect\. Mage's Ballad: All allies may each reroll a single die when determining the amount of damage dealt by an ability\.?$/);
  if (match) return `恢復「${match[1]}」或「${match[2]}」的一次使用次數。獲得 ${match[3]} 層「即興曲」，並觸發下列歌曲效果。「賢人放浪」：判定技能傷害時，所有盟友各可重擲一顆骰子。`;

  match = plain.match(/^Restores MP equaling your Max MP\. Grants Thunderhead Ready and (.+) Umbral Hearts\.?$/);
  if (match) return `恢復等同於你魔力(MP)上限的魔力(MP)。獲得「雷雲預備」及 ${match[1]} 個「黑暗冰封之心」。`;

  match = plain.match(/^Grants (.+) Kenki at the start of your next turn\. This effect is removed when you leave your current square, perform any primary, secondary, or free actions, use any instant abilities, or at the start of your next turn\.?$/);
  if (match) return `於你的下回合開始時獲得 ${match[1]} 點「劍氣」。離開目前所在格、執行任何主要／次要／自由行動、使用任何瞬發技能，或到你的下回合開始時，此效果即移除。`;

  match = plain.match(/^Grants the song effect of a single song ability of your choosing that you have already used this phase\.?$/);
  if (match) return `獲得本階段已使用過的一項歌曲技能之歌曲效果（由你選擇）。`;

  match = plain.match(/^Deals (.+) damage to all targets\. If this ability is used while under the effect of Dreadwyrm Trance, it changes to Astral Flare and deals an additional (.+) damage\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。若使用此技能時正處於「龍神附體」效果下，技能改為「星極核爆」，並額外造成 ${match[2]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on all targets\. Grants Surging Tempest\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並對所有目標施加仇恨。獲得「洶湧怒濤」。`;

  match = plain.match(/^Increases your Defense by (.+) and reduces the damage all targets take from abilities by (.+) until you use another ability or the start of your next turn, whichever comes first\.?$/);
  if (match) return `你的防禦提高 ${match[1]}，且所有目標受到的技能傷害減少 ${match[2]} 點，直到你使用其他技能或你的下回合開始（以先發生者為準）。`;

  match = plain.match(/^Your (.+) and (.+) restore an additional (.+) HP until the end of this turn\. You may use (.+) or (.+) an additional time this turn\.?$/);
  if (match) return `直到本回合結束，你的「${match[1]}」與「${match[2]}」額外恢復 ${match[3]} 點體力(HP)。本回合你可額外使用一次「${match[4]}」或「${match[5]}」。`;

  match = plain.match(/^Deals (.+) damage to all targets\. If the die rolled for this ability check lands on a (.+) or higher, the following proc effect triggers\. Enhanced Quick Nock: Grants Hawk's Eye\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。若此技能檢定的骰值為 ${match[2]} 以上，觸發下列發動效果。「強化連珠箭」：獲得「鷹眼」。`;

  match = plain.match(/^Deals (.+) damage to all targets and enables Consecutive Invocation\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity and a DOT \((.+)\) on all targets\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並對所有目標施加仇恨及持續傷害(DOT)（${match[2]}）。`;

  match = plain.match(/^Deals (.+) damage to the target, restores (.+) HP, and grants your pet (.+) Fae Aether\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，恢復 ${match[2]} 點體力(HP)，並使你的寵物獲得 ${match[3]} 點「妖精以太」。`;

  match = plain.match(/^Deals (.+) damage to the target in the center of this ability's range and (.+) damage to all other targets\. Grants (.+) stacks of Aetherflow\.?$/);
  if (match) return `對此技能射程中心的目標造成 ${match[1]} 點傷害，並對其他所有目標造成 ${match[2]} 點傷害。獲得 ${match[3]} 層「以太流」。`;

  match = plain.match(/^Deals (.+) damage to all targets\. If the die rolled for this ability check lands on a (.+) or higher, the following proc effect triggers\. Enhanced Quick Nock: Grants Hawk's Eye\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。若此技能檢定的骰值為 ${match[2]} 以上，觸發下列發動效果。「強化連珠箭」：獲得「鷹眼」。`;

  match = plain.match(/^Grants (.+) and removes (.+)\. You must target another character with this ability\.?$/);
  if (match) return `獲得「${match[1]}」並移除「${match[2]}」。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^Reduces the damage the target takes from the effect that triggered (.+) by (.+)\. You must target another character with this ability\.?$/);
  if (match) return `使目標受到觸發「${match[1]}」之效果的傷害減少 ${match[2]}。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^The next ability you use this turn automatically scores a critical unless it is interrupted or otherwise negated\.?$/);
  if (match) return `本回合你下次使用的技能必定暴擊，除非該技能遭到中斷或以其他方式無效化。`;

  match = plain.match(/^Restores (.+) HP to the target and grants your pet (.+) Fae Aether\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)，並使你的寵物獲得 ${match[2]} 點「妖精以太」。`;

  match = plain.match(/^Reduces the damage you take from the ability that triggered (.+) by (.+)\. If (.+) was triggered by a magic ability, reduces the damage you take by (.+) instead\.?$/);
  if (match) return `使你受到觸發「${match[1]}」之技能的傷害減少 ${match[2]} 點。若「${match[3]}」是由魔法技能觸發，改為使你受到的傷害減少 ${match[4]} 點。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on all targets\. If the die rolled for this ability check lands on a (.+) or higher, this ability scores a critical\. Receive one advantage die on this ability's ability check\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並施加仇恨。若此技能檢定的骰值為 ${match[2]} 以上，此技能造成暴擊。此技能檢定獲得一顆優勢骰。`;

  match = plain.match(/^Removes all enfeeblements from target and fully restores their HP and MP\. (.+) can remove Knocked Out, Weakness, and Brink of Death\.\s*\*This ability also targets characters outside the encounter map\. When doing so, move these targets to an empty square within (.+) squares of this character after resolving the ability's effects\.?$/);
  if (match) return `移除目標身上的全部弱化效果，並完全恢復其體力(HP)與魔力(MP)。「${match[1]}」可移除昏厥、衰弱及瀕死。*此技能也能以遭遇戰地圖外的角色為目標；若如此做，技能效果結算後，將這些目標移至此角色 ${match[2]} 格內的空格。`;

  match = plain.match(/^Deals (.+) damage to the target, then restores (.+) HP and grants (.+) Nadi\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，接著恢復 ${match[2]} 點體力(HP)，並獲得 ${match[3]} 個「必殺技量表」。`;

  match = plain.match(/^Grants (.+) stacks? of Repertoire and the following song effect\. (.+): All allies may each reroll a single d20 that landed on a (.+) or lower when making an ability check\.?$/);
  if (match) return `獲得 ${match[1]} 層「即興曲」，並觸發下列歌曲效果。「${match[2]}」：進行技能檢定時，所有盟友各可重擲一顆結果為 ${match[3]} 以下的 d20。`;

  match = plain.match(/^Restores (.+) HP to the target and grants a barrier equaling the amount of HP restored\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)，並賦予相當於恢復體力量的護盾。`;

  match = plain.match(/^Deals (.+) damage to all targets, then restores (.+) HP to all allies within (.+) squares of you and grants a barrier equaling the amount of HP restored that exceeds their Max HP\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，接著為你 ${match[3]} 格內的所有盟友恢復 ${match[2]} 點體力(HP)，並賦予相當於恢復量超出其體力(HP)上限部分的護盾。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\. The next ability the target uses deals an additional (.+) damage\. If the target is a (.+), the next ability they use deals an additional (.+) damage instead\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。目標下次使用的技能額外造成 ${match[3]} 點傷害。若目標為${match[4]}，其下次使用的技能改為額外造成 ${match[5]} 點傷害。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\. The next time the target recovers HP, they recover an additional (.+) HP\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。目標下次恢復體力(HP)時，額外恢復 ${match[3]} 點體力(HP)。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\. The next time the target takes damage from an ability, they take (.+) less damage\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。目標下次受到技能傷害時，該傷害減少 ${match[3]} 點。`;

  match = plain.match(/^Grants the target (.+), Revivify \((.+)\), and a barrier of (.+) HP\. Targets who have already been granted Revivify may increase its value by (.+), to a maximum of (.+)\.?$/);
  if (match) return `使目標獲得「${match[1]}」、「再生」（${match[2]}），以及相當於 ${match[3]} 點體力(HP)的護盾。已獲得「再生」的目標可將其數值提高 ${match[4]}，最高至 ${match[5]}。`;

  match = plain.match(/^Grants the target (.+) and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「${match[1]}」及相當於 ${match[2]} 點體力(HP)的護盾。`;

  match = plain.match(/^Grants (.+) and creates a (.+) area centered on the target square\. This area is removed at the end of the phase\.?$/);
  if (match) return `獲得「${match[1]}」，並在目標格周圍創造 ${match[2]} 區域。此區域於階段結束時移除。`;

  match = plain.match(/^Deals (.+) damage to all targets\. If the die rolled for this ability check lands on a (.+) or higher, the following proc effect triggers\. Enhanced (.+): Grants (.+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。若此技能檢定的骰值為 ${match[2]} 以上，觸發下列發動效果。「強化${match[3]}」：獲得「${match[4]}」。`;

  match = plain.match(/^Grants (.+) until the start of this pet's next turn\. (.+): All allies within (.+) squares of this pet may change the value of (.+) dice? of their choosing to a (.+) when determining the amount of HP healed\.?$/);
  if (match) return `獲得「${match[1]}」，持續至此寵物的下回合開始。「${match[2]}」：判定治療量時，此寵物 ${match[3]} 格內的所有盟友可自行選擇 ${match[4]} 顆骰子，將骰值改為 ${match[5]}。`;

  match = plain.match(/^Restores (.+) HP to all allied targets, then removes (.+), (.+), and your (.+) area from the encounter map\. While under the effect of (.+), restores (.+) HP to all allied targets instead\.?$/);
  if (match) return `為所有友方目標恢復 ${match[1]} 點體力(HP)，接著從遭遇戰地圖上移除「${match[2]}」、「${match[3]}」及你的「${match[4]}」區域。若處於「${match[5]}」效果下，改為為所有友方目標恢復 ${match[6]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage to all enemy targets and restores (.+) HP to all allied targets, then removes (.+), (.+), and your (.+) area from the encounter map\. While under the effect of (.+), deals (.+) damage to all enemy targets and restores (.+) HP to all allied targets instead\.?$/);
  if (match) return `對所有敵方目標造成 ${match[1]} 點傷害，並為所有友方目標恢復 ${match[2]} 點體力(HP)，接著從遭遇戰地圖移除「${match[3]}」、「${match[4]}」及你的「${match[5]}」區域。若處於「${match[6]}」效果下，改為對所有敵方目標造成 ${match[7]} 點傷害，並為所有友方目標恢復 ${match[8]} 點體力(HP)。`;

  match = plain.match(/^Deals (.+) damage to all targets\. If this ability is used while under the effect of (.+), it changes to Astral Impulse and deals an additional (.+) damage\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。若使用此技能時正處於「${match[2]}」效果下，技能改為「星極脈衝」，並額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants (.+) and (.+)\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並對目標施加仇恨。獲得「${match[2]}」及 ${match[3]} 層「${match[4]}」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Restores (.+) HP and grants (.+) Blackblood\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。恢復 ${match[2]} 點體力(HP)，並獲得 ${match[3]} 點「黑血」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) and (.+) stacks? of (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「${match[2]}」及 ${match[3]} 層「${match[4]}」。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants (.+) and (.+) Nadi\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。獲得「${match[2]}」及 ${match[3]} 個「必殺技量表」。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants (.+) and (.+) stacks? of (.+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。獲得「${match[2]}」及 ${match[3]} 層「${match[4]}」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants (.+) and (.+) Wrath\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。獲得「${match[2]}」及 ${match[3]} 層怒氣。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Restores (.+) HP\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Restores (.+) HP and grants a barrier equaling the amount of HP restored that exceeds your max HP\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並獲得相當於恢復體力(HP)量超出你體力(HP)上限部分的護盾。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Black Mana and (.+) White Mana\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) White Mana\. If the die rolled for this ability lands on an even number, the following proc effect triggers\. Verstone Ready: Grants Verstone Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點白魔元。若此技能擲出的骰值為偶數，觸發下列發動效果。「石火預備」：獲得「石火預備」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) Black Mana\. If the die rolled for this ability check lands on an even number, the following proc effect triggers\. Verfire Ready: Grants Verfire Ready\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元。若此技能檢定擲出的骰值為偶數，觸發下列發動效果。「火炎預備」：獲得「火炎預備」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+) Black Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) White Mana and (.+) Black Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元及 ${match[3]} 點黑魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Creates a (.+) area centered on the target square\. While inside this area, allies granted Revivify increase its value by (.+), while allies who have not been granted Revivify instead recover (.+) HP at the end of the Adventurer Step\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域。已獲得「再生」的盟友，其再生數值提高 ${match[2]}；尚未獲得「再生」的盟友則於冒險者階段結束時恢復 ${match[3]} 點體力(HP)。此區域於階段結束時移除。`;

  match = plain.match(/^Deals (.+) damage to all targets, then restores (.+) HP to all allies within (.+) squares of you and grants a barrier equaling the amount of HP restored that exceeds their Max HP\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，接著為你 ${match[3]} 格內的所有盟友恢復 ${match[2]} 點體力(HP)，並賦予相當於恢復量超出其體力(HP)上限部分的護盾。`;

  match = plain.match(/^Deals (.+) damage and inflicts Bind on the target until the start of your next turn\.?$/);
  if (match) return `造成 ${match[1]} 點傷害，並使目標陷入拘束，直到你的下回合開始。`;

  match = plain.match(/^Deals (.+) damage to all targets\. Grants (.+) and (.+) Nadi\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。獲得「${match[2]}」及 ${match[3]} 個「必殺技量表」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) Heat and (.+) Battery Charge\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點熱能及 ${match[3]} 點「電池充能」。`;

  match = plain.match(/^Restores HP equaling the target's Max HP to the target\.?$/);
  if (match) return `使目標恢復等同於其體力(HP)上限的體力(HP)。`;

  match = plain.match(/^All allies may reduce the value required to score a critical by (.+) when making an ability check against the target until the start of your next turn\.?$/);
  if (match) return `直到你的下回合開始，所有盟友對目標進行技能檢定時，暴擊所需的骰值降低 ${match[1]}。`;

  match = plain.match(/^Reduces the damage all targets take from abilities by (.+) until the end of this turn\.?$/);
  if (match) return `直到本回合結束，所有目標受到的技能傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Deals (.+) damage to the target and inflicts a DOT \((.+)\)\. Grants (.+) and (.+)\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並施加持續傷害(DOT)（${match[2]}）。獲得「${match[3]}」及「${match[4]}」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on all targets\. Grants (.+) and (.+)\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害並施加仇恨。獲得「${match[2]}」及「${match[3]}」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+), and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「${match[2]}」，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next ability the target uses deals an additional (.+) damage\. If the target is a tank, melee DPS, or companion, the next ability they use deals an additional (.+) damage instead\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次使用的技能額外造成 ${match[2]} 點傷害。若目標為防護職業、近戰輸出或夥伴，其下次使用的技能改為額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next ability the target uses deals an additional (.+) damage\. If the target is a healer, ranged DPS, or companion, the next ability they use deals an additional (.+) damage instead\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次使用的技能額外造成 ${match[2]} 點傷害。若目標為治療職業、遠程輸出或夥伴，其下次使用的技能改為額外造成 ${match[3]} 點傷害。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next time the target recovers HP, they recover an additional (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次恢復體力(HP)時，額外恢復 ${match[2]} 點體力(HP)。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\. The next time the target takes damage from an ability, they take (.+) less damage\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。目標下次受到技能傷害時，該傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Grants the target Major Arcana, Revivify \((.+)\), and a barrier of (.+) HP\. Targets who have already been granted Revivify may increase its value by (.+), to a maximum of (.+)\.?$/);
  if (match) return `使目標獲得「大奧秘卡」、「再生」（${match[1]}），以及相當於 ${match[2]} 點體力(HP)的護盾。已獲得「再生」的目標可將其數值提高 ${match[3]}，最高至 ${match[4]}。`;

  match = plain.match(/^Grants the target Major Arcana and a barrier of (.+) HP\.?$/);
  if (match) return `使目標獲得「大奧秘卡」及相當於 ${match[1]} 點體力(HP)的護盾。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+) Black Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants Surging Tempest and (.+) Wrath\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。獲得「洶湧怒濤」及 ${match[2]} 層怒氣。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Restores (.+) HP and grants (.+) Wrath\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。恢復 ${match[2]} 點體力(HP)，並獲得 ${match[3]} 層怒氣。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Opo-Opo Form, and enables Bestial Fury: Coeurl\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「魔猿身」，並啟用「獸性猛攻：猛豹身」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Coeurl Form, and enables Bestial Fury: Raptor\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「猛豹身」，並啟用「獸性猛攻：盜龍身」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Raptor Form, and enables Bestial Fury: Opo-Opo\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」，並啟用「獸性猛攻：魔猿身」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) Opo-Opo Form and (.+) stacks of Coeurl's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。獲得「魔猿身」及 ${match[2]} 層「猛豹之怒」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) Coeurl Form and (.+) stack of Raptor's Fury\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害。獲得「猛豹身」及 ${match[2]} 層「盜龍之怒」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Raptor Form, and enables Bestial Fury: Opo-Opo\. If this ability is used while under the effect of Opo-Opo Form and results in a direct hit, it automatically scores a critical as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」，並啟用「獸性猛攻：魔猿身」。若在「魔猿身」效果下使用此技能並造成直擊，則也會自動暴擊。`;

  match = plain.match(/^Deals (.+) damage to the target, grants Raptor Form, and enables Bestial Fury: Opo-Opo\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「盜龍身」，並啟用「獸性猛攻：魔猿身」。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) Raptor Form\. If this ability is used while under the effect of Opo-Opo Form, grants (.+) stack of Opo-Opo's Fury as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，並獲得「盜龍身」。若在「魔猿身」效果下使用此技能，也會獲得 ${match[2]} 層「魔猿之怒」。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on the target\. Grants (.+) Divine Might\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害並施加仇恨。獲得「神聖之力」（${match[2]}）。`;

  match = plain.match(/^Deals (.+) damage to the target and grants (.+) Enhanced Enpi, then move up to (.+) squares\. You cannot end this movement in a square that is adjacent to the target\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得「強化燕飛」，接著移動最多 ${match[2]} 格。移動結束時不得位於與目標相鄰的格子。`;

  match = plain.match(/^Grants Drain \((.+)\) until the end of this turn and one advantage die on your next ability check this turn\.?$/);
  if (match) return `獲得「吸收」（${match[1]}），持續至本回合結束；本回合你的下一次技能檢定也獲得一顆優勢骰。`;

  match = plain.match(/^Deals (.+) damage to all targets\. This ability has additional effects determined by your pet\. (.+)$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害。本技能的追加效果依你的寵物而定。${match[2]}`;

  match = plain.match(/^Deals an additional (.+) damage\. (.+): Reduces the damage all allies take from abilities by (.+) until the end of this turn\. (.+): All allies may move up to (.+) squares?\. Other: Deals an additional (.+) damage\.?$/);
  if (match) return `額外造成 ${match[1]} 點傷害。${match[2]}：直到本回合結束，所有盟友受到的技能傷害減少 ${match[3]} 點。${match[4]}：所有盟友最多可移動 ${match[5]} 格。其他寵物：額外造成 ${match[6]} 點傷害。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target\. Grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all targets and grants (.+) Black Mana and (.+) White Mana\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害，並獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Move up to (.+) squares?\. Roll a d(.+) for the ability check;? on a (.+), the GM determines your final destination\.?$/i);
  if (match) return `最多移動 ${match[1]} 格。為技能檢定擲 d${match[2]}；若結果為 ${match[3]}，由 GM 決定你的最終位置。`;

  match = plain.match(/^Deals damage to the target based on the number of stacks of Repertoire you have, then removes all stacks of Repertoire\.\s*1: \[\[\/r (.+)\]\] damage\.\s*2: \[\[\/r (.+)\]\] damage\.\s*3: \[\[\/r (.+)\]\] damage\.?$/);
  if (match) return `依你持有的「即興曲」層數對目標造成傷害，接著移除所有「即興曲」層數。1 層：${match[1]} 點；2 層：${match[2]} 點；3 層：${match[3]} 點。`;

  match = plain.match(/^Increases your Defense by (.+) for the ability check that triggered Raw Intuition\. Use this new value to determine if the ability scores a direct hit\. Grants Drain \((.+)\) until the end of your next turn\.?$/);
  if (match) return `觸發「原初直覺」的技能檢定中，你的防禦提高 ${match[1]}。使用此新數值判定技能是否造成直擊。獲得「吸收」（${match[2]}），持續至你的下回合結束。`;

  match = plain.match(/^Reduces the damage dealt by the abilities of all targets by (.+) until the end of (?:tis|this) round\.?$/);
  if (match) return `直到本輪結束，所有目標的技能傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Restores (.+) HP to the target,?\.? Roll a d(.+) for the ability check,? on an? (.+) or higher, the following proc effect triggers\. Enhanced Benefic II: The next Benefic II you use this phase automatically scores a critical\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)。為技能檢定擲 d${match[2]}；若結果為 ${match[3]} 以上，觸發下列發動效果。「強化救療 II」：本階段你下次使用「救療 II」時必定暴擊。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Umbral Hearts, and en ables Consecutive Invocation\.?$/i);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 個黑暗冰封之心，並啟用「連續詠唱」。`;

  match = plain.match(/^Inflicts a DOT \((.+)\) on the target and enables Arrow Flurry\.?$/);
  if (match) return `對目標施加持續傷害(DOT)（${match[1]}），並啟用「箭雨」。`;

  match = plain.match(/^Move to an empty square within range and adjacent ot the target\. After moving ,deals (.+) damage to the target\. Grants Formless Fist and (.+) Nadi\.?$/);
  if (match) return `移動至射程內與目標相鄰的空格。移動後對目標造成 ${match[1]} 點傷害，並獲得「無相身」及 ${match[2]} 個必殺技量表。`;

  match = plain.match(/^Reduces the damage all targets take from the effect that triggered Collective Unconscious by (.+) and grants them Revivify \((.+)\)\. Targets who have already been granted Revivify may increase its value by (.+), to a maximum of (.+)\.?$/);
  if (match) return `使所有目標受到觸發「命運之輪」之效果的傷害減少 ${match[1]}，並獲得「再生」（${match[2]}）。已獲得「再生」的目標可將其數值提高 ${match[3]}，最高至 ${match[4]}。`;

  match = plain.match(/^Deals damage to the target based on the number of times you damaged them with a primary ability this turn\.\s*1: (.+) damage\s*-\s*2: (.+) damage\s*-\s*3: (.+) damage\.?$/);
  if (match) return `依你本回合以主要技能對目標造成傷害的次數決定傷害：1 次：${match[1]} 點；2 次：${match[2]} 點；3 次：${match[3]} 點。`;

  match = plain.match(/^Dismisses your pet from the encounter map and grants (.+) stacks of Atherflow\. Your pet cannot be resummoned this phase, even if you are revived after being Knocked Out\.?$/);
  if (match) return `將你的寵物從遭遇戰地圖上移除，並獲得 ${match[1]} 層「以太流」。本階段無法重新召喚寵物，即使你在昏厥後被復活也一樣。`;

  match = plain.match(/^The ability that triggered Emergency Tactics does not grant a barrier, instead restoring HP equaling the intended value of the barrier to all targets\.?$/);
  if (match) return `觸發「緊急戰術」的技能不再賦予護盾，而是改為恢復所有目標等同於原定護盾值的體力(HP)。`;

  match = plain.match(/^You may use Fell Cleave and Decimate a total of up to three times this turn in any combination, and ignore any costs when doing so\. Do not make ability checks or resolve direct hit effects when using these abilities\. Grants Inner Strength until the start of your next turn\.?$/);
  if (match) return `本回合可任意組合使用「裂石飛環」與「地毀人亡」最多三次，且無須支付消耗。使用這些技能時不進行技能檢定，也不結算直擊效果。獲得「內在力量」，持續至你的下回合開始。`;

  match = plain.match(/^Deals (.+) damage to the target, grants (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Restores (.+) HP and grants Earth's Rumination Ready\. Reduces the damage you take from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並獲得「大地沉思預備」。直到你的下回合開始，你受到的技能傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Creates a (.+) area centered on the target square and grants your pet (.+) Fae Aether\. While inside this area, allies take (.+) less damage from abilities\. This area is removed at the end of the phase\.?$/);
  if (match) return `在目標格周圍創造 ${match[1]} 區域，並使你的寵物獲得 ${match[2]} 點「妖精以太」。盟友在此區域內時，受到的技能傷害減少 ${match[3]} 點。此區域於階段結束時移除。`;

  match = plain.match(/^All targets'? abilities deal an additional (.+) damage until they use an ability to deal damage or the start of your next turn, whichever comes first\. If your pet is within range, this effect is granted to it as well\.?$/);
  if (match) return `所有目標的技能額外造成 ${match[1]} 點傷害，直到其使用技能造成傷害或你的下回合開始（以先發生者為準）。若你的寵物在射程內，也會獲得此效果。`;

  match = plain.match(/^Grants a barrier to each target equaling their Max HP divided by (.+) \(rounded up\)\.?$/);
  if (match) return `賦予每個目標相當於其體力(HP)上限除以 ${match[1]}（無條件進位）的護盾。`;

  match = plain.match(/^You may use (.+) and (.+) a total of up to three times this turn\.?$/);
  if (match) return `本回合你最多可使用「${match[1]}」與「${match[2]}」合計三次。`;

  match = plain.match(/^Whenever an ally is healed by a single target ability, Synastry's target recovers HP equal to half of the amount of HP \(rounded up\) restored\. This effect is removed at the end of this turn\.?$/);
  if (match) return `每當盟友受到單體技能治療時，「星體連結」的目標恢復相當於該次體力(HP)治療量一半的體力(HP)（無條件進位）。此效果於本回合結束時移除。`;

  match = plain.match(/^Immediately use Fuma Shuriken, then use a ninjutsu ability with a condition of (.+) or more Mudra spent for Ninjutsu, followed by a ninjutsu ability with a condition of (.+) or more Mudra spent for Ninjutsu\. Do not make ability checks or resovle direct hit effects when using these abilities\. The second and third ninjutsu abilities must have different ten, chi, or jin classifications\. Your turn ends immediately after resolving this ability's effects\.?$/);
  if (match) return `立即使用「風魔手裏劍」，接著使用一項條件為忍術消耗至少 ${match[1]} 個結印的忍術技能，再使用一項條件為忍術消耗至少 ${match[2]} 個結印的忍術技能。使用這些技能時不進行技能檢定，也不結算直擊效果。第二及第三項忍術技能必須分別屬於不同的天、地、人分類。此技能效果結算後，你的回合立即結束。`;

  match = plain.match(/^Removes any existing barriers from the target, then grants a barrier of (.+) HP to the target until the start of your next turn\. The target cannot be granted a new barrier until this one is removed\. If this barrier is reduced to (.+) HP before the start of your next turn, grants Dark Arts\.?$/);
  if (match) return `移除目標身上現有的所有護盾，接著賦予目標 ${match[1]} 點體力(HP)的護盾，持續至你的下回合開始。此護盾移除前，目標不能再獲得新護盾。若此護盾在你的下回合開始前降至 ${match[2]} 點體力(HP)，則獲得「暗黑波動」。`;

  match = plain.match(/^Remove a single enfeeblement of the target's choosing\. If the target is not suffering from any enfeeblements, grants them The Wardens Paean instead\.?$/);
  if (match) return `移除目標自行選擇的一項弱化效果。若目標未受到任何弱化效果，則改為賦予其「守護神的讚歌」。`;

  match = plain.match(/^Reduces the cost of the ability that triggered Thin Air to (.+) MP\.?$/);
  if (match) return `使觸發「無中生有」的技能消耗降至 ${match[1]} 點魔力(MP)。`;

  match = plain.match(/^Prevents you from taking damage from the ability that triggered Third Eye if the damage is less than or equal to your Vigilance(?: \+ (.+))?\. If damage is prevented, grants (.+) Kenki\.?$/);
  if (match) return `若觸發「心眼」之技能造成的傷害不高於你的警覺${match[1] ? ` + ${match[1]}` : ""}，則使你免受該傷害。若成功防止傷害，獲得 ${match[2]} 點劍氣。`;

  match = plain.match(/^Restores (.+) HP and grants a barrier equaling the amount of HP restored that exceeds your Max HP\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並獲得相當於恢復體力(HP)量超出你體力(HP)上限部分的護盾。`;

  match = plain.match(/^Move to an empty square within range and adjacent ot the target\. You must target another character with this ability\.?$/);
  if (match) return `移動至射程內與目標相鄰的空格。使用此技能時必須以另一名角色為目標。`;

  match = plain.match(/^Lose the effects of the Consecutive Invocation trait until the end of this turn\. You may use up to three magic primary abilities this turn, and may use Flare even if you have already performed a primary or secondary action\.?$/);
  if (match) return `直到本回合結束，失去「連續詠唱」特性的效果。本回合你最多可使用三項魔法主要技能；即使已執行主要或次要行動，仍可使用「核爆」。`;

  match = plain.match(/^Reduces the damage all targets take from abilities by (.+) untli the start of your next turn\.?$/);
  if (match) return `直到你的下回合開始，所有目標受到的技能傷害減少 ${match[1]} 點。`;

  match = plain.match(/^Restores (.+) MP\. Grants Umbral Ice and (.+) Umbral Heart\.?$/);
  if (match) return `恢復 ${match[1]} 點魔力(MP)。獲得「靈極冰」及 ${match[2]} 個黑暗冰封之心。`;

  match = plain.match(/^Deals (.+) damage and inflicts Enmity on all targets\. Restores (.+) MP and grants (.+) Blackblood\.?$/);
  if (match) return `對所有目標造成 ${match[1]} 點傷害並施加仇恨。恢復 ${match[2]} 點魔力(MP)，並獲得 ${match[3]} 點暗血。`;

  match = plain.match(/^Restores (.+) HP to the target and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `為目標恢復 ${match[1]} 點體力(HP)，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Deals (.+) damage to all enemies within a (.+) area centered on (.+) square occupied by the target\. Gratns (Verfire Ready|Verstone Ready) and (.+) (Black Mana|White Mana) and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標占據的 ${match[3]} 格之一為中心、範圍 ${match[2]} 的區域內所有敵人造成 ${match[1]} 點傷害。獲得「${match[4]}」及 ${match[5]} 點${match[6]}，並啟用「連續祈喚」。若在你的回合使用此技能，也會獲得「連續詠唱」。`;

  match = plain.match(/^You may use Fell Cleave and Decimate a total of up to three times this turn in any combination, and ignore any costs when doing so\. Do not make ability checks or resolve direct hit effects when u sing these abilities\. Grants Inner Strength until the start of your next turn\.?$/);
  if (match) return `本回合可任意組合使用「裂石飛環」與「地毀人亡」最多三次，且無須支付消耗。使用這些技能時不進行技能檢定，也不結算直擊效果。獲得「內在力量」，持續至你的下回合開始。`;

  match = plain.match(/^Deals (.+) damage to the target, gratns (.+) Black Mana and (.+) White Mana, and enables Consecutive Invocation\. If this ability is used on your turn, grants Dualcast as well\.?$/);
  if (match) return `對目標造成 ${match[1]} 點傷害，獲得 ${match[2]} 點黑魔元及 ${match[3]} 點白魔元，並啟用「連續詠唱」。若在你的回合使用此技能，也會獲得「雙重詠唱」。`;

  match = plain.match(/^Restores one use of Bloodletter or Rain of Death\. Grants (.+) stack of Repertoire and the following song effect\. Mage's Ballad: All allies may each reroll a single die when determining the amount of damage dealt by an ability\.?$/);
  if (match) return `恢復「失血箭」或「死亡箭雨」的一次使用次數。獲得 ${match[1]} 層「即興曲」，並觸發下列歌曲效果。「賢人放浪」：判定技能傷害時，所有盟友各可重擲一顆骰子。`;

  match = plain.match(/^Removes Knocked Out from the target, then restores (.+) HP, trants Transcendent, and afflicts them with Weakness\.\s*\*This ability can also target a character outside the encounter map\. When doing so, move the target to an empty square within range after resolving the ability's effects\.?$/);
  if (match) return `移除目標身上的「昏厥」，接著恢復 ${match[1]} 點體力(HP)、賦予「超越」，並使其陷入「衰弱」。*此技能也能以遭遇戰地圖外的角色為目標；若如此做，技能效果結算後，將目標移至射程內的空格。`;

  match = plain.match(/^Immediately use one of your invoked magic abilities, ignoring any conditions and limitations, then removes Dualcast\. Red Magic can only be used once per turn and does not prevent you from using Consecutive Invocation, provided you have not moved this turn\.?$/);
  if (match) return `立即使用一項你已詠唱的魔法技能，忽略其所有條件及限制，接著移除「雙重詠唱」。「赤魔法」每回合只能使用一次；只要本回合尚未移動，仍可使用「連續詠唱」。`;

  match = plain.match(/^Restores (.+) HP and grants Earth's Rumination Ready\. Reduces the damage you take from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並獲得「大地沉思預備」。直到你的下回合開始，你受到的技能傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Restores (.+) HP and gratns Earth's Rumination Ready\. Reduces the damage you take from abilities by (.+) until the start of your next turn\.?$/);
  if (match) return `恢復 ${match[1]} 點體力(HP)，並獲得「大地沉思預備」。直到你的下回合開始，你受到的技能傷害減少 ${match[2]} 點。`;

  match = plain.match(/^Restores one use of Bloodletter or Rain of Death\. Grants (.+) stack of Repertoire and the following song effect\. Mage's Ballad: All allies may each reroll a single die when determining the amoutn of damage dealt by an ability\.?$/);
  if (match) return `恢復「失血箭」或「死亡箭雨」的一次使用次數。獲得 ${match[1]} 層「即興曲」，並觸發下列歌曲效果。「賢人放浪」：判定技能傷害時，所有盟友各可重擲一顆骰子。`;

  match = plain.match(/^Prevents you from taking damage from the ability that triggered Third Eye if the damage is less than or equal to your Vigilance\.?$/);
  if (match) return `若觸發「心眼」之技能造成的傷害不高於你的警覺，則使你免受該傷害。`;

  match = plain.match(/^Certain effects grant you Astral Fire\. While under the effect of Astral Fire, your fire-aspected abilities deal an additional (.+) damage and you do not recover MP at the end of the Adventurer Step\. Astral Fire is removed when you are granted Umbral Ice or, if the effect is not renewed, at the end of your next turn\.?$/);
  if (match) return `部分效果會使你獲得「星極火」。處於「星極火」效果下時，你的火屬性技能額外造成 ${match[1]} 點傷害，且在冒險者階段結束時不會恢復魔力(MP)。獲得「靈極冰」時會移除「星極火」；若未刷新此效果，則於你的下回合結束時移除。`;

  match = plain.match(/^Certain effects grant you Umbral Ice\. While under the effect of Umbral Ice, your ice-aspected abilities restore (.+) MP each time they deal damage\. Umbral Ice is removed when you are granted Astral Fire or, if the effect is not renewed, at the end of your next turn\.?$/);
  if (match) return `部分效果會使你獲得「靈極冰」。處於「靈極冰」效果下時，你的冰屬性技能每次造成傷害時恢復 ${match[1]} 點魔力(MP)。獲得「星極火」時會移除「靈極冰」；若未刷新此效果，則於你的下回合結束時移除。`;

  if (/^Ninjutsu Cooldown is an enhancement, and cannot be removed by effects that remove enfeeblements\. Ninjutsu Cooldown is removed at the end of your next turn\.?$/.test(plain)) {
    return `「忍術冷卻」屬於強化效果，不會被移除弱化效果的能力移除。「忍術冷卻」於你的下回合結束時移除。`;
  }

  if (/^On your turn, after resolving the effects of an ability that enables this trait, you may forgo all standard movement until the end of your turn to use an additional invoked primary ability\. You may choose a new target when using this additional ability\. Consecutive Invocation can only be used once per turn, and does not prevent you from using focus to perform an additional secondary action\.?$/.test(plain)) {
    return `在你的回合中，啟用此特性的技能效果結算後，你可以放棄本回合剩餘的所有標準移動，額外使用一項已詠唱的主要技能。使用此額外技能時可選擇新的目標。「連續詠唱」每回合只能使用一次，且不會阻止你消耗專注額外執行一次次要行動。`;
  }

  if (/^On your turn, after resolving the effects of an ability that enables this trait, you may use an additional flurry ability\. You may choose a new target when using this additional ability\. Arrow Flurry can only be used once per turn\.?$/.test(plain)) {
    return `在你的回合中，啟用此特性的技能效果結算後，你可以額外使用一項連擊技能。使用此額外技能時可選擇新的目標。「箭雨」每回合只能使用一次。`;
  }

  match = plain.match(/^(Titan-Egi|Topaz Carbuncle): Reduces the damage all allies take from abilities by (.+) until the end of this turn\.?$/);
  if (match) return `${match[1] === "Titan-Egi" ? "土神之靈" : "黃寶石獸"}：直到本回合結束，所有盟友受到的技能傷害減少 ${match[2]} 點。`;

  if (/^When a character is under the effect of The Warden's Paean, remove the next enfeeblement inflicted\. The Warden's Paean is removed when its effect is resolved\.?$/.test(plain)) {
    return `角色處於「守護神的讚歌」效果下時，移除接下來施加於該角色的弱化效果。「守護神的讚歌」於其效果結算後移除。`;
  }

  if (/^Whenever you are granted Umbral Ice while not under the effect of Umbral Ice, or Astral Fire while not under the effect of Astral Fire, grants Thunderhead Ready\.?$/.test(plain)) {
    return `當你在未處於「靈極冰」效果下獲得「靈極冰」，或在未處於「星極火」效果下獲得「星極火」時，獲得「雷雲預備」。`;
  }

  if (/^You cannot use a thunder spell ability to inflict a DOT on a character already suffering from a DOT inflicted by one of your thunder spell abilities\.?$/.test(plain)) {
    return `若角色已受到你某項雷系魔法技能施加的持續傷害(DOT)，你不能再以雷系魔法技能對其施加持續傷害(DOT)。`;
  }

  if (/^While a character is under the effect of Major Arcana, they may reroll a single die of their choosing when determining the amount of damage dealt by an ability\. Any die rerolled in this way cannot be rerolled again, and its result must be used\. Major Arcana is removed when its effect is resolved or at the end of the character's turn\.?$/.test(plain)) {
    return `角色處於「大奧秘卡」效果下時，判定技能傷害時可自行選擇一顆骰子重擲。以此方式重擲的骰子不能再次重擲，且必須採用重擲結果。「大奧秘卡」於效果結算後或該角色回合結束時移除。`;
  }

  if (/^While under the effect of Formless Fist, you are considered to be under the effects of Opo-Opo Form, Raptor Form, and Coeurl Form\. Formless Fist is removed at the end of your next turn or when you are granted a new form\.?$/.test(plain)) {
    return `處於「無相身」效果下時，視同你也處於「魔猿身」、「盜龍身」及「猛豹身」效果下。「無相身」於你的下回合結束時，或你獲得新身形時移除。`;
  }

  if (/^While under the effect of Hawk's Eye, you may use Straight Shot or Wide Volley and ignore the penalty incurred on ability checks made while Blinded\. Hawk's Eye is removed after using Straight Shot or Wide Volley\.?$/.test(plain)) {
    return `處於「鷹眼」效果下時，你可以使用「直線射擊」或「廣域箭」，並忽略目盲時進行技能檢定所受的減值。使用「直線射擊」或「廣域箭」後，「鷹眼」移除。`;
  }

  if (/^While under the effect of Surging Tempest, treat any roll of 1 when determining damage as if it were a 2\.?$/.test(plain)) {
    return `處於「洶湧怒濤」效果下時，判定傷害時將骰值 1 視為 2。`;
  }

  if (/^While under the effect of a form, receive one advantage die on your ability checks for physical abilities\.\s*If an effect grants you a new form, your current form is removed and the new form immediately takes effect\. Forms are removed at the end of your next turn\.?$/.test(plain)) {
    return `處於身形效果下時，進行物理技能檢定可獲得一顆優勢骰。若效果使你獲得新身形，則移除目前身形並立即套用新身形。身形於你的下回合結束時移除。`;
  }

  if (/^While under the effect of a form, receive one advantage die on your ability checks for physical abilities\.$/.test(plain)) {
    return `處於<strong>身形</strong>效果下時，進行<em>物理</em>技能檢定可獲得一顆優勢骰。`;
  }

  if (/^If an effect grants you a new form, your current form is removed and the new form immediately takes effect\. Forms are removed at the end of your next turn\.?$/.test(plain)) {
    return `若效果使你獲得新<strong>身形</strong>，則移除目前身形並立即套用新<strong>身形</strong>。<strong>身形</strong>於你的下回合結束時移除。`;
  }

  const paragraphs = [...source.matchAll(/<p>([\s\S]*?)<\/p>/gi)];
  if (paragraphs.length) {
    let translatedAny = false;
    const translated = source.replace(/<p>([\s\S]*?)<\/p>/gi, (_, content) => {
      const result = translateEffect(content);
      if (result !== content) translatedAny = true;
      return `<p>${result}</p>`;
    });
    if (translatedAny) return translated;
  }

  return source;
}

function trItem(it) {
  if (!it || typeof it !== "object") return it;
  const out = foundry.utils.deepClone(it);
  out.name = t(out.name);
  if (out.system) {
    for (const f of SF) if (out.system[f]) out.system[f] = t(out.system[f]);
    if (Array.isArray(out.system.ability_grants)) out.system.ability_grants = grants(out.system.ability_grants);
    if (Array.isArray(out.system.pet_grants)) out.system.pet_grants = petGrants(out.system.pet_grants);
    if (Array.isArray(out.system.summon_actors)) out.system.summon_actors = named(out.system.summon_actors);
  }
  if (Array.isArray(out.effects)) out.effects = effects(out.effects);
  return out;
}
function trActor(a) {
  if (!a || typeof a !== "object") return a;
  const out = foundry.utils.deepClone(a);
  out.name = t(out.name);
  if (out.prototypeToken?.name) out.prototypeToken.name = t(out.prototypeToken.name);
  if (out.system?.traits) out.system.traits = t(out.system.traits);
  if (out.system?.specie) out.system.specie = t(out.system.specie);
  if (Array.isArray(out.items)) out.items = out.items.map(trItem);
  return out;
}
function effects(arr) {
  return (arr ?? []).map((e) => (e && typeof e === "object") ? { ...e, name: t(e.name), description: t(e.description) } : e);
}
function grants(arr) {
  return (arr ?? []).map((g) => (g && typeof g === "object") ? { ...g, name: t(g.name), item: g.item ? trItem(g.item) : g.item } : g);
}
function petGrants(arr) {
  return (arr ?? []).map((g) => (g && typeof g === "object") ? { ...g, name: t(g.name), actor: g.actor ? trActor(g.actor) : g.actor } : g);
}
function named(arr) {
  return (arr ?? []).map((x) => (x && typeof x === "object") ? { ...x, name: t(x.name) } : x);
}
function results(arr) {
  return (arr ?? []).map((r) => (r && typeof r === "object") ? { ...r, name: t(r.name), text: t(r.text), description: t(r.description) } : r);
}
function pages(arr) {
  return (arr ?? []).map((p) => {
    if (!p || typeof p !== "object") return p;
    const out = { ...p, name: t(p.name) };
    if (p.text?.content) out.text = { ...p.text, content: t(p.text.content) };
    return out;
  });
}

Hooks.once("init", () => {
  if (typeof Babele === "undefined") {
    console.warn(`${MODULE_ID} | 需要啟用 Babele 模組`);
    return;
  }
  const babele = game.babele ?? Babele.get();
  babele.register({ module: MODULE_ID, lang: "zh-tw", dir: "translations" });
  babele.registerConverters({
    ffxivEffects: (v) => effects(v),
    ffxivText: (v) => t(v),
    ffxivGrants: (v) => grants(v),
    ffxivPetGrants: (v) => petGrants(v),
    ffxivNamed: (v) => named(v),
    ffxivItems: (v) => (v ?? []).map(trItem),
    ffxivResults: (v) => results(v),
    ffxivPages: (v) => pages(v),
  });
});
