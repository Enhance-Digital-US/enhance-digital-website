import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export interface Env {
  ENHANCE_DIGITAL_CONTACT_FORM: KVNamespace;
}

export const onRequest: PagesFunction<Env> = (context) => {
  return staticFormsPlugin({
    respondWith: async ({ formData, name }) => {
      const kv = context.env.ENHANCE_DIGITAL_CONTACT_FORM;
      const data = Object.fromEntries(formData);
      
      const key = `${name}:${Date.now()}`;
      await kv.put(key, JSON.stringify(data));
      
      return new Response(JSON.stringify({ success: true, message: `Saved submission for ${name}` }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    },
  })(context);
};
