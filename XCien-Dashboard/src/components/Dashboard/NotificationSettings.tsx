
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function NotificationSettings() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [networkAlerts, setNetworkAlerts] = useState(true);
  const [trafficAlerts, setTrafficAlerts] = useState(false);
  const [revenueAlerts, setRevenueAlerts] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Configuración guardada",
      description: "Las notificaciones se enviarán a " + email,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Configuración de Notificaciones</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="ejemplo@empresa.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="network-alerts" className="flex-1">
                Alertas de fallas en la red
              </Label>
              <Switch 
                id="network-alerts" 
                checked={networkAlerts} 
                onCheckedChange={setNetworkAlerts} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="traffic-alerts" className="flex-1">
                Alertas de aumento de concurrencia
              </Label>
              <Switch 
                id="traffic-alerts" 
                checked={trafficAlerts} 
                onCheckedChange={setTrafficAlerts} 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="revenue-alerts" className="flex-1">
                Alertas de cambios en ingresos
              </Label>
              <Switch 
                id="revenue-alerts" 
                checked={revenueAlerts} 
                onCheckedChange={setRevenueAlerts} 
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full">
            Guardar configuración
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
