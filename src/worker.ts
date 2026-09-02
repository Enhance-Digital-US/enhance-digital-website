import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export interface Env {
  ENHANCE_DIGITAL_CONTACT_FORM: KVNamespace;
  ASSETS: Fetcher;
}

const CONTACT_ENDPOINT = "/api/contact";

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Route POST /api/contact to the static forms plugin → KV storage
    if (request.method === "POST" && url.pathname === CONTACT_ENDPOINT) {
      try {
        const formData = await request.formData();
        const name = formData.get("static-form-name")?.toString();

        if (!name) {
          return new Response(JSON.stringify({ error: "Missing static-form-name field" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        // Remove the routing field before storing
        formData.delete("static-form-name");

        const data = Object.fromEntries(formData);
        const key = `${name}:${Date.now()}`;
        await env.ENHANCE_DIGITAL_CONTACT_FORM.put(key, JSON.stringify(data));

        return new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err) {
        console.error("Contact form error:", err);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // All other requests (GET /, static assets, SPA routing) → serve static files
    return env.ASSETS.fetch(request);
  },
};
