// src/components/Auth.tsx
'use client';

import { supabase } from '../lib/supabaseClient';
import { FaDiscord } from 'react-icons/fa';
import { FC } from 'react';

const Auth: FC = () => {
  const signInWithDiscord = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'discord',
    });
  };

  return (
    <div className="auth-container">
      <h1>Sign in with Discord</h1>
      <button onClick={signInWithDiscord} className="btn-discord">
        <FaDiscord size={24} /> Sign in with Discord
      </button>
    </div>
  );
};

export default Auth;
