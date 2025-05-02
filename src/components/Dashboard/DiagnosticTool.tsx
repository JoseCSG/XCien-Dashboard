
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function DiagnosticTool() {
  const { toast } = useToast();
  const [selectedPlaza, setSelectedPlaza] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<null | {
    status: "good" | "warning" | "error";
    connectionSpeed: string;
    serverResponse: string;
    dataIntegrity: string;
    recommendations: string[];
  }>(null);
  
  const plazas = [
    { id: "plaza1", name: "Plaza Norte" },
    { id: "plaza2", name: "Plaza Centro" },
    { id: "plaza3", name: "Plaza Sur" },
    { id: "plaza4", name: "Plaza Este" },
  ];
  
  const handleRunDiagnostic = () => {
    if (!selectedPlaza) {
      toast({
        title: "Error",
        description: "Selecciona una plaza para ejecutar el diagnóstico",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulación de diagnóstico
    setTimeout(() => {
      setDiagnosticResult({
        status: Math.random() > 0.7 ? "error" : Math.random() > 0.4 ? "warning" : "good",
        connectionSpeed: "120Mbps / 35Mbps",
        serverResponse: "245ms",
        dataIntegrity: "99.8%",
        recommendations: [
          "Revisar router principal de la plaza",
          "Actualizar firmware del sistema",
          "Verificar conexiones físicas"
        ]
      });
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle>Herramienta de Diagnóstico</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <Select value={selectedPlaza} onValueChange={setSelectedPlaza}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona una plaza" />
                </SelectTrigger>
                <SelectContent>
                  {plazas.map((plaza) => (
                    <SelectItem key={plaza.id} value={plaza.id}>
                      {plaza.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleRunDiagnostic} disabled={isLoading}>
              {isLoading ? "Diagnosticando..." : "Ejecutar diagnóstico"}
            </Button>
          </div>
          
          {diagnosticResult && (
            <div className="mt-4 p-4 border rounded-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-medium">Estado:</span>
                <span className={`px-2 py-1 rounded-md text-sm font-medium ${
                  diagnosticResult.status === "good" 
                    ? "bg-success/20 text-success" 
                    : diagnosticResult.status === "warning"
                    ? "bg-warning/20 text-warning"
                    : "bg-danger/20 text-danger"
                }`}>
                  {diagnosticResult.status === "good" 
                    ? "Bueno" 
                    : diagnosticResult.status === "warning"
                    ? "Advertencia"
                    : "Error"}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-3 bg-secondary/50 rounded-md">
                  <p className="text-xs text-muted-foreground">Velocidad de conexión</p>
                  <p className="font-medium">{diagnosticResult.connectionSpeed}</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-md">
                  <p className="text-xs text-muted-foreground">Respuesta del servidor</p>
                  <p className="font-medium">{diagnosticResult.serverResponse}</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-md">
                  <p className="text-xs text-muted-foreground">Integridad de datos</p>
                  <p className="font-medium">{diagnosticResult.dataIntegrity}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Recomendaciones:</p>
                <ul className="list-disc pl-5 space-y-1">
                  {diagnosticResult.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm">{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
