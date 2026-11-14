import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  tipoEnvio: string;
  img: string;
  imagenesSecundarias: string[];
  condicion: string;
  vendidos: number;
  opiniones: number;
  color: string;
  stock: number;
  ubicacion: string;
  detallesTecnicos: { label: string; value: string }[];
}

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [NgIf, NgFor, RouterLink],
  templateUrl: './description.html',
  styleUrl: './description.scss',
})

export class Description implements OnInit {
  activeImage: string = '';
  product: Product | null = null;
  products: Product[] = [
    {
      id: 1,
      title: 'Laptop HP 15.6" Core i5',
      description: 'Laptop ideal para estudiar, trabajar y realizar tareas de alta exigencia diaria. Ofrece excelente rendimiento, gráficos fluidos y almacenamiento de estado sólido de alta velocidad.',
      price: '$599.99',
      tipoEnvio: 'Envío gratis a todo el país',
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 45,
      opiniones: 12,
      color: 'Plata natural',
      stock: 5,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Procesador', value: 'Intel Core i5' },
        { label: 'Memoria RAM', value: '16 GB' },
        { label: 'Capacidad del disco', value: '512 GB SSD' },
        { label: 'Resolución de pantalla', value: '1920x1080 Full HD' }
      ]
    },
    {
      id: 2,
      title: 'Audífonos Micrófono Pc-900 Estéreo Headset',
      description: 'Auriculares con diseño ergonómico y moderno, conexión alámbrica de alta fidelidad, cancelación de ruido pasiva y sonido envolvente para clases virtuales, juegos y llamadas.',
      price: '$49.99',
      tipoEnvio: 'Envío gratis a todo el país',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500',
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 202,
      opiniones: 9,
      color: 'Negro',
      stock: 12,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Formato del audífono', value: 'Over-ear' },
        { label: 'Es gamer', value: 'Sí' },
        { label: 'Con micrófono', value: 'Sí (Ajustable)' },
        { label: 'Largo del cable', value: '2 metros' }
      ]
    },
    {
      id: 3,
      title: 'Reloj Inteligente Smartwatch Sport',
      description: 'Reloj inteligente avanzado para consultar notificaciones en tiempo real, controlar tu actividad física diaria, medir ritmo cardíaco y monitorear múltiples disciplinas de entrenamiento.',
      price: '$89.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500',
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 88,
      opiniones: 34,
      color: 'Gris espacial',
      stock: 7,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Pantalla', value: 'AMOLED táctil' },
        { label: 'Resistencia al agua', value: 'IP68' },
        { label: 'Duración de batería', value: 'Hasta 7 días' },
        { label: 'Compatibilidad', value: 'Android e iOS' }
      ]
    },
    {
      id: 4,
      title: 'Cámara Digital Compacta Profesional',
      description: 'Cámara digital diseñada para capturar fotografías con nitidez superior y videos en alta definición en cualquier condición de iluminación gracias a su sensor optimizado.',
      price: '$349.99',
      tipoEnvio: 'Envío gratis a todo el país',
      img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500',
        'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 15,
      opiniones: 4,
      color: 'Negro mate',
      stock: 3,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Resolución de imagen', value: '24.2 MP' },
        { label: 'Zoom óptico', value: '3x' },
        { label: 'Conectividad', value: 'Wi-Fi y Bluetooth' },
        { label: 'Tipo de batería', value: 'Ion de litio recargable' }
      ]
    },
    {
      id: 5,
      title: 'Smartphone Apple iPhone 17 Pro Max',
      description: 'El último lanzamiento de Apple con chip de ultra rendimiento, acabado de titanio y un sistema fotográfico profesional de triple lente para resultados cinematográficos.',
      price: '$1,399.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500',
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 310,
      opiniones: 85,
      color: 'Titán natural',
      stock: 4,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Memoria interna', value: '256 GB' },
        { label: 'Memoria RAM', value: '8 GB' },
        { label: 'Tamaño de pantalla', value: '6.7 pulgadas' },
        { label: 'Red', value: '5G' }
      ]
    },
    {
      id: 6,
      title: 'Teclado Mecánico RGB Inalámbrico',
      description: 'Teclado mecánico de alto rendimiento con switches mecánicos precisos, conectividad tri-modo (Bluetooth, 2.4G y USB) y retroiluminación LED RGB personalizable por software.',
      price: '$79.99',
      tipoEnvio: 'Envío gratis a todo el país',
      img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500',
        'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 112,
      opiniones: 28,
      color: 'Negro con iluminación RGB',
      stock: 10,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Tipo de switch', value: 'Red / Mecánico' },
        { label: 'Es ergonómico', value: 'Sí' },
        { label: 'Iluminación', value: 'RGB Chroma' },
        { label: 'Interfaz', value: 'USB-C / Inalámbrico' }
      ]
    },
    {
      id: 7,
      title: 'Mouse Ergonómico Inalámbrico Dual',
      description: 'Mouse diseñado científicamente para reducir la fatiga en la muñeca y el antebrazo. Cuenta con sensor óptico de alta precisión y doble conectividad (receptor USB y Bluetooth).',
      price: '$39.99',
      tipoEnvio: 'Envío gratis a todo el país',
      img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 94,
      opiniones: 18,
      color: 'Gris oscuro',
      stock: 15,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Resolución del sensor', value: '4000 DPI' },
        { label: 'Cantidad de botones', value: '6' },
        { label: 'Orientación', value: 'Diestro' },
        { label: 'Alimentación', value: 'Batería recargable' }
      ]
    },
    {
      id: 8,
      title: 'Monitor Gamer 27" Curvo 165Hz',
      description: 'Monitor especializado para juegos y diseño fluido. Cuenta con alta tasa de refresco, tiempo de respuesta ultrarrápido de 1ms y tecnología de sincronización antiparpadeo.',
      price: '$299.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500',
        'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 60,
      opiniones: 22,
      color: 'Negro',
      stock: 6,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Tamaño de pantalla', value: '27 pulgadas' },
        { label: 'Frecuencia de actualización', value: '165 Hz' },
        { label: 'Tipo de panel', value: 'IPS / Curvo' },
        { label: 'Puertos', value: 'HDMI / DisplayPort' }
      ]
    },
    {
      id: 9,
      title: 'Tablet Multimedia 10.4" 128GB',
      description: 'Pantalla de alta definición ideal para consumir contenido multimedia, leer libros digitales, dibujar y trabajar de forma portátil desde cualquier lugar.',
      price: '$249.99',
      tipoEnvio: 'Envío gratis a todo el país',
      img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 73,
      opiniones: 19,
      color: 'Plata',
      stock: 9,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Memoria RAM', value: '6 GB' },
        { label: 'Almacenamiento', value: '128 GB' },
        { label: 'Conectividad', value: 'Wi-Fi + 4G LTE' },
        { label: 'Batería', value: '7000 mAh' }
      ]
    },
    {
      id: 10,
      title: 'Altavoz Bluetooth Portátil Waterproof',
      description: 'Altavoz inalámbrico resistente al agua con certificación IPX7, sonido envolvente estéreo de 360 grados y batería de larga duración para uso intensivo en exteriores.',
      price: '$59.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500',
        'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 140,
      opiniones: 41,
      color: 'Azul marino',
      stock: 14,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Potencia de salida', value: '20W' },
        { label: 'Autonomía', value: 'Hasta 12 horas' },
        { label: 'Bluetooth', value: 'Versión 5.1' },
        { label: 'Es aprueba de agua', value: 'Sí (IPX7)' }
      ]
    },
    {
      id: 11,
      title: 'Micrófono USB Profesional para Streaming',
      description: 'Micrófono condensador con patrón polar ajustable y control de volumen integrado, ideal para podcasts, transmisiones en vivo, clases online y grabaciones de estudio.',
      price: '$119.99',
      tipoEnvio: 'Envío gratis a todo el país',
      img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-1583267746897-2cf4158b75f2?w=500',
        'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 52,
      opiniones: 14,
      color: 'Negro con detalles plateados',
      stock: 8,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Tipo de micrófono', value: 'Condensador' },
        { label: 'Patrón polar', value: 'Cardioide y Omnidireccional' },
        { label: 'Conexión', value: 'Plug and Play USB' },
        { label: 'Incluye soporte', value: 'Sí (Tripie de mesa)' }
      ]
    },
    {
      id: 12,
      title: 'Disco Duro Externo Portátil 1TB USB 3.0',
      description: 'Unidad de almacenamiento portátil de alta velocidad ultracompacta para respaldar fotos, videos y documentos importantes de forma rápida y completamente segura.',
      price: '$69.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1721333084639-0f64b0583875?w=500',
      imagenesSecundarias: [
        'https://images.unsplash.com/photo-153149274c67-66444b025d25?w=500',
        'https://images.unsplash.com/photo-1721333084639-0f64b0583875?w=500'
      ],
      condicion: 'Nuevo',
      vendidos: 180,
      opiniones: 50,
      color: 'Azul metálico',
      stock: 20,
      ubicacion: 'Barquisimeto, Lara',
      detallesTecnicos: [
        { label: 'Capacidad', value: '1 Terabyte (1TB)' },
        { label: 'Interfaz', value: 'USB 3.0 de alta velocidad' },
        { label: 'Factor de forma', value: '2.5 pulgadas' },
        { label: 'Compatibilidad', value: 'Windows y Mac OS' }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const productId = Number(idParam);
      this.product = this.products.find(p => p.id === productId) || null;
      if (this.product) {
        this.activeImage = this.product.img;
      }
    }
  }

  changeImage(newImg: string) {
    this.activeImage = newImg;
  }
}