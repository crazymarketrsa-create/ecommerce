import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

interface Store {
  name: string;
  area: string;
  address: string;
  hours: string;
  icon: 'basket' | 'fish' | 'leaf' | 'storefront';
  iconColor: string;
  tags: string[];
}

interface TrendingStore {
  name: string;
  location: string;
  rating: string;
  icon: 'flame' | 'sparkles';
  bg: string;
  iconColor: string;
}

interface FilterChip {
  label: string;
  icon?: 'location' | 'time' | 'bag' | 'bike';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent],
})
export class HomePage {
  navItems = [
    { label: 'Menu', icon: 'menu' },
    { label: 'Stores', icon: 'stores', active: true },
    { label: 'Orders', icon: 'orders' },
    { label: 'Cart', icon: 'cart' },
  ];

  filters: FilterChip[] = [
    { label: 'All' },
    { label: 'Near me', icon: 'location' },
    { label: 'Open now', icon: 'time' },
    { label: 'Collect', icon: 'bag' },
    { label: 'Delivery', icon: 'bike' },
  ];

  activeFilter = 'All';

  stores: Store[] = [
    {
      name: 'Fresh Market',
      area: 'Sandton',
      address: '123 Rivonia Rd',
      hours: 'Open 08:00–20:00',
      icon: 'basket',
      iconColor: '#16b98a',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'Coastal Grocers',
      area: 'Cape Town',
      address: 'Waterfront, Cape Town',
      hours: 'Open 09:00–22:00',
      icon: 'fish',
      iconColor: '#12b5a5',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'Kloof Pantry',
      area: 'Kloof',
      address: '4 Old Main Rd',
      hours: 'Open 08:00–19:00',
      icon: 'leaf',
      iconColor: '#2fb457',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'Rosebank Market',
      area: 'Rosebank',
      address: 'The Park, Rosebank',
      hours: 'Open 07:30–21:00',
      icon: 'storefront',
      iconColor: '#2f7fd6',
      tags: ['Collect', 'Delivery'],
    },
  ];

  trending: TrendingStore[] = [
    {
      name: 'Street Food Hub',
      location: 'JHB Central',
      rating: '4.7',
      icon: 'flame',
      bg: '#fbd9a6',
      iconColor: '#f0821e',
    },
    {
      name: 'Bakery Corner',
      location: 'Pretoria',
      rating: '4.8',
      icon: 'sparkles',
      bg: '#bcdcf7',
      iconColor: '#2f7fd6',
    },
  ];

  setFilter(label: string): void {
    this.activeFilter = label;
  }
}
