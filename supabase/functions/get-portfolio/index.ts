import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? ""
    );

    const url = new URL(req.url);
    const endpoint = url.searchParams.get("endpoint");

    console.log(`[get-portfolio] Fetching endpoint: ${endpoint}`);

    let data;
    let error;

    switch (endpoint) {
      case "me":
        ({ data, error } = await supabase.from("portfolio_me").select("*").single());
        break;

      case "projects":
        ({ data, error } = await supabase.from("portfolio_projects").select("*").order("created_at", { ascending: false }));
        break;

      case "skills":
        const { data: skillsData, error: skillsError } = await supabase
          .from("portfolio_skills")
          .select("*")
          .order("level", { ascending: false });
        
        if (skillsError) throw skillsError;
        
        // Group by category
        data = {
          frontend: skillsData?.filter(s => s.category === "frontend") || [],
          backend: skillsData?.filter(s => s.category === "backend") || [],
          tools: skillsData?.filter(s => s.category === "tools") || [],
          softskills: skillsData?.filter(s => s.category === "softskills") || [],
        };
        break;

      case "fun":
        ({ data, error } = await supabase.from("portfolio_fun").select("*"));
        break;

      default:
        return new Response(
          JSON.stringify({ error: "Invalid endpoint. Use: me, projects, skills, or fun" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
    }

    if (error) {
      console.error(`[get-portfolio] Error:`, error);
      throw error;
    }

    console.log(`[get-portfolio] Success: ${endpoint}`);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });

  } catch (error: any) {
    console.error("[get-portfolio] Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
