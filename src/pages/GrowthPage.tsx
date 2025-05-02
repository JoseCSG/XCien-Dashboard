
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

const GrowthPage = () => {
  const [timeframe, setTimeframe] = useState("7d");
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Tendencias de Crecimiento</h1>
            <p className="text-muted-foreground">Análisis detallado de rendimiento y ganancias</p>
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <Tabs defaultValue="revenue" className="max-w-md">
              <TabsList>
                <TabsTrigger value="revenue">Ingresos</TabsTrigger>
                <TabsTrigger value="traffic">Visitantes</TabsTrigger>
                <TabsTrigger value="conversion">Conversión</TabsTrigger>
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
                <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$428,500</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-success/20 text-success px-1 rounded">+12%</span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Visitantes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18,240</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-danger/20 text-danger px-1 rounded">-5%</span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Tasa de Conversión</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">15.2%</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-success/20 text-success px-1 rounded">+2.5%</span>
                  <span className="text-xs text-muted-foreground">vs periodo anterior</span>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Ticket Promedio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$23.50</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs bg-success/20 text-success px-1 rounded">+1.8%</span>
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
                <CardTitle>Comparativa entre Plazas</CardTitle>
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
