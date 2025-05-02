
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function DiagnosticTool() {
  const { toast } = useToast();
  const [selectedNode, setSelectedNode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [diagnosticResult, setDiagnosticResult] = useState<null | {
    status: "good" | "warning" | "error";
    latency: string;
    packetLoss: string;
    signalStrength: string;
    recommendations: string[];
  }>(null);
  
  const nodes = [
    { id: "node1", name: "Nodo Principal" },
    { id: "node2", name: "Nodo Regional Norte" },
    { id: "node3", name: "Nodo Regional Sur" },
    { id: "node4", name: "Nodo Regional Este" },
  ];
  
  const handleRunDiagnostic = () => {
    if (!selectedNode) {
      toast({
        title: "Error",
        description: "Selecciona un nodo para ejecutar el diagnóstico",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulación de diagnóstico
    setTimeout(() => {
      setDiagnosticResult({
        status: Math.random() > 0.7 ? "error" : Math.random() > 0.4 ? "warning" : "good",
        latency: `${Math.floor(Math.random() * 100) + 5}ms`,
        packetLoss: `${(Math.random() * 2).toFixed(2)}%`,
        signalStrength: `${Math.floor(Math.random() * 30) + 70}%`,
        recommendations: [
          "Verificar conexión física con el router",
          "Reiniciar el equipo de transmisión",
          "Comprobar configuración de firewall"
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
              <Select value={selectedNode} onValueChange={setSelectedNode}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un nodo" />
                </SelectTrigger>
                <SelectContent>
                  {nodes.map((node) => (
                    <SelectItem key={node.id} value={node.id}>
                      {node.name}
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
                  <p className="text-xs text-muted-foreground">Latencia</p>
                  <p className="font-medium">{diagnosticResult.latency}</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-md">
                  <p className="text-xs text-muted-foreground">Pérdida de paquetes</p>
                  <p className="font-medium">{diagnosticResult.packetLoss}</p>
                </div>
                <div className="p-3 bg-secondary/50 rounded-md">
                  <p className="text-xs text-muted-foreground">Fuerza de señal</p>
                  <p className="font-medium">{diagnosticResult.signalStrength}</p>
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
