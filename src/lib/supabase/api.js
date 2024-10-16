import 'server-only';

import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function createSupabase() {
    const cookieStore = cookies();
    return createServerClient(supabaseUrl, supabaseKey, {
            cookies: {
                get(name) {
                    return cookieStore.get(name)?.value;
                },
                set(name, value, options) {
                    cookieStore.set({ name, value, ...options });
                },
                remove(name, options) {
                    cookieStore.set({ name, value: '', ...options });
                },
            },
        }
    );
}

export default createSupabase;
