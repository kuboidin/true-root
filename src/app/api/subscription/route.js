import { NextResponse } from 'next/server';
import {ERROR_400, ERROR_500, SUCCESS_200} from "@/lib/response";
import supabaseAdmin from "@/lib/supabase/admin";
import Subscription from "@/db/Subscription";

export async function POST(request) {
    try {
        const body = await request.json();
        if (body.name && body.email) {
            const name = body.name;
            const email = body.email;
            const { error } = await supabaseAdmin.from(Subscription.name).insert( { name, email });
            if (error) {
                throw error;
            }
            return NextResponse.json(SUCCESS_200, {status: SUCCESS_200.code});
        }
    } catch (e) {
        console.log('e: ', e);
        return NextResponse.json({...ERROR_500, error: e.message ?? e.toString()}, { status: ERROR_500.code });
    }
    return NextResponse.json(ERROR_400, { status: ERROR_400.code });
}
