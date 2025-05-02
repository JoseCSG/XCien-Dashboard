
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { WifiOff } from "lucide-react";

interface NetworkStatusProps {
  plazas: {
    name: string;
    status: "online" | "offline" | "degraded";
    lastUpdated: string;
  }[];
}

export function NetworkStatus({ plazas }: NetworkStatusProps) {
  return (
    <Card className="col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Estado de Red</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {plazas.map((plaza) => (
            <div key={plaza.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {plaza.status === "offline" && (
                  <WifiOff className="h-4 w-4 text-danger animate-pulse-slow" />
                )}
                <span>{plaza.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant="outline" 
                  className={`
                    ${plaza.status === "online" ? "bg-success/20 text-success border-success/30" : ""}
                    ${plaza.status === "offline" ? "bg-danger/20 text-danger border-danger/30" : ""}
                    ${plaza.status === "degraded" ? "bg-warning/20 text-warning border-warning/30" : ""}
                  `}
                >
                  {plaza.status === "online" ? "En línea" : 
                   plaza.status === "offline" ? "Desconectado" : "Rendimiento Bajo"}
                </Badge>
                <span className="text-xs text-muted-foreground">{plaza.lastUpdated}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
