import { Component } from '@angular/core';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { RouterLink } from '@angular/router'; 
import { NgFor } from '@angular/common';

interface Product {
  id: number
  title: string
  description: string
  price: string
  tipoEnvio: string
  img: string
}

@Component({
  imports: [  
    MdbRippleModule,
    MatButtonModule,
    MdbCarouselModule,
    MatCardModule,
    RouterLink,
    NgFor,
  ],
  selector: 'app-catalog',
  styleUrl: './catalog.scss',
  templateUrl: './catalog.html',
})
export class Catalog {
  selectedProduct: Product | null = null;
  products = [
    {
      id: 1,
      title: 'Laptop HP',
      description: 'Laptop ideal para estudiar, trabajar y realizar tareas diarias. Ofrece buen rendimiento y almacenamiento.',
      price: '$599.99',
      tipoEnvio: 'Envío gratis',
      img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500'
    },
    {
      id: 2,
      title: 'Auriculares inalámbricos',
      description: 'Auriculares con diseño moderno, conexión inalámbrica y sonido de alta calidad para música y llamadas.',
      price: '$49.99',
      tipoEnvio: 'Envío gratis',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'
    },
    {
      id: 3,
      title: 'Reloj inteligente',
      description: 'Reloj inteligente para consultar notificaciones, controlar tu actividad física y monitorear tus entrenamientos.',
      price: '$89.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'
    },
    {
      id: 4,
      title: 'Cámara digital',
      description: 'Cámara digital diseñada para capturar fotografías y videos con buena calidad en diferentes situaciones.',
      price: '$349.99',
      tipoEnvio: 'Envío gratis',
      img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500'
    },
    {
      id: 5,
      title: 'iPhone 17 Pro Max',
      description: 'Último lanzamiento de Apple con chip avanzado y sistema fotográfico profesional.',
      price: '$1,399.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500'
    },
    {
      id: 6,
      title: 'Teclado Mecánico RGB',
      description: 'Teclado mecánico inalámbrico con switches de alta precisión y retroiluminación RGB personalizable.',
      price: '$79.99',
      tipoEnvio: 'Envío gratis',
      img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500'
    },
    {
      id: 7,
      title: 'Mouse Ergonómico Inalámbrico',
      description: 'Mouse diseñado para reducir la fatiga en la muñeca, con sensor de alta precisión y conexión dual.',
      price: '$39.99',
      tipoEnvio: 'Envío gratis',
      img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500'
    },
    {
      id: 8,
      title: 'Monitor Gamer 27"',
      description: 'Monitor con alta tasa de refresco, tiempo de respuesta ultrarrápido y tecnología de sincronización para juegos fluidos.',
      price: '$299.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500'
    },
    {
      id: 9,
      title: 'Tablet Multimedia',
      description: 'Pantalla de alta definición ideal para ver contenido multimedia, leer, dibujar y trabajar desde cualquier lugar.',
      price: '$249.99',
      tipoEnvio: 'Envío gratis',
      img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500'
    },
    {
      id: 10,
      title: 'Altavoz Bluetooth Portátil',
      description: 'Altavoz resistente al agua con sonido envolvente de 360 grados y batería de larga duración para exteriores.',
      price: '$59.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500'
    },
    {
      id: 11,
      title: 'Micrófono USB para Streaming',
      description: 'Micrófono condensador con patrón polar ajustable, ideal para podcasts, transmisiones en vivo y grabaciones.',
      price: '$119.99',
      tipoEnvio: 'Envío gratis',
      img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500'
    },
    {
      id: 12,
      title: 'Disco Duro Externo 1TB',
      description: 'Unidad de almacenamiento portátil de alta velocidad para respaldar tus archivos de forma segura y rápida.',
      price: '$69.99',
      tipoEnvio: 'Envío estándar',
      img: 'https://images.unsplash.com/photo-1721333084639-0f64b0583875?w=500'
    }
  ];

  selectProduct(p: Product) {
    this.selectedProduct = p;
  }

  isExpensive(priceStr: string): boolean {
    const cleanPrice = parseFloat(priceStr.replace('$', '').replace(/,/g, ''));
    return cleanPrice < 100;
  }
}
