// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import  Auth  from '../components/Auth';
import { User } from '@supabase/supabase-js';

const Home = () => {
  const [session, setSession] = useState<User | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session?.user ?? null);
    };
  
    getSession();
  
    const getAuthListener = async () => {
      const { data: authListener } = await supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session?.user ?? null);
      });
  
      const listener = await authListener;
      return listener.subscription;
    };
  
    const authListener = getAuthListener();
  
    return () => {
      if (authListener) {
        authListener.then(subscription => {
          subscription.unsubscribe();
        });
      }
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Welcome to Supabase Discord Auth</h1>
      {!session ? (
        <Auth />
      ) : (
        <div>
          <p>User: {session.email}</p>
          <p>User ID: {session.id}</p>
          <p>{session.id} </p>
          <p>{session.user_metadata.full_name} </p>
          <p>{session.user_metadata.preferred_username} </p>
          <img src={session.user_metadata.avatar_url} />
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Home;
