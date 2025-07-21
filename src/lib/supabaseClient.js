import { createClient } from '@supabase/supabase-js';

// Mock Supabase client that won't make any actual API calls
const mockSupabase = {
  from: () => ({
    select: () => ({
      data: [],
      error: null,
      status: 200,
      statusText: 'OK'
    }),
    insert: () => ({
      data: [],
      error: null,
      status: 201,
      statusText: 'Created'
    }),
    update: () => ({
      data: [],
      error: null,
      status: 200,
      statusText: 'OK'
    }),
    delete: () => ({
      data: [],
      error: null,
      status: 200,
      statusText: 'OK'
    })
  }),
  // Add other methods as needed by your components
};

// Export the mock Supabase client
export const supabase = mockSupabase;
export default mockSupabase;
