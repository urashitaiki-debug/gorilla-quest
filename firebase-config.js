// ============================================
// Firebase 共通設定
// gorilla-quest の全ページで使い回す
// ============================================

export const firebaseConfig = {
  apiKey: "AIzaSyChzYzgoK-k0Yk9ftiY7vMOeHDpYEOeDlw",
  authDomain: "gorilla-quest-b189c.firebaseapp.com",
  projectId: "gorilla-quest-b189c",
  storageBucket: "gorilla-quest-b189c.firebasestorage.app",
  messagingSenderId: "581762660070",
  appId: "1:581762660070:web:803c2a77a9341b4c89ad27"
};

// Firebase SDK のバージョン（全ファイルで統一）
export const FB_VER = "12.12.0";
export const FB_BASE = `https://www.gstatic.com/firebasejs/${FB_VER}`;