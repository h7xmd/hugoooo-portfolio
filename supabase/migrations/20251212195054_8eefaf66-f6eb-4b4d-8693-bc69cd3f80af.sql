-- Portfolio Me table
CREATE TABLE public.portfolio_me (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  bio TEXT,
  avatar_url TEXT,
  social_github TEXT,
  social_linkedin TEXT,
  social_email TEXT,
  main_skills TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Portfolio Projects table
CREATE TABLE public.portfolio_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  technologies TEXT[],
  github_url TEXT,
  live_url TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Portfolio Skills table
CREATE TABLE public.portfolio_skills (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('frontend', 'backend', 'tools', 'softskills')),
  level INTEGER DEFAULT 0 CHECK (level >= 0 AND level <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Portfolio Fun table
CREATE TABLE public.portfolio_fun (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL CHECK (type IN ('hobby', 'fact', 'curiosity', 'easter_egg')),
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Contact Messages table
CREATE TABLE public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.portfolio_me ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_fun ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Public read policies for portfolio data
CREATE POLICY "Public read access" ON public.portfolio_me FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.portfolio_projects FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.portfolio_skills FOR SELECT USING (true);
CREATE POLICY "Public read access" ON public.portfolio_fun FOR SELECT USING (true);

-- Contact messages: anyone can insert
CREATE POLICY "Anyone can submit contact" ON public.contact_messages FOR INSERT WITH CHECK (true);