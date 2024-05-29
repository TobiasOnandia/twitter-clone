import { createClient } from '../../utils/supabase/server';
import React from 'react';

export default async function Notes() {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select();

  return (
  <div>
    <pre>{JSON.stringify(posts, null, 2)}</pre>
  </div>
  
)
}