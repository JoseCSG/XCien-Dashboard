
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WifiOff, Signal, AlertTriangle } from "lucide-react";

interface NetworkStatusProps {
  nodes: {
    name: string;
    status: "online" | "offline" | "degraded";
    lastUpdated: string;
    latency?: number;
  }[];
}

export function NetworkStatus({ nodes }: NetworkStatusProps) {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Estado de Nodos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {nodes.map((node) => (
            <div key={node.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {node.status === "offline" && (
                  <WifiOff className="h-4 w-4 text-danger animate-pulse-slow" />
                )}
                {node.status === "degraded" && (
                  <AlertTriangle className="h-4 w-4 text-warning" />
                )}
                {node.status === "online" && (
                  <Signal className="h-4 w-4 text-success" />
                )}
                <span>{node.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {node.latency && (
                  <span className="text-xs">{node.latency} ms</span>
                )}
                <Badge 
                  variant="outline" 
                  className={`
                    ${node.status === "online" ? "bg-success/20 text-success border-success/30" : ""}
                    ${node.status === "offline" ? "bg-danger/20 text-danger border-danger/30" : ""}
                    ${node.status === "degraded" ? "bg-warning/20 text-warning border-warning/30" : ""}
                  `}
                >
                  {node.status === "online" ? "En línea" : 
                   node.status === "offline" ? "Desconectado" : "Rendimiento Bajo"}
                </Badge>
                <span className="text-xs text-muted-foreground">{node.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
