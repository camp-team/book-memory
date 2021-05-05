import { Layout } from '../components/Layout';
import SettingComponent from '../components/SettingComponent';

export default function Setting() {
  const settingContents = [
    {
      title: 'プロフィールの変更',
      contents:
        'このサイトではプロフィールの変更はできません。Googleのアカウント情報がそのまま反映されます。(ログイン時に反映されます。)',
    },
    {
      title: '退会',
      contents:
        '退会すると作成されたライブラリは全て削除され、戻すことはできません。',
    },
  ];
  return (
    <Layout>
      <div className="pt-24 container mx-auto px-4">
        <h1 className="text-2xl pb-4 font-bold border-b-2">ユーザー設定</h1>
        {settingContents.map((settingContent, idx) => (
          <div key={idx}>
            <SettingComponent
              title={settingContent.title}
              contents={settingContent.contents}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
