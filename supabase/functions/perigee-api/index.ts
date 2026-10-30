import { createHandler } from '../_shared/perigee-api.mjs';

Deno.serve(createHandler(Deno.env.toObject()));
