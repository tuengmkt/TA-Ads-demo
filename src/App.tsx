/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { translations } from './translations';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function App() {
  const [lang, setLang] = useState<'vi' | 'en'>('vi');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      <nav className="fixed w-full z-50 bg-white/90 text-slate-950 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-blue-950">TA ADS ACADEMY</div>
          <div className="hidden md:flex gap-8 text-sm font-semibold text-slate-700">
            <a href="#services" className="hover:text-blue-700 transition-colors">{t.nav.services}</a>
            <a href="#why-us" className="hover:text-blue-700 transition-colors">{t.nav.whyUs}</a>
            <a href="#contact" className="hover:text-blue-700 transition-colors">{t.nav.contact}</a>
          </div>
          <div className='flex gap-2 items-center'>
            <Button variant="ghost" className='text-slate-950' onClick={() => setLang('vi')}>VI</Button>
            <Button variant="ghost" className='text-slate-950' onClick={() => setLang('en')}>EN</Button>
            <Button className="bg-blue-950 hover:bg-blue-900 text-white">Get Started</Button>
          </div>
        </div>
      </nav>

      <main>
        <section className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-950">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {lang === 'vi' ? "Làm chủ mọi nền tảng" : "Master Every Platform"}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
            <Button size="lg" className="bg-blue-600 text-white px-8 py-6 text-lg hover:bg-blue-700">
             {t.hero.cta}
            </Button>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold mb-4">{t.services.title}</h2>
            <p className="text-lg text-slate-300 mb-12">{t.services.desc}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {t.services.items.map((item, i) => (
                <Card key={i} className="p-6 bg-slate-800 border-slate-700 text-white">
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-950">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold mb-4">{t.contact.title}</h2>
                <p className="text-lg text-slate-300 mb-12">{t.contact.subtitle}</p>
                <form className="space-y-4">
                    <Input placeholder={t.contact.name} className='bg-slate-800 border-none'/>
                    <Input placeholder={t.contact.phone} className='bg-slate-800 border-none' />
                    <Select>
                        <SelectTrigger className='bg-slate-800 border-none'>
                            <SelectValue placeholder={t.contact.service} />
                        </SelectTrigger>
                        <SelectContent className='bg-slate-800'>
                            <SelectItem value="course">{t.services.items[0].title}</SelectItem>
                            <SelectItem value="ads">{t.services.items[1].title}</SelectItem>
                            <SelectItem value="fanpage">{t.services.items[2].title}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input placeholder={t.contact.domain} className='bg-slate-800 border-none' />
                    <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">{t.contact.submit}</Button>
                </form>
            </div>
        </section>

        <footer className="bg-white text-blue-950 py-12 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h3 className='font-bold text-2xl mb-4'>TA ADS ACADEMY</h3>
                <p>Hotline: 0779.969.579</p>
                <p className='mt-2'>Copy rights @2026- Design by TueNG</p>
             </div>
             <div className="h-64 w-full rounded-lg overflow-hidden relative">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.119958319688!2d108.1994065!3d16.0592965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219198305c935%3A0x63351f043e03504a!2zSzI0OS81My8xMCBIw6AgSHV5IFThuq1wLCBUaGFuaCBLaMOqLCDEkMOgIE অ্যাbmcsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1714652230000!5m2!1svi!2s" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                ></iframe>
                <a 
                    href="https://maps.app.goo.gl/oTsXy7uVCdftVSnTA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                >
                    {/* Invisible overlay to make the whole map clickable */}
                </a>
             </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
