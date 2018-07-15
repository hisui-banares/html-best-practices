# リンク文字列は明確にする

リンク文字列はリンク先のリソースのラベルであるべきです。

悪い例:

    <p><a href="/pdf" rel="alternate" type="application/pdf">Click here</a> to view PDF version.</p>

良い例:

    <p><a href="/pdf" rel="alternate" type="application/pdf">PDF version</a> is also available.</p>


## 解説

リンクはウェブページにのみ張られるものではありません。ポップアップ・ウィンドウを出したり、ダウンロードさせたり、最近では別のアプリを立ち上げるために張られることもあります。明確な文字列でリンクされていれば、そのリンクを利用するとどのようなことが起こるか、をユーザーが推測できます。

そのユーザーには検索エンジンも含めて良いでしょう。検索エンジンが自然文をうまく扱える現在、明確な文字列によるリンクは、ウェブページ同士の関係をも推測可能にします。そのことがひいては検索エンジンのユーザーの利益につながるかもしれません。

明確に、とは、良い例で挙げたように、リンクの目的について端的に表現することです。悪い例であげたように、リンクの使い方について表現する必要はまったくありません。