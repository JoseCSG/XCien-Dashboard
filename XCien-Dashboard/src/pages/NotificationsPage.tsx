
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/Dashboard/Sidebar";
import { NotificationSettings } from "@/components/Dashboard/NotificationSettings";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const NotificationsPage = () => {
  const { toast } = useToast();
  
  const handleTestNotification = () => {
    toast({
      title: "Notificación de prueba enviada",
      description: "Se ha enviado un correo de prueba a la dirección configurada",
    });
  };
  
  const notifications = [
    {
      id: 1,
      title: "Falla de red detectada",
      message: "Se detectó una falla en la red de Plaza Centro",
      time: "Hoy, 10:25 AM",
      type: "error",
      read: false
    },
    {
      id: 2,
      title: "Alto tráfico detectado",
      message: "Plaza Norte está experimentando niveles de tráfico inusualmente altos",
      time: "Hoy, 09:14 AM",
      type: "warning",
      read: false
    },
    {
      id: 3,
      title: "Reporte semanal generado",
      message: "El reporte semanal de rendimiento está listo para su revisión",
      time: "Ayer, 08:00 AM",
      type: "info",
      read: true
    },
    {
      id: 4,
      title: "Problemas de latencia resueltos",
      message: "Los problemas de latencia en Plaza Sur han sido resueltos",
      time: "02/05/2025, 15:30 PM",
      type: "success",
      read: true
    }
  ];
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-1">Notificaciones</h1>
            <p className="text-muted-foreground">Alertas y configuración de notificaciones</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Centro de Notificaciones</CardTitle>
                  <Button variant="outline" size="sm" onClick={handleTestNotification}>
                    Enviar prueba
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 border rounded-md ${
                          notification.read ? 'bg-muted/20' : 'bg-muted/50 border-primary/20'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`
                            w-2 h-2 rounded-full mt-2
                            ${notification.type === 'error' ? 'bg-danger' : ''}
                            ${notification.type === 'warning' ? 'bg-warning' : ''}
                            ${notification.type === 'info' ? 'bg-info' : ''}
                            ${notification.type === 'success' ? 'bg-success' : ''}
                          `} />
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <h3 className={`font-medium ${!notification.read ? 'text-primary' : ''}`}>
                                {notification.title}
                              </h3>
                              <span className="text-xs text-muted-foreground">{notification.time}</span>
                            </div>
                            <p className="text-sm mt-1">{notification.message}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-1">
              <NotificationSettings />
            </div>
          </div>
        </div>
        
        <SidebarTrigger className="fixed bottom-4 right-4 md:hidden" />
      </div>
    </SidebarProvider>
  );
};

export default NotificationsPage;
