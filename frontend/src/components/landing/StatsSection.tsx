import { Users, Globe, Zap, Smile } from 'lucide-react'

const stats = [
  {
    icon:  Globe,
    value: '100%',
    unit:  '',
    label: 'en la nube — accede desde cualquier dispositivo',
    color: 'text-brand-cyan',
    bg:    'bg-brand-cyan/10',
  },
  {
    icon:  Users,
    value: 'Hasta 20',
    unit:  '',
    label: 'usuarios concurrentes en tu aplicación',
    color: 'text-brand-electric',
    bg:    'bg-brand-electric/10',
  },
  {
    icon:  Zap,
    value: '0',
    unit:  '',
    label: 'instalaciones necesarias — solo un navegador',
    color: 'text-amber',
    bg:    'bg-amber/10',
  },
  {
    icon:  Smile,
    value: 'Fácil',
    unit:  '',
    label: 'para principiantes con conocimientos básicos',
    color: 'text-green-400',
    bg:    'bg-green-400/10',
  },
]

export default function StatsSection() {
  return (
    <section id="stats" className="bg-brand-dark border-y border-border-dark">
      <div className="container py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, unit, label, color, bg }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center`}>
                <Icon size={22} className={color} />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {value}
                  {unit && <span className="text-base font-medium text-text-light ml-1">{unit}</span>}
                </p>
                <p className="text-xs text-text-light mt-1 leading-snug">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
