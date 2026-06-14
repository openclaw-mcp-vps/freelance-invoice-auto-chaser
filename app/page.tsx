export default function Home() {
  const faqs = [
    {
      q: 'Which invoice platforms do you support?',
      a: 'We integrate with QuickBooks and FreshBooks to automatically detect overdue invoices. More integrations coming soon.'
    },
    {
      q: 'How does the escalating tone work?',
      a: 'Emails start friendly at 1 day overdue, become firmer at 7 days, and adopt a formal/legal tone at 30 days. You can customize every template.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. Cancel anytime from your dashboard with no questions asked. Your data is exported and deleted within 30 days.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Billing Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop chasing invoices.<br />
          <span className="text-[#58a6ff]">Let automation do it.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Invoice Auto-Chaser detects overdue payments and sends smart, escalating email sequences — so you get paid faster without the awkward follow-ups.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Free Trial
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required · Cancel anytime</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[['3x', 'Faster payments'], ['85%', 'Open rate on follow-ups'], ['0 hrs', 'Manual chasing']].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited overdue invoice detection',
              'Escalating email sequences',
              'QuickBooks & FreshBooks sync',
              'Email open rate tracking',
              'Customizable follow-up templates',
              'Dashboard & payment status'
            ].map(f => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started — $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} Invoice Auto-Chaser. All rights reserved.
      </footer>
    </main>
  )
}
