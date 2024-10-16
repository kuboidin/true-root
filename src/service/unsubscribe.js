import supabaseAdmin from "@/lib/supabase/admin";
import Subscription from "@/db/Subscription";

export async function unsubscribe(email) {
    if (uid) {
        await supabaseAdmin.from(Subscription.name)
            .update({
                active: false,
                deactivated_on: new Date()
            })
            .eq('email', email);
    }

    const { error } = await supabaseAdmin.from(Subscription.name).insert( { name, email }).select('id');
    if (error) {
        throw error;
    }
}