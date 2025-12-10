import React, { useState } from 'react';
import { Send, Instagram, Facebook, Youtube, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function Footer() {
    const [email, setEmail] = useState('');
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setEmail('');
    };

    return (
        <div className="flex items-center justify-center mt-12">
            <div className="w-full bg-info shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-center p-8 lg:p-16 gap-12">

                    {/* Left Section */}
                    <div className="flex-1 max-w-[400px]">
                        <h2 className="text-white text-xl font-semibold mb-6 leading-relaxed">
                            {t("home.footer_news_title")}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                placeholder={t("home.footer_email_placeholder")}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-5 py-4 rounded-lg bg-white/15 border border-white/30 text-white placeholder-white/70 outline-none focus:bg-white/25 focus:border-white/50 transition-all"
                                required
                            />

                            <button
                                type="submit"
                                className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
                            >
                                {t("home.footer_subscribe_btn")}
                            </button>
                        </form>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 min-w-[300px]">
                        <h3 className="text-white text-lg font-medium mb-3">
                            {t("home.footer_about_title")}
                        </h3>

                        <p className="text-white/90 text-sm leading-relaxed mb-4">
                            {t("home.footer_about_text_1")}
                        </p>
                        <p className="text-white/90 text-sm leading-relaxed mb-6">
                            {t("home.footer_about_text_2")}
                        </p>
                        <p className="text-white/90 text-sm leading-relaxed mb-6">
                            {t("home.footer_about_text_3")}
                        </p>
                    </div>

                    {/* Social */}
                    <div className="space-y-3">
                        <h4 className="text-white font-medium text-sm mb-3">
                            {t("home.footer_social_title")}
                        </h4>

                        <div className='flex flex-col gap-4 items-center'>
                              <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Send className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-white hover:text-white/80 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <h2 className='text-xl text-white'> +998700140123</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
