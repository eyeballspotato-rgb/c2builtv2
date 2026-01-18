
'use client'
export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif' }}>
      <section style={{ background:'#111', color:'#fff', padding:'60px' }}>
        <h1>C2 Built Interior Remodeling</h1>
        <p>Rugged trim & door installation serving Northwest Arkansas</p>
        <a href="tel:4797213762">
          <button style={{ padding:'12px 20px', marginTop:'20px' }}>
            Call Now: 479-721-3762
          </button>
        </a>
      </section>

      <section style={{ padding:'40px' }}>
        <h2>Request a Free Quote</h2>
        <form>
          <input placeholder="Name" style={{ display:'block', margin:'10px 0', padding:'10px', width:'100%' }} />
          <input placeholder="Phone" style={{ display:'block', margin:'10px 0', padding:'10px', width:'100%' }} />
          <textarea placeholder="Project details" style={{ display:'block', margin:'10px 0', padding:'10px', width:'100%' }} />
          <button type="submit" style={{ padding:'12px 20px' }}>Submit</button>
        </form>
      </section>

      <footer style={{ background:'#111', color:'#fff', padding:'20px', textAlign:'center' }}>
        © C2 Built · Northwest Arkansas
      </footer>
    </main>
  )
}
