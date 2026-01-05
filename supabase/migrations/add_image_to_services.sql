-- Add image_url column to services table
ALTER TABLE public.services 
ADD COLUMN image_url text;

-- Optional: Create storage buckets if they don't exist (this usually requires pg_net or extensions, so standard SQL might not work for storage creation in all Supabase setups, but policy creation works)
-- We will instruct the user to create 'journal' and 'services' buckets or use a common one.

-- Policy to allow public read of storage (if not already set for these buckets)
-- Note: User needs to create 'journal' and 'services' buckets in the Storage section of Supabase Dashboard.
