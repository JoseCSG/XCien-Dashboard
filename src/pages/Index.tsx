
import { useState } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { StatCard } from "@/components/Dashboard/StatCard";
import { NetworkStatus } from "@/components/Dashboard/NetworkStatus";
import { PlazaComparison } from "@/components/Dashboard/PlazaComparison";
import { GrowthTrends } from "@/components/Dashboard/GrowthTrends";
import { TrendingUp, TrendingDown, WifiOff, ChartBar } from "lucide-react";

// Datos de ejemplo
const mockNetworkData = [
  { name: "Plaza Norte", status: "online" as const, lastUpdated: "Hace 5 min" },
  { name: "Plaza Centro", status: "offline" as const, lastUpdated: "Hace 20 min" },
  { name: "Plaza Sur", status: "degraded" as const, lastUpdated: "Hace 12 min" },
  { name: "Plaza Este", status: "online" as const, lastUpdated: "Hace 3 min" },
];

const mockComparisonData = [
  { name: "Norte", ingresos: 85, visitantes: 42, conversion: 12 },
  { name: "Centro", ingresos: 120, visitantes: 60, conversion: 18 },
  { name: "Sur", ingresos: 65, visitantes: 38, conversion: 9 },
  { name: "Este", ingresos: 78, visitantes: 45, conversion: 14 },
];

const mockGrowthData = [
  { month: "Ene", ingresos: 65, visitantes: 28 },
  { month: "Feb", ingresos: 59, visitantes: 32 },
  { month: "Mar", ingresos: 80, visitantes: 41 },
  { month: "Abr", ingresos: 81, visitantes: 39 },
  { month: "May", ingresos: 95, visitantes: 48 },
  { month: "Jun", ingresos: 78, visitantes: 43 },
  { month: "Jul", ingresos: 110, visitantes: 52 },
];

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Dashboard de Monitoreo</h1>
            <p className="text-muted-foreground">Visión general del rendimiento de plazas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard 
              title="Ingresos Totales" 
              value="$428,500" 
              description="vs mes anterior" 
              trend={12} 
              icon={<TrendingUp />} 
            />
            <StatCard 
              title="Visitantes" 
              value="18,240" 
              description="vs mes anterior" 
              trend={-5} 
              icon={<TrendingDown />} 
            />
            <StatCard 
              title="Conectividad" 
              value="3/4" 
              description="plazas conectadas" 
              icon={<WifiOff />} 
            />
            <StatCard 
              title="Tasa de Conversión" 
              value="15.2%" 
              description="vs mes anterior" 
              trend={2.5} 
              icon={<ChartBar />} 
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <NetworkStatus plazas={mockNetworkData} />
            <div className="col-span-1">
              <h2 className="text-lg font-semibold mb-4">Notificaciones Recientes</h2>
              <div className="space-y-3">
                <div className="p-3 bg-danger/10 border border-danger/20 rounded-md">
                  <p className="font-medium text-sm">⚠️ Falla de red en Plaza Centro</p>
                  <p className="text-xs text-muted-foreground">Hace 20 minutos</p>
                </div>
                <div className="p-3 bg-warning/10 border border-warning/20 rounded-md">
                  <p className="font-medium text-sm">⚠️ Alto tráfico en Plaza Norte</p>
                  <p className="text-xs text-muted-foreground">Hace 1 hora</p>
                </div>
                <div className="p-3 bg-success/10 border border-success/20 rounded-md">
                  <p className="font-medium text-sm">✅ Informe mensual disponible</p>
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
