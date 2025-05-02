
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { GrowthTrends } from "@/components/Dashboard/GrowthTrends";
import { PlazaComparison } from "@/components/Dashboard/PlazaComparison";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import { useState } from "react";

// Datos de ejemplo
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

const GrowthPage = () => {
  const [timeframe, setTimeframe] = useState("7d");
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Rendimiento de Red</h1>
            <p className="text-muted-foreground">Análisis detallado de métricas y disponibilidad</p>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <Tabs defaultValue="bandwidth" className="max-w-md">
              <TabsList>
                <TabsTrigger value="bandwidth">Ancho de Banda</TabsTrigger>
                <TabsTrigger value="connections">Conexiones</TabsTrigger>
                <TabsTrigger value="latency">Latencia</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Periodo de tiempo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Últimos 7 días</SelectItem>
                <SelectItem value="30d">Últimos 30 días</SelectItem>
                <SelectItem value="90d">Últimos 90 días</SelectItem>
                <SelectItem value="1y">Último año</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Disponibilidad Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.4%</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-success/20 text-success px-1 rounded">+0.2%</span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Ancho de Banda</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.2 Gbps</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-success/20 text-success px-1 rounded">+15%</span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Latencia Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">23.5 ms</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-success/20 text-success px-1 rounded">-2.5 ms</span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Paquetes Perdidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0.08%</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-success/20 text-success px-1 rounded">-0.02%</span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 gap-6 mb-8">
            <GrowthTrends data={mockGrowthData} />
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Comparativa entre Nodos</CardTitle>
              </CardHeader>
              <CardContent>
                <PlazaComparison data={mockComparisonData} />
              </CardContent>
            </Card>
          </div>
        </div>
        
        <SidebarTrigger className="fixed bottom-4 right-4 md:hidden" />
      </div>
    </SidebarProvider>
  );
};

export default GrowthPage;
