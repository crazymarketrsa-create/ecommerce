import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';

interface Store {
  name: string;
  area: string;
  address: string;
  hours: string;
  icon: 'basket' | 'fish' | 'leaf' | 'storefront' | 'cart' | 'nutrition';
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
  imports: [CommonModule, FormsModule, IonContent],
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

  searchTerm = '';

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
    {
      name: 'Green Basket',
      area: 'Durban',
      address: '55 Florida Rd',
      hours: 'Open 08:30–20:30',
      icon: 'nutrition',
      iconColor: '#3aa856',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'Harbour Deli',
      area: 'Gqeberha',
      address: '12 Marine Dr',
      hours: 'Open 07:00–19:00',
      icon: 'fish',
      iconColor: '#159c9c',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'Valley Provisions',
      area: 'Stellenbosch',
      address: '9 Dorp St',
      hours: 'Open 08:00–18:30',
      icon: 'leaf',
      iconColor: '#4caf50',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'City Corner Store',
      area: 'Pretoria',
      address: '200 Church St',
      hours: 'Open 06:30–22:00',
      icon: 'cart',
      iconColor: '#e67e22',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'Sunset Grocery',
      area: 'Bloemfontein',
      address: '78 Nelson Mandela Dr',
      hours: 'Open 08:00–21:00',
      icon: 'basket',
      iconColor: '#d98324',
      tags: ['Collect', 'Delivery'],
    },
    {
      name: 'Midtown Market',
      area: 'Centurion',
      address: '3 Jean Ave',
      hours: 'Open 07:30–20:00',
      icon: 'storefront',
      iconColor: '#5b6dd6',
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
    {
      name: 'Spice Route',
      location: 'Durban',
      rating: '4.9',
      icon: 'flame',
      bg: '#fbd9a6',
      iconColor: '#f0821e',
    },
    {
      name: 'Ocean Catch',
      location: 'Cape Town',
      rating: '4.6',
      icon: 'sparkles',
      bg: '#bcdcf7',
      iconColor: '#2f7fd6',
    },
    {
      name: 'Farm Fresh Co',
      location: 'Stellenbosch',
      rating: '4.8',
      icon: 'flame',
      bg: '#fbd9a6',
      iconColor: '#f0821e',
    },
    {
      name: 'The Grind House',
      location: 'Sandton',
      rating: '4.7',
      icon: 'sparkles',
      bg: '#bcdcf7',
      iconColor: '#2f7fd6',
    },
    {
      name: 'Sweet Tooth',
      location: 'Centurion',
      rating: '4.9',
      icon: 'flame',
      bg: '#fbd9a6',
      iconColor: '#f0821e',
    },
    {
      name: 'Green Leaf Cafe',
      location: 'Rosebank',
      rating: '4.5',
      icon: 'sparkles',
      bg: '#bcdcf7',
      iconColor: '#2f7fd6',
    },
    {
      name: 'Braai Masters',
      location: 'Bloemfontein',
      rating: '4.8',
      icon: 'flame',
      bg: '#fbd9a6',
      iconColor: '#f0821e',
    },
    {
      name: 'Corner Bistro',
      location: 'Gqeberha',
      rating: '4.6',
      icon: 'sparkles',
      bg: '#bcdcf7',
      iconColor: '#2f7fd6',
    },
  ];

  setFilter(label: string): void {
    this.activeFilter = label;
  }

  get topTrending(): TrendingStore[] {
    return this.trending.slice(0, 5);
  }

  get filteredStores(): Store[] {
    const term = this.searchTerm.trim().toLowerCase();
    if (!term) {
      return this.stores;
    }
    return this.stores.filter((s) =>
      [s.name, s.area, s.address].some((field) => field.toLowerCase().includes(term))
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
  }
}
