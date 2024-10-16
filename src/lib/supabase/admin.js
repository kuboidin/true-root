import 'server-only';

import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAdminKey = process.env.SUPABASE_ADMIN_KEY;
export const supabaseAdmin = createClient(supabaseUrl, supabaseAdminKey);

export default supabaseAdmin;
