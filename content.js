// 言語別aria-label設定
const ARIA_LABELS = {
  ja: {
    trends: ["タイムライン: 速報"],
    recommendations: ["おすすめユーザー"]
  },
  en: {
    trends: ["Timeline: Trending now"],
    recommendations: ["Who to follow"]
  },
  "zh-cn": {
    trends: ["时间线：当前趋势"],
    recommendations: ["推荐关注"]
  },
  "zh-tw": {
    trends: ["時間軸：流行趨勢"],
    recommendations: ["跟隨誰"]
  },
  ko: {
    trends: ["타임라인: 실시간 트렌드"],
    recommendations: ["팔로우 추천"]
  },
  es: {
    trends: ["Cronología: Tendencias del momento"],
    recommendations: ["A quién seguir"]
  },
  fr: {
    trends: ["Fil d'actualités : Tendance actuellement"],
    recommendations: ["Suggestions"]
  },
  ar: {
    trends: ["الخطّ الزمنيّ: المتداوَل الآن"],
    recommendations: ["اقتراحات المتابعة"]
  }
};

// 非表示処理
function hideSections() {
  Object.values(ARIA_LABELS).forEach(lang => {
    // トレンド非表示
    lang.trends.forEach(label => {
      document.querySelectorAll(`div[aria-label="${label}"]`).forEach(el => {
        el.style.display = 'none';
      });
    });
    
    // おすすめユーザー非表示
    lang.recommendations.forEach(label => {
      document.querySelectorAll(`aside[aria-label="${label}"]`).forEach(el => {
        el.style.display = 'none';
      });
    });
  });
}

// 監視
const observer = new MutationObserver(hideSections);
observer.observe(document.body, { childList: true, subtree: true });
hideSections();