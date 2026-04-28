import { useEffect, useState } from 'react'
import bwCornerPhotoUrl from '../resources/photos/V+E-8328.jpg'
import clrLandscapePhotoUrl from '../resources/photos/V+E-8390-cropped.png'
import carIconUrl from '../resources/icons/car.svg'
import planeIconUrl from '../resources/icons/plane.svg'
import envelopeOpenUrl from '../resources/photos/envelopeOpen.png'
import envelopeFrontUrl from '../resources/photos/envelopeFront.png'
import saveTheDateUrl from '../resources/photos/saveTheDate.png'
import envelopeClosedUrl from '../resources/photos/envelopeClosedDetailv3.png'

function App() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0 })
  const [envelopeStatus, setEnvelopeStatus] = useState<'closed' | 'loading' | 'open'>('closed')
  const [showScrollDown, setShowScrollDown] = useState(false)

  const faqs = [
    {
      question: 'Where will the wedding and reception be held?',
      answer: 'Baltimore, Maryland',
    },
    {
      question: 'Will there be a wedding ceremony?',
      answer: 'Yes, we will be having a Catholic Nuptial Mass at 2PM. All are welcomed and encouraged to attend. The reception will be in the evening.',
    },
    {
      question: 'When do I need to RSVP?',
      answer: 'Formal invitations will be sent out later this year with RSVP information.',
    },
    {
      question: 'Will there be accommodation(s) near the venue or hotel room block(s)?',
      answer: 'Yes, we will have multiple hotel blocks available. Information will be in the formal invitation.',
    },
    {
      question: 'Can I bring a guest?',
      answer: 'We are excited to celebrate this day surrounded by our closest family and friends. We are only accommodating guests formally invited on the wedding invitation.',
    },
    {
      question: 'Can I bring my kids to the reception?',
      answer: 'The wedding reception will be an Adults Only (21+) occasion. We sincerely appreciate you taking the time to celebrate with us!',
    },
  ]

  const travelDistances = {
    car: [
      { miles: '39', location: 'Washington, DC' },
      { miles: '175', location: 'Union, NJ' },
      { miles: '247', location: 'Virginia Beach, VA' },
    ],
    plane: [
      { miles: '8,451', location: 'Bolinao, Pangasinan' },
      { miles: '8,749', location: 'Astorias, Cebu' },
    ],
  }

  useEffect(() => {
    const target = new Date('2027-04-17T14:00:00-04:00').getTime()

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

  const handleEnvelopeOpen = () => {
    if (envelopeStatus === 'closed') {
      setEnvelopeStatus('loading')
      return
    }

    if (envelopeStatus === 'loading') {
      setEnvelopeStatus('open')
    }
  }

  useEffect(() => {
    if (envelopeStatus !== 'open') {
      setShowScrollDown(false)
      return
    }

    const scrollDownTimer = window.setTimeout(() => {
      setShowScrollDown(true)
    }, 1000)

    return () => window.clearTimeout(scrollDownTimer)
  }, [envelopeStatus])

  return (
    <main className="scroll-smooth text-zinc-100">
      <section
        className="h-screen bg-black flex flex-col items-center justify-center px-6 text-center cursor-pointer"
        onClick={handleEnvelopeOpen}
      >
        <div className="relative mt-8 mb-8 w-[90vw] md:w-[40vw]">
          <img
            src={envelopeClosedUrl}
            alt="Closed save the date"
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-700 ease-in-out ${envelopeStatus === 'closed' ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          />
          <div className={`relative w-full transition-opacity duration-500 ${envelopeStatus === 'closed' ? 'opacity-0' : 'opacity-100'}`}>
            <img
              src={envelopeOpenUrl}
              alt="Open save the date envelope"
              className={`w-full h-auto transition-all duration-700 ease-in-out ${envelopeStatus === 'open' ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}`}
            />
            <img
              src={saveTheDateUrl}
              alt="Save the date card"
              className={`absolute left-1/2 -translate-x-1/2 bottom-5 w-[80%] h-auto object-contain transition-transform duration-300 ${envelopeStatus === 'loading' ? 'hover:-translate-y-[20%]' : ''}`}
            />
            <img
              src={envelopeFrontUrl}
              alt="Open save the date front"
              className={`absolute left-0 right-0 bottom-0 w-full h-auto object-contain drop-shadow-[0_-18px_28px_rgba(15,23,42,0.7)] transition-all duration-700 ease-in-out ${envelopeStatus === 'open' ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'}`}
            />
          </div>
          <p className={`text-sm uppercase tracking-[0.25em] text-zinc-600 ${envelopeStatus === 'closed' ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>click to open</p>
          <p className={`text-sm uppercase tracking-[0.25em] text-zinc-600 transition-opacity duration-700 ${envelopeStatus === 'open' &&showScrollDown ? 'opacity-100' : 'opacity-0'}`}>
              scroll down
            </p>
        </div>
      </section>

      {envelopeStatus === 'open' && (
        <>
          <section className="h-[172vh] md:h-screen bg-black flex flex-col items-center justify-start md:justify-center text-center md:px-0">
        <div className="flex w-full flex-col items-center gap-8 min-h-screen md:min-h-0 md:flex-row md:items-start md:justify-between text-center">
          <div className="min-h-screen w-full md:flex-1 md:order-1 mt-0 md:mt-8 px-6">
            <p className="mt-8 text-zinc-400">save this date</p>
            <h1 className="mt-2 text-4xl font-semibold md:text-5xl">April 17, 2027</h1>
            <h3 className="mt-8 font-semibold text-2xl">FRIENDS & FAMILY</h3>
            <p className="mt-2 text-zinc-400">from near and far</p>
            <ul className="mt-4 mx-auto w-fit text-left text-zinc-300 text-base md:text-lg list-none space-y-2">
              {[...travelDistances.car.map((entry) => ({ ...entry, mode: 'car' as const })), ...travelDistances.plane.map((entry) => ({ ...entry, mode: 'plane' as const }))].map(({ mode, miles, location }) => (
                <li key={`${mode}-${location}`} className="flex items-center justify-start gap-2">
                  <img src={mode === 'car' ? carIconUrl : planeIconUrl} alt={mode === 'car' ? 'Car' : 'Plane'} className="w-4 h-4 flex-shrink-0" />
                  {miles} miles from {location}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-zinc-400">to Baltimore, Maryland</p>
            <div className="mt-8 mb-8 w-full max-w-[40vw] mx-auto grid gap-4 grid-cols-3 text-center">
              {['Days', 'Hours', 'Minutes'].map((label, idx) => {
                const value = [countdown.days, countdown.hours, countdown.minutes][idx]
                const abbr = ['Day', 'Hr', 'Min'][idx]
                return (
                  <div key={label} className="flex flex-col items-center justify-center rounded-3xl bg-black/80 px-4 py-6 shadow-lg shadow-black/20 text-center">
                    <p className="text-2xl font-semibold text-white">{value.toString().padStart(2, '0')}</p>
                    <span className="mt-2 block text-sm uppercase tracking-[0.35em] text-zinc-400">
                      <span className="hidden md:inline">{label}</span>
                      <span className="inline md:hidden">{abbr}</span>
                    </span>
                  </div>
                )
              })}
            </div>
            <span className="text-sm uppercase tracking-[0.35em] text-zinc-400">until the big day!</span>
            
          </div>
          <div className="max-h-screen w-fit md:max-w-[66vw] mt-auto self-end shadow-zinc-950/50 md:order-2">
            <img
              src={bwCornerPhotoUrl}
              alt="V+E 1"
              className="max-h-screen max-w-full h-auto object-contain"
            />
          </div>
        </div>
          </section>

          <section className="min-h-screen bg-black flex flex-col items-center justify-center px-6 text-center">
        <span className="text-sm mt-6 uppercase tracking-[0.35em] text-zinc-400">Frequently Asked Questions</span>
        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">FAQ</h2>
        <dl className="mt-8 mb-6 grid w-full max-w-5xl text-left text-zinc-300 text-sm md:text-base lg:text-lg divide-y divide-zinc-700">
          {faqs.map(({ question, answer }) => (
            <div key={question} className="grid gap-2 px-4 py-4 md:gap-3 md:px-6 md:py-5 md:[grid-template-columns:2fr_3fr] md:items-center">
              <dt className="font-semibold text-white md:pr-4">{question}</dt>
              <dd className="leading-6 text-zinc-300">{answer}</dd>
            </div>
          ))}
        </dl>
          </section>

          <section className="bg-black/95 flex flex-col items-center justify-center px-0 text-center overflow-hidden">
        <div className="w-screen max-w-none">
          <img
            src={clrLandscapePhotoUrl}
            alt="V+E 8274"
            className="w-full h-auto object-contain"
          />
        </div>
          </section>
        </>
      )}
    </main>
  )
}

export default App
