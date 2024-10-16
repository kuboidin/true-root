import {ERROR_500} from "@/lib/response";

export async function apiGET(url, headers = {'Content-Type': 'application/json'}) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers
        });
        return response.json();
    } catch (e) {
        return { code: ERROR_500.code,error: e.message };
    }
}

export async function apiPOST(url, body = {}, headers = {'Content-Type': 'application/json'}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        });
        return response.json();
    } catch (e) {
        return { code: ERROR_500.code,error: e.message };
    }
}

export async function apiForm(url, formData, method = 'POST') {
    try {
        const response = await fetch(url, {
            method,
            body: formData
        });

        return response.json();
    } catch (e) {
        return { code: ERROR_500.code,error: e.message };
    }
}

export async function apiPUT(url, body) {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });

        return response.json();
    } catch (e) {
        return { code: ERROR_500.code,error: e.message };
    }
}

export async function apiDELETE(url, body) {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        });

        return response.json();
    } catch (e) {
        return { code: ERROR_500.code,error: e.message };
    }
}
