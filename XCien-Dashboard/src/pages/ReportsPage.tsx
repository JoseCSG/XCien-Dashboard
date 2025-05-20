
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { AutomaticReports } from "@/components/Dashboard/AutomaticReports";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ReportsPage = () => {
  const { toast } = useToast();
  
  const handleGenerateReport = (type: string) => {
    toast({
      title: "Generando reporte",
      description: `El reporte ${type} estará disponible en breve`,
    });
  };
  
  const reports = [
    {
      title: "Reporte semanal",
      description: "Resumen de métricas clave del 25/04/2025 al 01/05/2025",
      date: "01/05/2025",
      type: "pdf"
    },
    {
      title: "Reporte mensual",
      description: "Análisis completo del mes de Abril 2025",
      date: "30/04/2025",
      type: "excel"
    },
    {
      title: "Reporte de incidentes",
      description: "Listado de problemas técnicos del último mes",
      date: "28/04/2025",
      type: "pdf"
    }
  ];
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Reportes Automáticos</h1>
            <p className="text-muted-foreground">Gestión y configuración de reportes</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Reportes Disponibles</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={() => handleGenerateReport("diario")}>
                      Generar diario
                    </Button>
                    <Button size="sm" onClick={() => handleGenerateReport("completo")}>
                      Generar completo
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reports.map((report, idx) => (
                      <div key={idx} className="p-4 border rounded-md bg-muted/20 flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">{report.title}</h3>
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">Generado: {report.date}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Descargar {report.type.toUpperCase()}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Personalizar Reportes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <ChartTypeIcon />
                      </div>
                      <p className="text-sm font-medium">Ingresos</p>
                      <div className="flex gap-1 mt-auto">
                        <div className="w-3 h-3 bg-success rounded" />
                        <div className="w-3 h-3 bg-success rounded" />
                        <div className="w-3 h-3 bg-success rounded" />
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <ChartTypeIcon />
                      </div>
                      <p className="text-sm font-medium">Tráfico</p>
                      <div className="flex gap-1 mt-auto">
                        <div className="w-3 h-3 bg-success rounded" />
                        <div className="w-3 h-3 bg-success rounded" />
                        <div className="w-3 h-3 bg-muted rounded" />
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <ChartTypeIcon />
                      </div>
                      <p className="text-sm font-medium">Red</p>
                      <div className="flex gap-1 mt-auto">
                        <div className="w-3 h-3 bg-success rounded" />
                        <div className="w-3 h-3 bg-muted rounded" />
                        <div className="w-3 h-3 bg-muted rounded" />
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md flex flex-col items-center gap-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <ChartTypeIcon />
                      </div>
                      <p className="text-sm font-medium">Conversión</p>
                      <div className="flex gap-1 mt-auto">
                        <div className="w-3 h-3 bg-success rounded" />
                        <div className="w-3 h-3 bg-success rounded" />
                        <div className="w-3 h-3 bg-muted rounded" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <AutomaticReports />
            </div>
          </div>
        </div>
        
        <SidebarTrigger className="fixed bottom-4 right-4 md:hidden" />
      </div>
    </SidebarProvider>
  );
};

function ChartTypeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 13V17M16 8V17M12 3V17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default ReportsPage;
