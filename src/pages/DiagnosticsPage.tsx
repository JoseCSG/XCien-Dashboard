
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { DiagnosticTool } from "@/components/Dashboard/DiagnosticTool";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DiagnosticsPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Diagnóstico Técnico</h1>
            <p className="text-muted-foreground">Herramientas para identificar y resolver problemas de red</p>
          </div>
          
          <Tabs defaultValue="tools">
            <TabsList className="mb-6">
              <TabsTrigger value="tools">Herramientas de Diagnóstico</TabsTrigger>
              <TabsTrigger value="history">Historial de Incidentes</TabsTrigger>
            </TabsList>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-1 gap-6 mb-6">
                <DiagnosticTool />
                
                <Card>
                  <CardHeader>
                    <CardTitle>Información Técnica del Sistema</CardTitle>
                    <CardDescription>Detalle de la infraestructura de red</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Arquitectura de Red</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="font-medium">Topología:</p>
                            <p className="text-muted-foreground">Estrella jerárquica</p>
                          </div>
                          <div>
                            <p className="font-medium">Protocolos:</p>
                            <p className="text-muted-foreground">TCP/IP, HTTPS, SSH</p>
                          </div>
                          <div>
                            <p className="font-medium">Seguridad:</p>
                            <p className="text-muted-foreground">WPA3, Firewall Cisco</p>
                          </div>
                          <div>
                            <p className="font-medium">Ancho de Banda:</p>
                            <p className="text-muted-foreground">1.5 Gbps (contratado)</p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Infraestructura</h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <p className="font-medium">Routers:</p>
                            <p className="text-muted-foreground">8 (2 por región)</p>
                          </div>
                          <div>
                            <p className="font-medium">Switches:</p>
                            <p className="text-muted-foreground">24 (6 por región)</p>
                          </div>
                          <div>
                            <p className="font-medium">Access Points:</p>
                            <p className="text-muted-foreground">32 (8 por región)</p>
                          </div>
                          <div>
                            <p className="font-medium">Servidores:</p>
                            <p className="text-muted-foreground">5 (1 principal, 4 réplicas)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Historial de Incidentes</CardTitle>
                  <CardDescription>Problemas resueltos y pendientes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-md bg-muted/20">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">Falla de Router Principal</p>
                          <p className="text-sm text-muted-foreground">Región Centro - 12/04/2025</p>
                        </div>
                        <div className="px-2 py-1 bg-success/20 text-success text-xs rounded-md">
                          Resuelto
                        </div>
                      </div>
                      <p className="text-sm">El router principal presentó fallas debido a sobrecalentamiento. Se reemplazó por un equipo nuevo y se mejoró la ventilación del rack.</p>
                    </div>
                    
                    <div className="p-4 border rounded-md bg-muted/20">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">Pérdida de Conectividad</p>
                          <p className="text-sm text-muted-foreground">Región Sur - 05/04/2025</p>
                        </div>
                        <div className="px-2 py-1 bg-success/20 text-success text-xs rounded-md">
                          Resuelto
                        </div>
                      </div>
                      <p className="text-sm">Corte de fibra óptica en conexión principal. Se activó enlace redundante mientras se reparaba el daño.</p>
                    </div>
                    
                    <div className="p-4 border rounded-md bg-danger/10">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">Problemas de Latencia</p>
                          <p className="text-sm text-muted-foreground">Región Centro - Hoy</p>
                        </div>
                        <div className="px-2 py-1 bg-danger/20 text-danger text-xs rounded-md">
                          En progreso
                        </div>
                      </div>
                      <p className="text-sm">Alta latencia en horas pico. Se está investigando si es un problema de saturación o configuración del QoS.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <SidebarTrigger className="fixed bottom-4 right-4 md:hidden" />
      </div>
    </SidebarProvider>
  );
};

export default DiagnosticsPage;
