
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function AutomaticReports() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("weekly");
  const [enabled, setEnabled] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Reportes automáticos configurados",
      description: `Los reportes se enviarán ${frequency === 'daily' ? 'diariamente' : frequency === 'weekly' ? 'semanalmente' : 'mensualmente'} a ${email}`,
    });
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reportes Automáticos</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="report-email">Correo para recibir reportes</Label>
            <Input 
              id="report-email" 
              type="email" 
              placeholder="gerente@empresa.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="report-frequency">Frecuencia</Label>
            <Select value={frequency} onValueChange={setFrequency}>
              <SelectTrigger id="report-frequency">
                <SelectValue placeholder="Selecciona frecuencia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Diario</SelectItem>
                <SelectItem value="weekly">Semanal</SelectItem>
                <SelectItem value="monthly">Mensual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center justify-between">
            <Label htmlFor="enable-reports">Activar reportes automáticos</Label>
            <Switch 
              id="enable-reports" 
              checked={enabled} 
              onCheckedChange={setEnabled} 
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={!enabled}>
            Guardar configuración
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
