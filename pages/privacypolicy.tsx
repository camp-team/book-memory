import Layout from '../components/Layout';
import TermsPrivacypolicy from '../components/TermsPrivacypolicy';

export default function Terms() {
  const terms = [
    {
      title: '第1条（個人情報の収集方法）',
      contents: [
        {
          text:
            '本サービスでは、ユーザーの利用登録にあたり、外部サービス（Google）との連携を必要としています。 本サービスは、これらの外部サービスとの連携時に、外部サービスに登録されているお名前、サムネイル画像を収集します。',
        },
        {
          text:
            '本サービスではユーザー情報の管理や認証にあたり、Cookie、ブラウザのSessionStorage、LocalStorageを使用します。また、不正防止のため、アクセス元のIPアドレスや端末情報を記録する場合があります。',
        },
      ],
    },
    {
      title: '第2条（個人情報を収集・利用する目的）',
      contents: [
        {
          text:
            '本サービスが個人情報を収集・利用する目的は、以下のとおりです。',

          children: [
            '本サービスサービスの提供・運営のため',
            'ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）',
            '利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため',
            'ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため',
            '上記の利用目的に付随する目的',
          ],
        },
      ],
    },
    {
      title: '第3条（利用目的の変更）',
      contents: [
        {
          text:
            '本サービスは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。',
        },
        {
          text:
            '利用目的の変更を行った場合には、変更後の目的について、本サービス所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。',
        },
      ],
    },
    {
      title: '第4条（個人情報の第三者提供）',
      contents: [
        {
          text:
            '本サービスは、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。',
          children: [
            '人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき',
            '公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき',
            '国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき',
            '予め次の事項(利用目的に第三者への提供を含むこと、第三者に提供されるデータの項目、第三者への提供の手段または方法、本人の求めに応じて個人情報の第三者への提供を停止すること、本人の求めを受け付ける方法)を告知あるいは公表し、かつ本サービスが個人情報保護委員会に届出をしたとき',
          ],
        },
        {
          text:
            '前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。',
          children: [
            '本サービスが利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合',
            '合併その他の事由による事業の承継に伴って個人情報が提供される場合',
            '個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合',
          ],
        },
      ],
    },
    {
      title: '第5条（個人情報の開示）',
      contents: [
        {
          text:
            '本サービスは、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。なお、個人情報の開示に際しては、1件あたり1、000円の手数料を申し受けます。',

          children: [
            '本人または第三者の生命、身体、財産その他の権利利益を害するおそれがある場合',
            '本サービスの業務の適正な実施に著しい支障を及ぼすおそれがある場合',
            'その他法令に違反することとなる場合',
          ],
        },
        {
          text:
            '前項の定めにかかわらず、履歴情報および特性情報などの個人情報以外の情報については、原則として開示いたしません。',
        },
      ],
    },
    {
      title: '第6条（個人情報の利用停止等）',
      contents: [
        {
          text:
            '本サービスは、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。',
        },
        {
          text:
            '前項の調査結果に基づき、その請求に応じる必要があると判断した場合には、遅滞なく、当該個人情報の利用停止等を行います。',
        },
        {
          text:
            '本サービスは、前項の規定に基づき利用停止等を行った場合、または利用停止等を行わない旨の決定をしたときは、遅滞なく、これをユーザーに通知します。',
        },
        {
          text:
            '前2項にかかわらず、利用停止等に多額の費用を有する場合その他利用停止等を行うことが困難な場合であって、ユーザーの権利利益を保護するために必要なこれに代わるべき措置をとれる場合は、この代替策を講じるものとします。',
        },
      ],
    },
    {
      title: '第7条（広告の配信）',
      contents: [
        {
          text:
            '本サービスは、第三者配信の広告サービスを利用することがあります。',
        },
        {
          text:
            '広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。',
        },
      ],
    },
    {
      title: '第8条（アクセス解析ツールの利用）',
      contents: [
        {
          text:
            'ユーザーは、運営者の定める退会手続きにより、本サービスから退会できるものとします。',
        },
        {
          text:
            'Google Analyticsではトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはGoogle Analytics利用規約をご覧ください。',
        },
      ],
    },
    {
      title: '第9条（プライバシーポリシーの変更）',
      contents: [
        {
          text:
            '本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。',
        },
        {
          text:
            '本サービスが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。',
        },
      ],
    },
    {
      title: '第10条（お問い合わせ窓口）',
      contents: [
        {
          text:
            '本ポリシーに関するお問い合わせは、下記”お問合せ”よりお願いいたします。',
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className='pt-20 px-4'>
        <h1 className='text-2xl font-bold'>プライバシーポリシー</h1>
        <p className='py-8'>
          本サービスは、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。
        </p>
        {terms.map((term) => (
          <div key={term.title}>
            <TermsPrivacypolicy title={term.title} contents={term.contents} />
          </div>
        ))}
        <p className='pt-4'>以上</p>
      </div>
    </Layout>
  );
}
