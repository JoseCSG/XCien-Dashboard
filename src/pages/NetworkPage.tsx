
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { NetworkStatus } from "@/components/Dashboard/NetworkStatus";
import { DiagnosticTool } from "@/components/Dashboard/DiagnosticTool";

// Datos de ejemplo
const mockNetworkData = [
  { name: "Nodo Principal", status: "online" as const, lastUpdated: "Hace 5 min", latency: 15 },
  { name: "Nodo Regional Norte", status: "offline" as const, lastUpdated: "Hace 20 min", latency: 0 },
  { name: "Nodo Regional Sur", status: "degraded" as const, lastUpdated: "Hace 12 min", latency: 120 },
  { name: "Nodo Regional Este", status: "online" as const, lastUpdated: "Hace 3 min", latency: 25 },
  { name: "Nodo Regional Oeste", status: "online" as const, lastUpdated: "Hace 9 min", latency: 35 },
  { name: "Nodo Cliente Corporativo", status: "degraded" as const, lastUpdated: "Hace 15 min", latency: 85 },
];

const NetworkPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Estado de Red</h1>
            <p className="text-muted-foreground">Monitoreo de conectividad de nodos</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <NetworkStatus nodes={mockNetworkData} />
            <DiagnosticTool />
          </div>
          
          <div className="bg-muted/50 rounded-lg p-4">
            <h2 className="font-medium mb-2">Información del Sistema</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-3 bg-background rounded-md">
                <p className="text-xs text-muted-foreground">Servidor Principal</p>
                <p className="font-medium">Online (99.8% uptime)</p>
              </div>
              <div className="p-3 bg-background rounded-md">
                <p className="text-xs text-muted-foreground">Último Backup</p>
                <p className="font-medium">Hoy, 04:30 AM</p>
              </div>
              <div className="p-3 bg-background rounded-md">
                <p className="text-xs text-muted-foreground">Ancho de Banda Total</p>
                <p className="font-medium">1.2 Gbps / 500 Mbps</p>
              </div>
              <div className="p-3 bg-background rounded-md">
                <p className="text-xs text-muted-foreground">Alertas Activas</p>
                <p className="font-medium text-danger">2 críticas, 3 advertencias</p>
              </div>
            </div>
          </div>
        </div>
        
        <SidebarTrigger className="fixed bottom-4 right-4 md:hidden" />
      </div>
    </SidebarProvider>
  );
};

export default NetworkPage;
