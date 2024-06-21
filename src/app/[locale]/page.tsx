import { useTranslations } from 'next-intl'
import Button from './components/Button'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <h1 className='text-center text-7xl font-extrabold leading-tight'>
          GIA LONG TRAN
        </h1>
        <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
          {t(
            'An online business managing digital project in Vietnam. Currently based in Canada'
          )}
        </div>
        
        
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Innovative approach to developing websites and apps.'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Project Oriented')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Managing multiple digital projects, mainly in healthcare'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Collaborative')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Connect different teams to work on different projects remotely.'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
