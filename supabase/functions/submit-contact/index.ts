import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      { status: 405, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    console.log(`[submit-contact] Received submission from: ${email}`);

    // Validation
    if (!name || name.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Valid email is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!message || message.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (message.length > 1000) {
      return new Response(
        JSON.stringify({ error: "Message must be less than 1000 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Save to database
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        message: message.trim(),
      })
      .select()
      .single();

    if (error) {
      console.error("[submit-contact] Database error:", error);
      throw error;
    }

    console.log(`[submit-contact] Message saved successfully: ${data.id}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );

  } catch (error: any) {
    console.error("[submit-contact] Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
