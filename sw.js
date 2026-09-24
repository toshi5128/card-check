// インストール用の最小サービスワーカー。何も保存しない（常に最新をネットから取る）
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.mode === "navigate") e.respondWith(fetch(e.request, { cache: "no-store" }));
});
