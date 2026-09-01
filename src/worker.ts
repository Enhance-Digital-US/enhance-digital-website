import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export interface Env {
  ENHANCE_DIGITAL_CONTACT_FORM: KVNamespace;
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // Only intercept POST requests to / for the static form plugin
    if (request.method === "POST" && url.pathname === "/") {
      const pagesFunction = staticFormsPlugin({
        respondWith: async ({ formData, name }) => {
          const kv = env.ENHANCE_DIGITAL_CONTACT_FORM;
          const data = Object.fromEntries(formData);
          
          const key = `${name}:${Date.now()}`;
          await kv.put(key, JSON.stringify(data));
          
          return new Response(JSON.stringify({ success: true, message: `Saved submission for ${name}` }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
          });
        },
      });

      const context = {
        request,
        env,
        waitUntil: ctx.waitUntil.bind(ctx),
        passThroughOnException: ctx.passThroughOnException.bind(ctx),
        next: async () => env.ASSETS.fetch(request),
        data: {},
        params: {},
        functionPath: "/",
      } as any; // Cast as any to bypass strict internal Pages context types

      return pagesFunction(context);
    }

    // For all other requests (GET, static assets, etc.), serve from Cloudflare Workers Assets
    return env.ASSETS.fetch(request);
  }
};
