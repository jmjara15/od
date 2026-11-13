// Datos generales del sitio.
// POR CONFIRMAR: el WhatsApp y el correo son datos de ejemplo.
// Cámbialos aquí y se actualizan en todo el sitio.
export const site = {
  name: 'Obregon Design',
  url: 'https://obregondesign.com',
  email: 'contacto@obregondesign.com', // POR CONFIRMAR
  whatsapp: '520000000000', // POR CONFIRMAR: solo dígitos, con código de país
  whatsappDisplay: '+52 000 000 0000', // POR CONFIRMAR
  offices: [
    { city: 'Hermosillo', region: { es: 'Sonora, México', en: 'Sonora, Mexico' } },
    { city: 'McAllen', region: { es: 'Texas, Estados Unidos', en: 'Texas, United States' } },
  ],
};

export type Lang = 'es' | 'en';
