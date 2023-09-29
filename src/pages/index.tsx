import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bxqrmzvwscpmnimeeesf.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4cXJtenZ3c2NwbW5pbWVlZXNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3NTU4NDAsImV4cCI6MjAwODMzMTg0MH0.GZBcMyenIRwCyyFdapZQGSX07iIjjitUU0Zsus1an50'

const supabase = createClient(supabaseUrl, supabaseKey, {
  realtime: {
    params: {
      log_level: 'info',
    },
  },
})

function MyApp() {
  const subscribe = async () => {
    await supabase.auth.signInWithPassword({
      email: 'dshukertjr@gmail.com',
      password: 'password',
    })

    supabase
      .channel('foo')
      .on('postgres_changes', { event: '*', schema: 'public' }, (payload) => {
        console.log(payload)
      })
      .subscribe((status, error) => {
        console.log({ status, error })
      })
  }
  ;``
  return (
    <div>
      <button
        className="bg-purple-500 text-white py-1 px-2"
        onClick={subscribe}
      >
        subscribe
      </button>
    </div>
  )
}

export default MyApp
