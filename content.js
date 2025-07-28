// i18n APIを使用してローカライズされたaria-labelを取得
const TRENDS_LABEL = chrome.i18n.getMessage("trends");
const RECOMMENDATIONS_LABEL = chrome.i18n.getMessage("recommendations");

// 非表示処理
function hideSections() {
  // トレンド非表示
  document.querySelectorAll(`div[aria-label="${TRENDS_LABEL}"]`).forEach(el => {
    el.style.display = 'none';
  });
  
  // おすすめユーザー非表示
  document.querySelectorAll(`aside[aria-label="${RECOMMENDATIONS_LABEL}"]`).forEach(el => {
    el.style.display = 'none';
  });
}

// 監視
const observer = new MutationObserver(hideSections);
observer.observe(document.body, { childList: true, subtree: true });
hideSections();