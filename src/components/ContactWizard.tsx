'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    equipmentType: '',
    service: '',
    message: '',
    email: '',
    gdpr: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Ce champ est requis';
    if (!formData.email.trim()) newErrors.email = 'Ce champ est requis';
    if (!formData.gdpr) newErrors.gdpr = 'Veuillez accepter les conditions';
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) setSubmitted(true);
  };

  const inputClasses = (error?: string) =>
    `w-full px-4 py-3 rounded text-sm text-on-surface placeholder-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
      error
        ? 'border border-red-400 bg-red-50'
        : 'border border-outline-variant/40 bg-surface-container-high hover:border-outline'
    }`;

  const steps = [
    { num: 1, label: 'Projet' },
    { num: 2, label: 'Spécifications' },
    { num: 3, label: 'Revue' },
  ];

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-secondary" />
        </div>
        <h3 className="font-headline font-black text-on-surface text-2xl mb-2">
          Message envoyé !
        </h3>
        <p className="text-on-surface-variant max-w-sm mb-6">
          Notre équipe vous répondra dans les 4 heures ouvrées.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#b8f568] text-[#467000] font-headline font-bold px-6 py-3 rounded hover:bg-[#9dd84f] transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Stepper */}
      <div className="flex items-center gap-4 mb-10">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-headline font-bold transition-colors ${
                  step === s.num
                    ? 'bg-primary text-white'
                    : step > s.num
                    ? 'bg-secondary text-on-secondary-container'
                    : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {step > s.num ? (
                  <span className="material-symbols-outlined text-sm">check</span>
                ) : (
                  s.num
                )}
              </div>
              <span
                className={`font-label text-xs uppercase tracking-widest ${
                  step === s.num ? 'text-on-surface font-bold' : 'text-on-surface-variant'
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div
                className={`h-px w-8 ${step > s.num ? 'bg-secondary' : 'bg-outline-variant'}`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Step 1: Project Blueprint */}
        {step === 1 && (
          <div className="space-y-5">
            <div>
              <h2 className="font-headline font-bold text-on-surface text-xl mb-1">
                Project Blueprint
              </h2>
              <p className="text-on-surface-variant text-sm font-label">
                Décrivez votre besoin industriel
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Nom complet <span className="text-[#b8f568]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className={inputClasses(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                  Email <span className="text-[#b8f568]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@entreprise.fr"
                  className={inputClasses(errors.email)}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div>
              <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                Type d&apos;équipement
              </label>
              <select
                name="equipmentType"
                value={formData.equipmentType}
                onChange={handleChange}
                className={inputClasses()}
              >
                <option value="">Sélectionnez...</option>
                <option value="electronique">Électronique industrielle</option>
                <option value="hydraulique">Hydraulique</option>
                <option value="carrosserie">Carrosserie</option>
                <option value="sav">Service après-vente</option>
                <option value="autre">Autre</option>
              </select>
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="w-full sm:w-auto bg-primary text-white font-headline font-bold px-8 py-3.5 rounded hover:bg-primary-container transition-colors flex items-center gap-2"
            >
              Suivant
              <span className="material-symbols-outlined text-[#b8f568] text-base">
                arrow_forward
              </span>
            </button>
          </div>
        )}

        {/* Step 2: Service selection */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="font-headline font-bold text-on-surface text-xl mb-1">
                Service demandé
              </h2>
              <p className="text-on-surface-variant text-sm font-label">
                Choisissez le type d&apos;intervention
              </p>
            </div>

            {/* Radio service cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { value: 'maintenance', label: 'Maintenance prédictive', icon: 'build_circle' },
                { value: 'conception', label: 'Conception système', icon: 'engineering' },
                { value: 'reparation', label: 'Réparation', icon: 'handyman' },
              ].map(option => (
                <label
                  key={option.value}
                  className={`relative flex flex-col items-center gap-3 p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.service === option.value
                      ? 'border-primary bg-primary/5'
                      : 'border-outline-variant/40 hover:border-outline'
                  }`}
                >
                  <input
                    type="radio"
                    name="service"
                    value={option.value}
                    checked={formData.service === option.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span
                    className={`material-symbols-outlined text-3xl ${
                      formData.service === option.value
                        ? 'text-primary'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {option.icon}
                  </span>
                  <span
                    className={`font-label text-xs uppercase tracking-widest text-center ${
                      formData.service === option.value
                        ? 'text-on-surface font-bold'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {option.label}
                  </span>
                  {formData.service === option.value && (
                    <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-xs">check</span>
                    </div>
                  )}
                </label>
              ))}
            </div>

            <div>
              <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2">
                Message / Description du projet
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Décrivez votre projet, les contraintes techniques, les délais..."
                className={inputClasses() + ' resize-none'}
              />
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="bg-surface-container text-on-surface font-headline font-bold px-6 py-3.5 rounded hover:bg-surface-container-high transition-colors"
              >
                Retour
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="bg-primary text-white font-headline font-bold px-8 py-3.5 rounded hover:bg-primary-container transition-colors flex items-center gap-2"
              >
                Suivant
                <span className="material-symbols-outlined text-[#b8f568] text-base">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review + submit */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h2 className="font-headline font-bold text-on-surface text-xl mb-1">
                Revue de votre demande
              </h2>
              <p className="text-on-surface-variant text-sm font-label">
                Vérifiez vos informations avant envoi
              </p>
            </div>

            {/* Summary */}
            <div className="bg-surface-container rounded-xl p-6 space-y-3">
              {[
                { label: 'Nom', value: formData.name || '—' },
                { label: 'Email', value: formData.email || '—' },
                { label: 'Équipement', value: formData.equipmentType || '—' },
                { label: 'Service', value: formData.service || '—' },
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center">
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                    {item.label}
                  </span>
                  <span className="font-headline font-semibold text-on-surface text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* GDPR */}
            <label
              className={`flex items-start gap-3 cursor-pointer ${
                errors.gdpr ? 'text-red-500' : 'text-on-surface-variant'
              }`}
            >
              <input
                type="checkbox"
                name="gdpr"
                checked={formData.gdpr}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 accent-primary cursor-pointer"
              />
              <span className="text-sm leading-relaxed font-label">
                J&apos;accepte que mes données soient traitées par Senergy pour le traitement de ma
                demande.
              </span>
            </label>
            {errors.gdpr && (
              <p className="text-xs text-red-500 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.gdpr}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-surface-container text-on-surface font-headline font-bold px-6 py-3.5 rounded hover:bg-surface-container-high transition-colors"
              >
                Retour
              </button>
              <button
                type="submit"
                className="bg-primary text-white font-headline font-bold px-8 py-3.5 rounded hover:bg-primary-container transition-colors flex items-center gap-2"
              >
                Envoyer la demande
                <ArrowRight size={16} className="text-[#b8f568]" />
              </button>
            </div>
          </div>
        )}
      </form>
    </>
  );
}
