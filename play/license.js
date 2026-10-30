const bytes = value => Uint8Array.from(atob(value.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0));

export async function verifyLicense(token, publicKey, audience, subject, now = Date.now()) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3 || token.length > 8192 || !publicKey || !subject) return null;
    const header = JSON.parse(new TextDecoder().decode(bytes(parts[0])));
    const payload = JSON.parse(new TextDecoder().decode(bytes(parts[1])));
    if (header.alg !== 'ES256' || header.typ !== 'JWT' || payload.aud !== audience || payload.sub !== subject ||
        payload.entitlement !== 'full_content_upgrade' || !Number.isFinite(payload.exp) || !Number.isFinite(payload.iat) ||
        payload.exp * 1000 <= now || payload.iat * 1000 > now + 60000 || payload.exp - payload.iat > 72 * 3600) return null;
    const key = await crypto.subtle.importKey('jwk', publicKey, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify']);
    const valid = await crypto.subtle.verify({ name: 'ECDSA', hash: 'SHA-256' }, key, bytes(parts[2]), new TextEncoder().encode(parts[0] + '.' + parts[1]));
    return valid ? payload : null;
  } catch { return null; }
}
