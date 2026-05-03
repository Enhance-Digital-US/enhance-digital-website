
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Terminal } from 'lucide-react';
import RandomCharacterEffect from './RandomCharacterEffect';
import TerminalOutput from './TerminalOutput';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString(),
      });
      setIsSubmitting(false);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 8000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] relative border-t border-zinc-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2
              className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-white uppercase"
            >
              &gt; <RandomCharacterEffect text="Initiate" /> <br />
              <span className="text-neon-cyan"><RandomCharacterEffect text="Sequence." /></span>
            </h2>

            <p className="text-base md:text-lg text-zinc-400 mb-12 max-w-md leading-relaxed font-mono">
              Ready to transform your small business with autonomous intelligence and drive more sales? Input your parameters below.
            </p>

            <div className="space-y-6 text-white font-mono text-sm">
              <div className="border-l-2 border-neon-cyan pl-4">
                <h4 className="text-zinc-500 uppercase tracking-widest mb-1">SYS.LOC</h4>
                <p>San Francisco, CA // Global Operations</p>
              </div>
              <div className="border-l-2 border-neon-cyan pl-4">
                <h4 className="text-zinc-500 uppercase tracking-widest mb-1">SYS.COM</h4>
                <p className="hover:text-neon-cyan transition-colors cursor-pointer">hello@enhancedigital.agency</p>
              </div>
            </div>
          </div>

          <div className="bg-black p-8 border border-neon-cyan/30 shadow-[0_0_30px_rgba(0,255,255,0.05)] relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900" />

            {isSuccess ? (
              <TerminalOutput />
            ) : (
              <form name="contact" onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-mono" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="flex items-center gap-2 mb-6 text-neon-cyan/50 border-b border-zinc-800 pb-4">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">Input_Parameters</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs text-zinc-400 uppercase">Name</label>
                    <input
                      {...register('name')}
                      id="name"
                      className="w-full bg-[#050505] border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                      placeholder=">_"
                    />
                    {errors.name && <p className="text-red-400 text-xs">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs text-zinc-400 uppercase">Email</label>
                    <input
                      {...register('email')}
                      id="email"
                      type="email"
                      className="w-full bg-[#050505] border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                      placeholder=">_"
                    />
                    {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs text-zinc-400 uppercase">Company</label>
                  <input
                    {...register('company')}
                    id="company"
                    className="w-full bg-[#050505] border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors"
                    placeholder=">_"
                  />
                  {errors.company && <p className="text-red-400 text-xs">{errors.company.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs text-zinc-400 uppercase">Payload</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full bg-[#050505] border border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                    placeholder="> Describe objectives..."
                  />
                  {errors.message && <p className="text-red-400 text-xs">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan font-mono uppercase tracking-widest py-4 flex items-center justify-center gap-2 hover:bg-neon-cyan/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? '[ PROCESSING... ]' : '[ TRANSMIT ]'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
