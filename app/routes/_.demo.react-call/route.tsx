// app/routes/__.demo.react-call._index/route.tsx
import { useState } from 'react';
import { AlertDialog } from '~/components/react-call/alert-dialog';
import { Button } from '~/components/ui/button';
import { generateMeta } from '~/lib/meta';
import type { Route } from './+types/route';

export function meta(_: Route.MetaArgs) {
  return generateMeta({
    title: "React Call Demo",
    description: "Demo of react-call library for modal dialogs and components",
    keywords: ["react call", "modal", "dialog", "demo"],
    noIndex: true, // Don't index demo pages
  });
}

const DemoReactCallPage = () => {
  const [response, setResponse] = useState<string>();

  const handleButtonClick = async () => {
    const res = await AlertDialog.call({
      title: 'Sample',
      message: 'Cancel or Continue?',
    });
    setResponse(res);
  };

  return (
    <>
      <div className="container flex flex-col gap-4 p-8">
        <div>react-call sample</div>
        <Button
          onClick={async () => await handleButtonClick()}
          className="self-start"
        >
          Open dialog!
        </Button>
        <div>{`response: ${response}`}</div>
      </div>
    </>
  );
};

export default DemoReactCallPage;