
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

interface GrowthTrendsProps {
  data: Array<{
    month: string;
    ingresos: number;
    visitantes: number;
  }>;
}

export function GrowthTrends({ data }: GrowthTrendsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tendencias de Crecimiento</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#888" opacity={0.2} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="ingresos" 
              stroke="#3B82F6" 
              name="Ingresos"
              strokeWidth={2} 
            />
            <Line 
              type="monotone" 
              dataKey="visitantes" 
              stroke="#10B981" 
              name="Visitantes" 
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
