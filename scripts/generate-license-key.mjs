// Run privately during backend setup. Do not commit the private output.
const keys = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
process.stdout.write(JSON.stringify({ private: await crypto.subtle.exportKey('jwk', keys.privateKey), public: await crypto.subtle.exportKey('jwk', keys.publicKey) }, null, 2) + '\n');
