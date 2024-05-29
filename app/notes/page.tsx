import { createClient } from '../../utils/supabase/server';
import React from 'react';

export default async function Notes() {
  const supabase = createClient();
  const { data: notes } = await supabase.from("posts").select();

  return <pre>{JSON.stringify(notes, null, 2)}</pre>
}