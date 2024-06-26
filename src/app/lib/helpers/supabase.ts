import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bteeehesqyliqdystvnl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZWVlaGVzcXlsaXFkeXN0dm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNDAzMjAsImV4cCI6MjAzNDkxNjMyMH0.M-ykpgJ7O1PM_J3ApEhQvKgl7Pbbe3NzIOFSwH_fSkw";
export const supabase = createClient(supabaseUrl, supabaseKey);
