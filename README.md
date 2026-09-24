# カード明細チェック

セゾン ビジネスカード（合同会社VISION）の明細PDFを取り込み、利用内容と経費判定を2人で確認するPWA。

- 1ファイル `index.html`（React 18 + Babel standalone + supabase-js v2 + pdf.js）
- データ：Supabase（hikari-app と同じプロジェクトに `card_` テーブルで同居。RLSでログインした登録メンバーだけが見られる）
- PDFは端末内で読み取り、明細データだけを保存（PDF本体・カード番号・口座番号は保存しない）
