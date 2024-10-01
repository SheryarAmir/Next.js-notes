import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const Page = async () => {
  const session = await getServerSession(authOptions);
if(session?.user){
    return <h2>Admin page _ welcome backe {session?.user.username}</h2>;
}
  return (
    <div>
      <h1>Welcome to the admin page </h1>
      {session ? (
        <p>Signed in as {session?.user.username}</p>
      ) : (
        <p>Not signed in</p>
      )}
    </div>
  );
};

export default Page;
