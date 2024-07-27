import dynamic from 'next/dynamic';

const ClientComponent = dynamic(() => import('../components/ClientComponent'), { ssr: false });

function ServerComponent() {
  return (
    <div>
      <h1>Server Component</h1>
      <ClientComponent />
    </div>
  );
}

export default ServerComponent;
