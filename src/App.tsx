import { useEffect, useState } from 'react'
import bwCornerPhotoUrl from '../resources/photos/V+E-8328.jpg'
import clrLandscapePhotoUrl from '../resources/photos/V+E-8274.jpg'

function App() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const target = new Date(2027, 3, 17, 0, 0, 0).getTime()

    const tick = () => {
      const now = Date.now()
      const diff = target - now

      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0, minutes: 0 })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)

      setCountdown({ days, hours, minutes })
    }

    tick()
    const timer = setInterval(tick, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main className="scroll-smooth text-slate-100">
      <section className="h-screen bg-slate-950 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl md:text-6xl">April 17, 2026</h1>
        <p className="mt-4 max-w-2xl text-slate-300 text-base sm:text-lg">
          Join us in Baltimore, Maryland
        </p>
      </section>

      <section className="h-[150vh] md:h-screen bg-slate-900 flex flex-col items-center justify-start md:justify-center text-center md:px-0">
        <div className="flex w-full flex-col items-center gap-8 min-h-screen md:min-h-0 md:flex-row md:items-start md:justify-between text-center">
          <div className="h-screen w-full md:flex-1 md:order-1 mt-0 md:mt-8 px-6">
            <div className="mt-8 w-full max-w-[60vw] mx-auto grid gap-4 grid-cols-3 text-center">
              {['Days', 'Hours', 'Minutes'].map((label, idx) => {
                const value = [countdown.days, countdown.hours, countdown.minutes][idx]
                const abbr = ['Day', 'Hr', 'Min'][idx]
                return (
                  <div key={label} className="flex flex-col items-center justify-center rounded-3xl bg-slate-900/80 px-4 py-6 shadow-lg shadow-slate-950/20 text-center">
                    <p className="text-2xl font-semibold text-white">{value.toString().padStart(2, '0')}</p>
                    <span className="mt-2 block text-sm uppercase tracking-[0.35em] text-slate-400">
                      <span className="hidden sm:inline">{label}</span>
                      <span className="inline sm:hidden">{abbr}</span>
                    </span>
                  </div>
                )
              })}
            </div>
            <h2 className="mt-8 text-3xl font-semibold sm:text-4xl">Event Information</h2>
            <ul className="mt-4 mx-auto max-w-xl text-left text-slate-300 text-base sm:text-lg list-disc list-inside space-y-2">
              <li>39 miles from Washington, DC</li>
              <li>175 miles from Union, NJ</li>
              <li>247 miles from Virginia Beach, VA</li>
              <li>8,451 miles from Bolinao, Pangasinan</li>
              <li>8,749 miles from Astoria, Cebu</li>
            </ul>
          </div>
          <div className="max-h-screen w-fit md:max-w-[66vw] mt-auto self-end shadow-slate-950/50 md:order-2">
            <img
              src={bwCornerPhotoUrl}
              alt="V+E 1"
              className="max-h-screen max-w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      <section className="h-screen bg-slate-950/95 flex flex-col items-center justify-center px-6 text-center">
        <span className="text-sm uppercase tracking-[0.35em] text-slate-400">To be Sent & Announced</span>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Invitations</h2>
        <ul className="mt-4 max-w-2xl text-left text-slate-300 text-base sm:text-lg list-disc list-inside space-y-2">
          <li>RSVP information</li>
          <li>Wedding ceremony location</li>
          <li>Wedding reception location</li>
          <li>Travel and lodging information</li>
          <li>Activities around Baltimore</li>
        </ul>
      </section>

      <section className="bg-slate-950/95 flex flex-col items-center justify-center px-0 text-center overflow-hidden">
        <div className="w-screen max-w-none">
          <img
            src={clrLandscapePhotoUrl}
            alt="V+E 8274"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>
    </main>
  )
}

export default App
