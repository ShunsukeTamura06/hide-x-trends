// CSS classベースの非表示処理
function hideSections() {
  // 特定のCSS classを持つdivを非表示
  const targetClass = 'css-175oi2r r-14lw9ot r-jxzhtn r-1867qdf r-1phboty r-rs99b7 r-1ifxtd0 r-1udh08x';
  
  document.querySelectorAll(`div.${targetClass.split(' ').join('.')}`).forEach(el => {
    el.style.display = 'none';
  });
}

// 監視
const observer = new MutationObserver(hideSections);
observer.observe(document.body, { childList: true, subtree: true });
hideSections();