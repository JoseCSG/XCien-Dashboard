
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { StatCard } from "@/components/Dashboard/StatCard";
import { NetworkStatus } from "@/components/Dashboard/NetworkStatus";
import { PlazaComparison } from "@/components/Dashboard/PlazaComparison";
import { GrowthTrends } from "@/components/Dashboard/GrowthTrends";
import { Signal, WifiOff, Network, Server } from "lucide-react";

// Datos de ejemplo
const mockNetworkData = [
  { name: "Nodo Principal", status: "online" as const, lastUpdated: "Hace 5 min", latency: 15 },
  { name: "Nodo Regional Norte", status: "offline" as const, lastUpdated: "Hace 20 min", latency: 0 },
  { name: "Nodo Regional Sur", status: "degraded" as const, lastUpdated: "Hace 12 min", latency: 120 },
  { name: "Nodo Regional Este", status: "online" as const, lastUpdated: "Hace 3 min", latency: 25 },
];

const mockComparisonData = [
  { name: "Norte", bandwidth: 850, latency: 24, availability: 99.2 },
  { name: "Centro", bandwidth: 1200, latency: 18, availability: 99.8 },
  { name: "Sur", bandwidth: 650, latency: 32, availability: 98.5 },
  { name: "Este", bandwidth: 780, latency: 22, availability: 99.4 },
];

const mockGrowthData = [
  { month: "Ene", ancho_de_banda: 650, conexiones: 280 },
  { month: "Feb", ancho_de_banda: 590, conexiones: 320 },
  { month: "Mar", ancho_de_banda: 800, conexiones: 410 },
  { month: "Abr", ancho_de_banda: 810, conexiones: 390 },
  { month: "May", ancho_de_banda: 950, conexiones: 480 },
  { month: "Jun", ancho_de_banda: 780, conexiones: 430 },
  { month: "Jul", ancho_de_banda: 1100, conexiones: 520 },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Dashboard de Monitoreo</h1>
            <p className="text-muted-foreground">Visión general del rendimiento de red</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Disponibilidad" 
              value="99.4%" 
              description="promedio general" 
              trend={0.2} 
              icon={<Signal />} 
            />
            <StatCard 
              title="Ancho de Banda" 
              value="1.2 Gbps" 
              description="utilización actual" 
              trend={15} 
              icon={<Network />} 
            />
            <StatCard 
              title="Nodos Activos" 
              value="28/30" 
              description="nodos conectados" 
              icon={<WifiOff />} 
            />
            <StatCard 
              title="Tiempo de Respuesta" 
              value="23.5 ms" 
              description="promedio" 
              trend={-2.5} 
              icon={<Server />} 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <NetworkStatus nodes={mockNetworkData} />
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Alertas Recientes</h2>
              <div className="space-y-3">
                <div className="p-3 bg-danger/10 border border-danger/20 rounded-md">
                  <p className="font-medium text-sm">⚠️ Caída de nodo en Región Norte</p>
                  <p className="text-xs text-muted-foreground">Hace 20 minutos</p>
                </div>
                <div className="p-3 bg-warning/10 border border-warning/20 rounded-md">
                  <p className="font-medium text-sm">⚠️ Alta latencia en Región Sur</p>
                  <p className="text-xs text-muted-foreground">Hace 1 hora</p>
                </div>
                <div className="p-3 bg-success/10 border border-success/20 rounded-md">
                  <p className="font-medium text-sm">✅ Mantenimiento programado completado</p>
                  <p className="text-xs text-muted-foreground">Hace 5 horas</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <PlazaComparison data={mockComparisonData} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GrowthTrends data={mockGrowthData} />
          </div>
        </div>
        
        <SidebarTrigger className="fixed bottom-4 right-4 md:hidden" />
      </div>
    </SidebarProvider>
  );
};

export default Index;
