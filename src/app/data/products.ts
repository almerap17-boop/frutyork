export interface Product {
  id: string;
  name: string;
  category: 'cítricos' | 'dulces' | 'berries';
  badge: string;
  description: string;
  image: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: 'maracuya',
    name: 'Jugo y Pulpa de Maracuyá',
    category: 'cítricos',
    badge: 'Cítricos & Frutales',
    description: 'El sabor natural de la fruta, 100% natural, refrescante y delicioso.',
    image: '/productos/frutyork-maracuya.jpg',
    features: ['100% Natural', 'Sin conservantes', 'Siempre frío', 'Sabor único'],
  },
  {
    id: 'guanabana',
    name: 'Jugo y Pulpa de Guanábana',
    category: 'dulces',
    badge: 'Cremosos & Tropicales',
    description: 'Textura suave y cremosa con toda la frescura natural de la guanábana.',
    image: '/productos/frutyork-guanabana.jpg',
    features: ['100% Natural', 'Sin conservantes', 'Siempre frío', 'Sabor único'],
  },
  {
    id: 'nispero',
    name: 'Jugo y Pulpa de Níspero',
    category: 'dulces',
    badge: 'Dulces & Exóticos',
    description: 'Dulzura natural inigualable procesada bajo estrictos estándares de calidad.',
    image: '/productos/frutyork-nispero.jpg',
    features: ['100% Natural', 'Sin conservantes', 'Siempre frío', 'Sabor único'],
  },
  {
    id: 'zapote',
    name: 'Jugo y Pulpa de Zapote',
    category: 'dulces',
    badge: 'Cremosos & Especiales',
    description: 'Auténtico sabor costeño, cremoso y lleno de nutrientes directo del campo.',
    image: '/productos/frutyork-zapote.jpg',
    features: ['100% Natural', 'Sin conservantes', 'Siempre frío', 'Sabor único'],
  },
];