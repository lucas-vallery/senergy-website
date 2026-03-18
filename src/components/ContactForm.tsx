'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  gdpr: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  gdpr?: string;
}

interface ContactFormProps {
  includeEquipment?: boolean;
}

export default function ContactForm({ includeEquipment = false }: ContactFormProps) {
  const t = useTranslations('contact');

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    gdpr: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [equipment, setEquipment] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = t('errors.required');
    if (!formData.lastName.trim()) newErrors.lastName = t('errors.required');
    if (!formData.email.trim()) {
      newErrors.email = t('errors.required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('errors.email');
    }
    if (!formData.message.trim()) newErrors.message = t('errors.required');
    if (!formData.gdpr) newErrors.gdpr = t('errors.gdpr');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
    } as ContactFormData));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-[#b8f568]/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-[#b8f568]" />
        </div>
        <h3 className="font-barlow text-2xl font-bold text-primary mb-2">{t('success.title')}</h3>
        <p className="text-gray-500 max-w-sm">{t('success.text')}</p>
      </div>
    );
  }

  const inputClasses = (error?: string) =>
    `w-full px-4 py-3 border rounded-lg text-sm text-on-surface placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
      error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1.5">
            {t('fields.firstName')} <span className="text-[#b8f568]">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder={t('fields.placeholderFirstName')}
            className={inputClasses(errors.firstName)}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.firstName}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1.5">
            {t('fields.lastName')} <span className="text-[#b8f568]">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder={t('fields.placeholderLastName')}
            className={inputClasses(errors.lastName)}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1.5">
            {t('fields.email')} <span className="text-[#b8f568]">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t('fields.placeholderEmail')}
            className={inputClasses(errors.email)}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1.5">
            {t('fields.phone')}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('fields.placeholderPhone')}
            className={inputClasses()}
          />
        </div>
      </div>

      {/* Company & Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1.5">
            {t('fields.company')}
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={t('fields.placeholderCompany')}
            className={inputClasses()}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1.5">
            {t('fields.subject')}
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={inputClasses() + ' cursor-pointer'}
          >
            <option value="">{t('fields.placeholderSubject')}</option>
            <option value="quote">{t('subjects.quote')}</option>
            <option value="info">{t('subjects.info')}</option>
            <option value="sav">{t('subjects.sav')}</option>
            <option value="partnership">{t('subjects.partnership')}</option>
            <option value="other">{t('subjects.other')}</option>
          </select>
        </div>
      </div>

      {/* Equipment field for SAV */}
      {includeEquipment && (
        <div>
          <label className="block text-sm font-medium text-on-surface mb-1.5">
            Équipement concerné
          </label>
          <input
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            placeholder="Marque, modèle, numéro de série..."
            className={inputClasses()}
          />
        </div>
      )}

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-on-surface mb-1.5">
          {t('fields.message')} <span className="text-[#b8f568]">*</span>
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('fields.placeholderMessage')}
          rows={5}
          className={inputClasses(errors.message) + ' resize-none'}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <AlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      {/* GDPR */}
      <div>
        <label className={`flex items-start gap-3 cursor-pointer ${errors.gdpr ? 'text-red-500' : 'text-gray-600'}`}>
          <input
            type="checkbox"
            name="gdpr"
            checked={formData.gdpr}
            onChange={handleChange}
            className="mt-0.5 w-4 h-4 accent-primary cursor-pointer"
          />
          <span className="text-sm leading-relaxed">{t('fields.gdpr')}</span>
        </label>
        {errors.gdpr && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1 ml-7">
            <AlertCircle size={12} /> {errors.gdpr}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-primary text-white font-semibold py-3.5 px-6 rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {t('fields.submit')}
      </button>
    </form>
  );
}
