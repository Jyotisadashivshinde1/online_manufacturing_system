import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], 
})
export class HomeComponent {
  // Product list
  products = [
    { name: 'Industrial CNC Machine', description: 'High-precision Computer Numerical Control machine', price: '25000' },
    { name: '3D Printer', description: 'Additive manufacturing 3D printer for prototyping', price: '4000' },
    { name: 'Electric Motor', description: 'High-efficiency electric motor for industrial use', price: '1200' },
    { name: 'LED Lighting Panel', description: 'Energy-efficient LED lighting for commercial use', price: '250' },
    { name: 'Smart Home Thermostat', description: 'Wi-Fi enabled thermostat for smart homes', price: '150' },
    { name: 'Solar Battery Storage System', description: 'Off-grid solar battery for home use', price: '5000' },
    { name: 'Portable Power Generator', description: 'Compact generator for emergency and outdoor use', price: '2200' },
    { name: 'Robotic Arm', description: 'Automated robotic arm for manufacturing assembly', price: '8000' },
    { name: 'Automated Conveyor System', description: 'Industrial conveyor belt for material handling', price: '10000' },
    { name: 'Smart Wearable Health Monitor', description: 'Portable health monitoring device with real-time data', price: '350' },
    { name: 'Heat Exchanger', description: 'Industrial heat exchanger for efficient heat transfer in processes', price: '4500' },
    { name: 'Precision Laser Cutter', description: 'High-precision laser cutter for metal and plastic fabrication', price: '12000' }
  ];
  
  

  constructor(private router: Router) {}

  // Correct method name: onBuyNow
  onBuyNow() {
    console.log('Buy Now Clicked');
    this.router.navigate(['/signup']);
  }
}
